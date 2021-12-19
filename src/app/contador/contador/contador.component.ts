import {Component, OnInit} from "@angular/core";
@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./listado.component.css']
})

export class ContadorComponent {

  title = 'base';
  numero: number = 20;

  base:number=55;

  suma():void{
    this.numero++;
  }
  resta():void {
    this.numero--;
  }

  acumular(valor: number){
      this.numero += valor;
  }

}
