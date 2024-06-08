import { Directive, OnInit,ViewContainerRef, TemplateRef, Input} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavigationStart, Router } from '@angular/router';



@Directive({
    selector: '[ForAuthenticationProcess]'
})

export class ForAuthenticationProcessDirective implements OnInit {
    @Input() "ForAuthenticationProcess": boolean;
    constructor(
        private viewContainerRef: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        private router: Router,

    ) { }
    ngOnInit() {
        this.setPermission();
    }
    setPermission() {
        this.viewContainerRef.clear();
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if(event.url.startsWith("/authentication")){
                    this.viewContainerRef.clear();
                    this.viewContainerRef.createEmbeddedView(this.templateRef);
                }else{
                    this.viewContainerRef.clear();
                }
            }
        });
    }
}