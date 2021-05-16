# @keqingrong/validator

[![npm version](https://img.shields.io/npm/v/@keqingrong/validator.svg)](https://www.npmjs.com/package/@keqingrong/validator)

Utilities for validation and sanitization

## Installation

```sh
# npm
npm install @keqingrong/validator

# yarn
yarn add @keqingrong/validator
```

## Usage

```ts
import { validateIdCardNumber } from '@keqingrong/validator';

validateIdCardNumber('321280202101011234');
```

## API

- `validateIdCardNumberLegacy()`
- `validateIdCardNumber()` / `sanitizeIdCardNumber()`
- `validateSocialNumber()` / `sanitizeSocialNumber()`
- `validateBankCardNumber()`
- `validatePhoneNumber()` / `sanitizePhoneNumber()`
- `sanitizeChineseCharacter()`
- `sanitizeEmoji()`
- `Emoji_RegExp`

## License

MIT © Qingrong Ke
