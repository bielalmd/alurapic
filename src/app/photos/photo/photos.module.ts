
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { PhotoComponent } from "./photo.component";
import { PhotosListComponent } from "../photos-list/photos-list.component";
import { PhotoFormComponent } from '../photo-form/photo-form.component';

@NgModule({
    declarations: [ 
        PhotoComponent,
        PhotosListComponent, 
        PhotoFormComponent
    ],
    imports: [ 
        HttpClientModule,
        CommonModule
        ]
})

export class PhotosModule {}

     // entra tudo que o modulo tem
    // exports: [ PhotoComponent ], // precisamos exportar os declarations para outros modulos consumi-los\
