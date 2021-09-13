import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.scss']
})
export class TableTestComponent implements OnInit {
  user: any;
  displayedColumns: string[] = ['name', 'theme', 'actions'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  title="Tablas de pruebas"
  tests=[];
  constructor(private authService: AuthService, private router: Router, private location: Location, private testService:TestService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
    this.getTests();
  }

  getTests(){
    this.testService.getTests().then((tests:any)=>{
      this.tests=tests;
      this.dataSource=new MatTableDataSource(tests);
    });
  }

  logoutUser() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

  backClicked() {
    this.location.back();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
