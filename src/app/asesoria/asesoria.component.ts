import { Component } from '@angular/core';

@Component({
  selector: 'app-asesoria',
  standalone: true,
  imports: [],
  templateUrl: './asesoria.component.html',
  styleUrl: './asesoria.component.css'
})
export class AsesoriaComponent {


  asesorias = [
    {
      id: 1,
      imagen: "img/civil.png",
      nombre: 'Derecho Civil',
      descripcion: 'Asesoramiento en casos de herencias, testamentos, y sucesiones.'
    },
    {
      id: 2,
      imagen: "img/comercial.png",
      nombre: 'Derecho Comercial',
      descripcion: 'Consultoría sobre la constitución de empresas, contratos comerciales, fusiones y adquisiciones.'
    },
    {
      id: 3,
      imagen: "img/laboral.png",
      nombre: 'Derecho Laboral',
      descripcion: 'Asesoría en temas de despidos, negociación de contratos laborales y derechos de los trabajadores.'
    },
    {
      id: 4,
      imagen: "img/penal.png",
      nombre: 'Derecho Penal',
      descripcion: 'Orientación sobre delitos, defensa penal y derechos del acusado.'
    },
    {
      id: 5,
      imagen: "img/familiar.png",
      nombre: 'Derecho Familiar',
      descripcion: 'Consejería en divorcios, adopciones, tutela, y custodia de menores.'
    },
    {
      id: 6,
      imagen: "img/administrativo.png",
      nombre: 'Derecho Administrativo',
      descripcion: 'Asesoría en temas relacionados con permisos, licencias y regulaciones gubernamentales.'
    },
    {
      id: 7,
      imagen: "img/propiedadintelectual.png",
      nombre: 'Derecho de Propiedad Intelectual',
      descripcion: 'Registro y protección de marcas, patentes y derechos de autor.'
    },
    {
      id: 8,
      imagen: "img/inmobiliario.png",
      nombre: 'Derecho Inmobiliario',
      descripcion: 'Asesoramiento en compra, venta, arrendamiento y disputas de propiedades.'
    },
    {
      id: 9,
      imagen: "img/tributario.png",
      nombre: 'Derecho Tributario',
      descripcion: 'Consultoría sobre impuestos, obligaciones fiscales y planeación tributaria.'
    }
  ];

}
