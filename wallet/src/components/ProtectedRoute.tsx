import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }: { children: React.ReactNode
 }) => {

  const hasWallet =
    localStorage.getItem("cipherroot_wallet") !== null

  if (!hasWallet) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute
