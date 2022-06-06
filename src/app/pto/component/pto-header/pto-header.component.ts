import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { Login } from 'src/app/auth_models/login.model';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-pto-header',
  templateUrl: './pto-header.component.html',
  styleUrls: ['./pto-header.component.scss']
})
export class PtoHeaderComponent implements OnInit {

    public pushRightClass: string;
    users: UserService[];
    login: Login[] = [];
    username: any = "";

    constructor(/*private translate: TranslateService*/ public router: Router) {
        /*this.router.events.subscribe((val) => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });*/
    }

    ngOnInit() {
        //this.username = JSON.parse(localStorage.getItem("currentUser"));
        this.username = "BEST";
        this.pushRightClass = "push-right";
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector("body");
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector("body");
        dom.classList.toggle(this.pushRightClass);
    }

    onLoggedout() {
        this.router.navigateByUrl("/login");
        return localStorage.clear();
    }

}
