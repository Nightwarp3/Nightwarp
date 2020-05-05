import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { LogInDialogComponent } from '../log-in-dialog/log-in-dialog.component';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    public user: any;

    constructor(public dialog: MatDialog) { }

    ngOnInit(): void {
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(LogInDialogComponent, {
            width: '500px',
            data: {}
        });
        
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.user = result;
        });
    }
}
