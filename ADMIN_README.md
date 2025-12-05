# Admin Status Page

## Overview
The admin status page allows you to manage the status (Offen/Geschlossen) of all facilities on the Bannalp website in real-time.

## Accessing the Admin Page
Navigate to: `http://localhost:3000/#admin` (or your production URL + `/#admin`)

## Login Credentials
- **Password**: `bannalp25`

## Features
- ✅ Password-protected access
- ✅ Real-time status updates
- ✅ Syncs across browser tabs
- ✅ Persistent storage (data saved in localStorage)
- ✅ Toggle each facility between "Offen" and "Geschlossen"
- ✅ Organized by category (Year-round vs Winter facilities)
- ✅ Changes are immediately visible on the main website

## How It Works
1. **Authentication**: Enter the password to access the admin panel
2. **Status Management**: Click on any facility's status button to toggle between "Offen" (green) and "Geschlossen" (red)
3. **Auto-Save**: Changes are automatically saved to localStorage
4. **Real-Time Sync**: Updates are instantly reflected on the main website and across all open tabs

## Categories

### Year-Round Facilities (Ganzjährig)
- Luftseilbahn (2 facilities)
- Wanderweg (2 facilities)
- Alpwirtschaft (4 facilities)
- Berggasthaus (3 facilities)

### Winter Facilities (Winter)
- Skilift (2 facilities)
- Schneeschuhpfad (3 facilities)
- Schneebar (1 facility)

## Technical Details
- **Storage**: localStorage (key: `bannalp_facility_status`)
- **State Management**: React Context API
- **Real-Time Updates**: Custom events + storage events
- **Session**: Uses sessionStorage for auth (clears on tab close)

## Security Notes
- Password is currently hardcoded in the source code
- For production, consider:
  - Moving to environment variables
  - Adding backend authentication
  - Implementing JWT tokens
  - Adding rate limiting
  - Using HTTPS only

## Changing the Password
To change the admin password, update the constant in:
`src/components/AdminStatusPage.tsx`

```typescript
const ADMIN_PASSWORD = 'your_new_password_here';
```

## Future Enhancements
- Backend API for persistent storage
- User management with roles
- Activity logs
- Scheduled status changes
- Email notifications
- Mobile app support
