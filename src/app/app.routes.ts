import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ProjectDetailComponent } from './features/project-detail/project-detail.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'proyectos',
        component: ProjectsComponent
    },
    {
        path: 'proyectos/:slug',
        component: ProjectDetailComponent
    },
    {
        path: 'experiencia',
        component: ExperienceComponent
    },
    {
        path: 'contacto',
        component: ContactComponent
    },
    {
        path: '**',
        redirectTo: ''
    }

];
