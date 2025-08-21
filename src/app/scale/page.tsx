
import Link from "next/link";
import Hero from "@/components/hero";
import scaleImg from "public/scale.jpg";
export default function ScalePage() {
  
  return (
   <div>
    <div >
      <Hero
        imgData={scaleImg}
        altText="welding"
        title="Scale ypur app to millions of users"
      />
      {/* Uncomment the line below to use Hero component with image */}
      {/* <Hero imgData={homeImg} altText="car factory" title="Car Factory" description="Building the future of cars." /> */}
    {/* <Hero imgData={homeImg}
     altText="car factory" />; */}
</div>
        <div>kandera madarchod</div>

   </div>
  );
}
