"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "../ui/button";

export default function Product() {
  useEffect(() => {
        AOS.init({
        duration: 1000,
        once: true,
        });
    }, []);
    return (
      <div id="product" className="py-10">
        <h2 className="text-3xl font-bold text-center">Produk Unggulan Kami</h2>
        <p className="text-center mb-8">Kami menyediakan berbagai macam alat kesehatan dan laboratorium yang berkualitas tinggi.</p>
        {/* Produk list akan ditampilkan di sini */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mx-[7%]">
          {/* Contoh produk */}
          <div className="border bg-white p-4 my-3 rounded-lg shadow-md" data-aos="zoom-in-up">
            <img src="/product/product1.jpeg" alt="Produk 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Produk 1</h3>
            <p className="text-gray-600 mb-4">Deskripsi singkat tentang produk 1.</p>
            
            <Button className="hover:cursor-pointer " variant={"destructive"}>
                Lihat Produk
            </Button>
          </div>
          <div className="border bg-white p-4 my-3 rounded-lg shadow-md" data-aos="zoom-in-up">
            <img src="/product/product2.jpg" alt="Produk 2" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Produk 2</h3>
            <p className="text-gray-600 mb-4">Deskripsi singkat tentang produk 2.</p>
            
            <Button className="hover:cursor-pointer " variant={"destructive"}>
                Lihat Produk
            </Button>
          </div>
          <div className="border bg-white p-4 my-3 rounded-lg shadow-md" data-aos="zoom-in-up">
            <img src="/product/product3.webp" alt="Produk 3" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Produk 3</h3>
            <p className="text-gray-600 mb-4">Deskripsi singkat tentang produk 3.</p>
            
            <Button className="hover:cursor-pointer " variant={"destructive"}>
                Lihat Produk
            </Button>
          </div>
          <div className="border bg-white p-4 my-3 rounded-lg shadow-md" data-aos="zoom-in-up">
            <img src="/product/product4.jpeg" alt="Produk 4" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Produk 4</h3>
            <p className="text-gray-600 mb-4">Deskripsi singkat tentang produk 4.</p>
            
            <Button className="hover:cursor-pointer " variant={"destructive"}>
                Lihat Produk
            </Button>
          </div>
          <div className="border bg-white p-4 my-3 rounded-lg shadow-md" data-aos="zoom-in-up">
            <img src="/product/product5.jpg" alt="Produk 5" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Produk 5</h3>
            <p className="text-gray-600 mb-4">Deskripsi singkat tentang produk 5.</p>
            
            <Button className="hover:cursor-pointer " variant={"destructive"}>
                Lihat Produk
            </Button>
          </div>
          <div className="border bg-white p-4 my-3 rounded-lg shadow-md" data-aos="zoom-in-up">
            <img src="/product/product6.webp" alt="Produk 6" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Produk 6</h3>
            <p className="text-gray-600 mb-4">Deskripsi singkat tentang produk 6.</p>
            
            <Button className="hover:cursor-pointer " variant={"destructive"}>
                Lihat Produk
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button className="hover:cursor-pointer" variant={"destructive"}>
              Selengkapnya
          </Button>
        </div>
      </div>
    );
}
