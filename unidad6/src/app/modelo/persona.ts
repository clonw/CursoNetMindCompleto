export class Persona {
    constructor(
        public name: string,
        public password: string = '',
        public repeatPassword: string = '',
        public email: string = '',
        public sex: string = 'woman',
        public orientacion: string = '',
        public relacion: string = '',
        public condiciones: boolean = false
      ) {  }
}
