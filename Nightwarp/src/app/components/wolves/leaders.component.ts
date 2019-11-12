import { Component } from "@angular/core";
import { Person } from './wolves.component';

@Component({
    selector: 'leaders',
    templateUrl: './leaders.component.html'
})

export class LeadersComponent {
    public leaders: Person[] = [];
    public index: number = 0;

    public addLeader(){
        this.leaders.push(this.wolfList[this.index]);
        this.index++;
    }

    public wolfList = [
        new Person('Mike Campbell', new Date(1993, 7, 31), '../../../assets/Narwhal.jpg')
    ];
}