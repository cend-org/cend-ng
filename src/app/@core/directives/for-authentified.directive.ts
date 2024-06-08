import { Directive, OnInit, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavigationStart, Router } from '@angular/router';



@Directive({
    selector: '[ForAuthentified]'
})

export class ForAuthentifiedDirective implements OnInit {
    @Input() "ForAuthentified": boolean;
    isAuthentified: boolean = false;
    constructor(
        private viewContainerRef: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        private authService: AuthService,
        private router: Router,

    ) { }
    ngOnInit() {
        this.setPermission();
    }

    setPermission() {
        this.isAuthentified = this.authService.IsAuthentified();
        let viewCondition: boolean = true;

        if (!this.ForAuthentified) {
            if (this.isAuthentified) {
                viewCondition = false;
            }
            if (!this.isAuthentified) {
                viewCondition = true;
            }
        }

        if (this.ForAuthentified) {
            if (this.isAuthentified) {
                viewCondition = true;
            }

            if (!this.isAuthentified) {
                viewCondition = false;
            }
        }


        if (viewCondition) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainerRef.clear();
        }
    }

    ngOnDestroy() {
        this.isAuthentified = this.authService.IsAuthentified();
    }
    refresh() {
        this.setPermission();
    }
    

}