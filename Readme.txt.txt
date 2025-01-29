If You start the App
-Go server folder write here cmd=   json-server --watch db.json


Solumegle Chat Application - Short Notes
This application provides a chat interface using React.js for the frontend and Axios for API interaction with a backend.

Key Components:

ChatBox:
Displays and manages chat messages.
Fetches messages via GET request (/contact).
Sends messages via POST request.
Deletes messages via DELETE request.
Uses useState for message input and message list.
Uses useEffect to fetch messages on mount.
Solumegle:
Main page containing the ChatBox.
Includes a Card component and a "Search Soulmate" (currently disabled) feature.
Uses Bootstrap grid for layout.
Displays connection status.
Functionality:

Real-time chat updates.
Message sending and deletion.
Potential future "Soulmate Search" feature.
Technical Details:

Frontend: React.js
Backend Interaction: Axios
API Endpoint: /contact (supports GET, POST, DELETE)
Styling: Inline CSS and custom CSS files.