import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import FeaturedCard from "./components/FeaturedCard";
import Footer from "./components/Footer";
import { categoryItems, trendingProducts } from "./data/items";

function App() {
  return (
    <div>
      <Header />

      <main className="container-main">
        <Hero
          title="Discover the Future of Work with AI"
          description="Explore a curated marketplace of AI-powered tools designed to transform your workflow and unlock new possibilities."
        />

        <ProductSection id="categories" title="Categories" items={categoryItems} columns={5} />

        <FeaturedCard
          image="images/ai-top.jpg"
          title="Top Rated AI Tool"
          description="Revolutionize your workflow with this highly-rated AI tool. Experience unparalleled efficiency and innovation."
          buttonText="Learn More"
        />

        <ProductSection id="trending" title="Trending" items={trendingProducts} columns={4} largeSpacing={true} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
