import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosComponent } from './eventos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventosComponent],
  exports: [EventosComponent]
})
export class EventosModule { }
