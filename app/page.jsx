import Feed from "@components/Feed";
import GenratedImage from "@components/GenratedImage";

const Home = () => (
  <section className="flex-col w-full flex-center">
    <h1 className="text-center head_text">
      Discover & Share
      <br className="max-md:hidden" />
      <span className="text-center orange_gradient"> AI-Powered Prompts</span>
    </h1>
    <p className="text-center desc">
      Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>
    <GenratedImage />
    <Feed />
  </section>
);

export default Home;
