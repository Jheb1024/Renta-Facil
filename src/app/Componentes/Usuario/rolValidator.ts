import { UserInterface } from "./models/userInterface";

export class rolValidator{
    isAdministrador(user:UserInterface){
        return user.role === 'Administrador';
    }

    isPropietario(user:UserInterface){
        return user.role === 'Propietario';
    }

    isCliente(user:UserInterface){
        return user.role === 'Cliente';
    }
}