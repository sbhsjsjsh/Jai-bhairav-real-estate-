import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Bhairav Real Estate Group Jaipur | Open Land & Plots on Tonk Road',
  description: 'Buy open land and residential plots on Tonk Road, Vatika and Shivdaspura, Jaipur with Bhairav Real Estate Group. Explore genuine property deals and trusted real estate services.',
  openGraph: {
    title: 'Bhairav Real Estate Group Jaipur | Open Land & Plots on Tonk Road',
    description: 'Buy open land and residential plots on Tonk Road, Vatika and Shivdaspura, Jaipur with Bhairav Real Estate Group. Explore genuine property deals and trusted real estate services.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhairav Real Estate Group Jaipur | Open Land & Plots on Tonk Road',
    description: 'Buy open land and residential plots on Tonk Road, Vatika and Shivdaspura, Jaipur with Bhairav Real Estate Group. Explore genuine property deals and trusted real estate services.',
  },
  verification: {
    google: 'ZS7Ji6uzAvCK4ZWV-kfNVwciVcpp0w9o9JPaGPKRc4Q',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20">
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
