import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie-service';
@Component({
  selector: 'app-serie-listar',
  templateUrl: './serie-listar.component.html',
  styleUrls: ['./serie-listar.component.css']
})
export class SerieListarComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];
  promedio: number = 0;

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;  
      this.Promedio(); 
    });
  }
  

  Promedio(){

    let temporadas = 0;
    let cantSeries = 0;
    
    for (let serie of this.series){
      cantSeries++;
      temporadas += serie.temporadas;
    }
    this.promedio = temporadas / cantSeries;
  }

  ngOnInit() {
    this.getSeries();
  }}

