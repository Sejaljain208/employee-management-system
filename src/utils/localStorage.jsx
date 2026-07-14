const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "password123",
    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 2
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Complete Backend Playlist",
        taskDescription: "Complete the remaining backend development videos.",
        taskDate: "2026-07-11",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Login Page",
        taskDescription: "Design and develop the employee login page.",
        taskDate: "2026-07-08",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix API Error",
        taskDescription: "Resolve the API connection issue in the project.",
        taskDate: "2026-07-05",
        category: "Bug Fix"
      }
    ]
  },

  {
    id: 2,
    firstName: "Ishita",
    email: "employee2@example.com",
    password: "password123",
    taskNumbers: {
      active: 2,
      newTask: 0,
      completed: 1,
      failed: 2
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build Dashboard",
        taskDescription: "Create the employee dashboard using React.",
        taskDate: "2026-07-12",
        category: "Development"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Task Cards",
        taskDescription: "Create responsive task cards using Tailwind CSS.",
        taskDate: "2026-07-13",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup React Project",
        taskDescription: "Setup React project using Vite.",
        taskDate: "2026-07-01",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Connection",
        taskDescription: "Connect the application with the database.",
        taskDate: "2026-07-04",
        category: "Database"
      }
    ]
  },

  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "password123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 3
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Navbar",
        taskDescription: "Develop a navigation bar for the application.",
        taskDate: "2026-07-14",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Authentication",
        taskDescription: "Add employee and admin authentication.",
        taskDate: "2026-07-15",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Header Component",
        taskDescription: "Build the reusable header component.",
        taskDate: "2026-07-07",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Install Tailwind CSS",
        taskDescription: "Configure Tailwind CSS in the React project.",
        taskDate: "2026-07-03",
        category: "Setup"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Application",
        taskDescription: "Deploy the application on Vercel.",
        taskDate: "2026-07-06",
        category: "Deployment"
      }
    ]
  },

  {
    id: 4,
    firstName: "Ananya",
    email: "employee4@example.com",
    password: "password123",
    taskNumbers: {
      active:3,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Task Form",
        taskDescription: "Build a form for admin to assign new tasks.",
        taskDate: "2026-07-16",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Employee Data",
        taskDescription: "Update employee task information.",
        taskDate: "2026-07-17",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Footer",
        taskDescription: "Design the application footer.",
        taskDate: "2026-07-02",
        category: "Design"
      }
    ]
  },

  {
    id: 5,
    firstName: "Kabir",
    email: "employee5@example.com",
    password: "password123",
    taskNumbers: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Application",
        taskDescription: "Test all employee management system features.",
        taskDate: "2026-07-18",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize UI",
        taskDescription: "Improve the dashboard user interface.",
        taskDate: "2026-07-19",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Employee Cards",
        taskDescription: "Create employee information cards.",
        taskDate: "2026-07-09",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve incorrect login validation issue.",
        taskDate: "2026-07-10",
        category: "Bug Fix"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "password123"
  }
];


export const setLocalStorage =()=>{
   localStorage.setItem('employees',JSON.stringify(employees))
   localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage =()=>{
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))

   return {employees,admin}
   
}