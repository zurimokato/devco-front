import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RecruiterService } from 'src/app/services/recruiter.service';



@Component({
  selector: 'app-home-recuiter',
  templateUrl: './home-recuiter.component.html',
  styleUrls: ['./home-recuiter.component.scss']
})
export class HomeRecuiterComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'userEmail', 'actions'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  candidates = [];

  constructor(private recruiterService: RecruiterService) { }

  ngOnInit(): void {
    this.recruiterService.getCandidates().then((data: any) => {
      if (data) {

        this.candidates = data;
        console.log(data)
        this.dataSource = new MatTableDataSource(data);
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
