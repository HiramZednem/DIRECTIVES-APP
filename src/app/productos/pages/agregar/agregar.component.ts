import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  public color: string = 'red';

  public myForm: FormGroup = this.fb.group({
    name: ['', Validators.required]
  })

  constructor( private fb: FormBuilder) { }

  getError( label: string ): boolean {
    return this.myForm.get(label)?.invalid || false;
  }

  cambiarColor() {
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }
}
