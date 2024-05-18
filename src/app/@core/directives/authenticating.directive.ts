import { Directive, OnInit,ViewContainerRef, TemplateRef, Input} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';



@Directive({
    selector: '[Authenticating]'
})

export class AuthenticatingDirective implements OnInit {
    @Input() "Authenticating": string;
    constructor(
        private viewContainerRef: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        private authService: AuthService,
        private router: Router,
    ) { 
    
    }
    ngOnInit() {
        this.setPermission();
    }
    setPermission() {
        
        if(this.Authenticating == 'hide'){
            this.viewContainerRef.clear();
            this.router.events.subscribe(event => {
                if (event instanceof NavigationStart) {
                    if(!event.url.startsWith("/authentication")){
                        this.viewContainerRef.clear();
                        this.viewContainerRef.createEmbeddedView(this.templateRef);
                    }else{
                        this.viewContainerRef.clear();
                    }
                }
            });
        }
        
        
        if(this.Authenticating == 'show'){
            this.viewContainerRef.clear();
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }
}