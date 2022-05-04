import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistroMascotaService } from 'src/app/services/registro-mascota.service';

class Sexo {
  constructor(public Value: string, public Text: string) {}
}
class Tipo {
  constructor(public Value: string, public Text: string) {}
}
class RazaPerro {
  constructor(public Value: string, public Text: string) {}
}
class RazaGato {
  constructor(public Value: string, public Text: string) {}
}

@Component({
  selector: 'app-registro-mascota',
  templateUrl: './registro-mascota.component.html',
  styleUrls: ['./registro-mascota.component.css'],
})
export class RegistroMascotaComponent implements OnInit {
  accion = 'Agregar';
  form: FormGroup;
  _id: string | undefined;
  listMascotas: any[] = [];
  sexo: [{ sexo: 'Macho'; abbrev: 'M' }, { sexo: 'Hembra'; abbrev: 'H' }];
  listTipo: Tipo[] = [new Tipo('Perro', 'Perro'), new Tipo('Gato', 'Gato')];
  listRazaPerros: RazaPerro[] = [
    new RazaPerro('Yorkie', 'Yorkie'),
    new RazaPerro('Corgi', 'Corgi'),
    new RazaPerro('Rottweiler', 'Rottweiler'),
    new RazaPerro('Beagle', 'Beagle'),
    new RazaPerro('Poodle', 'Poodle'),
    new RazaPerro('Bulldog', 'Bulldog'),
    new RazaPerro('Golden Retriever', 'Golden Retriever'),
    new RazaPerro('Pastor Alemán', 'Pastor Alemán'),
    new RazaPerro('Pug', 'Pug'),
    new RazaPerro('Zaguate', 'Zaguate'),
  ];
  ListRazaGatos: string[] = [
    'Persa',
    'Siamés',
    'Bobtail Americano',
    'Somalí',
    'Azul Ruso',
    'Siberiano',
    'Manés',
    'Burmés',
    'Ragdoll',
    'Cimarrón',
  ];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private mascotaService: RegistroMascotaService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      raza: ['', [Validators.required]],
      fotoUrl: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  registrarMascota() {
    const mascotaegistrada: any = {
      nombre: this.form.get('nombre')?.value,
      raza: this.form.get('apellido1')?.value,
      telefono: this.form.get('telefono')?.value,
      direccion: this.form.get('direccion')?.value,
      fotoUrl: ['dsds'],
      correo: this.form.get('correo')?.value,
      password: this.form.get('password')?.value,
    };

    if (this._id == undefined) {
      // Agregamos un usuario
      this.mascotaService.saveMascotas(mascotaegistrada).subscribe(
        (data) => {
          this.toastr.success(
            'El usuario fue registrado con exito',
            'Usuario registrado'
          );
        },
        (error) => {
          this.toastr.error('Ocurrió un error', 'Error');
          console.log(error);
        }
      );
    }
  }
}
