import { Outlet, Link } from 'react-router-dom';


const AuthPage = () => {
  return (
    <div className="auth-layout">
      <header>
        <Link to="/">
          <img src="/logo.png" alt="Your Logo" />
        </Link>
      </header>
      <main>
        <Outlet /> {/* Renders Login/Signup here */}
      </main>
      <footer>Terms & Conditions</footer>
    </div>
  );
};