import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "./user/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  isActivated: boolean = false;
  activatedSubs: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSubs = this.userService.activateEmitter.subscribe(
      (activated: boolean) => {
        this.isActivated = activated;
      }
    );
  }

  ngOnDestroy() {
    this.activatedSubs.unsubscribe();
  }
}
