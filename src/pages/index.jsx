'use-client'
import { Montserrat } from "next/font/google";
import { Chat } from "../components/organisms/chat/chat";
import { useEffect, useState } from "react";
import { BetsMenu } from "@/components/molecules/bets-menu";
import Cookies from "js-cookie";
import socketHome from "@/socket";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  let receiveData;
 function auth() {
  const name = Cookies.get('Name');
  if(name == '' || name == undefined || name == null ) {
    window.location.href = './auth/login'; return;
  } 
 }
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), [600]);
    auth();
  }, []);
  
  socketHome();

  return (
    <main className={`main ${montserrat.className}`}>
        <section
        className="container content transition-all"
        style={loaded ? { opacity: 1 } : { opacity: 0 }}
      >
        <div />
        <div>
          <BetsMenu />
        </div>
        <div>
          <div style={{ position: "sticky", top: 0, width: "100%" }}>
            <Chat isForMobile = {false} message={receiveData} />
          </div>
        </div>
      </section>
    </main>
  );
}
