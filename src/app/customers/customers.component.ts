import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../services/customer.service';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Customer } from '../model/customer.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers!: Observable<Array<Customer>>;
  errorMessage!: string;
  searchFormGroup: FormGroup | undefined;
  isLoading: boolean = true;

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control(''),
    });
    this.loadCustomers();
  }

  loadCustomers() {
    this.isLoading = true;
    this.errorMessage = '';

    this.customers = this.customerService.getCustomer().pipe(
      catchError((err) => {
        this.errorMessage =
          err.message || 'An error occurred while loading customers';
        this.isLoading = false;
        return throwError(() => err);
      })
    );

    this.customers.subscribe(() => {
      this.isLoading = false;
    });
  }

  handleSearchCustomers() {
    const kw = this.searchFormGroup?.value.keyword?.trim();

    if (!kw) {
      this.loadCustomers();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.customers = this.customerService.searchCustomer(kw).pipe(
      catchError((err) => {
        this.errorMessage = err.message || 'An error occurred during search';
        this.isLoading = false;
        return throwError(() => err);
      })
    );

    this.customers.subscribe(() => {
      this.isLoading = false;
    });
  }

  resetSearch() {
    this.searchFormGroup?.patchValue({ keyword: '' });
    this.loadCustomers();
  }

  getStatusBadgeClass(customer: Customer) {
    switch (customer.status) {
      case 'ACTIVE':
        return 'bg-success';
      case 'INACTIVE':
        return 'bg-danger';
      case 'PENDING':
        return 'bg-warning';
      default:
        return 'bg-success'; // Default to active
    }
  }

  handleEditCustomer(customer: Customer) {
    // Navigate to the edit customer page
    this.router.navigate(['/edit-customer', customer.id]);
  }

  handleDeleteCustomer(c: Customer) {
    const conf = confirm(
      `Are you sure you want to delete customer "${c.name}"?`
    );
    if (!conf) return;

    this.customerService.deleteCustomer(c.id).subscribe({
      next: (resp) => {
        this.customers = this.customers.pipe(
          map((data) => {
            const index = data.indexOf(c);
            if (index !== -1) {
              data.splice(index, 1);
            }
            return data;
          })
        );
        // Show success message
        alert(`Customer "${c.name}" was deleted successfully.`);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Failed to delete customer. Please try again.';
      },
    });
  }
}
