"use client"

import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Cards from "../components/Cards";
import Card from "../components/Cards";


type PageProps={
    children: React.ReactNode,
    tag: any 
}

export default function Page() {
  return (
    <div className="relative flex min-h-screen">
      <div>

        <h1 >Home Page</h1>
        <Link href={"/faq"}>FAQ</Link>
        <h2 >Testan do styled components</h2>
      </div>
        <Card/>
    </div>
  )
}