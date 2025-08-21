
import Link from "next/link";
import Hero from "@/components/hero";
import reliabilityImg from "public/reliability.jpg";
export default function ReliabilityPage() {
  
  return (
   <div>
    <div >
      <Hero
        imgData={reliabilityImg}
        altText="car factory"
        title="Super High reliability hosting"
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
