import {Directive, ElementRef, OnInit, HostListener,HostBinding,Input} from "@angular/core"

@Directive({
    selector: "[appBasicHighlight]"    
})
export class BasicHighlightDirective implements OnInit{
    @Input() defaultColor: string = "transparent"
    @Input('appBasicHighlight') highlightColor: string = "blue"
    @HostBinding("style.backgroundColor") backgroundColor: string
    constructor(private elementRef: ElementRef){
    }
    
    ngOnInit(){
        //this.elementRef.nativeElement.style.backgroundColor ="green"
        this.backgroundColor = this.defaultColor;
    }
    
    @HostListener("mouseover")
    onHover(){
        this.elementRef.nativeElement.style.border = "2px solid red"
        this.backgroundColor = this.highlightColor
    }
    
    @HostListener("mouseleave")
    onLeave(){
        this.elementRef.nativeElement.style.border = "none"
        this.backgroundColor = this.defaultColor
    }
}