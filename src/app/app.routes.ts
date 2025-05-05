import { Routes } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { AsesoriaComponent } from './asesoria/asesoria.component';
import { LitigiosComponent } from './litigios/litigios.component';
import { ContratosComponent } from './contratos/contratos.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    {path: 'inicio', title: 'Mi inicio', component: PortadaComponent},
    {path:'nosotros',title: 'Nosotros',component: NosotrosComponent},
    {path:'asesoria',title: 'Asesoria',component: AsesoriaComponent},
    {path:'litigios',title: 'Litigios',component: LitigiosComponent},
    {path:'contratos',title: 'Contratos',component: ContratosComponent},
    {path:'contacto',title: 'Contacto',component: ContactoComponent},

    {path: '',   redirectTo: '/inicio', pathMatch: 'full' },
    {path: '**', component:PortadaComponent},
];


