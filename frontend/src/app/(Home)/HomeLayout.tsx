import React from 'react'
import PostSection from '../components/PostSection';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';

const HomeLayout = () => {
  return (
    <section className='bg-gray-300'>
      <Header />
      <div className="flex justify-center mt-7">
        <div className="w-[24%]"></div>
        <div className="w-[50%] py-7 overflow-y-scroll max-h-[90vh] ShowNoScrollBar">
          <PostSection />
        </div>
        <div className="w-[18%] py-7">
          <ContactSection />
        </div>
      </div>
    </section>
  )
}

export default HomeLayout;