import _isPlainObject from 'is-plain-object';
import _isEqual from 'lodash.isequal';

export function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

export function isPlainObject(value) {
  return _isPlainObject(value);
}

export function isEqual(value, other) {
  return _isEqual(value, other);
}

export function toCamelCaseString(str) {
  return str ? str.replace(/_([a-z0-9])/g, g => g[1].toUpperCase()) : str;
}

export function toCamelCaseObject(object) {
  if (object === null || typeof object !== 'object' || object instanceof Date || object instanceof Blob) {
    return object;
  }

  if (Array.isArray(object)) {
    return object.map(toCamelCaseObject);
  }

  return Object.entries(object).reduce((o, [key, value]) => {
    const newObject = { ...o };
    const newValue = toCamelCaseObject(value);
    const newKey = toCamelCaseString(key);
    newObject[newKey] = newValue;
    return newObject;
  }, {});
}

/**
 * To snake case from camel case (for a server request)
 */

export function toSnakeCaseString(str) {
  return str ? str.replace(/[A-Z]/g, g => `_${g[0].toLowerCase()}`) : str;
}

export function toSnakeCaseObject(object) {
  if (object === null || typeof object !== 'object' || object instanceof Date || object instanceof File) {
    return object;
  }

  if (Array.isArray(object)) {
    return object.map(toSnakeCaseObject);
  }

  return Object.entries(object).reduce((o, [key, value]) => {
    const newObject = { ...o };
    const newValue = toSnakeCaseObject(value);
    const newKey = toSnakeCaseString(key);
    newObject[newKey] = newValue;
    return newObject;
  }, {});
}
