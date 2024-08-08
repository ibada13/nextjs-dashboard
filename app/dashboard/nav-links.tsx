'use client';
import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
  } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ForwardRefExoticComponent, SVGProps } from 'react';
// ...
interface links_type { 
    icon: any,
    name:string,
    href:string
        
}
  const links: links_type[] = [
      {
          icon: HomeIcon, name:'sgsdg',href:'/dashboard'
      },
      {
          icon: DocumentDuplicateIcon, name:'invoices',href:'/dashboard/invoices'
      },
      {
          icon: UserGroupIcon, name:'Customers',href:'/dashboard/customers'
      }
  ]
   
export default function NavLinks() {
    const pathname = usePathname();
    return (
      <>
        {links.map((link:any) => {
          const LinkIcon = link.icon;
          return (
            <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                    {
                      'bg-sky-100 text-blue-600': pathname === link.href,
                    },
                  )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }