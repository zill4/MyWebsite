import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (      
    <header className="absolute inset-x-0 top-0">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="font-serif mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            crispcode.io
            </h1>
        </div>
      </nav>
    </header>
    )
}