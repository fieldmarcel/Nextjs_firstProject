import Link from "next/link";
import Hero from "@/components/hero";
import performanceImg from "public/performance.jpg";
export default function PerformancePage() {
  
  return (
   <div>
    <div >
      <Hero
        imgData={performanceImg}
        altText="car factory"
        title="We ensure high performance for your app"
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
