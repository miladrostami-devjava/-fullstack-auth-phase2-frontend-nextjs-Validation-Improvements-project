# 🧩 FullStack-Project2-JWT-Auth-Part-Frontend-Tag2




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



Absolutely! Here's the **full English version** of the `README.md` content for your **Frontend Repository** (`FullStack-Project2-JWT-Auth-Part-Frontend-Tag2`) based on the structure and explanation you provided:

---



This repository contains the **frontend** part of a full-stack JWT authentication project using **Next.js** and **TypeScript**.  
It works together with a backend Spring Boot app to provide secure login, token management, and protected routes.

👉 **Backend Repo**: [FullStack-Project2-JWT-Auth-Part-Backend-Tag2](https://github.com/miladrostami-devjava/FullStack-Project2-JWT-Auth-Part-Backend-Tag2)

---

## 📌 About the Project

This full-stack application demonstrates a secure user authentication system with:

- ✅ **JWT (JSON Web Tokens)**
- ✅ **Access & Refresh Token support**
- ✅ **HTTP-only Cookies**
- ✅ **Authentication-based Navigation**
- ✅ **Frontend-Bakend Integration**
- ✅ **Clean UI using Tailwind CSS**

The frontend handles:

- User registration/login
- Cookie-based token handling
- Route protection
- Logout and refresh flow
- Context state management for user and cart

---

## ⚙️ Technologies Used

- **Next.js (App Router & Client Components)**
- **TypeScript**
- **Tailwind CSS**
- **Axios**
- **React Context API**
- **js-cookie**
- **JWT Authentication**

---

## 🧪 Getting Started (Development)

### 1. Clone this repository

```bash
git clone https://github.com/miladrostami-devjava/FullStack-Project2-JWT-Auth-Part-Frontend-Tag2.git
cd FullStack-Project2-JWT-Auth-Part-Frontend-Tag2
````

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env.local` file in the root and add:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api/v1
```

Make sure your backend server is running at port `8080`.
You can find the backend setup here:

🔗 [Backend Guide](https://github.com/miladrostami-devjava/FullStack-Project2-JWT-Auth-Part-Backend-Tag2#readme)

---

### 4. Start the frontend server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧭 Project Structure

```bash
components/
  Navbar.tsx         → Dynamic navbar (auth-aware)
  ProtectedRoute.tsx → Route guard
pages/
  login.tsx          → User login
  dashboard.tsx      → Protected route
  store.tsx          → Product listing
context/
  AuthContext.tsx    → Manages auth state
  ShoppingCart.tsx   → Cart state
utils/
  axiosConfig.ts     → Axios instance with auth headers
```

---

## 🔐 Authentication Flow (JWT + Cookies)

1. User logs in → receives **access token** + **refresh token**
2. Tokens are stored in **HTTP-only cookies**
3. Axios sends cookies automatically in API requests
4. If access token expires, a request is made using refresh token
5. Logout clears the cookies and context

---

## 🔗 Backend API (Spring Boot)

* REST API located at `/api/v1/auth/**`
* JWT secured using Spring Security 6
* MySQL used as the database
* Token-based authentication implemented

📎 [Backend GitHub Repo](https://github.com/miladrostami-devjava/FullStack-Project2-JWT-Auth-Part-Backend-Tag2)

---

## 👨‍💻 Author

**Milad Rostami**
📧 [miladrostami-Email](miladrostami24@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/milad-rostami-07798484/)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

