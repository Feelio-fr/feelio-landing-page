import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DesktopFinalVersion from "./pages/DesktopFinalVersion";
import Modal from "./components/Modal/Modal"; // Assurez-vous d'importer votre composant Modal correctement

function App() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    console.log("searchParams", searchParams);
    if (searchParams.has("signup")) {
      console.log("signup parameter detected");
      setIsModalOpen(true);
    }
  }, [location]);

  const closeModal = () => {
    setIsModalOpen(false);
    // Remove the "signup" parameter from the URL
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete("signup");
    window.history.replaceState({}, '', `${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <>
      <DesktopFinalVersion />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
