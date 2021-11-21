import React from 'react'
import Header from 'parts/Header'
import Breadcrumb from 'components/Breadcrumb/index'
import ShoopingCart from 'parts/Cart/ShoopingCart'
import ShippingDetails from 'parts/Cart/ShippingDetails'
// import BrowseRoom from 'parts/HomePage/BrowseRoom'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'
export default function HomePage() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb list={[
        { url: "/", name: "Home" },
        { url: "/cart", name: "Shooping Cart" },
      ]} />

      <section class="md:py-16">
        <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
            <ShoopingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </>
  )
}
