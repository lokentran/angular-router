import { RoleService } from './../../services/role.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formAddUser: FormGroup;

  roles = [];

  constructor(private userService: UserService,
              private roleService: RoleService,
              private fb: FormBuilder,
              private route: Router
              ){ }

  ngOnInit(): void {
    this.roles = this.roleService.getAll();
    this.formAddUser = this.fb.group({
      id: [''],
      name: [''],
      phone: [''],
      email: [''],
      address: [''],
      role_id: ['']
    });
  }

  add() {
    console.log(this.formAddUser.value);
    this.userService.add(this.formAddUser.value);
    this.route.navigate(['/']);
  }

}
