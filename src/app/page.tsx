import Link from "next/link";
import Hero from "@/components/hero";
import homeImg from "public/home.jpg";
export default function Home() {
  
  return (
   <div>
    <div >
      <Hero
        imgData={homeImg}
        altText="car factory"
        title="Welcome to Our Car Factory"
      />
      {/* Uncomment the line below to use Hero component with image */}
      {/* <Hero imgData={homeImg} altText="car factory" title="Car Factory" description="Building the future of cars." /> */}
    {/* <Hero imgData={homeImg}
     altText="car factory" />; */}
</div>
        <div>This is Hero section</div>

   </div>
  );
}
