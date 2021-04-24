import {
  validateIdCardNumberLegacy,
  validateIdCardNumber,
  validateSocialNumber,
  validateBankCardNumber,
  validatePhoneNumber,
  sanitizeIdCardNumber,
  sanitizeSocialNumber,
  sanitizePhoneNumber,
  sanitizeChineseCharacter,
  sanitizeEmoji
} from '../src';

test('validateIdCardNumberLegacy', () => {
  expect(validateIdCardNumberLegacy('220122820213091')).toBeTruthy();
  expect(validateIdCardNumberLegacy('220181198309216653')).toBeTruthy();
});

test('validateIdCardNumber', () => {
  expect(validateIdCardNumber('220122820213091')).toBeFalsy();
  expect(validateIdCardNumber('220181198309216653')).toBeTruthy();
});

test('validateSocialNumber', () => {
  expect(validateSocialNumber('91410702MA40GFQM8E')).toBeTruthy();
  expect(validateSocialNumber('91310000797046224D')).toBeTruthy();
});

test('validateBankCardNumber', () => {
  expect(validateBankCardNumber('6222808530760561211')).toBeTruthy();
});

test('validatePhoneNumber', () => {
  expect(validatePhoneNumber('13912345678')).toBeTruthy();
});

test('sanitizeIdCardNumber', () => {
  expect(sanitizeIdCardNumber('220122820213091')).toBe('220122820213091');
  expect(sanitizeIdCardNumber('220181198309216653')).toBe('220181198309216653');
});

test('sanitizeSocialNumber', () => {
  expect(sanitizeSocialNumber('91410702MA40GFQM8E')).toBe('91410702MA40GFQM8E');
  expect(sanitizeSocialNumber('91310000797046224D')).toBe('91310000797046224D');
});

test('sanitizePhoneNumber', () => {
  expect(sanitizePhoneNumber('13912345678')).toBe('13912345678');
});

test('sanitizeChineseCharacter', () => {
  expect(sanitizeChineseCharacter('汉字')).toBe('');
  expect(sanitizeChineseCharacter('我数123')).toBe('123');
});

test('sanitizeEmoji', () => {
  expect(sanitizeEmoji('🤣')).toBe('');
  expect(sanitizeEmoji('🤣笑到眼泪都出来了')).toBe('笑到眼泪都出来了');
});
