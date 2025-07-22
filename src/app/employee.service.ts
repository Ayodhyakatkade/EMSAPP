import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private api = 'http://localhost:8080/employees'; // Base path for Spring Boot API

  constructor(private http: HttpClient) {}

  // Save (Insert) Employee
  saveEmployee(employeeData: any): Observable<any> {
    return this.http.post(`${this.api}/insert`, employeeData);
  }

  // Get All Employees
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.api}/findAll`);
  }

  // Delete Employee by ID
  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete(`${this.api}/delete/${employeeId}`);
  }

  // Get Employee by ID
  getEmployeeById(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.api}/findById/${employeeId}`);
  }

  // ✅ Corrected: Update Employee (uses employee.employeeId instead of employee.id)
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.api}/update/${employee.employeeId}`, employee);
  }

  // Login
  login(emailId: string, employeePassword: string): Observable<any> {
    return this.http.post(`${this.api}/login`, {
      emailId,
      employeePassword
    });
  }
}
