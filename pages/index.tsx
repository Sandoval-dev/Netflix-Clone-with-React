import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function getServerSideProps(context:NextPageContext){
  const session=await getSession(context)

  if (!session) {
      return {
          redirect:{
              destination: '/auth',
              permanent: false,
          }
      }
  }

  return{
      props: {},
  }
}

export default function Home() {

  const {data:user}=useCurrentUser()

  
  return (
    <>
      <Navbar/>
      <Billboard/>
      <MovieList/>
    </>
  );
}
