<p align="center">
  <img src="https://img.icons8.com/?size=100&id=NdeIzskkIm2U&format=png&color=000000" alt="Digital Banking" width="120" height="120">
</p>
<h1 align="center">Digital Banking Platform Frontend</h1>
<div align="center">

[![Angular](https://img.shields.io/badge/Angular-19-red?style=flat&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple?style=flat&logo=bootstrap)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](LICENSE)

A modern, responsive Angular web application that serves as the frontend for a comprehensive digital banking system. Built with Angular 19 and Bootstrap 5, this application provides a secure and intuitive interface for managing bank accounts, customers, and financial transactions.
</div>

## 🌟 Key Features

### 🔐 Authentication System
- **Secure JWT-based login** with token management
- **Route guards** protecting sensitive areas
- **HTTP interceptors** for automatic token handling
- Session management with auto-logout

### 👥 Customer Management
- **Complete CRUD operations** for customer data
- **Advanced search and filtering** capabilities
- **Reactive form validation** with real-time feedback
- **Bulk operations** and data export
- **Customer profile management** with detailed information

### 💳 Account Management
- **Multi-account view** with account summaries
- **Real-time balance updates** and account status
- **Account creation** with different account types
- **Transaction history** with advanced filtering
- **Account statements** and reporting

### 💰 Banking Operations
- **Debit/Withdraw** funds with security validation
- **Credit/Deposit** operations with instant confirmation
- **Account-to-account transfers** with transaction tracking
- **Transaction limits** and validation rules
- **Operation history** and audit trails

### 📱 Modern UI/UX
- **Fully responsive design** for desktop, tablet, and mobile
- **Modern Bootstrap 5** components and styling
- **Intuitive navigation** with breadcrumbs and search
- **Real-time notifications** and feedback
- **Accessibility compliant** interface

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Angular** | 19+ | Frontend framework |
| **TypeScript** | 5+ | Type-safe development |
| **Bootstrap** | 5 | UI components and styling |
| **RxJS** | Latest | Reactive programming |
| **SCSS** | Latest | Advanced styling |
| **Angular CLI** | Latest | Development and build tools |

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/                 # Dashboard and overview
│   │   │   ├── home.component.ts
│   │   │   ├── home.component.html
│   │   │   └── home.component.scss
│   │   ├── login/                # Authentication
│   │   │   ├── login.component.ts
│   │   │   ├── login.component.html
│   │   │   └── login.component.scss
│   │   └── user/                 # Customer management
│   │       ├── user-list/
│   │       ├── user-add/
│   │       ├── user-edit/
│   │       └── user-detail/
│   ├── services/
│   │   ├── auth.service.ts       # Authentication service
│   │   ├── customer.service.ts   # Customer operations
│   │   ├── account.service.ts    # Account management
│   │   └── transaction.service.ts # Banking operations
│   ├── models/
│   │   ├── customer.model.ts
│   │   ├── account.model.ts
│   │   └── transaction.model.ts
│   ├── guards/
│   │   └── auth.guard.ts         # Route protection
│   ├── interceptors/
│   │   └── auth.interceptor.ts   # HTTP request handling
│   └── shared/
│       ├── components/           # Reusable components
│       └── pipes/               # Custom pipes
├── assets/
│   ├── images/
│   ├── icons/
│   └── styles/
└── environments/
    ├── environment.ts
    └── environment.prod.ts
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- **Angular CLI** (v19.0.0 or higher)

```bash
# Check versions
node --version
npm --version
ng version
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohaElbadry/Digital-Banking-Front.git
   cd digital-banking-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   # Update src/environments/environment.ts with your API URL
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:8085'  # Your Spring Boot backend URL
   };
   ```

4. **Start development server**
   ```bash
   ng serve 
   ```

   The application will be available at `http://localhost:4200`

### Build for Production

```bash
# Build for production
ng build --configuration production

# The build artifacts will be stored in the dist/ directory
```

## 🔌 API Integration

The frontend connects to a Spring Boot backend via RESTful APIs:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/auth/login` | POST | User authentication |
| `/customers` | GET | Retrieve all customers |
| `/customers` | POST | Create new customer |
| `/customers/{id}` | PUT | Update customer |
| `/customers/{id}` | DELETE | Delete customer |
| `/accounts` | GET | Retrieve accounts |
| `/accounts` | POST | Create new account |
| `/accounts/{id}/operations` | GET | Get account transactions |
| `/accounts/debit` | POST | Withdraw funds |
| `/accounts/credit` | POST | Deposit funds |
| `/accounts/transfer` | POST | Transfer between accounts |

### API Configuration

Configure your backend API URL in the environment files:

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8085'
};
```

## 📸 Screenshots

| Home Dashboard | Login Page |
|----------------|------------|
| ![Home Page](https://private-user-images.githubusercontent.com/92531732/452831031-50fb9de4-a995-4e8d-8ef6-19cf1737c080.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk0Mjk2OTMsIm5iZiI6MTc0OTQyOTM5MywicGF0aCI6Ii85MjUzMTczMi80NTI4MzEwMzEtNTBmYjlkZTQtYTk5NS00ZThkLThlZjYtMTljZjE3MzdjMDgwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjA5VDAwMzYzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJmOGJkMjk3MmEzMDBiMGNiNGM4NDI2ZGM2NzYzYzE0NzcyZGEwZDI0ZTE1NGU2Y2IxZDkxN2Y1NmRiNWEwYWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.hBL1E5gyqvud-ZHDd02FPdxzquQVZJuIltxfN845BhU) | ![Login Page](https://private-user-images.githubusercontent.com/92531732/452830660-6c77b61e-59f4-42e2-b9e1-f9d19c831fd0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk0Mjk2OTMsIm5iZiI6MTc0OTQyOTM5MywicGF0aCI6Ii85MjUzMTczMi80NTI4MzA2NjAtNmM3N2I2MWUtNTlmNC00MmUyLWI5ZTEtZjlkMTljODMxZmQwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjA5VDAwMzYzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFiMDkyY2QyYmU5NGI0MDkyNGNjNGMyMDExZDFmYzBjYzE5NzU1YmFkMjdmZGExMzMyMWI4ZDBhYTI0ZmQ5MjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.zwRNiFWdnOeWW8B5Jyh6vjX2z9sO1kOxPVLTuBVLlOc) |
| **Add User** | **Update User** |
| ![Add User](https://private-user-images.githubusercontent.com/92531732/452831134-f7ae8701-3099-47b0-8184-c3bea69af420.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk0Mjk2OTMsIm5iZiI6MTc0OTQyOTM5MywicGF0aCI6Ii85MjUzMTczMi80NTI4MzExMzQtZjdhZTg3MDEtMzA5OS00N2IwLTgxODQtYzNiZWE2OWFmNDIwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjA5VDAwMzYzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJiNGZjYWE0NzU5NGYwY2U3NmRiMGUwMTYxN2ZiYzAwZmZlYWFkNmJjYTAwNTY2NWU1YWRmNjE5ZjAwOWNmNjgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.bDFuYobig1AexRDrsC5GCrM2CNq50SbpImiCRIA2tqk) | ![Update User](https://private-user-images.githubusercontent.com/92531732/452831146-bb816651-a308-4efb-99bd-0ff09427c57b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk0Mjk2OTMsIm5iZiI6MTc0OTQyOTM5MywicGF0aCI6Ii85MjUzMTczMi80NTI4MzExNDYtYmI4MTY2NTEtYTMwOC00ZWZiLTk5YmQtMGZmMDk0MjdjNTdiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjA5VDAwMzYzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJmNzA0MjVmYWZkYzhkY2MyNmE1Yzk1NWZmN2RiNTcyMTA3NzNiMzIwMDMwNWQxYzk1ZDRjNDQxZjBjMzI0YTEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.beIk4nbw5R1G1errfN6H50LCWEfw97PX9avisCpDStg) |

## 🔐 Security Features

- **JWT Token Authentication** with automatic renewal
- **Route Guards** preventing unauthorized access
- **HTTP Interceptors** for secure API communication
- **Input validation** and sanitization
- **CSRF protection** and XSS prevention
- **Role-based access control** (RBAC)

##  Testing

```bash
# Run unit tests
ng test

```

## 🚧 Future Roadmap

### Phase 1 - Enhanced Features
- [ ] **Advanced Analytics Dashboard** with charts and reports
- [ ] **Multi-language Support** (i18n)
- [ ] **Dark Mode** theme option
- [ ] **Export/Import** functionality for customer data

### Phase 2 - Mobile & Performance
- [ ] **Progressive Web App** (PWA) capabilities
- [ ] **Mobile App** using Ionic/Capacitor
- [ ] **Performance optimization** and lazy loading
- [ ] **Offline mode** support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
<div align="center">

## 🌟 Star This Project

If you find this project helpful, please consider giving it a star ⭐ on GitHub!

[![GitHub stars](https://img.shields.io/github/stars/MohaElbadry/Digital-Banking-Front?style=social)](https://github.com/MohaElbadry/Digital-Banking-Front/stargazers)


**Made with ❤️ using Angular**
</div>
