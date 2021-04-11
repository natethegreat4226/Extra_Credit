import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  @Output() outputEvent: EventEmitter<number> = new EventEmitter();
  setInterval = setInterval;

  constructor() {}

  count: number = 0;

  myTimer: any;

  startGame() {
    this.myTimer = setInterval(() => {
      this.outputEvent.emit(this.count++);
    }, 1000);
    this.outputEvent.emit(this.count);
  }
  stopGame() {
    clearInterval(this.myTimer);
    this.outputEvent.emit(this.count);
  }

  ngOnInit() {}
}
