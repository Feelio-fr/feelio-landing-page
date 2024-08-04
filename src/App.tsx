import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DesktopFinalVersion from "./pages/Homepage/Homepage";
import Modal from "./components/Modal/Modal"; 
import LegalNotice from "./pages/LegalNotice/LegalNotice"; 
import  PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import { Routes, Route } from "react-router-dom";

function App() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    console.log("searchParams", searchParams);
    if (searchParams.has("registration")) {
      console.log("registration parameter detected");
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

  return (
    <>
      <Routes>
        <Route path="/" element={<DesktopFinalVersion />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
      </Routes>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
