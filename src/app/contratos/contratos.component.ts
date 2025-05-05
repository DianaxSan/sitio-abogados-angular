import { Component } from '@angular/core';

@Component({
  selector: 'app-contratos',
  standalone: true,
  imports: [],
  templateUrl: './contratos.component.html',
  styleUrl: './contratos.component.css'
})
export class ContratosComponent {

  contratos = [
    {
      id: 1,
      imagen: "img/contratocompraventa.png",
      nombre: 'Contratos de Compra-Venta',
      descripcion: 'Redacción y revisión de contratos para la compra y venta de bienes inmuebles y muebles.'
    },
    {
      id: 2,
      imagen: "img/contratoarrendamiento.png",
      nombre: 'Contratos de Arrendamiento',
      descripcion: 'Elaboración y revisión de contratos de alquiler, tanto para propietarios como para inquilinos.'
    },
    {
      id: 3,
      imagen: "img/contratolaboral.png",
      nombre: 'Contratos Laborales',
      descripcion: 'Negociación y redacción de contratos para empleados, cláusulas de confidencialidad y no competencia.'
    },
    {
      id: 4,
      imagen: "img/acuerdoconfidencialidad.png",
      nombre: 'Acuerdos de Confidencialidad (NDA)',
      descripcion: 'Creación y revisión de acuerdos para proteger información sensible y confidencial.'
    },
    {
      id: 5,
      imagen: "img/acuerdojointventure.png",
      nombre: 'Acuerdos de Joint Venture',
      descripcion: 'Asesoría en la redacción de acuerdos de colaboración entre empresas para proyectos específicos.'
    },
    {
      id: 6,
      imagen: "img/contratoservicios.png",
      nombre: 'Contratos de Servicios',
      descripcion: 'Redacción de contratos para la prestación de servicios profesionales o comerciales.'
    },
    {
      id: 7,
      imagen: "img/contratodistribucion.png",
      nombre: 'Contratos de Distribución',
      descripcion: 'Asesoramiento en contratos de distribución y franquicia, incluyendo términos y condiciones de venta.'
    },
    {
      id: 8,
      imagen: "img/contratosociedad.png",
      nombre: 'Contratos de Sociedad',
      descripcion: 'Creación y revisión de acuerdos entre socios comerciales, incluyendo estructura de capital y distribución de beneficios.'
    },
    {
      id: 9,
      imagen: "img/negociacionescomerciales.png",
      nombre: 'Negociaciones Comerciales',
      descripcion: 'Asistencia en negociaciones para fusiones, adquisiciones y otras transacciones comerciales complejas.'
    }
  ];

}
