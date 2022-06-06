import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PtoRoutingModule } from './pto-routing.module';
import { PtoDashboardComponent } from './pto-dashboard/pto-dashboard.component';
import { PtoComponent } from './pto.component';
import { PtoHeaderComponent } from './component/pto-header/pto-header.component';
import { PtoSidebarComponent } from './component/pto-sidebar/pto-sidebar.component';
import { PtoFooterComponent } from './component/pto-footer/pto-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ManageFileUploadPtoComponent } from './manage-file-upload-pto/manage-file-upload-pto.component';
import { UpdateProfilePtoComponent } from './update-profile-pto/update-profile-pto.component';
import { ChangePasswordPtoComponent } from './change-password-pto/change-password-pto.component';
import { StopListPtoComponent } from './stop-list-pto/stop-list-pto.component';
import { RouteStopListPtoComponent } from './route-stop-list-pto/route-stop-list-pto.component';
import { TicketHistoryPtoComponent } from './ticket-history-pto/ticket-history-pto.component';
import { AssignedRequesterListComponent } from './assigned-requester-list/assigned-requester-list.component';


@NgModule({
  declarations: [
    PtoDashboardComponent, 
    PtoComponent, 
    PtoHeaderComponent, 
    PtoSidebarComponent, 
    PtoFooterComponent, ManageFileUploadPtoComponent, UpdateProfilePtoComponent, ChangePasswordPtoComponent, StopListPtoComponent, RouteStopListPtoComponent, TicketHistoryPtoComponent, AssignedRequesterListComponent
  ],
  imports: [
    CommonModule,
    PtoRoutingModule,
    TranslateModule,
    NgbDropdownModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgbModule,
    NgSelectModule
  ]
})
export class PtoModule { }
