"use client"

import pic1 from '@/public/pic1.jpg';
import pic2 from '@/public/pic2.jpg';
import Image from 'next/image';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import 'swiper/css';

export default function Home() {
  return (
    <main>

      {/* <div className='flex overflow-hidden opacity-50'>
        <span className='text-6xl font-semibold tracking-wider animate-text whitespace-nowrap'>&nbsp;KARATE &bull; JUDO &bull; BALET &bull; KARATE &bull; JUDO &bull; BALET &bull; </span>
        <span className='text-6xl font-semibold tracking-wider animate-text whitespace-nowrap' aria-hidden="true">&nbsp;KARATE &bull; JUDO &bull; BALET &bull; KARATE &bull; JUDO &bull; BALET &bull; </span>
      </div> */}

      <div className="carousel">
        <Swiper
          effect="fade"
          navigation
          pagination
          autoplay
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
        >
          <SwiperSlide>
            <div id='item1' className="w-full carousel-item">
              <div className="min-h-screen hero" style={{ backgroundImage: `url(${pic1.src})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center hero-content text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id='item2' className="w-full carousel-item">
              <div className="min-h-screen hero" style={{ backgroundImage: `url(${pic2.src})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center hero-content text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>


    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">From the blog</h1>

              <p className="max-w-lg mx-auto mt-4 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
                  quia tempore delect
              </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
              <div>
                  <div className='relative w-full h-96'>
                   <Image fill className='object-cover' src="/pic1.jpg" alt="news1" />
                  </div>

                  <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                      <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                          All the features you want to know
                      </a>

                      <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                          laudantium quia tempore delect
                      </p>

                      <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
                  </div>
              </div>

              <div className='relative w-full'>
                <div className='relative w-full h-96'>
                  <Image fill className='object-cover' src="/pic2.jpg" alt="news2" />
                </div>

                  <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                      <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                          How to use sticky note for problem solving
                      </a>

                      <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                          laudantium quia tempore delect
                      </p>

                      <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
                  </div>
              </div>
          </div>
      </div>
  </section>


  <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Zajęcia / Kolonie / Polkolonie</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Copy & paste components</h1>

                <p className="text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span className="mx-1">read more</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>

            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Zero Configuration</h1>

                <p className="text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span className="mx-1">read more</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>

            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Simple & clean designs</h1>

                <p className="text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span className="mx-1">read more</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    </div>
  </section>



      <section className="bg-white dark:bg-gray-900">  
        <div className="container px-6 py-8 mx-auto">
            <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Team</h2>

            <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="w-full max-w-xs text-center">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg mask mask-squircle" src="/pic1.jpg" alt="avatar" />

                    <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Ahmed Omer</h3>
                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">CEO</span>
                    </div>
                </div>

                <div className="w-full max-w-xs text-center">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="/pic2.jpg" alt="avatar" />

                    <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Jane Doe</h3>
                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Co-founder</span>
                    </div>
                </div>

                <div className="w-full max-w-xs text-center">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="/pic3.jpg" alt="avatar" />

                    <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Steve Ben</h3>
                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">UI/UX</span>
                    </div>
                </div>

                <div className="w-full max-w-xs text-center">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="/pic4.jpg" alt="avatar" />

                    <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Patterson Johnson</h3>
                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Software Engineer</span>
                    </div>
                </div>
            </div>
        </div>
    </section>





    </main>
  )
}
