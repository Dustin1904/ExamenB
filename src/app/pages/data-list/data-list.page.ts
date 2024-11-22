import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { GuardarFirestoreService } from 'src/app/services/guardar-firestore.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.page.html',
  styleUrls: ['./data-list.page.scss'],
})
export class DataListPage implements OnInit {
  public perros: string[] = [];
  public libros: any = {};
  public loading = false;

  constructor(private dataService: ApisService, private firestore: GuardarFirestoreService) {}

  ngOnInit() {
    this.loadPerros(10);
    this.loadLibros();
  }

  async loadPerros(veces: number) {
    this.loading = true;
    const peticiones = [];
    for (let i = 0; i < veces; i++) {
      peticiones.push(
        this.dataService
          .getPerros()
          .toPromise()
          .then((data: any) => {
            if (data.status === 'success') {
              this.perros.push(data.message);
            }
          })
      );
    }

    try {
      await Promise.all(peticiones);
    } catch (error) {
      console.error(error);
    }
  }

  async loadLibros() {
    this.loading = true;

    this.dataService.getLibros().subscribe({
      next: (data: any) => {
        this.libros = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  guardarLibro(libro: any){
    this.firestore.guardarLibroFireStore({titulo: libro.title})
  }

}
