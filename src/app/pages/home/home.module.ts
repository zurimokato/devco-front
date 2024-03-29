import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { HomeRecuiterComponent } from './home-recuiter/home-recuiter.component';
import { HomeCandidateComponent } from './home-candidate/home-candidate.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogEditCandidate } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingComponent } from '../utils/loading/loading.component';
import { UtilSModuleModule } from '../utils/utils.module';



@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    FooterComponent,
    HomeRecuiterComponent,
    DialogEditCandidate,
    HomeCandidateComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    UtilSModuleModule
  ],
  exports:[ToolbarComponent]
})
export class HomeModule { }
