import { Component } from '@angular/core';

@Component({
  selector: 'app-litigios',
  standalone: true,
  imports: [],
  templateUrl: './litigios.component.html',
  styleUrl: './litigios.component.css'
})
export class LitigiosComponent {

  litigios = [
    {
      id: 1,
      imagen: "img/litigiocivil.png",
      nombre: 'Litigios Civiles',
      descripcion: 'Defensa en disputas de propiedad, daños y perjuicios, y conflictos entre partes privadas.'
    },
    {
      id: 2,
      imagen: "img/litigiocomercial.png",
      nombre: 'Litigios Comerciales',
      descripcion: 'Representación en conflictos empresariales, incumplimientos de contrato y competencia desleal.'
    },
    {
      id: 3,
      imagen: "img/defensapenal.png",
      nombre: 'Defensa Penal',
      descripcion: 'Representación en juicios penales, apelaciones y procesos de revisión judicial.'
    },
    {
      id: 4,
      imagen: "img/litigiolaboral.png",
      nombre: 'Litigios Laborales',
      descripcion: 'Defensa en casos de despido injustificado, acoso laboral y reclamaciones por salarios impagados.'
    },
    {
      id: 5,
      imagen: "img/litigiofamilia.png",
      nombre: 'Litigios de Familia',
      descripcion: 'Representación en disputas familiares, incluyendo custodia de menores y pensión alimenticia.'
    },
    {
      id: 6,
      imagen: "img/litigioinmobiliario.png",
      nombre: 'Litigios Inmobiliarios',
      descripcion: 'Resolución de conflictos relacionados con propiedades, arrendamientos y transacciones inmobiliarias.'
    },
    {
      id: 7,
      imagen: "img/arbitrajemediacion.png",
      nombre: 'Arbitraje y Mediación',
      descripcion: 'Solución de disputas fuera de los tribunales a través de arbitraje o mediación.'
    },
    {
      id: 8,
      imagen: "img/litigioadministrativo.png",
      nombre: 'Litigios Administrativos',
      descripcion: 'Defensa en procedimientos legales contra agencias gubernamentales y reguladoras.'
    },
    {
      id: 9,
      imagen: "img/litigioambiental.png",
      nombre: 'Litigios Ambientales',
      descripcion: 'Representación en disputas relacionadas con el medio ambiente, incluyendo contaminación y uso de recursos naturales.'
    }
  ];

}
