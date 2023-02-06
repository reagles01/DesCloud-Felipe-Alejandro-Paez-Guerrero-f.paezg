import { Component, OnInit } from '@angular/core';
import {Evento} from './evento';
import {EventosService} from './eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: Array<Evento>;

  constructor( private eventosService: EventosService) { }

  getListaEventos(){
    this.eventosService.getEventos('').subscribe(cs => {this.eventos = cs;})
  }

  ngOnInit() {
    this.getListaEventos();
  }

}
