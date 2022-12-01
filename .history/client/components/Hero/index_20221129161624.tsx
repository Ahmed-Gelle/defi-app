import React from 'react';
import {BsArrowRightCircle} from 'react-icons/bs'
import logo from '../../assets/logo.png'
import hero from '../../assets/hero.png'
import Image from 'next/image'
import ModelViewer from '../3DAnimation';

export default function Hero() {
    return (
<div>
    <header class="py-4 bg-black sm:py-6" x-data="{expanded: false}">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="flex items-center justify-between">
                <div class="shrink-0">
                    <a href="#" title="" class="flex">
                        <Image src={logo}/>
                    </a>
                </div>

                <div class="flex md:hidden">
                    <button type="button" class="text-white">
                        <span x-show="!expanded" aria-hidden="true">
                            <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </span>

                        <span x-show="expanded" aria-hidden="true">
                            <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </button>
                </div>

                <nav class="hidden md:flex md:items-center md:justify-end md:space-x-12">
                    <a href="#" title="" class="text-base font-normal text-blue-400 transition-all duration-200 hover:text-white"> Home </a>

                    <a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Swap </a>

                    <a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Contact us </a>

                    <a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Whiteboard </a>
                </nav>
            </div>

            <nav x-show="expanded" x-collapse>
                <div class="flex flex-col pt-8 pb-4 space-y-6">
                    <a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Products </a>

                    <a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Features </a>

                    <a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Pricing </a>

                    <a href="#" title="" class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Support </a>
                </div>
            </nav>
        </div>
    </header>

    <section class="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="relative">
                <div class="lg:w-2/3">
                    <p class="text-sm font-normal tracking-widest text-gray-300 uppercase">A Hub for Designers, Developers & Marketers</p>
                    <h1 class="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl"><span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Decentralized</span> Exchange Made For Everybody
</h1>
                    <p class="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">Cryptocurrency trading is the act of speculating on cryptocurrency price
movements via a CFD trading account, or buying and selling the under- lying coins via and exhance</p>
                    <div class="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                        <div class="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                        <a href="#" title="" class="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-blue border border-transparent rounded-full" role="button"> Start Exploring Inspiration </a>
                    </div>

                    <div>
                        <div class="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17" stroke="url(#a)" stroke-linecap="round" stroke-linejoin="round" />

                            </svg>

                            <span class="ml-2 text-base font-normal text-white"> 42 new design inspiration was added last week </span>
                        </div>
                    </div>
                </div>

                <div class="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
            <ModelViewer scale="1" modelPath={"Rooster.glb"} />
            <Image src={hero}/>
                    
                </div>
            </div>
        </div>
        <div class="md:top-32 mt-8">

        </div>
    </section>
</div>
    )
}