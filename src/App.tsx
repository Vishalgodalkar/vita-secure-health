
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import RequireAuth from "./components/RequireAuth";

// Pages
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reports from "./pages/Reports";
import ReportDetail from "./pages/ReportDetail";
import NewReport from "./pages/NewReport";
import Emergency from "./pages/Emergency";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Appointments from "./pages/Appointments";
import BookAppointment from "./pages/BookAppointment";

// Create QueryClient outside of component
const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              {/* Public routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Protected routes */}
              <Route path="/" element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              } />
              <Route path="/reports" element={
                <RequireAuth>
                  <Reports />
                </RequireAuth>
              } />
              <Route path="/reports/:id" element={
                <RequireAuth>
                  <ReportDetail />
                </RequireAuth>
              } />
              <Route path="/reports/new" element={
                <RequireAuth>
                  <NewReport />
                </RequireAuth>
              } />
              <Route path="/emergency" element={
                <RequireAuth>
                  <Emergency />
                </RequireAuth>
              } />
              <Route path="/profile" element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              } />
              <Route path="/settings" element={
                <RequireAuth>
                  <Settings />
                </RequireAuth>
              } />
              <Route path="/appointments" element={
                <RequireAuth>
                  <Appointments />
                </RequireAuth>
              } />
              <Route path="/book-appointment" element={
                <RequireAuth>
                  <BookAppointment />
                </RequireAuth>
              } />

              {/* Redirect root to dashboard if logged in */}
              <Route path="/" element={<Navigate to="/login" />} />
              
              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
