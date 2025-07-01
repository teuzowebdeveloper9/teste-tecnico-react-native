# React Native Full Stack App

## Overview

This is a full stack React Native application with a NestJS backend, designed for managing physical activities and providing health-related chatbot interactions powered by Gemini AI.

---

## **App Features**

### **Mandatory Screens**

1. **Login and Registration Screen**

   - Email and password authentication.

2. **Home Screen**

   - Widget or chart summarizing physical activities.
   - List of the most recent registered activities.

3. **Physical Activity Registration Screen**

   - Fields: Name, duration, intensity.

4. **User Profile Screen**

   - Displays email and password (for debugging purposes only).

5. **Chatbot Screen**
   - Separate page.
   - Chat interface similar to OpenAI, with a detailed prompt designed to provide accurate health-related responses.

---

## Backend

- Built with NestJS.
- Uses PostgreSQL as the database.
- Prisma ORM for database management.
- CRUD operations for activities, dynamically rendered from the database.
- 5 Context Providers:
  - **AuthContext**: Manages JWT token and user data.
  - **ActivitiesContext**: Shares activities data across components.
  - **EditActivitiesContext**: Handles editing of activities.
  - **ChatContext**: Manages user prompts and AI messages, displaying user and AI messages on opposite sides for a clean UI.
  - **Gemini AI**: The AI used for chatbot responses, providing high-quality health advice thanks to a carefully crafted prompt.

---

## Frontend

- Built with React Native using NativeWind for styling.
- Well componentized with 3 main routes managed by a bottom navigator stored in context to preserve navigation state.

---

## Running Locally

1. **Backend Setup**

   - Create a folder named `secrets` inside the backend directory.
   - Add an `Enviriments.ts` file with your Gemini AI API key:
     ```typescript
     export const Enviriments = {
       API_KEY: 'your_gemini_api_key_here',
       JWTPASS: 'your_jwt_secret_hash_here',
     };
     ```
   - Add your PostgreSQL connection string as `DATABASE_URL` in the backend root environment.
   - You can use the provided Docker setup in the `docker` folder or modify it as needed.

2. **Frontend Setup**
   - The frontend expects the backend to be running and accessible.
   - No additional secrets needed for frontend.

---

## Running the App Locally

To run the app locally, make sure you have set up the required credentials as described above (API keys, JWT secret, and database URL).

### Backend

1. Go to the `backend` folder.
2. Run the development server with:
   ```bash
   npm run start:dev
   ```
Frontend
To run the app on the web, use:

```
npm run web

```
However, it is recommended to run the app on a mobile device or emulator to properly view mobile modals and UI.
Scripts
To lint your code with ESLint (editing all .js, .jsx, .ts, .tsx files):

```
npm run lint
```
To format your code with Prettier:

```
npm run format
```
---
## Notes

- The chatbot is tailored for Gemini AI. To use another AI, minor modifications in the chatbot folder are required.
- The prompt used in the Gemini context is highly optimized for health-related responses and can be adapted for other AIs.
- DTO validation is done using Zod in the backend.
- JWT tokens are used for authentication with a recommended 500-character hash for `JWTPASS`.

---

## Screenshots

![image](https://github.com/user-attachments/assets/ca009b0a-7e55-412f-b69a-fb4837258c06)

![image](https://github.com/user-attachments/assets/c36c8907-64ad-4fed-b7ea-76e00639e01b)

![image](https://github.com/user-attachments/assets/cbbe5723-f00f-4ce9-9b89-1d3dfaca4d54)

![image](https://github.com/user-attachments/assets/c16dd7f9-5a76-49ce-873e-946a8f37d9d0)

![image](https://github.com/user-attachments/assets/ea53c1e3-55d7-47aa-9fd4-4db25528d1d5)

![image](https://github.com/user-attachments/assets/b2a31b12-96d8-4213-8c96-674c74ea36c7)

![image](https://github.com/user-attachments/assets/7b53f9f7-fd79-41f2-bab5-1ca58217139c)

![image](https://github.com/user-attachments/assets/c5e2f10f-c7f5-465c-8b75-4b74a8ed5124)

![image](https://github.com/user-attachments/assets/fd874bc0-c383-4eb4-96c8-bf7e7f4cfce8)

![image](https://github.com/user-attachments/assets/6bfdae01-fe28-4346-901f-10d22adcf4ff)

![image](https://github.com/user-attachments/assets/9f50364e-fbf9-4ca6-aa0e-b7d8ec602f46)

![image](https://github.com/user-attachments/assets/abe41c19-4b4d-493c-89a0-268c94f9130c)
