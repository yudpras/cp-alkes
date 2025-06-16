import Image from 'next/image';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function Navigation() {
    const scrollToSection = (id:string) => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <header className="sticky z-999 top-0 bg-white shadow px-[7%] py-3">
        <nav className="flex items-center justify-between">
            <div className="flex items-center">
            <Image
                src="/logo.jpg"
                alt="ALKES Logo"
                width={40}
                height={40}
                className="mr-3" />
            <a href="/" className="text-2xl font-bold text-gray-800">ALKES</a>
            </div>
            <div className="space-x-4">
                <ul className='hidden md:flex space-x-4 text-gray-900 font-semibold'>
                    <li className='hover:bg-red-600 transition duration-500 hover:text-white px-3 py-2 rounded-lg'>
                        <button onClick={() => scrollToSection('home')}>Home</button>
                    </li>
                    <li className='hover:bg-red-600 transition duration-500 hover:text-white px-3 py-2 rounded-lg'>
                        <button onClick={() => scrollToSection('about')}>Tentang Kami</button>
                    </li>
                    <li className='hover:bg-red-600 transition duration-500 hover:text-white px-3 py-2 rounded-lg'>
                        <button onClick={() => scrollToSection('partner')}>Partner</button>
                    </li>
                    <li className='hover:bg-red-600 transition duration-500 hover:text-white px-3 py-2 rounded-lg'>
                        <button onClick={() => scrollToSection('product')}>Produk</button>
                    </li>
                    <li className='hover:bg-red-600 transition duration-500 hover:text-white px-3 py-2 rounded-lg'>
                        <button onClick={() => scrollToSection('footer')}>Kontak</button>
                    </li>
                </ul>
                
                {/* <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/">Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/">Tentang Kami</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/">Partner</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/">Produk</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/">Kontak</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu> */}

                {/* Nav mobile */}
                <button className='block md:hidden text-gray-600 hover:text-gray-800 hover:cursor-pointer focus:outline-none border p-1 rounded'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={20} height={20}><path d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg>
                </button>
            </div>
        </nav>
    </header>
  );
}