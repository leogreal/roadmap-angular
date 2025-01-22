import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {

  private static readonly INVALID_PHONE_MESSAGE = 'Telefone indisponível ou inválido';
  private static readonly MIN_PHONE_LENGTH = 10;
  private static readonly MAX_PHONE_LENGTH = 11;
  private static readonly INTERNATIONAL_PHONE_REGEX = /^\+(\d{1,3}) (\d{2}) (\d{4,5})-(\d{4})$/;

  transform(phone: string): string {
    if (!phone) {
      return PhonePipe.INVALID_PHONE_MESSAGE;
    }

    if (this.isInternationalPhone(phone)) {
      return phone;
    }

    const sanitizedPhone = phone.replace(/\D/g, '');

    if (!this.isValidPhone(sanitizedPhone)) {
      return PhonePipe.INVALID_PHONE_MESSAGE;
    }

    const ddd = sanitizedPhone.substring(0, 2);
    const mainPart = sanitizedPhone.length === PhonePipe.MAX_PHONE_LENGTH
      ? `${sanitizedPhone.substring(2, 7)}-${sanitizedPhone.substring(7)}`
      : `${sanitizedPhone.substring(2, 6)}-${sanitizedPhone.substring(6)}`;

    return `${ddd} ${mainPart}`;
  }

  private isValidPhone(phone: string): boolean {
    return phone.length >= PhonePipe.MIN_PHONE_LENGTH &&
      phone.length <= PhonePipe.MAX_PHONE_LENGTH &&
      /^[0-9]+$/.test(phone);
  }

  private isInternationalPhone(phone: string): boolean {
    return PhonePipe.INTERNATIONAL_PHONE_REGEX.test(phone);
  }
}
