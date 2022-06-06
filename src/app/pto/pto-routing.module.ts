import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignedRequesterListComponent } from './assigned-requester-list/assigned-requester-list.component';
import { ChangePasswordPtoComponent } from './change-password-pto/change-password-pto.component';
import { ManageFileUploadPtoComponent } from './manage-file-upload-pto/manage-file-upload-pto.component';
import { PtoDashboardComponent } from './pto-dashboard/pto-dashboard.component';
import { PtoComponent } from './pto.component';
import { RouteStopListPtoComponent } from './route-stop-list-pto/route-stop-list-pto.component';
import { StopListPtoComponent } from './stop-list-pto/stop-list-pto.component';
import { TicketHistoryPtoComponent } from './ticket-history-pto/ticket-history-pto.component';
import { UpdateProfilePtoComponent } from './update-profile-pto/update-profile-pto.component';


const routes: Routes = [
  {
    path: "pto",
    component: PtoComponent,
    //canActivate: [AuthGuard, RoleGuard],
    //data: { expectedRole: ["ROLE_PTO"] },
    children: [
        { path: "", redirectTo: "ptodashboard", pathMatch: "prefix" },
        // ------------------------------------- in use ----------------------------------------- //
        { path: "ptodashboard", component: PtoDashboardComponent },
        { path: "update-profile-pto", component: UpdateProfilePtoComponent },
        { path: "change-password-pto", component: ChangePasswordPtoComponent },
        //{ path: "route-stop-list-pto", component: RouteStopListPtoComponent },
        //{ path: "stop-list-pto", component: StopListPtoComponent },
        { path: "ticket-history-pto", component: TicketHistoryPtoComponent }, 
        //{ path: "manage-file-upload-pto", component: ManageFileUploadPtoComponent }, 
        { path: "assigned-requester-list", component: AssignedRequesterListComponent }, 
        
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PtoRoutingModule { }
