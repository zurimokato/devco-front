import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/services/auth.service';
import { RecruiterService } from 'src/app/services/recruiter.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-home-candidate',
  templateUrl: './home-candidate.component.html',
  styleUrls: ['./home-candidate.component.scss']
})
export class HomeCandidateComponent implements OnInit {

  displayedColumns: string[] = ['name', 'theme', 'actions'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  user:any;
  tests:any;
  loading=true;

  constructor(public dialog: MatDialog,private testService: TestService, private authService:AuthService) {
    

  }

  

 ngOnInit(): void {

  this.authService.getUser().subscribe(user=>{
    this.user=user;
  });
  this.getTests();
 }

 getTests(){
   this.testService.getTests().then((test)=>{
    if(Array.isArray(test)){
      this.tests=test.filter(data=>data.userIdCandidate ===this.user.id)
      console.log(this.tests);
      this.loading=false;
      this.dataSource=new MatTableDataSource( this.tests)
    }
   })
 }

 applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();
 }

}
