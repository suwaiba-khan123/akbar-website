import { DefaultLayout } from "../components/layouts/DefaultLayout";

interface Product {
  id: string;
  name: string;
  category: "Laptops" | "Desktops" | "Peripherals";
  description: string;
  price: string;
  imageUrl: string;
  specs?: string[];
}

const products: Product[] = [
  // Laptops
  {
    id: "laptop1",
    name: "Dell Latitude 5000 Series",
    category: "Laptops",
    description: "Business-grade laptop with Intel Core i7, perfect for professional work",
    price: "₹85,000",
    imageUrl: "https://images.unsplash.com/photo-1588872657840-790ff3ec2cda?auto=format&fit=crop&w=1200&q=80",
    specs: ["Intel Core i7", "16GB RAM", "512GB SSD", "15.6\" Display"]
  },
  {
    id: "laptop2",
    name: "HP ProBook 450 G8",
    category: "Laptops",
    description: "Reliable workstation laptop with long battery life and solid performance",
    price: "₹72,000",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    specs: ["Intel Core i5", "8GB RAM", "256GB SSD", "14\" Display"]
  },
  {
    id: "laptop3",
    name: "Lenovo ThinkPad E15",
    category: "Laptops",
    description: "Ultra-portable laptop with excellent keyboard and durability",
    price: "₹68,500",
    imageUrl: "https://images.unsplash.com/photo-1548681528-6a846cf17537?auto=format&fit=crop&w=1200&q=80",
    specs: ["AMD Ryzen 5", "8GB RAM", "512GB SSD", "15.6\" Display"]
  },
  // Desktops
  {
    id: "desktop1",
    name: "Dell OptiPlex 7080",
    category: "Desktops",
    description: "Professional desktop for engineering and CAD applications",
    price: "₹95,000",
    imageUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80",
    specs: ["Intel Core i7", "32GB RAM", "1TB SSD", "NVIDIA GTX 1660"]
  },
  {
    id: "desktop2",
    name: "HP EliteDesk 800 G6",
    category: "Desktops",
    description: "Compact desktop PC for office environments and general computing",
    price: "₹65,000",
    imageUrl: "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?auto=format&fit=crop&w=1200&q=80",
    specs: ["Intel Core i5", "16GB RAM", "512GB SSD", "Intel UHD 630"]
  },
  {
    id: "desktop3",
    name: "Lenovo ThinkStation E32",
    category: "Desktops",
    description: "Workstation-class desktop for demanding applications and multitasking",
    price: "₹110,000",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    specs: ["Intel Xeon", "64GB RAM", "2TB SSD", "RTX A4500"]
  },
  // Peripherals
  {
    id: "periph1",
    name: "Mechanical Keyboard RGB",
    category: "Peripherals",
    description: "Professional-grade mechanical keyboard with RGB backlight",
    price: "₹5,500",
    imageUrl: "https://images.unsplash.com/photo-1587829191301-4a71490d63fb?auto=format&fit=crop&w=1200&q=80",
    specs: ["Mechanical Switches", "RGB Backlight", "USB-C Connection"]
  },
  {
    id: "periph2",
    name: "Dell Monitor U2720Q 27\" 4K",
    category: "Peripherals",
    description: "Professional 4K monitor for color-accurate work and design",
    price: "₹28,000",
    imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=80",
    specs: ["27\" 4K Display", "USB-C Hub", "99% sRGB Coverage"]
  },
  {
    id: "periph3",
    name: "Logitech MX Master 3S",
    category: "Peripherals",
    description: "Advanced wireless mouse for professionals and developers",
    price: "₹9,000",
    imageUrl: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=80",
    specs: ["Wireless 2.4GHz", "8K DPI", "Precision Scrolling"]
  },
  {
    id: "periph4",
    name: "HP LaserJet Pro M404n",
    category: "Peripherals",
    description: "Fast and reliable network printer for office use",
    price: "₹18,000",
    imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=80",
    specs: ["38 PPM", "Network Ready", "Auto Duplex"]
  },
  {
    id: "periph5",
    name: "Docking Station USB-C",
    category: "Peripherals",
    description: "Multi-port docking station for laptop connectivity",
    price: "₹6,500",
    imageUrl: "https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&w=1200&q=80",
    specs: ["7 USB Ports", "4K Video Support", "100W Power Delivery"]
  },
  {
    id: "periph6",
    name: "Sony UPT-520W Thermal Printer",
    category: "Peripherals",
    description: "High-resolution thermal printer for quality output",
    price: "₹42,000",
    imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=80",
    specs: ["600 DPI", "Network Connection", "Compact Design"]
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article className="card card-compact bg-base-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <figure className="h-48 overflow-hidden bg-gray-200">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://via.placeholder.com/1200x600?text=${encodeURIComponent(product.name)}`;
          }}
        />
      </figure>
      <div className="card-body">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="card-title text-lg">{product.name}</h4>
            <div className="badge badge-primary text-xs mt-1">{product.category}</div>
          </div>
        </div>
        <p className="text-sm text-base-content/70">{product.description}</p>
        {product.specs && (
          <ul className="mt-2 space-y-1 text-xs text-base-content/60">
            {product.specs.slice(0, 2).map((spec, idx) => (
              <li key={idx}>• {spec}</li>
            ))}
          </ul>
        )}
        <div className="card-actions items-center justify-between mt-4">
          <span className="text-2xl font-bold text-primary">{product.price}</span>
          <button className="btn btn-sm btn-primary">Inquire</button>
        </div>
      </div>
    </article>
  );
};

export const Products = () => {
  const laptops = products.filter(p => p.category === "Laptops");
  const desktops = products.filter(p => p.category === "Desktops");
  const peripherals = products.filter(p => p.category === "Peripherals");

  return (
    <DefaultLayout>
      {/* Hero Banner */}
      <section className="relative h-64 w-full overflow-hidden bg-cover bg-center sm:h-80">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80"
          alt="Products"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="max-w-2xl text-center text-white">
            <h1 className="text-3xl font-bold md:text-5xl">Our Products</h1>
            <p className="mt-2 text-base md:text-lg">Quality laptops, desktops, and peripherals for your computing needs</p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Laptops Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Laptops</h2>
            <p className="text-base-content/70">Portable computing solutions for professionals and businesses</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {laptops.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Desktops Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Desktops</h2>
            <p className="text-base-content/70">Powerful workstations for demanding professional applications</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {desktops.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Peripherals Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Peripherals & Accessories</h2>
            <p className="text-base-content/70">Complete your setup with quality input devices and accessories</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {peripherals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
          <h2 className="text-2xl font-bold">Need a Custom Configuration?</h2>
          <p className="mt-3 text-base text-base-content/80">
            Contact our team for bulk orders, custom builds, or enterprise solutions tailored to your requirements.
          </p>
          <a href="/contact" className="btn btn-primary mt-5">Get in Touch</a>
        </section>
      </main>
    </DefaultLayout>
  );
};
