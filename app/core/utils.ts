import * as crypto from 'crypto';
/**
 * 对需要的值进行加密
 * @param value - 加密字段
 * @returns - 加密结果
 */
export const cryptoFn = (value: string): string => {
  return crypto.createHash('md5').update(value).digest('hex');
};

export default {
  cryptoFn,
};
