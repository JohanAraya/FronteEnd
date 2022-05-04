import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { OnBoardingComponent } from './components/onboarding/onboarding.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { RegistroMascotaComponent } from './components/registro-mascota/registro-mascota.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    OnBoardingComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    RegistroMascotaComponent,
    PerfilUsuarioComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
