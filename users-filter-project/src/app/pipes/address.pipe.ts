import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    const {street, number, city, state} = address;
    
    const INVALID_ADDRESS = 
      !street ||
      !number === null ||
      !number === undefined ||
      !city ||
      !state
    
    if (INVALID_ADDRESS) return 'Endereço indisponível ou inválido'
    
    return `${street}, ${number}, ${city} - ${state}`;
  }

}
