import { Component } from '@angular/core';
import { Randomising } from './animations/Ransomising';
import { ShowBall } from './animations/ShowBall';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [Randomising, ShowBall]
})


export class AppComponent {

  showBall = false;
  isOpen = true;
  indexes = [1, 2, 3, 4, 5];
  disableStartButton = false;
  cupsClickability = true;
  score = 0;
  counter = 0;
  time = 2000;

  // counter = new Subject<numer>();

  private generateRandomIndex(max: number): number {
    const result = Math.floor(Math.random() * max);
    return result === max ? result - 1 : result;
  }

  private destructiveAssign(arr: any[], index_1: number, index_2: number): void {
    [arr[index_1], arr[index_2]] = [arr[index_2], arr[index_1]];
  }

  private getRandomPair(totalQuantity: number): { index_1: number, index_2: number } {

    const index_1 = this.generateRandomIndex(totalQuantity);
    const indexMap = new Array(totalQuantity).fill(null).map((_, index) => index);

    const untouchedIndexes = indexMap.filter(index => index !== index_1);
    const index_2 = untouchedIndexes[this.generateRandomIndex(totalQuantity - 1)];

    return { index_1, index_2 }

  }

  public swap(targetArray: number[]) {

    const { index_1, index_2 } = this.getRandomPair(targetArray.length);
    this.destructiveAssign(targetArray, index_1, index_2);

  }




  toggle() {

    this.counter = 0;
    this.disableStartButton = true;
    this.showBall = true;

    let timer = setInterval(this.swap.bind(this, this.indexes), this.time);
    setTimeout(_ => clearInterval(timer), this.time * 6);


  }


  openEmptyCup() {

    this.cupsClickability = true;
    this.showBall = !this.showBall;
    this.disableStartButton = false;
    this.counter = 0;

    this.score = 0;
    this.time = 2000;

  }


  openBall() {

    this.cupsClickability = true
    this.score++;
    localStorage.setItem('key', JSON.stringify(this.score));
    this.showBall = !this.showBall;
    let timer = setInterval(this.swap.bind(this, this.indexes), this.time);
    setTimeout(_ => clearInterval(timer), this.time * 6);
    this.counter = 0;
    this.time = this.time / 2;
  }


  animatStart() {
    this.cupsClickability = true;
    this.counter++;
  }
  animateDone() {
    if (this.counter == 10 || this.counter == 12)
      this.cupsClickability = false;
  }


  ngOnInit() {
    this.swap(this.indexes);
    setTimeout(_ => { this.cupsClickability = true; this.counter = 0 }, 0);
    this.score = JSON.parse(localStorage.getItem('key'));
  }

}
