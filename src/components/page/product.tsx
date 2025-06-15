import { Button } from "../ui/button";

export default function Product() {
    return (
        <div>
        <h2 className="text-3xl font-bold text-center mt-[5%]">Produk Unggulan Kami</h2>
        <p className="text-center mb-8">Kami menyediakan berbagai macam alat kesehatan dan laboratorium yang berkualitas tinggi.</p>
        {/* Produk list akan ditampilkan di sini */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mx-[7%]">
          {/* Contoh produk */}
          <div className="bg-white p-4 my-3 rounded-lg shadow-md">
            <img src="/product/product1.jpeg" alt="Produk 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Produk 1</h3>
            <p className="text-gray-600 mb-4">Deskripsi singkat tentang produk 1.</p>
            
            <Button className="hover:cursor-pointer " variant={"destructive"}>
                Lihat Produk
            </Button>
          </div>
          <div className="bg-white p-4 my-3 rounded-lg shadow-md">
            <img src="/product/product1.jpeg" alt="Produk 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Produk 1</h3>
            <p className="text-gray-600 mb-4">Deskripsi singkat tentang produk 1.</p>
            
            <Button className="hover:cursor-pointer " variant={"destructive"}>
                Lihat Produk
            </Button>
          </div>
          <div className="bg-white p-4 my-3 rounded-lg shadow-md">
            <img src="/product/product1.jpeg" alt="Produk 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Produk 1</h3>
            <p className="text-gray-600 mb-4">Deskripsi singkat tentang produk 1.</p>
            
            <Button className="hover:cursor-pointer " variant={"destructive"}>
                Lihat Produk
            </Button>
          </div>
          <div className="bg-white p-4 my-3 rounded-lg shadow-md">
            <img src="/product/product1.jpeg" alt="Produk 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Produk 1</h3>
            <p className="text-gray-600 mb-4">Deskripsi singkat tentang produk 1.</p>
            
            <Button className="hover:cursor-pointer " variant={"destructive"}>
                Lihat Produk
            </Button>
          </div>
          <div className="bg-white p-4 my-3 rounded-lg shadow-md">
            <img src="/product/product1.jpeg" alt="Produk 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Produk 1</h3>
            <p className="text-gray-600 mb-4">Deskripsi singkat tentang produk 1.</p>
            
            <Button className="hover:cursor-pointer " variant={"destructive"}>
                Lihat Produk
            </Button>
          </div>
          <div className="bg-white p-4 my-3 rounded-lg shadow-md">
            <img src="/product/product1.jpeg" alt="Produk 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Produk 1</h3>
            <p className="text-gray-600 mb-4">Deskripsi singkat tentang produk 1.</p>
            
            <Button className="hover:cursor-pointer " variant={"destructive"}>
                Lihat Produk
            </Button>
          </div>
        </div>
      </div>
    );
}
