import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.hightlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.hightlight('');
  }

  private hightlight(color:string){
    this.el.nativeElement.style.backgroundColor=color;
    this.el.nativeElement.style.color='black';
  }
  @Input() appHightlight='';

}
