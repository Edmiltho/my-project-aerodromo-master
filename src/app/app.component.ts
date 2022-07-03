import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import voosData from '../assets/data/Voos.json'
import { AeroportosService } from './services/aeroportos.service';
import { AeroClasse } from './models/aero-classe.model';
import { Aeroporto } from './models/aeroportos';
import { AeroClasseModel } from './models/aeroClasseModel';
import { CalculaDistanciasComponent } from './components/calcula_distancias/calcula-distancias.component';
import { HomeComponent } from './components/home/home.component';
import { tap, map } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-project-aerodromo';
  message: string;
  aeroPortos: Aeroporto[];
  aeroPortos$: Observable<Aeroporto[]>;
  MyMap: Map<string, string>;

  //aeroLista: Aeroportos[] = voosData;
  constructor(private service: AeroportosService){
    console.log('CONSTRUCTOR APP COMPONENT');
  }
  ngOnDestroy(): void {
    console.log(`${this.aeroPortos} foi destruído`);
  }
  
  ngOnInit(): void {
    console.log('INIT APP COMPONENT');

    //Carrega o dado JSON em uma lista de aeroportos
    this.service.List()
    //.pipe(tap(v => console.log(this.aeroPortos,v)))
    .subscribe(dados => this.aeroPortos = dados);
    console.log("TESTANDO OBJETO AEROPORTOS:");
    console.log(this.aeroPortos);
    // this.aeroPortos$ = this.service.List();
//////////////////////////////////////////////////////////////////////////
    //console.log("AEROPORTOS JSON", JSON.stringify(this.aeroPortos));
    // console.log(this.service.List().subscribe(dados => this.aeroPortos = dados));
    // this.service.List().pipe.tap((dados => this.aeroPortos = dados);   
    // this.message = this.service.TestMethod();
    // console.log(this.service.List().subscribe(data=> this.message = JSON.stringify(data)));
    // console.log("Depois do subscribe");
    // console.log(this.message);
    //console.log(this.aeroLista);
    //console.log('JSON data: ', JSON.parse(this.stringObject));
  }
}
