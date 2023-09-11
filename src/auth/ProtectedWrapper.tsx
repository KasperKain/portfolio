import { useNavigate } from "react-router-dom";

interface ProtectedWrapperProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const ProtectedWrapper: React.FC<ProtectedWrapperProps> = ({
  isAuthenticated,
  children,
}) => {
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/admin/login");
    return null;
  }

  return <>{children}</>;
};

export default ProtectedWrapper;
