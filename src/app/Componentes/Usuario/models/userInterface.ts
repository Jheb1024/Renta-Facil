export interface Roles {
    Administrador?:boolean;
    Propietario?:boolean;
    Cliente?:boolean;
}

export interface UserInterface {
    apllidoM?:string;
    apllidoP?:string;
    correo?:String;
    nombre?:string;
    password?:string;
    telefono?:string;
    URLpropiedad?:string;
    roles:Roles;
}