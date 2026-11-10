import type { Metadata } from 'next'
import ServicesTab from '@/components/tabs/ServicesTab'
import ContactTab from '@/components/tabs/ContactTab'
import ReferralsTab from '@/components/tabs/ReferralsTab'
import WorkTab from '@/components/tabs/WorkTab'
import PreloadImage from '@/components/PreloadImage'

export const metadata: Metadata = {
  title: 'RJN — Photography & Videography Portfolio',
  description: 'A visual portfolio showcasing photography and videography work for brands, weddings, and editorial content.',
};

export default function Home() {
  return (
    <main>
      {/* The intro's background is a CSS image, which the browser only finds
          once the stylesheet has loaded; start it with the page instead. */}
      <PreloadImage href="/images/RandolfWork.webp" type="image/webp" />
      <WorkTab />
      <ReferralsTab />
      <ServicesTab />
      <ContactTab />
    </main>
  )
}
