"use client"
import React, { useState } from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";


const BestSellingCard = () => {
const [isHovered,setIsHovered]=useState(null)
   

    const list = [
        {
          title: "Orange",
          img1: "https://reydemos.b-cdn.net/frankfurt/wp-content/uploads/sites/15/2019/06/30-300x300.jpg",
          img2: "https://reydemos.b-cdn.net/frankfurt/wp-content/uploads/sites/15/2019/06/30-300x300.jpg",
          price: "$5.50",
        },
        {
          title: "Gigi Tilting Pendant Chandelier Light",
          img1: "https://reydemos.b-cdn.net/frankfurt/wp-content/uploads/sites/15/2019/06/1-13-600x800.jpg",
          img2: "https://reydemos.b-cdn.net/frankfurt/wp-content/uploads/sites/15/2019/06/2-8.jpg",
          price: "$3.00",
        },
        {
          title: "Raspberry",
          img1: "https://reydemos.b-cdn.net/frankfurt/wp-content/uploads/sites/15/2019/06/1-12-300x400.jpg.webp",
          img2: "https://reydemos.b-cdn.net/frankfurt/wp-content/uploads/sites/15/2019/06/30-300x300.jpg",
          price: "$10.00",
        },
        {
          title: "Java Shade Small, Natural Rattan",
          img1: "https://reydemos.b-cdn.net/frankfurt/wp-content/uploads/sites/15/2019/06/21-300x362.jpg",
          img2: "https://reydemos.b-cdn.net/frankfurt/wp-content/uploads/sites/15/2019/06/2-7.jpg",
          price: "$5.30",
        },
        {
          title: "Avocado",
          img1: "https://reydemos.b-cdn.net/frankfurt/wp-content/uploads/sites/15/2019/06/26-300x225.jpg.webp",
          price: "$15.70",
        },
        {
          title: "Lemon 2",
          img1: "/images/fruit-6.jpeg",
          price: "$8.00",
        },
        {
          title: "Banana",
          img1: "/images/fruit-7.jpeg",
          price: "$7.50",
        },
        {
          title: "Watermelon",
          img1: "/images/fruit-8.jpeg",
          price: "$12.20",
        },
      ];
    

    return (
        <div className="gap-3 mx-8 grid grid-cols-2 sm:grid-cols-5">
        {list.map((item, index) => (
          <Card shadow="sm" key={index} isPressable
           onPress={() => console.log("item pressed")}
           onMouseEnter={()=>setIsHovered(index)}
           onMouseLeave={()=>setIsHovered(null)}

           
           >
            <CardBody className="overflow-visible p-0 ">
              <Image
                
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="object-fit h-[380px]"
                src={isHovered === index ? item.img1: item.img2}
                // src={item.img1}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }
  
  


export default BestSellingCard;