import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective implements OnInit {

  @Input('appForEm') numbers: number[]
  @Input('appForUsando') texto: String[]

  constructor() {
    
  }

  ngOnInit():void{
    console.log(this.numbers,this.texto)
  }
}
