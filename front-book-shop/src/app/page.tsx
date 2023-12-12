"use client"

import Link from "next/link";
import React from "react";


type PageProps={
    children: React.ReactNode,
    tag: any 
}

const Title = ({children, tag}: PageProps)=>{
  const Tag = tag
  return(
    <React.Fragment>
    <Tag>
      {children}
    </Tag>

    <style jsx>{`
    ${Tag}{
      color: red;
    }
    `}</style>
    </React.Fragment>
  )
}

export default function Page() {
  return (
    <div>
      <Title tag="h1">Home Page</Title>
      <Link href={"/faq"}>FAQ</Link>
    </div>
  )
}