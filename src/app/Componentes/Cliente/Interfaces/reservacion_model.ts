export interface reservacion{
    fechaFinal?:Date;
    fechaInicio?:Date;
    idPrpiedad?:string;
    idUsuario?:string;
    noTarjeta?:number;
    tarjetaExpiracion?:Date;
    cvc?:number;
}