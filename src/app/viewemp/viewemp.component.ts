import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewemp',
  standalone: false,
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.css']
})
export class ViewempComponent implements OnInit {

  employees: Employee[] = [];
  editableEmployee: Employee | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.employees = data;
        console.log('Employees fetched successfully:', data);
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }

  editEmployee(employee: Employee): void {
    this.editableEmployee = { ...employee };
  }

  cancelEdit(): void {
    this.editableEmployee = null;
  }

  saveEmployee(employee: Employee): void {
    this.employeeService.updateEmployee(employee).subscribe(
      (updatedEmployee) => {
        const index = this.employees.findIndex(emp => emp.employeeId === updatedEmployee.employeeId);
        if (index !== -1) {
          this.employees[index] = updatedEmployee;
        }
        this.editableEmployee = null;
        console.log('Employee updated successfully:', updatedEmployee);
        alert('Employee updated successfully!');
      },
      (error) => {
        console.error('Error updating employee:', error);
        alert('Failed to update employee. Please try again later.');
      }
    );
  }

  deleteEmployee(employeeId: number | null): void {
    if (employeeId == null) {
      Swal.fire('Error!', 'Invalid employee ID.', 'error');
      return;
    }

    this.employeeService.deleteEmployee(employeeId).subscribe(
      () => {
        Swal.fire('Deleted!', 'Employee has been deleted.', 'success');
        this.loadEmployees();
      },
      error => {
        Swal.fire('Error!', 'Failed to delete employee.', 'error');
      }
    );
  }
}
