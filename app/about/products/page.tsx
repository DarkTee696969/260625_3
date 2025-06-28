// app/products/page.tsx
import Image from 'next/image'
import Link from 'next/link'

const products = [
  { id: '1', slug: 'laptop-pro', name: 'Laptop Pro', category: 'electronics', price: 1200, image: '/images/laptop-pro.jpg' },
  { id: '2', slug: 'wireless-mouse', name: 'Wireless Mouse', category: 'electronics', price: 25, image: '/images/wireless-mouse.jpg' },
  { id: '3', slug: 't-shirt-basic', name: 'Basic T-Shirt', category: 'clothing', price: 15, image: '/images/t-shirt-basic.jpg' },
  { id: '4', slug: 'sci-fi-novel', name: 'Sci-Fi Novel', category: 'books', price: 10, image: '/images/sci-fi-novel.jpg' },
]



export default function ProductsPage() {
  return (
    <>
      <h1 className="text-4xl font-extrabold mb-8">สินค้าทั้งหมด</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow p-6 hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-500 mb-1 capitalize">หมวดหมู่: {product.category}</p>
            <p className="text-green-600 font-bold text-lg mb-3">${product.price}</p>
            <Link
              href={`/products/${product.category}/${product.slug}`}
              className="inline-block text-blue-600 hover:underline"
            >
              ดูรายละเอียด
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
