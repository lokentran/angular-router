import { FormBuilder, FormGroup } from '@angular/forms';
import { RoleService } from './../../services/role.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formEditUser: FormGroup;
  id = +this.route.snapshot.paramMap.get('id');
  roles = [];

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private roleService: RoleService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.roles = this.roleService.getAll();
    const user = this.userService.getUserById(this.id);
    this.formEditUser = this.fb.group({
      id: [user.id],
      name: [user.name],
      phone: [user.phone],
      email: [user.email],
      address: [user.address],
      role_id: [user.role_id]
    });
    console.log(user);
  }  

  submitEdit() {
    console.log(this.formEditUser.value);
    this.userService.updateUser(this.formEditUser.value, this.id);
    this.router.navigate(['']);
  }

  get name() {
    return this.formEditUser.get('name');
  }

  get price() {
    return this.formEditUser.get('price');
  }

  get color() {
    return this.formEditUser.get('color');
  }

  get desc() {
    return this.formEditUser.get('desc');
  }

}
