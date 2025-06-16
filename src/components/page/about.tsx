"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from 'next/image';
import { Button } from '../ui/button';
export default function About() {
    useEffect(() => {
        AOS.init({
        duration: 1000,
        once: true,
        });
    }, []);
  return (
    <div id="about" className="flex flex-col md:flex-row items-center justify-center py-[5%] mx-[7%]">
        <div className="w-full md:w-1/2" data-aos="fade-right">
            <h1 className="text-center text-4xl font-bold mb-4">Tentang Kami</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus maxime et culpa quibusdam. Soluta fugiat quidem repudiandae facere natus voluptas tempora quam consequatur dolor provident eius eum sint omnis, eligendi ducimus, qui rem aspernatur at earum harum quisquam voluptatum. Asperiores sequi corrupti sit eius aspernatur veniam, velit quo tempore animi aperiam eos vero accusantium aliquam hic blanditiis repudiandae dolores sed! Deserunt molestias maxime nemo laudantium? Delectus ratione dolorem, doloribus molestiae a dolor corrupti dignissimos velit amet laudantium debitis nulla nostrum unde incidunt expedita. Iusto laudantium quis a ex cumque, necessitatibus quo molestiae in voluptatibus ullam tempora fugiat vero possimus doloribus.</p>
            <Button className="hover:cursor-pointer mt-4" variant={"destructive"}>
                Selengkapnya
            </Button>
        </div>
        <div className="w-full md:w-1/2 relative h-[100vh] rounded-b-[3rem] overflow-hidden" data-aos="fade-left">
            <Image
                src="/about.jpeg"
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="About Alat Kesehatan"
                className="rounded-b-[3rem]"
            />
        </div>
    </div>
  );
}