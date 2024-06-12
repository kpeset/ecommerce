import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import Footer from "./components/Footer";

import ArticleJaguar from "./components/ArticleJaguar";
import ArticleStratocaster from "./components/ArticleStratocaster";
import ArticleSg from "./components/ArticleSg";

function App() {
  // remplacer la valeur par "admin" pour voir les changements sur la page
  const role = "user";

  return (
    <>
      <Navbar />
      <main>
        <h1>Ma boutique en ligne</h1>
        <section>
          <ArticleJaguar />
          <ArticleStratocaster />
          <ArticleSg />
        </section>
        {role === "admin" ? <Admin /> : ""}
      </main>
      <Footer />
    </>
  );
}

export default App;
