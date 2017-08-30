import{Directive, ElementRef,HostListener, Input} from '@angular/core';

@Directive({ selector: '[myHighlight]'})

export class HighlightDirective{
    @Input() myHighlight:string;
    constructor (private el:ElementRef){
        //el.nativeElement.style.backgroundColor ="red";
    }
    
    @HostListener('mouseenter') onMouseenter(){
        this.highlight('yellow');
    }

    @HostListener('mouseleave') onMouseleave(){
        this.highlight('red');
    }

    private highlight(color:string){
        this.el.nativeElement.style.backgroundColor = color;


    }
}