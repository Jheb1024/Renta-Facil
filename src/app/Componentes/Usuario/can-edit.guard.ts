import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { LoginService } from 'src/app/servicios/login.service';

@Injectable({
  providedIn: 'root'
})
export class CanEditGuard implements CanActivate {
  constructor(private login:LoginService){
    
  }
  canActivate(): Observable<boolean> | Promise<boolean> |  boolean {
    return this.login.usuario$.pipe(
      take(1),
      map((user)=>user && this.login.isAdministrador(user)),
      tap(CanEdit=>{
        console.log(CanEdit);
        if(CanEdit){
          console.log('Si tienes permisos de Administrador');
        }
        if(!CanEdit){
          window.alert('No tienes permisos de Administrador');
        }
      })
    );
  }
  
}
