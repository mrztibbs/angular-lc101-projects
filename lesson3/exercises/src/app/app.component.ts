import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = false;


  moveRocket(rocketImage, direction: string){
    if (direction ==='right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left=movement;
    } else if (direction ==='left'){
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left=movement;
    } else if (direction ==='up'){
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom=movement;
    } else if (direction ==='down'){
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom=movement;
    } 
}

handleTakeOff() {
  let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
  if (result) {
     this.color = 'blue';
     this.height = 10000;
     this.width = 0;
     this.message = 'Shuttle in flight.';
  }
}

abortMission(rocketImage) {
  let result = window.confirm('Abort Mission?');
  if (result) {
     this.color = 'green';
     this.height = 0;
     this.width = 0;
     this.message = 'Mission Aborted!';
     rocketImage.style.bottom = '0px';
  }
}

landRocket(rocketImage) {
  let result = window.confirm('Abort Mission?');
  if (result) {
     this.color = 'green';
     this.height = 0;
     this.width = 0;
     this.message = 'Landing!';
     rocketImage.style.left=0;
     rocketImage.style.bottom = '0px';
  }
}
}
