import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[scrollListener]' })
export class ScrollListenerDirective {
    @Input()
    scrollListener:any;
    constructor(el:ElementRef) { }

    @HostListener('window:scroll', ['$event'])
    listen(event:any){
       
        
    }
}