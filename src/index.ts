/** Emoji 正则表达式 */
export const Emoji_RegExp = /\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu;

/** 校验身份证号（支持15位和18位） */
export const validateIdCardNumberLegacy = (str: string) =>
  /(^\d{15}$)|(^\d{17}(\d|X)$)/.test(str);

/** 校验身份证号（仅支持18位） */
export const validateIdCardNumber = (str: string) =>
  /(^\d{17}(\d|X)$)/.test(str);

/** 校验统一社会信用代码（详细规则见《GB32100-2005 法人和其他组织统一社会信用代码编码规则》） */
export const validateSocialNumber = (str: string) =>
  /(^\d{15}$)|(^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$)/.test(str);

/**
 * 校验借记卡、信用卡卡号
 * 参考 https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/applyments/chapter4_1.shtml
 **/
export const validateBankCardNumber = (str: string) => /^\d{8,30}$/.test(str);

/** 校验手机号 */
export const validatePhoneNumber = (str: string) => /^1\d{10}$/.test(str);

/** 过滤身份证号非法字符 */
export const sanitizeIdCardNumber = (str: string = '') => {
  // 前17位只允许输数字，第18位允许输数字和X
  const upperStr = str.toUpperCase();
  return upperStr.length < 18
    ? upperStr.replace(/[^0-9]/g, '')
    : upperStr.replace(/[^0-9X]/g, '');
};

/** 过滤统一社会信用代码非法字符 */
export const sanitizeSocialNumber = (str: string = '') =>
  str.toUpperCase().replace(/[^0-9A-Z]/g, '');

/** 过滤手机号非法字符 */
export const sanitizePhoneNumber = (str: string = '') => str.replace(/\D/g, '');

/** 过滤汉字 */
export const sanitizeChineseCharacter = (str: string = '') =>
  str.replace(/\p{Unified_Ideograph}/gu, '');

/** 过滤 Emoji */
export const sanitizeEmoji = (str: string = '') =>
  str.replace(Emoji_RegExp, '');
