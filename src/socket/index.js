'use client'
import { useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import UserContext from "@/contexts/UserContext";

let socket;


export default function socketHome() {

  const {
      user, setUser,
      isOpenDuelModal, setOpenDuelModal,
      isSendDuel, setIsSendDuel, setSendDuelResult
    } = useContext(UserContext);

  useEffect(() => {
    socket = new WebSocket("wss://d1-ibet.alex-hram.workers.dev");
    socket.onopen = function(event) {
      const email = Cookies.get("Name");
      sendMessage(JSON.stringify({type: "signin", email: email, token: Cookies.get('token')}));
    };
    
    socket.onmessage = (event) => {
      const receiveData = event.data;
      const jsonData = JSON.parse(receiveData);
      switch (jsonData.type) {
        case "signin":
          console.log(jsonData);
          jsonData.data.forEach(async element => {
            if (element.Content != null) {
              await setUser((temp) => [...temp, {type:"unduel",user: {
              name: element.DuelName,
              image: element.DuelAvatar,
              }, 
              message: element.Content, 
              time: `${new Date(Number(element.RealTime)).getHours()}:${new Date(Number(element.RealTime)).getMinutes()}`,
              duels: {
                total: "7",
                victory: "4",
              },
              predicts: {
                total: "20",
                victory: "12",
              },
              rooms: "3", }])
            }
            else {
              await setUser((arrays) => [...arrays, {
                type: "duel",user1: {
          
                name: element.Name,
                image: element.Avatar,
                },
                user2: {
                  name: element.RName,
                  image: element.RAvatar,
                },
                time: element.Date,
                amount: element.Rate,
                game: `${element.DuelTeam} : ${element.ReceveTeam}`,
                choose: element.DuelTeam,
                price: Number(element.Rate) * 2,
                isEnded: false, }
              ])
            }
          });
          
          break;
        
        case "bordcase":
          setUser((temp) => [...temp, {type:"unduel", user: {
          image: jsonData.avatar,
          name: jsonData.email,
          }, message: jsonData.content,
          time: `${new Date(Number(jsonData.time)).getHours()}:${new Date(Number(jsonData.time)).getMinutes()}`,
          duels: {
            total: "7",
            victory: "4",
          },
          predicts: {
            total: "20",
            victory: "12",
          },
          rooms: "3",}]);
          break;
        
        case "duel":
          setOpenDuelModal(true);
          setIsSendDuel(jsonData.sendUser);
          break;

        case "response-duel":
          if (jsonData.response == true) {
            setSendDuelResult({type: true, email: jsonData.target});
            setOpenDuelModal(true);
          }
          else {
            setSendDuelResult({type :false});
          }
          break;

        case "newDuel":
          setUser((temp) => [...temp, {type: "duel",user1: {
          
          name: jsonData.duelUser,
          image: jsonData.avatar.Avatar,
          },
          user2: {
            name: jsonData.receveUser,
            image: jsonData.ravatar.Avatar,
          },
          time: jsonData.date,
          amount: jsonData.bet,
          game: jsonData.game,
          choose: jsonData.choose,
          price: Number(jsonData.bet) * 2,
          isEnded: false, }])
          default: break;
      }
    };
    
    socket.onclose = function(event) {
      // Handle connection close
    };
  
    socket.onerror = (error) => {
      console.log('WebSocket error:', error);
    };
      
  }, []);
    
}

export function sendMessage(message) {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(message);
  }
} 