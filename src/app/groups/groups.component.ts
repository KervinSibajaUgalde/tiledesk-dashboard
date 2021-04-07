import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { GroupService } from '../services/group.service';
import { Group } from '../models/group-model';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { forEach } from '@angular/router/src/utils/collection';
import { NotifyService } from '../core/notify.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  showSpinner = true;
  showSpinnerInModal: boolean;

  groupsList: Group[];
  project_id: string;
  display_users_list_modal = 'none';
  group_name: string;
  id_group: string;
  group_members: any;

  projectUsersList: any;

  users_selected = [];

  add_btn_disabled: boolean;

  displayDeleteModal = 'none';
  id_group_to_delete: string;
  name_group_to_delete: string;

  constructor(
    private auth: AuthService,
    private groupsService: GroupService,
    private router: Router,
    private usersService: UsersService,
    private notify: NotifyService

  ) { }

  ngOnInit() {
    this.auth.checkRoleForCurrentProject();
    this.getCurrentProject();
    this.getGroupsByProjectId();
  }

  getCurrentProject() {
    this.auth.project_bs.subscribe((project) => {

      if (project) {
        this.project_id = project._id;
        console.log('00 -> GROUPS COMP project ID from AUTH service subscription ', this.project_id);
      }
    });
  }

  /**
   * GETS ALL GROUPS WITH THE CURRENT PROJECT-ID   */
  getGroupsByProjectId() {
    this.groupsService.getGroupsByProjectId().subscribe((groups: any) => {
      console.log('GROUPS GET BY PROJECT ID ', groups);

      this.groupsList = groups;
      // this.faqkbList = faqKb;

    },
      (error) => {

        console.log('GET GROUPS - ERROR ', error);

        this.showSpinner = false;
      },
      () => {
        this.showSpinner = false;
        console.log('GET GROUPS * COMPLETE');

      });

  }

  goToEditAddPage_create() {
    this.router.navigate(['project/' + this.project_id + '/group/create']);
  }

  goToUsers() {
    this.router.navigate(['project/' + this.project_id + '/users']);
  }

  goToEditAddPage_edit(id_group: string) {
    this.router.navigate(['project/' + this.project_id + '/group/edit/' + id_group]);
  }

  /*  !!! NO MORE USED  - MOVED IN group-edit-add.comp */
  // open_users_list_modal(id_group: string, group_name: string, group_members: any) {
  //   this.id_group = id_group;
  //   this.group_name = group_name;
  //   this.group_members = group_members;

  //   this.showSpinnerInModal = true;

  //   console.log('GROUP SELECTED -> group NAME: ', this.group_name, ' -> group ID: ', this.id_group)
  //   console.log('GROUP SELECTED -> MEMBERS; ', this.group_members);

  //   this.users_selected = this.group_members;
  //   console.log('ARRAY OF SELECTED USERS WHEN OPEN MODAL ', this.users_selected);


  //   this.getAllUsersOfCurrentProject();
  //   this.display_users_list_modal = 'block';
  // }

  // getAllUsersOfCurrentProject() {
  //   this.usersService.getProjectUsersByProjectId().subscribe((projectUsers: any) => {
  //     console.log('GROUPS-COMP - PROJECT-USERS (FILTERED FOR PROJECT ID)', projectUsers);

  //     this.showSpinnerInModal = false;
  //     this.projectUsersList = projectUsers;

  //     // CHECK IF THE USER-ID IS BETWEEN THE MEMBER OF THE GROUP
  //     this.projectUsersList.forEach(projectUser => {

  //       for (const p of this.projectUsersList) {
  //         // console.log('vv', projectUser._id)

  //         this.group_members.forEach(group_member => {

  //           if (p.id_user._id === group_member) {
  //             if (projectUser._id === p._id) {
  //               p.is_group_member = true;
  //               console.log('GROUP MEMBERS ', group_member)
  //               console.log('IS MEMBER OF THE GROUP THE USER ', p.id_user._id, ' - ', p.is_group_member)
  //             }
  //           }
  //         });
  //       }
  //     });
  //   }, error => {
  //     this.showSpinnerInModal = false;
  //     console.log('PROJECT USERS (FILTERED FOR PROJECT ID) - ERROR', error);
  //   }, () => {
  //     console.log('PROJECT USERS (FILTERED FOR PROJECT ID) - COMPLETE');
  //   });
  // }

  /*  !!! NO MORE USED - MOVED IN group-edit-add.comp */
  // onCloseModal() {
  //   this.display_users_list_modal = 'none';
  // }

  /*  !!! NO MORE USED - MOVED IN group-edit-add.comp */
  // change(obj) {
  //   // + this.group_members
  //   console.log('obj', obj);

  //   const index = this.users_selected.indexOf(obj);

  //   console.log('INDEX ', index);

  //   if (index > -1) {
  //     this.users_selected.splice(index, 1);
  //   } else {
  //     this.users_selected.push(obj);
  //   }

  //   console.log('ARRAY OF SELECTED USERS ', this.users_selected);
  //   console.log('ARRAY OF SELECTED USERS lenght ', this.users_selected.length);

  //   // DISABLE THE ADD BUTTON
  //   // if (this.users_selected.length < 1) {
  //   //   this.add_btn_disabled = true;

  //   // } else {
  //   //   this.add_btn_disabled = false;
  //   // }
  // }


  // !!! NO MORE USED  - MOVED IN group-edit-add.comp
  // onCloseModalHandled() {
  //   this.display_users_list_modal = 'none';

  //   this.groupsService.updateGroup(this.id_group, this.users_selected).subscribe((group) => {

  //     console.log('UPDATED GROUP WITH THE USER SELECTED', group);
  //   },
  //     (error) => {
  //       console.log('UPDATED GROUP WITH THE USER SELECTED - ERROR ', error);
  //     },
  //     () => {
  //       console.log('UPDATED GROUP WITH THE USER SELECTED* COMPLETE *');

  //       // UPDATE THE GROUP LIST
  //       this.ngOnInit()
  //     });
  // }

  openDeleteModal(id_group: string, group_name: string) {
    this.displayDeleteModal = 'block';
    this.id_group_to_delete = id_group;
    this.name_group_to_delete = group_name;
    console.log('OPEN DELETE MODAL - ID OF THE GROUP OF DELETE ', this.id_group_to_delete)
  }

  onCloseDeleteModal() {
    this.displayDeleteModal = 'none';
  }

  deleteGroup() {
    this.displayDeleteModal = 'none';
    this.groupsService.setTrashedToTheGroup(this.id_group_to_delete).subscribe((group) => {

      console.log('UPDATED GROUP WITH TRASHED = TRUE ', group);
    },
      (error) => {
        console.log('UPDATED GROUP WITH TRASHED = TRUE - ERROR ', error);
        // =========== NOTIFY ERROR ===========
        this.notify.showNotification('An error occurred while deleting the group', 4, 'report_problem');
      },
      () => {
        console.log('UPDATED GROUP WITH TRASHED = TRUE * COMPLETE *');

        // =========== NOTIFY SUCCESS===========
        this.notify.showNotification('group successfully deleted', 2, 'done');
        // UPDATE THE GROUP LIST
        this.ngOnInit()
      });
  }

}
