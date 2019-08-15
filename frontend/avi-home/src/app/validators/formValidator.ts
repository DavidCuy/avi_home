import { FormGroup } from '@angular/forms';

export class FormValidator {


  /**
   * Validad que 2 campos sean iguales
   *
   * @static
   * @param {string} field1 Cadena 1
   * @param {string} field2 Cadena 2
   * @returns Resultado de la validación
   * @memberof FormValidator
   */
  static match( field1: string, field2: string) {
    return ( group: FormGroup ) => {
      const compare1 = group.controls[field1].value;
      const compare2 = group.controls[field2].value;

      if (compare1 !== compare2) {
        return {
          noRepeat: true
        };
      }
      return null;
    };
  }
}
