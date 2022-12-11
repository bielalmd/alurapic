import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';

const routes: Routes = [
    { path: 'user/:userName', component: PhotosListComponent}, //'user/flavio' -> tornando a url uma variavel com :userName
    { path: 'p/add', component: PhotoFormComponent},
    { path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }