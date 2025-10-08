import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Types
interface FooterProps {
  className?: string;
}

interface ContactInfo {
  icon: string;
  content: string | string[];
  href?: string;
  type?: 'address' | 'phone' | 'email';
}

interface QuickLink {
  label: string;
  href: string;
}

interface Brand {
  name: string;
  logo: string;
  href: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  // Footer data
  const quickLinks: QuickLink[] = [
    { label: 'Collaboration', href: '#' },
    { label: 'R & D', href: '#' },
    { label: 'Our Initiative', href: '#' },
    { label: 'Career', href: '#' },
    { label: 'Contact Us', href: '#' }
  ];

  const brands: Brand[] = [
    {
      name: 'Evervital',
      logo: '/logo/evervital-logo.svg',
      href: '#'
    },
    {
      name: 'Oreum',
      logo: '/logo/oreum-logo.svg',
      href: '#'
    }
  ];

  const contactInfo: ContactInfo[] = [
    {
      icon: '/Image/SVG/footer-location.svg',
      content: [
        '101, Shilu Zaveri',
        'Shantiniketan Road, Vijapur,',
        'Bandhani, Ahmedabad,',
        'Gujarat, India 380008'
      ],
      type: 'address'
    },
    {
      icon: '/Image/SVG/footer-phone.svg',
      content: '+91 9909915579',
      href: 'tel:+919909915579',
      type: 'phone'
    },
    {
      icon: '/Image/SVG/footer-email.svg',
      content: [
        'microorange@gmail.com',
        'rutilpharma110@gmail.com'
      ],
      type: 'email'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: '/Image/SVG/footer-facebook.svg',
      href: '#'
    },
    {
      name: 'Instagram',
      icon: '/Image/SVG/footer-instgram.svg',
      href: '#'
    },
    {
      name: 'LinkedIn',
      icon: '/Image/SVG/footer-linkdin.svg',
      href: '#'
    },
    {
      name: 'Twitter',
      icon: '/Image/SVG/footer-twitter.svg',
      href: '#'
    }
  ];

  const renderContactItem = (item: ContactInfo, index: number) => {
    const isArray = Array.isArray(item.content);
    
    return (
      <div key={index} className="flex items-start space-x-3">
        <Image 
          src={item.icon} 
          alt={item.type || 'Contact'} 
          width={20} 
          height={20} 
          className="mt-1 flex-shrink-0 opacity-80" 
        />
        <div className="text-sm leading-relaxed">
          {item.type === 'address' && isArray ? (
            <div>
              {(item.content as string[]).map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          ) : item.type === 'phone' && !isArray ? (
            <a 
              href={item.href} 
              className="hover:text-gray-200 transition-colors duration-300"
            >
              {item.content as string}
            </a>
          ) : item.type === 'email' && isArray ? (
            <div className="space-y-1">
              {(item.content as string[]).map((email, i) => (
                <a 
                  key={i}
                  href={`mailto:${email}`} 
                  className="hover:text-gray-200 transition-colors duration-300 block"
                >
                  {email}
                </a>
              ))}
            </div>
          ) : (
            <span>{item.content as string}</span>
          )}
        </div>
      </div>
    );
  };

  return (
    <footer className={`bg-[#4BBA72] text-white ${className}`}>
      <div className="container mx-auto px-4 py-12 px-0 lg:px-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-20">
          
          {/* Company Logo and Social Media */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src='/logo/white-logo.svg'
                alt="microRANGE"
                width={160}
                height={40}
                className="w-80 h-auto object-contain"
              />
            </div>
            
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Link 
                  key={index}
                  href={social.href} 
                  className=" transition-all duration-300 p-3 rounded-full hover:scale-105"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={90}
                    height={40}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-[20px] lg:text-[24px] font-bold mb-4 relative">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[16px]  hover:text-gray-200 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Brands */}
          <div className="space-y-4">
            <h3 className="text-[20px] lg:text-[24px] font-semibold mb-4 relative">
              Our Brands
            </h3>
            <div className="space-y-6">
              {brands.map((brand, index) => (
                <Link key={index} href={brand.href} className="block group">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={150}
                    height={40}
                    className="w-40 h-auto transition-all duration-300 group-hover:scale-105"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-[20px] lg:text-[24px] font-semibold mb-4 relative">
              Contact
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => renderContactItem(item, index))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-200 order-2 sm:order-1">
              © 2023 - All Rights Reserved
            </div>
            <div className="flex space-x-6 text-sm order-1 sm:order-2">
              <Link href="#" className="hover:text-gray-200 transition-colors duration-300">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-gray-200 transition-colors duration-300">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;