import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'wolves',
    templateUrl: './wolves.component.html'
})

export class WolvesComponent {
    public wolves: Person[] = [];
    public index: number = 0;

    public addWolf() {
        this.wolves.push(this.wolfList[this.index]);
        this.index++;
    }

    public wolfList = [
        new Person('', new Date(2018, 10, 12), '../../../assets/Narwhal.jpg')
    ];
}

export class Person {
    public age: number
    constructor(public name: string, public birthday: Date, public imageRef: string) {
        let today = new Date();
        this.age = this.GetAge(birthday, today);
    }

    private GetAge(birthday: Date, today: Date): number {
        let byear = birthday.getFullYear();
        let bmonth = birthday.getMonth();
        let bday = birthday.getDate();

        let age = today.getFullYear() - byear;
        if (bmonth > today.getMonth() && bday > today.getDate()){
            age--;
        }

        return age;
    }
}