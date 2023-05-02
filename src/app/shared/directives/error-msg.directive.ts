import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {


  public htmlElement: ElementRef<HTMLElement>;

  @Input() set color( valor: string ) {
    this.htmlElement.nativeElement.style.color = valor;
  }

  @Input() message: string = 'Este campo es requerido'

  //Aqui, estoy sacando el elemento de html donde lo estoy invocando. hace una referencia al elemento donde se esta ejecutando
  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this.message;
  }

}
