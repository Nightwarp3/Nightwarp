import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit {

    constructor(public authService: AuthService) { }

    ngOnInit(): void {
    }
}
