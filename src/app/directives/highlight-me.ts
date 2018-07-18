import {Directive, ElementRef, HostListener} from "@angular/core";

@Directive({
    selector: '[highlight-me]'
})

export class MyDirectives{
    constructor(private el: ElementRef){
        this.el.nativeElement.style.backgroundColor = 'blue';
    }

    @HostListener('mouseenter')
    onmouseenter(): void{
        this.pleaseHighLight('yellow');
    }

    @HostListener('mouseleave')
    onmouseleave(){
        this.pleaseHighLight('white');
    }

    private pleaseHighLight(color:string){
        this.el.nativeElement.style.backgroundColor = color;
    }

    }
}