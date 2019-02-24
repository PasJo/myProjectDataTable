import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  dataSource: any;
  displaydColumns = ['name', 'username', 'email'];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(results => {
      if (!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
    });
  }

}
