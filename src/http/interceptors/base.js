import { toSnakeCaseObject, toCamelCaseObject } from '@/utils/common';

export function snakeCaseRequest(config) {
  return {
    ...config,
    data: config.data instanceof FormData ? config.data : toSnakeCaseObject(config.data),
    params: toSnakeCaseObject(config.params),
  };
}

export function camelCaseResponse(response) {
  return (response && response.data ? toCamelCaseObject(response.data) : toCamelCaseObject(response)) || {};
}
