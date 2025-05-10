// README.md

# 📝 Task Management App

A simple and responsive task management web app built with **Next.js 14**, **Redux Toolkit**, **Tailwind CSS**, and **RTK Query**. Users can add, edit, delete, and prioritize tasks with visual indicators. Includes a reusable **Snackbar system** and support for **middleware-based authentication**.

---

## 🚀 Features

### ✅ Core Features
- Add new tasks with title, description, and priority
- Edit or delete existing tasks
- Priority-based sorting: **High → Medium → Low**
- Priority indicators with color badges
- Mobile-responsive and clean UI using Tailwind CSS
- Tab-based navigation for task form and list
- Snackbar notification system

### 🧠 State Management
- Global state managed using **Redux Toolkit**
- Task actions (add, edit, delete, prioritize)
- UI slice for snackbar control

### ⚡️ Extra Features
- **API Integration using RTK Query** (for future backend connection)
- **Authentication Middleware** for route protection
- Modular and scalable folder structure

---

## 🛠 Tech Stack

| Tech           | Purpose                            |
|----------------|------------------------------------|
| Next.js        | App framework                      |
| Redux Toolkit  | Global state & RTK Query           |
| Tailwind CSS   | Styling and responsiveness         |
| React Hooks    | Component logic                    |
| Middleware     | Route-level auth & protection      |

---

## 🔐 Authentication (Middleware-based)

- Middleware checks if user is authenticated.
- Protected routes are not accessible without login.
- Login status is stored (e.g., in cookies).

---

## 🔄 API Handling with RTK Query

You can integrate your backend using RTK Query:

```js
// apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'include', // 🔥 Important for sending/receiving cookies
  }),
  endpoints: () => ({}),
});


// authApi.js
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: '/signup',
        method: 'POST',
        body: data,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: '/verify-otp',
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'GET',
      }),
    }),
    getCurrentUser: builder.query({
      query: () => '/me', // Add /me endpoint in backend
    }),
  }),
});

export const {
  useSignupMutation,
  useVerifyOtpMutation,
  useLoginMutation,
  useGetCurrentUserQuery,
  useLogoutMutation,
} = authApi;
```

---

## 📦 Getting Started

### 🔧 Setup Instructions

```bash
git clone https://github.com/kaushal2608/task-manager.git
cd task-manager
npm install
npm run dev
```

---

## 🔗 Live Demo

**[🔗 View Live on Vercel](https://task-manager-u8gb.vercel.app/)**

---

## 📌 Future Enhancements
- User registration & login
- Save tasks to database using API
- Dark mode
- Drag & drop task sorting

---

## 🧑‍💻 Author

Made with ❤️ by Kaushal Kishor
