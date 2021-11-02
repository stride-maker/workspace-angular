import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Observable, Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  firstObsSusbscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObsSusbscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error("Count is greater than 3!"));
        }
        count++;
      }, 1000);
    });

    this.firstObsSusbscription = customIntervalObservable
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data: number) => {
          return "Round: " + data;
        })
      )
      .subscribe(
        (dataCount: number) => {
          console.log(dataCount);
        },
        (error: any) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          // only called when observable is actually completed, it's never called when error is thrown
          console.log("Custom observable completed!");
        }
      );
  }

  ngOnDestroy() {
    // this.firstObsSusbscription.unsubscribe();
  }
}
