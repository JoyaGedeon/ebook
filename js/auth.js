/**
 * Authentication functions
 * These will call your backend API (Node.js or PHP)
 */

// TODO: Replace with your actual backend URL
const API_BASE_URL = 'http://localhost:3000/api';

// Phone number digit lengths (after country code) per prefix
const PHONE_LENGTHS = {
    '+1': 10,
    '+7': 10,
    '+998': 9,
};

/**
 * Send OTP to phone number
 * @param {string} phone - Phone number with country code
 */
async function sendOTP(phone) {
    // TODO: Uncomment when backend is ready
    /*
    const response = await fetch(`${API_BASE_URL}/auth/send-otp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send OTP');
    }

    return response.json();
    */

    // Mock for testing without backend
    console.log('Sending OTP to:', phone);
    return new Promise(resolve => setTimeout(resolve, 1000));
}

/**
 * Verify OTP code
 * @param {string} phone - Phone number
 * @param {string} otp - OTP code entered by user
 */
async function verifyOTP(phone, otp) {
    // TODO: Uncomment when backend is ready
    /*
    const response = await fetch(`${API_BASE_URL}/auth/verify-otp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, otp }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Invalid OTP');
    }

    const data = await response.json();

    // Store auth token and user info
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    return data;
    */

    // Mock for testing without backend
    console.log('Verifying OTP:', otp, 'for phone:', phone);

    // For testing: accept any 5-digit OTP
    if (otp.length === 5) {
        const mockUser = { phone: phone };
        localStorage.setItem('authToken', 'mock-token-12345');
        localStorage.setItem('user', JSON.stringify(mockUser));
        return { success: true, user: mockUser };
    } else {
        throw new Error('Invalid OTP');
    }
}

/**
 * Check if user is logged in
 */
function isLoggedIn() {
    return localStorage.getItem('authToken') !== null;
}

/**
 * Get current user info
 */
function getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

/**
 * Get auth token for API calls
 */
function getAuthToken() {
    return localStorage.getItem('authToken');
}

/**
 * Logout user
 */
function logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
}

/**
 * Protect a page - redirect to login if not authenticated
 * Call this on pages that require login (e.g., index.html)
 */
function requireAuth() {
    if (!isLoggedIn()) {
        navigateTo('login.html');
        return false;
    }
    return true;
}

/**
 * Redirect to home if already logged in
 * Call this on public pages (e.g., index.html, login.html)
 */
function redirectIfLoggedIn() {
    if (isLoggedIn()) {
        navigateTo('index.html');
        return true;
    }
    return false;
}
