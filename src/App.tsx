import { useEffect, useRef, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import DesktopFinalVersion from "./pages/Homepage/Homepage";
import Modal from "./components/Modal/Modal"; 
import LegalNotice from "./pages/LegalNotice/LegalNotice"; 
import  PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import { Routes, Route } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { AlertInfo, Severity } from "./types/Alert";
import Unsubscribe from "./pages/Unsubscribe/Unsubscribe";

function App() {
  const location = useLocation();
  const [alertInfo, setAlertInfo] = useState<AlertInfo>({ type: undefined, message: "" });
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.has("registration")) {
      setIsModalOpen(true);
    }
  }, [location]);

  const closeModal = () => {
    setIsModalOpen(false);
    // Remove the "registration" parameter from the URL
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete("registration");
    window.history.replaceState({}, '', `${location.pathname}?${searchParams.toString()}`);
  };

  const handleSuccess = (message: string) => {
    setAlertInfo({ type: Severity.Success, message });
    closeModal();
  };

  const handleError = (message: string) => {
    setAlertInfo({ type: Severity.Error, message });
    closeModal();
  };

  const handleCloseAlert = () => {
    setAlertInfo({ type: undefined, message: "" });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<DesktopFinalVersion />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />        
        <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
        <Route path="/desinscription/:token" element={<Unsubscribe />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Modal isOpen={isModalOpen} onClose={closeModal} handleSuccess={handleSuccess} />
      <Snackbar open={!!alertInfo.message} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={alertInfo.type} sx={{ width: '100%' }}>
          {alertInfo.message}
        </Alert>
      </Snackbar>
    </>
  );

}

export default App;
