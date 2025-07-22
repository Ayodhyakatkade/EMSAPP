import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-insertemp',
  standalone: false,
  templateUrl: './insertemp.component.html',
  styleUrl: './insertemp.component.css'
})
export class InsertempComponent {
  employee: Employee = {
    employeeId:null,
    employeeName: '',
    emailId: '',
    employeePassword: '',
    employeeContactNumber: '',
    employeeAddress: '',
    employeeGender: '',
    employeeDepartment: '',
    employeeSkills: '',
  };

  constructor(private employeeService: EmployeeService) {}

  // Handle form submission
  onSubmit(form: NgForm) {
    console.log("Form Valid?", form.valid);
    console.log("Form Data:", this.employee);

    if (form.valid) {
      this.employeeService.saveEmployee(this.employee).subscribe(
        () => {
          Swal.fire('Employee added successfully!', '', 'success');
          form.resetForm();
          this.employee = {
            employeeId: null,
            employeeName: '',
            emailId: '',
            employeePassword: '',
            employeeContactNumber: '',
            employeeAddress: '',
            employeeGender: '',
            employeeDepartment: '',
            employeeSkills: '',
          };
        },
        (error) => {
          Swal.fire('Error adding employee!', error.error.message, 'error');
        }
      );
    } else {
      Swal.fire('Error!', 'Please fill in all required fields.', 'error');
    }
  }
}
