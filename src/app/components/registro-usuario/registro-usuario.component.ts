import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistroUsuarioService } from 'src/app/services/registro-usuario.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css'],
})
export class RegistroUsuarioComponent implements OnInit {
  listUsuarios: any[] = [];
  user: any = {};
  accion = 'Agregar';
  form: FormGroup;
  _id: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private usuarioService: RegistroUsuarioService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido1: ['', [Validators.required]],
      telefono: [
        '',
        [Validators.required, Validators.maxLength(8), Validators.minLength(8)],
      ],
      direccion: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.getId();
  }

  obtenerUsuarios() {
    this.usuarioService.getListUsuarios().subscribe(
      (data) => {
        console.log(data);
        this.listUsuarios = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {}

  getId() {
    id: String;

    console.log(this.listUsuarios.flat(-1));
  }

  registrarUsuario() {
    const usuarioRegistrado: any = {
      nombre: this.form.get('nombre')?.value,
      apellido1: this.form.get('apellido1')?.value,
      telefono: this.form.get('telefono')?.value,
      direccion: this.form.get('direccion')?.value,
      fotoUrl: ['dsds'],
      correo: this.form.get('correo')?.value,
      password: this.form.get('password')?.value,
    };

    if (this._id == undefined) {
      // Agregamos un usuario
      this.usuarioService.saveUsuarios(usuarioRegistrado).subscribe(
        (data) => {
          this.toastr.success(
            'El usuario fue registrado con exito',
            'Usuario registrado'
          );
          this.obtenerUsuarios();
          this.form.reset();
        },
        (error) => {
          this.toastr.error('Ocurrió un error', 'Error');
          console.log(error);
        }
      );
    } else {
      usuarioRegistrado._id = this._id;
      // Editamos usuario
      this.usuarioService.updateUsuarios(this._id, usuarioRegistrado).subscribe(
        (data) => {
          this.form.reset();
          this.accion = 'Agregar';
          this._id = undefined;
          this.toastr.info(
            'El usuario fue actualizado con exito',
            'Usuario actualizado'
          );
          this.obtenerUsuarios();
        },
        (error) => {
          console.log(error);
        }
      );
    }
    console.log(this.form.value);
    this.user = Object.assign(this.user, this.form.value);
    localStorage.setItem('Users', JSON.stringify(this.user));
    const id = this.form.get('correo')?.value;
    this.router.navigateByUrl('/registro-mascota' + '/' + id);
  }
}
