
import { CreatorSpotlight } from "../components/CreatorSpotlight"
import Hero from "../components/Hero"
import { MockupGrid } from "../components/MockupGrid"
import { Resources } from "../components/Resources"
import {NewsletterCTA} from "../components/NewsletterCTA"
import About from "./About"
import { Footer } from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <MockupGrid />
      <CreatorSpotlight />
      <Resources />
      <NewsletterCTA />
      <Footer />
    </div>
  )
}

export default Home