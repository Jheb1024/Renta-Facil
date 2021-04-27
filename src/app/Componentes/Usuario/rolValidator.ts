import { UserInterface } from "./models/userInterface";

export class rolValidator{
    isAdministrador(user:UserInterface){
        return user.role === 'Administrador';
    }

    isPropietario(user:UserInterface){
        localStorage.setItem('role',user.role);
        console.log("ROLEEEEEEE en local"+user.role);
        return user.role === 'Propietario';
    }

    isCliente(user:UserInterface){
        return user.role === 'Cliente';
    }
}