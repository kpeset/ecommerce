import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import Footer from "./components/Footer";

import ArticleJaguar from "./components/ArticleJaguar";
import ArticleStratocaster from "./components/ArticleStratocaster";
import ArticleSg from "./components/ArticleSg";
import Telecaster from "./components/Telecaster";

function App() {
  const role = "admin";

  // const displayAdmin = () => {
  //   if (role === "admin") {
  //     return <Admin />;
  //   } else {
  //     return "Non autorisé";
  //   }
  // };

  return (
    <>
      <Navbar />
      <main>
        <h1>Ma boutique en ligne</h1>
        <p>Cliquez sur un article pour l&apos;acheter</p>
        <section>
          <ArticleJaguar />
          <ArticleStratocaster />
          <ArticleSg />
          <Telecaster />
        </section>
        {role === "admin" ? <Admin /> : "Non autorisé"}
      </main>
      <Footer />
    </>
  );
}

export default App;
