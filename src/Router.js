import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/Auth";
import { Forgotpassword } from "./pages/forgotpassword/Forgotpassword";
import { Registration } from "./pages/registration/Registration";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { Unauthorized } from "./components/layout/Unauthorized";
import { Authorized } from "./components/layout/Authorized";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";

export const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Unauthorized />}>
          <Route path="/auth" element={<Auth />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
        <Route element={<Authorized />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
