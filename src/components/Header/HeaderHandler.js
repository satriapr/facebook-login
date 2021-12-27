import Constant from "../../constants/Constant";

const HeaderHandler = ({ handleNotAuthenticated }) => {
  const handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Facebook login page
    window.open(`${Constant.API_BASE_URL}/facebook`, '_self');
  };

  const handleLogoutClick = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage component
    window.open(`${Constant.API_BASE_URL}/logout`, '_self');
    handleNotAuthenticated();
  };

  return {
    handleSignInClick,
    handleLogoutClick
  }
}

export default HeaderHandler;