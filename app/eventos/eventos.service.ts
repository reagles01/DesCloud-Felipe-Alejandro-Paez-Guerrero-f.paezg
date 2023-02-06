import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from './evento';


@Injectable({
  providedIn: 'root'
})
export class EventosService {

constructor( private http: HttpClient) { }

public getEventos(nombre:String):Observable<Evento[]>
{
    return this.http.get<Evento[]>('http://ec2-44-201-136-253.compute-1.amazonaws.com:5000/eventos')
}

}
