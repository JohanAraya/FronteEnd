import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OnBoardingComponent } from './components/onboarding/onboarding.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { RegistroMascotaComponent } from './components/registro-mascota/registro-mascota.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: OnBoardingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro-usuario',
    component: RegistroUsuarioComponent,
  },
  {
    path: 'registro-mascota/:idUsuario',
    component: RegistroMascotaComponent,
  },
  {
    path: 'perfil/:_id',
    component: PerfilUsuarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [OnBoardingComponent, LoginComponent];
