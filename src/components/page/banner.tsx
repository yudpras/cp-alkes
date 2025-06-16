"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import { Button } from "../ui/button";

export default function Banner() {
    useEffect(() => {
        AOS.init({
        duration: 1000,
        once: true,
        });
    }, []);
    const scrollToSection = (id:string) => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <div id="home" className="h-[70vh] text-white flex items-center justify-center rounded-b-[3rem]">
        <div className="relative w-full h-full rounded-b-[3rem]">
            <Image
                src="/banner.webp"
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="Banner Alat Kesehatan"
                className="rounded-b-[3rem] opacity-70"
            />
            <div className="absolute flex items-center justify-center bg-black opacity-40 w-full h-full text-center text-4xl font-bold rounded-b-[3rem]">
            </div>
            <div className="absolute flex justify-between w-full h-full rounded-b-[3rem] px-[7%]">
                <div className="flex items-center w-full h-full text-center">
                    <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                        <h1 className="text-4xl md:text-6xl font-bold">PT Alkes Maju Makmur</h1>  
                        <p className="sm:text-sm md:text-2xl my-[2%]">Selamat datang di website kami. Kami adalah distributor alat kesehatan dan laboratorium di Indonesia. Kami selalu memberi produk terbaik dan mengedepankan kepuasan pelanggan kami.</p>
                        {/* <button className="rounded-xl border px-3 py-2 mt-5 hover:cursor-pointer bg-primary">Lihat Produk</button> */}
                        <Button className="hover:cursor-pointer " variant={"destructive"} onClick={() => scrollToSection('product')}>
                            Lihat Produk
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        {/* <img src='/banner.jpg' height="100%" alt="Banner Alat Kesehatan"/> */}
    </div>
  );
}