export type roles = 'Cliente'|'Propietario'|'Administrador';

export interface UserInterface {
    apllidoM?:string;
    apllidoP?:string;
    correo?:String;
    nombre?:string;
    password?:string;
    telefono?:string;
    URLpropiedad?:string;
    role?:roles;
}