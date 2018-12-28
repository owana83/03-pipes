import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {

    if (activar) {

      let cifrado = "";
      for (let i = 0; i < value.length; i++) {

        cifrado += ('*');

      }
      value = cifrado;
    }

    /* LA FORMA DE UN COMPAÑERO*/
    // if ( activar ) {

    //   value = value.replace(/./gi, '*');

    //   }

    return value;
  }

}
