import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  borrados:string = '';
  heroes: string[] = ['spiderman','Iroman','hulk','thor','aby'];
  borrarHeroe():void {
    const heroesBorrados = this.heroes.shift() || "";
    this.borrados = heroesBorrados;

  }
}
