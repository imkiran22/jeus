import { Directive, ElementRef, HostListener, Renderer2, HostBinding } from '@angular/core';
import { InMemoryServiceService } from '../app-services/in-memory-service.service';

@Directive({
  selector: '[appHideOnMouseLeave]'
})
export class HideOnMouseLeaveDirective {

  constructor(private el: ElementRef, 
    private renderer: Renderer2,
    private inMemoryService: InMemoryServiceService) { 
  }
  
  @HostListener('mouseleave') onMouseEnter() {
    this.closeElement();
  }

  closeElement() {
    this.renderer.setStyle(this.el.nativeElement, 'visibility', 'hidden');
  }
  
}
