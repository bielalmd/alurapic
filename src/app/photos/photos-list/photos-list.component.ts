import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from "../photo/photo.service";

@Component({
  selector: "app-photos-list",
  templateUrl: "./photos-list.component.html",
  styleUrls: ["./photos-list.component.css"],
})
export class PhotosListComponent implements OnInit {
  photos: any[] = [];

  constructor(
    private photosService: PhotoService,
    private activateRoute: ActivatedRoute, // indica a rota ativada naquele momento
    ) {}

  ngOnInit(): void {

    const userName = this.activateRoute.snapshot.params.userName;
    this.photosService
      .listFromUser(userName)
      .subscribe(photos => this.photos = photos);
  }
}
