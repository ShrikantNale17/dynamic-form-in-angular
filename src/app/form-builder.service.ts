import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor() { }
  form = new Subject<any>();

  raiseFormEmmiterEvent(data: any) {
    this.form.next(data)
  }
}
