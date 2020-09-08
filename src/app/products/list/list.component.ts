import { RoleService } from './../../services/role.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users = [];
  roles = [];

  constructor(private userService: UserService,
              private roleService: RoleService
              )
  { }

  ngOnInit(): void {
    this.users = this.userService.getAll();
    this.roles = this.roleService.getAll();
  }

}
