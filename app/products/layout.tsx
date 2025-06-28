// app/products/layout.tsx

import Link from 'next/link'
import React from 'react'

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">หมวดหมู่สินค้า</h2>
        <nav className="flex flex-col space-y-4 text-lg">
          <Link href="/products/electronics" className="hover:text-blue-600 transition">
            📱 อิเล็กทรอนิกส์
          </Link>
          <Link href="/products/clothing" className="hover:text-pink-600 transition">
            👕 เสื้อผ้า
          </Link>
          <Link href="/products/books" className="hover:text-yellow-600 transition">
            📚 หนังสือ
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  )
}
