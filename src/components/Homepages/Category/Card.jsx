import React from 'react';
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

const CardComponent = ({data}) => {
    return (
        <div className=" hover:tracking-wide duration-300">
              <Card
      isFooterBlurred
      radius="lg"
      className={`border-none w-[${data.w}]`}
    >
      <Image
        alt="Woman listing to music"
        className="object-cover hover:scale-110"
        fill
        src={data.src}
       
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(50%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-black/80">{data.categoryName}</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          BUY NOW
        </Button>
      </CardFooter>
    </Card>
        </div>
    );
};

export default CardComponent;