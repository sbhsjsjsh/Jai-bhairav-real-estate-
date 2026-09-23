import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Jai Bhairav Real Estate Jaipur | Open Land & Plots on Tonk Road',
  description: 'Buy open land and residential plots on Tonk Road, Vatika and Shivdaspura, Jaipur with Jai Bhairav Real Estate Group. Explore genuine property deals and trusted real estate services.',
  openGraph: {
    title: 'Jai Bhairav Real Estate Jaipur | Open Land & Plots on Tonk Road',
    description: 'Buy open land and residential plots on Tonk Road, Vatika and Shivdaspura, Jaipur with Jai Bhairav Real Estate Group. Explore genuine property deals and trusted real estate services.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jai Bhairav Real Estate Jaipur | Open Land & Plots on Tonk Road',
    description: 'Buy open land and residential plots on Tonk Road, Vatika and Shivdaspura, Jaipur with Jai Bhairav Real Estate Group. Explore genuine property deals and trusted real estate services.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
