import { Component, OnInit, OnChanges } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }


  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  subjectFormControl = new FormControl("",[]);

  messageFormControl = new FormControl("",[]);


  register() {
    let user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      subject: this.subjectFormControl.value,
      question: this.messageFormControl.value
    }

    this.http.post("http://localhost:3000/sendmail", user).subscribe(
      data => {
        let res: any = data;
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
      }, () => {
      }
    );
  }
}
