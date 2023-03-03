import { Routes, Route } from "react-router-dom";

//#criar privateRoute

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<>Sign</>} />
        <Route path="/register" element={<>Signup</>} />

        <Route path="/admin" element={<>Admin</>} />
        <Route path="/patient" element={<>Patient</>} />
      </Routes>
    </>
  );
}
