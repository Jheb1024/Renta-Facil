import { casas } from "./casa_model";

export interface reservacion{
    nombreCasa?:string;
    fechaFinal?:Date;
    fechaInicio?:Date;
    idPrpiedad?:string;
    idUsuario?:string;
    noTarjeta?:number;
    tarjetaExpiracion?:Date;
    cvc?:number;
    costo?:number;
    precioCasa?:number;
}