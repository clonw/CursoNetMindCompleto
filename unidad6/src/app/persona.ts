export class Persona {
    constructor(
        public id: number,
        public name: string,
        public password: string = '',
        public repeatPassword: string = '',
        public email: string = '',
        public sex: string = 'woman',
        public orientacion: string = '',
        public relaccion: string = '',
        public condiciones: boolean = false
      ) {  }
}
