import About from "@/components/page/about";
import Banner from "@/components/page/banner";
import Footer from "@/components/page/footer";
import Navigation from "@/components/page/navigation";
import Product from "@/components/page/product";

export default function Home() {
  return (
    <>
      <Navigation/>
      <Banner />
      <div className="mx-[7%] flex justify-between space-x-4 -mt-[5%] z-100 relative">
        <div className="p-[3%] bg-white rounded-lg shadow-md w-1/4">
          <h2 className="text-xl text-center font-semibold mb-4">Produk Lengkap</h2>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque vero? Quo perspiciatis quam minus quasi ipsa velit? Voluptatem, at!</p>
        </div>
        <div className="p-[3%] bg-white rounded-lg shadow-md w-1/4">
          <h2 className="text-xl text-center font-semibold mb-4">Teknologi Terbaru</h2>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque vero? Quo perspiciatis quam minus quasi ipsa velit? Voluptatem, at!</p>
        </div>
        <div className="p-[3%] bg-white rounded-lg shadow-md w-1/4">
          <h2 className="text-xl text-center font-semibold mb-4">Pengalaman</h2>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque vero? Quo perspiciatis quam minus quasi ipsa velit? Voluptatem, at!</p>
        </div>
        <div className="p-[3%] bg-white rounded-lg shadow-md w-1/4">
          <h2 className="text-xl text-center font-semibold mb-4">Kerjasama</h2>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque vero? Quo perspiciatis quam minus quasi ipsa velit? Voluptatem, at!</p>
        </div>
      </div>
      <About />
      <Product />
      <Footer />
    </>
  );
}
