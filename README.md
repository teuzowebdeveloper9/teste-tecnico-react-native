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

## Notes

- The chatbot is tailored for Gemini AI. To use another AI, minor modifications in the chatbot folder are required.
- The prompt used in the Gemini context is highly optimized for health-related responses and can be adapted for other AIs.
- DTO validation is done using Zod in the backend.
- JWT tokens are used for authentication with a recommended 500-character hash for `JWTPASS`.

---

## Screenshots
