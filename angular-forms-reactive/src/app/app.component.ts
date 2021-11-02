import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders: string[] = ["male", "female"];
  signUpForm: FormGroup;
  forbiddenUserNames: string[] = ["Chris", "Anna"];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([]),
    });

    this.signUpForm.setValue({
      userData: {
        username: "Max",
        email: "mohitch.work@gmail.com",
      },
      gender: "Female",
      hobbies: [],
    });

    this.signUpForm.patchValue({
      userData: {
        username: "Anna",
      },
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }

  onAddHobby() {
    const newHobby = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get("hobbies")).push(newHobby);
  }

  getControls() {
    return (<FormArray>this.signUpForm.get("hobbies")).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "stridemaker@gmail.com") {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
