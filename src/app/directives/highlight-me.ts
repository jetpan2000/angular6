import {Directive, ElementRef} from "@angular/core";

@Directive({
    selector: '[highlight-me]'
})

export class MyDirectives{
    constructor(el: ElementRef){
        el.nativeElement.style.backgroundColor = 'blue';
    }
}