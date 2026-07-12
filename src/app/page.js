"use client"
import { useState,useEffect } from "react";

import ThemedBtn from "@/components/ThemedBtn";
import ThemedInput from "@/components/ThemedInput";
import ThemedSelect from "@/components/ThemedSelect";
import Image from "next/image";

export default function Home() {
  const [subscriber,setSubscriber] = useState({
    email:"",
    name:"",
    zodiac:""
  });

const checkEmailFormat = (email)=>{
    const regex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regex.test(email);
} 



const handleSubmit= async (e)=>  {
        e.preventDefault();
        if(checkEmailFormat()){
          console.log("eroare email!");
          return;
        }
        if(subscriber.name.length<1){
          console.log("eroare nume");
          return;
        }
        if(subscriber.zodiac.length<1){
          console.log("eroare zodiac");
          return;
        }

        const res = await fetch("/api/subscriber", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(subscriber)
        });

        const data = await res.json();

        console.log(data);
  }

  const ChangeFieldHandler = (field, value,setForm) => {
    setForm(prev => ({
        ...prev,
        [field]: value
    }));

};
  
  return (
    <main className="mt-5">
      <header className="flex items-center flex-col gap-2">
        <h1 className="font-semibold text-3xl">
          Horoscopul Cafeluța ☕!
        </h1>
        <p className="font-semibold text-2xl text-center">Inscrie-te pentru a primi horoscopul zilnic pe email</p>
      </header>
      <section className="flex flex-col items-center  mt-4">
          <p className="text-center mb-2 font-semibold">Completeaza formularu</p>
          <form className="flex flex-col w-3/4 gap-2">
            <ThemedInput 
            placeholder={"Email..."}
            onChange={(e)=>{ChangeFieldHandler("email",e.target.value,setSubscriber)}}
            />
            <ThemedInput 
              placeholder={"Nume..."} 
              onChange={(e)=>{ChangeFieldHandler("name",e.target.value,setSubscriber)}}
            />
            <ThemedSelect 
              onChange={(e)=>{ChangeFieldHandler("zodiac",e.target.value,setSubscriber)}}
            />
            <ThemedBtn handleSubmit={handleSubmit}/>
          </form>
      </section>
      
    </main>
      
  );
}
