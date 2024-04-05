import React from 'react'
import PostSection from '../components/PostSection';
import Header from '../components/Header';

const HomeLayout = () => {
  return (
    <section>
      <Header />
      <div className="flex justify-between mt-7">
        <div className="w-[24%] bg-red-400">left</div>
        <div className="w-[48%] py-7 overflow-y-scroll max-h-[90vh] ShowNoScrollBar">
          <PostSection />
        </div>
        <div className="w-[24%] bg-pink-600">right</div>
      </div>
    </section>
  )
}

export default HomeLayout;