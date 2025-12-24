import { Routes, Route, Navigate } from "react-router-dom";
import { Portfolio } from "@/features/portfolio/page";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
