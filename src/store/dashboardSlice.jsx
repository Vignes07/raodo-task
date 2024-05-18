import {createSlice} from '@reduxjs/toolkit';

// Initial state of the dashboard
const initialState = {
    // Order details
    orders: {
        total: 123456,
        upcoming: 50,
        ongoing: 100,
        completed: 50,
    },
    // Trip details
    trips: {
        total: 123456,
        upcoming: 50,
        ongoing: 100,
        completed: 50,
    },
    // Revenue details
    revenue: {
        total: 123456,
        upcoming: 50,
        ongoing: 100,
        completed: 50,
    },
    // Expense details
    expenses: {
        total: 123456,
        freightCharge: 50,
        driverCharge: 100,
        otherCharges: 50,
    },
    // Highlight details
    highlights: {
        income: 100000,
        incomePayment: 2,
        expenses: 50000,
        expensesPayment: 5,
        date: '19 Mar 2024',
    },
    // Activity details
    activities: {
        completed: [
            'Gurpreet Singh (Dispatch team) has created Load No. I-AAA-1325',
            'Aman (Driver) Picked Up goods at Location_Name for Load No. I-AAA-1325',
            'Gurpreet Singh (Dispatch team) has created Load No. I-AAA-1325',
            'Load No. I-I-AAA-1325 will start added by Gurpreet Singh',
        ],
        scheduled: [
            'Load No. I-AAA-1325 will be delivered by Aman (Driver)',
        ],
    },
    // Alert details
    alerts: [
        {
            id: 1,
            type: 'Driver Raised Concern',
            loadNo: 12454,
            billTo: "RoaDo demo Bangalore",
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua...',
            date: '13 Feb 24'
        },
        {
            id: 2,
            type: 'Reefer Temp. out of range',
            loadNo: 12454,
            billTo: "RoaDo demo Bangalore",
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua...',
            date: '13 Feb 24'
        },
    ],
};

// Create a slice for the dashboard
const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        // Add reducers
    },
});

// Selector to get the dashboard state
export const selectDashboard = state => state.dashboard;

export default dashboardSlice.reducer;