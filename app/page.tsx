import "./globals.css";
import Link from 'next/link'
import NavBar from '@/app/base/navbar/page'
import Footer from '@/app/base/footer/page'

export default function Home(){
  return (
    <main>
      <NavBar/>
      <h1> hello word </h1>
      <Link href="/users" >Users </Link>
      <Footer/>
     </main>
  );
};
