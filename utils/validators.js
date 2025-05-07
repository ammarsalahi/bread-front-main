import { z } from 'zod';

export const validateMobile = (value) => {
  const mobileSchema = z
    .string()
    .min(11, { message: 'شماره موبایل باید 11 رقمی باشد' })
    .max(11, { message: 'شماره موبایل باید 11 رقمی باشد' })
    .regex(/^[0-9]{11}$/, { message: 'شماره موبایل باید 11 رقمی عددی باشد' })
    .regex(/^0\d{10}$/, { message: 'شماره موبایل باید با ۰ شروع شود' });

  try {
    mobileSchema.parse(value);
    return { isValid: true, error: null };
  } catch (error) {
    return { isValid: false, error: error.errors[0].message };
  }
};

export const validateUsername = (value) => {
  const usernameSchema = z.string().nonempty('نام کاربری نمی‌تواند خالی باشد');

  try {
    usernameSchema.parse(value);
    return { isValid: true, error: null };
  } catch (error) {
    return { isValid: false, error: error.errors[0].message };
  }
};

export const validateOTP = (value) => {
    const otpSchema = z
      .string()
      .min(6, { message: 'کد پیامک شده باید 6 رقمی باشد' })
      .max(6, { message: 'کد پیامک شده باید 6 رقمی باشد' })
      .regex(/^[0-9]{6}$/, { message: 'کد پیامک شده باید 6 رقمی عددی باشد' })
  
    try {
      otpSchema.parse(value);
      return { isValid: true, error: null };
    } catch (error) {
      return { isValid: false, error: error.errors[0].message };
    }
  };


export const validateNationalCode = (value) => {
    const codeSchema = z
      .string()
      .min(10, { message: 'کد ملی باید 10 رقمی باشد' })
      .max(10, { message: 'کد ملی باید 10 رقمی باشد' })
      .regex(/^[0-9]{10}$/, { message: 'کد ملی باید 10 رقمی عددی باشد' })
  
    try {
      codeSchema.parse(value);
      return { isValid: true, error: null };
    } catch (error) {
      return { isValid: false, error: error.errors[0].message };
    }
  };

export function isValidIranianNationalCodeReal(input) {
    // remove duplicated numbers
    if (!/^\d{10}$/.test(input)) return false;
    const check = +input[9];
    const sum = input.split('').slice(0, 9).reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;
    return sum < 2 ? check === sum : check + sum === 11;
}

export function isValidIranianNationalCode(input) {
    // Check for duplicated numbers
    if (/(\d)\1{9}/.test(input)) return false;

    // Check for valid format
    if (!/^\d{10}$/.test(input)) return false;

    const check = +input[9];
    const sum = input.split('').slice(0, 9).reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;

    return sum < 2 ? check === sum : check + sum === 11;
}

export const convertToEnglishNumbers = (input) => {
  const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
  const arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
  let output = input;

  for (let i = 0; i < 10; i++) {
    output = output.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
  }
  return output;
};
