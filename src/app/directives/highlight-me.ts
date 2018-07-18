import {Directive, ElementRef, HostListener, Input, OnInit} from "@angular/core";

@Directive({
    selector: '[highlight-me]'
})

export class MyDirectives implements OnInit{
    constructor(private el: ElementRef){
        this.el.nativeElement.style.backgroundColor = 'blue';
    }

ngOnInit(){
    this.pleaseHighLight(this.defaultColor);
}

@Input()
defaultColor: string;

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