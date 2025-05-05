import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

  equipo = [
    {
      id: 1,
      imagen:"img/mujer.png",
      nombre: 'Diana Ruiz García',
      cargo: 'Gerente General y Abogada Especialista en Derecho Civil y Derecho Comercial',
      formacion: 'Doctora en Derecho por la Universidad Nacional Mayor de San Marcos, Maestría en Derecho Empresarial por la Pontificia Universidad Católica del Perú.',
      correo: 'dianaruiz1101@gmail.com'
    },
    {
      id: 2,
      imagen:"img/hombre.png",
      nombre: 'Edwin García López',
      cargo: 'Abogado Especialista en Derecho Penal y Derecho Laboral',
      formacion: 'Maestría en Derecho Penal por la Universidad de Lima, Diplomado en Derecho Laboral por la Universidad Peruana de Ciencias Aplicadas.',
      correo: 'edwingarcia2304@gmail.com'
    },
    {
      id: 3,
      imagen:"img/hombre.png",
      nombre: 'Marco Ramírez Hernández',
      cargo: 'Abogado Especialista en Derecho Familiar y Derecho Inmobiliario',
      formacion: 'Maestría en Derecho de Familia por la Universidad de Piura, Especialización en Derecho Inmobiliario por la Universidad ESAN.',
      correo: 'marco.ramirez1212@gmail.com'
      
    },
    {
      id: 4,
      imagen:"img/hombre.png",
      nombre: 'Michael Tucto Miñope',
      cargo: 'Abogado Especialista en Derecho Administrativo y Derecho Tributario',
      formacion: 'Maestría en Derecho Administrativo por la Universidad Nacional de Trujillo, Especialización en Derecho Tributario por la Universidad de Lima.',
      correo: 'michael.tucto3405@gmail.com'
    },
    {
      id: 5,
      imagen:"img/hombre.png",
      nombre: 'Luis De la Cruz Díaz',
      cargo: 'Abogado Especialista en Derecho de Propiedad Intelectual y Derecho Comercial',
      formacion: 'Maestría en Propiedad Intelectual por la Universidad de Buenos Aires, Diplomado en Derecho Comercial por la Universidad de Lima.',
      correo: 'luis.cruz5607@gmail.com'
    },
    {
      id: 6,
      imagen:"img/mujer.png",
      nombre: 'Celeste Vargas Vargas',
      cargo: 'Abogada Especialista en Derecho Ambiental y Arbitraje',
      formacion: 'Maestría en Derecho Ambiental por la Universidad Nacional de San Agustín, Especialización en Arbitraje por la Universidad del Pacífico.',
      correo: 'celeste.vargas4708@gmail.com'
    }
  ];


}
