'use client'
import { SWRConfig } from "swr";
import "../styles/globals.css";
import "../styles/login.css"
import LangProvider from "@/providers/lang-provider";
import UserContext from "@/contexts/UserContext";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  
  const [user, setUser] = useState([]);
  const [duelData, setDuelData] = useState([]);
  const [isOpenDuelModal, setOpenDuelModal] = useState(false);
  const [isSendDuel, setIsSendDuel] = useState('');
  const [sendDuelResult, setSendDuelResult] = useState({type: false});

  const conText = {
    user, setUser, 
    duelData, setDuelData,
    isOpenDuelModal, setOpenDuelModal,
    isSendDuel, setIsSendDuel,
    sendDuelResult, setSendDuelResult,
  }

  return (
    <UserContext.Provider value={conText}>
    <SWRConfig
      value={{
        refreshInterval: 60,
      }}
    >
      <LangProvider>
        <Component {...pageProps} />
      </LangProvider>
    </SWRConfig>
    </UserContext.Provider>
  );
}
