import {Component} from "@angular/core";
import {Title} from "@angular/platform-browser";

@Component({
    selector: "lux-home",
    templateUrl: "lux-home.component.html",
    styleUrls: ["lux-home.component.scss"]
})
export class LuxHomeComponent {

    appName: string = "Gilmouring";
    docsLink: string = "./docs";

    constructor(titleService: Title) {
        titleService.setTitle(this.appName);
        location.href = this.docsLink;
    }

}
