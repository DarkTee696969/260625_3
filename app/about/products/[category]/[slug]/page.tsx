// app/products/[category]/[slug]/page.tsx

import { notFound } from 'next/navigation'
import Image from 'next/image'

const products = [
  { id: '1', slug: 'laptop-pro', name: 'Laptop Pro', category: 'electronics', price: 1200, image: '/images/laptop-pro.jpg' },
  { id: '2', slug: 'wireless-mouse', name: 'Wireless Mouse', category: 'electronics', price: 25, image: '/images/wireless-mouse.jpg' },
  { id: '3', slug: 't-shirt-basic', name: 'Basic T-Shirt', category: 'clothing', price: 15, image: '/images/t-shirt-basic.jpg' },
  { id: '4', slug: 'sci-fi-novel', name: 'Sci-Fi Novel', category: 'books', price: 10, image: '/images/sci-fi-novel.jpg' },
]


type Props = {
  params: {
    category: string
    slug: string
  }
}

export default function ProductDetailPage({ params }: Props) {
  const { category, slug } = params

  const product = products.find(
    (p) => p.category === category && p.slug === slug
  )

  if (!product) return notFound()

  return (
  <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
    <Image
      src={product.image}
      alt={product.name}
      width={600}
      height={400}
      className="object-cover rounded mb-6"
    />
    <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
    <p className="text-gray-600 mb-2 capitalize">หมวดหมู่: {product.category}</p>
    <p className="text-green-700 text-2xl font-extrabold mb-6">${product.price}</p>
    <p className="text-gray-700 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
  </div>
)
}
