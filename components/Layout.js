import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="w-full min-h-full bg-gradient-to-br from-indigo-500 to-orange-400">
        {children}
      </div>
      <Footer />
    </>
  );
}
