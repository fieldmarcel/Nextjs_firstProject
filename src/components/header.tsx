import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute p-4 w-full text-amber-50 z-10 ">
      <nav className=" relative flex flex-wrap items-center  justify-between mx-auto p-8 text-white z-10"> 
       <div>
        <Link href="/" className="font-bold text-3xl">Home</Link></div> 
        
        <div>
          <Link href="/performance" className="mx-4 text-xl">Performance</Link>
          <Link href="/reliability" className="mx-4 text-xl">Reliability</Link>
          <Link href="/scale" className="mx-4 text-xl">Scale</Link>
        </div>
        
      </nav>
    </header>
  );
}
export default Header; 