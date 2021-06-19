export class Persona{
    private cedula:string;
    private contrasenia: string;

    get getCedula(): string {
        return this.cedula;
    }

    set setCedula(newCedula: string){
        this.cedula = newCedula;
    }

    get getContrasenia(): string {
        return this.contrasenia;
    }

    set setContrasenia(newContrasenia: string){
        this.contrasenia = newContrasenia;
    }

}
