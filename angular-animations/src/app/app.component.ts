import {
  animate,
  group,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  animations: [
    trigger("divState", [
      state(
        "normal",
        style({
          "background-color": "red",
          transform: "translateX(0)",
        })
      ),
      state(
        "highlighted",
        style({
          backgroundColor: "blue",
          transform: "translateX(100px)",
        })
      ),
      transition("normal => highlighted", animate(400)),
      transition("highlighted => normal", animate(800)),
    ]),

    trigger("wildState", [
      state(
        "normal",
        style({
          "background-color": "red",
          transform: "translateX(0) scale(1)",
        })
      ),
      state(
        "highlighted",
        style({
          backgroundColor: "blue",
          transform: "translateX(100px) scale(1)",
        })
      ),
      state(
        "shrunken",
        style({
          backgroundColor: "green",
          transform: "translateX(0) scale(0.5)",
        })
      ),
      transition("normal => highlighted", animate(400)),
      transition("highlighted => normal", animate(800)),
      // transition("shrunken <=> *", animate(500)),
      transition("shrunken <=> *", [
        style({
          backgroundColor: "orange",
        }),
        animate(
          1000,
          style({
            borderRadius: "50px",
          })
        ),
        animate(500),
      ]),
    ]),
    trigger("list1", [
      state(
        "in",
        style({
          opacity: 1,
        })
      ),
      transition("void => *", [
        style({
          opacity: 0,
          transform: "translateX(-100px)",
        }),
        animate(400),
      ]),
      transition("* => void", [
        animate(
          400,
          style({
            transform: "translateX(100px)",
            opacity: 0,
          })
        ),
      ]),
    ]),
    trigger("list2", [
      state(
        "in",
        style({
          opacity: 1,
        })
      ),
      transition("void => *", [
        style({
          opacity: 0,
          transform: "translateX(-100px)",
        }),
        animate(
          1000,
          keyframes([
            style({
              transform: "translateX(-100px)",
              opacity: 0,
              offset: 0,
            }),
            style({
              transform: "translateX(-50px)",
              opacity: 0.5,
              offset: 0.3,
            }),
            style({
              transform: "translateX(-20px)",
              opacity: 1,
              offset: 0.8,
            }),
            style({
              transform: "translateX(0px)",
              opacity: 1,
              offset: 1,
            }),
          ])
        ),
      ]),
      transition("* => void", [
        group([
          animate(
            400,
            style({
              color: "red",
            })
          ),
          animate(
            900,
            style({
              transform: "translateX(100px)",
              opacity: 0,
            })
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  state: string = "normal";
  wildState: string = "normal";
  list = ["Milk", "Sugar", "Bread"];

  onAnimate() {
    this.state === "normal"
      ? (this.state = "highlighted")
      : (this.state = "normal");
    this.wildState === "normal"
      ? (this.wildState = "highlighted")
      : (this.wildState = "normal");
  }

  onShrink() {
    this.wildState = "shrunken";
  }

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  animateStarted(event: any) {
    console.log(event);
  }

  animateEnded(event: any) {
    console.log(event);
  }
}
