import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import Newsletter from '../components/Newsletter';

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]'/>
        <div className='flex flex-col justify-center gap-6 md:w-w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui omnis dicta, pariatur earum cupiditate obcaecati recusandae sequi quia incidunt voluptates expedita quae fuga provident doloremque consequuntur ipsa repudiandae nobis deserunt inventore voluptatum iusto! Quae, harum dolore repellendus incidunt hic illum, aspernatur nesciunt molestias iusto, ad itaque optio praesentium maiores ea.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, officia! Dicta iste pariatur libero officiis molestias in unde. Autem numquam voluptates soluta expedita, culpa nulla nam dignissimos velit perferendis impedit explicabo rerum aut, sunt mollitia est placeat illum officia cumque. Esse, exercitationem. Ut voluptate, placeat dolorum aut qui nulla dolor. Eum eligendi nemo velit laudantium, commodi voluptatum neque quis officia corporis veniam nobis libero assumenda veritatis. Laboriosam asperiores libero quisquam, facilis soluta quo excepturi aspernatur nostrum voluptate quae? Inventore impedit repellendus ex ipsam saepe, quis necessitatibus ad. Cupiditate cumque ipsam, nesciunt rem corporis fugit. Dolorem perspiciatis veniam numquam quasi porro?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat nulla ad et sunt, praesentium ratione dolorum officia repellat, magnam mollitia esse iste, adipisci nobis consectetur eum explicabo quos minima neque.</p>
        </div>
      </div>
      <div className='text-4xl py-4 '>
        <Title text1={"WHY"} text2={"CHOOSE US?"}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 '>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur molestias eligendi iure? Ipsa eligendi quia consequuntur nulla nisi nobis asperiores ex repudiandae! Odio, vero a iusto est mollitia nemo at laudantium quisquam esse incidunt impedit. Pariatur reiciendis neque quas!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Convinence Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur molestias eligendi iure? Ipsa eligendi quia consequuntur nulla nisi nobis asperiores ex repudiandae! Odio, vero a iusto est mollitia nemo at laudantium quisquam esse incidunt impedit. Pariatur reiciendis neque quas!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Expectional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur molestias eligendi iure? Ipsa eligendi quia consequuntur nulla nisi nobis asperiores ex repudiandae! Odio, vero a iusto est mollitia nemo at laudantium quisquam esse incidunt impedit. Pariatur reiciendis neque quas!</p>
        </div>
      </div>
      <Newsletter/>
    </div>
  )
}

export default About