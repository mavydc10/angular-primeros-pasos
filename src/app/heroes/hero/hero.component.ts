import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizadName():string{
    return this.name.toUpperCase();
  }

   getHeroesDescription():string{

    return `${this.name} - ${this.age}`
  }

  changeName():void{
    this.name = 'Hulk';
  }

  changeAge():void{
    this.age = 50;
  }

  resetForm():void{
    //this.name = 'ironman';
    this.age = 45

    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde angular</h1>';
    });
  }
}
