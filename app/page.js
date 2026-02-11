import Hero from "@/components/Landingpage/Hero";
// import Whychoose from "@/components/Landingpage/Whychoose";
import Clientele from "@/components/Landingpage/Clientele"
import AboutUs from "@/components/Landingpage/About";
import Products from "@/components/Landingpage/Products";
import ProductCategorySection from "@/components/Landingpage/Categories";
import Cta from "@/components/Landingpage/Cta";
import Popup from "@/components/Popup"
import Enquiry from "@/components/Enquiry"
import Gallery from "@/components/Gallery";
import YoutubeSection from "@/components/Landingpage/Youtube";
import Testimonial from "@/components/Landingpage/Testmonial";
import CitySection from "@/components/City";


export default function Home() {
  return (
    <>


      <Popup></Popup>
      <Hero></Hero>
      <Enquiry></Enquiry>
      <AboutUs></AboutUs>
      <ProductCategorySection></ProductCategorySection>
      {/* <Whychoose></Whychoose>
<Countup></Countup> */}
      <Products></Products>
      <Cta></Cta>


      <Clientele></Clientele>






      <Gallery></Gallery>
      <YoutubeSection></YoutubeSection>

      <Testimonial></Testimonial>
      <CitySection></CitySection>

    </>
  );
}
