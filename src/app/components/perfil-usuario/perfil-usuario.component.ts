import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegistroUsuarioService } from 'src/app/services/registro-usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css'],
})
export class PerfilUsuarioComponent implements OnInit {
  listUsuarios: any[] = [];
  usuarioById: any[] = [];
  accion = 'Agregar';
  form!: FormGroup;
  _id: string | undefined;

  constructor(
    public usuarioService: RegistroUsuarioService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuariosById(_id: string) {
    this.usuarioService.getListUsuarioById(_id).subscribe(
      (data) => {
        console.log(data);
        this.usuarioById = data;
      },
      (error) => {
        console.log(error);
      }
    );
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

  eliminarUsuario(_id: string) {
    this.usuarioService.deleteUsuarios(_id).subscribe(
      (data) => {
        this.toastr.error(
          'El usuario fue eliminado con exito',
          'Usuario eliminado'
        );
        this.obtenerUsuarios();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editarUsuario(usuario: any) {
    this.accion = 'Editar';
    this._id = usuario._id;

    this.form.patchValue({
      nombre: usuario.nombre,
      apellido1: usuario.apellido1,
      telefono: usuario.telefono,
      direccion: usuario.direccion,
      //fotoUrl: ['dsds'],
      //correo: 'prueba',
      //password: 'prueba',
    });
  }
}
