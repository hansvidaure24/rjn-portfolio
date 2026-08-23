import type { Metadata } from 'next'
import ServicesTab from '@/components/tabs/ServicesTab'
import ContactTab from '@/components/tabs/ContactTab'
import ReferralsTab from '@/components/tabs/ReferralsTab'
import WorkTab from '@/components/tabs/WorkTab'

export const metadata: Metadata = {
  title: 'RJN — Photography & Videography Portfolio',
  description: 'A visual portfolio showcasing photography and videography work for brands, weddings, and editorial content.',
};

export default function Home() {
  return (
    <main>
      <WorkTab />
      <ReferralsTab />
      <ServicesTab />
      <ContactTab />
    </main>
  )
}
