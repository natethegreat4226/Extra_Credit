import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  poNumber: number = 0;
  gameList: number[] = [];

  receiveMessage(msg: number) {
    this.poNumber = msg;
    this.gameList.push(this.poNumber);
  }
}
