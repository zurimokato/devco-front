import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RecruiterService } from 'src/app/services/recruiter.service';
import { DialogEditCandidate } from '../dialog/dialog.component';



@Component({
  selector: 'app-home-recuiter',
  templateUrl: './home-recuiter.component.html',
  styleUrls: ['./home-recuiter.component.scss']
})
export class HomeRecuiterComponent implements OnInit {
  loading=true;

  displayedColumns: string[] = ['firstName', 'lastName', 'userEmail', 'actions'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  candidates = [];

  constructor(public dialog: MatDialog,private recruiterService: RecruiterService) {
    

   }

   

  ngOnInit(): void {
    this.recruiterService.getCandidates().then((data: any) => {
      if (data) {
        this.loading=false;
        this.candidates = data;
        console.log(data)
        this.dataSource = new MatTableDataSource(data);
      }
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openDialog(row:any) {
    this.dialog.open(DialogEditCandidate, {
      data: {
        user: row
      }
    }).afterClosed().subscribe(data=>{
      console.log(data)
    });
  }

}
