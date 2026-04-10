import Layout from "./components/Layout";
import LeadList from "./components/LeadList";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewLead from "./pages/NewLead";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>

      {/* 🔔 GLOBAL TOAST */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#020617",
            color: "#fff",
            borderRadius: "10px",
          },
        }}
      />

      <Routes>

        {/* 🔓 Public */}
        <Route path="/login" element={<Login />} />

        {/* 🔐 Protected */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <LeadList />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/new"
          element={
            <ProtectedRoute>
              <Layout>
                <NewLead />
              </Layout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;