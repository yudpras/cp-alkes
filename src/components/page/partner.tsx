"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
export default function Partner() {
    const imageStyle = {
        borderRadius: '50%',
        border: '1px solid #fff',
        width: '130px',
        height: '60px',
    }
    useEffect(() => {
        AOS.init({
        duration: 1000,
        once: true,
        });
    }, []);
  return (
    <div id="partner" className="mx-[7%] py-20">
      <h1 className="text-center text-3xl font-bold mb-6">Partner Kami</h1>
      <div className="flex flex-wrap gap-4 justify-center">
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    style={imageStyle}
                    src="/partner/1.png"
                    alt='Partner 1'
                    width={100}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/2.jpg"
                    alt='Partner 1'
                    width={70}
                    height={60}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/3.png"
                    alt='Partner 1'
                    width={80}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/4.png"
                    alt='Partner 1'
                    width={70}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/5.png"
                    alt='Partner 1'
                    width={120}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/6.png"
                    alt='Partner 1'
                    width={110}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    style={imageStyle}
                    src="/partner/1.png"
                    alt='Partner 1'
                    width={100}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/2.jpg"
                    alt='Partner 1'
                    width={70}
                    height={60}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/3.png"
                    alt='Partner 1'
                    width={80}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/4.png"
                    alt='Partner 1'
                    width={70}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/5.png"
                    alt='Partner 1'
                    width={120}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/6.png"
                    alt='Partner 1'
                    width={110}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    style={imageStyle}
                    src="/partner/1.png"
                    alt='Partner 1'
                    width={100}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/2.jpg"
                    alt='Partner 1'
                    width={70}
                    height={60}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/3.png"
                    alt='Partner 1'
                    width={80}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/4.png"
                    alt='Partner 1'
                    width={70}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/5.png"
                    alt='Partner 1'
                    width={120}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/6.png"
                    alt='Partner 1'
                    width={110}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    style={imageStyle}
                    src="/partner/1.png"
                    alt='Partner 1'
                    width={100}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/2.jpg"
                    alt='Partner 1'
                    width={70}
                    height={60}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/3.png"
                    alt='Partner 1'
                    width={80}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/4.png"
                    alt='Partner 1'
                    width={70}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/5.png"
                    alt='Partner 1'
                    width={120}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/6.png"
                    alt='Partner 1'
                    width={110}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    style={imageStyle}
                    src="/partner/1.png"
                    alt='Partner 1'
                    width={100}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/2.jpg"
                    alt='Partner 1'
                    width={70}
                    height={60}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/3.png"
                    alt='Partner 1'
                    width={80}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/4.png"
                    alt='Partner 1'
                    width={70}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/5.png"
                    alt='Partner 1'
                    width={120}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/6.png"
                    alt='Partner 1'
                    width={110}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    style={imageStyle}
                    src="/partner/1.png"
                    alt='Partner 1'
                    width={100}
                    height={50}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/2.jpg"
                    alt='Partner 1'
                    width={70}
                    height={60}
                />
            </div>
            <div className="border rounded-lg shadow-md p-3 bg-white flex items-center justify-center" data-aos="flip-left">
                <Image
                    src="/partner/3.png"
                    alt='Partner 1'
                    width={80}
                    height={50}
                />
            </div>
        </div>
      {/* <div className="flex flex-row gap-6">
        <div className="p-3 bg-white border rounded-lg shadow-md relative">
          <Image
            style={imageStyle}
            src="/partner/1.png"
            alt='Partner 1'
            width={100}
            height={50}
            />
        </div>
      </div> */}
    </div>
  );
}   