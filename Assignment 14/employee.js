let employees = [
  {
    "id": 1,
    "name": "Abhinav",
    "department": "IT",
    "Salary": 75000
  },
  {
    "id": 2,
    "name": "Gaurav",
    "department": "Sales",
    "Salary": 52000
  },
  {
    "id": 3,
    "name": "Raj",
    "department": "IT",
    "Salary": 64000
  }
];

// Filter employees according to department = IT
const IT_employees = employees.filter(employee => employee.department === 'IT');
console.log(IT_employees);

// Filter employees who earn a salary < 65000
const low_salary_employees = employees.filter(employee => employee.Salary < 65000);
console.log(low_salary_employees);
