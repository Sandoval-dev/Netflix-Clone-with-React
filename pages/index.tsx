import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";

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

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {},
  }
}

export default function Home() {

  const { data: user } = useCurrentUser()
  const { data: movies } = useMovieList()


  return (
    <>
      <Navbar />
      <Billboard />
      <div className="lg:mt-44 sm:mt-10">  </div>
      <div className="p-6">
        <MovieList data={movies} title="Trending" />
      </div>
      <div className="h-96">
        
      </div>



    </>
  );
}
