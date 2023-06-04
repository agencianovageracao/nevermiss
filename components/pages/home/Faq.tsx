'use client'

import * as Accordion from '@radix-ui/react-accordion'
import * as Icon from 'phosphor-react'
import { Title } from '@/components/globals/Title'

export const Faq = () => {
  return (
    <section className="py-20">
      <div className="container">
        <Title size="3xl">
          Why choose <span className="text-purple-500">NeverMiss</span>
        </Title>
        <Accordion.Root
          className="AccordionRoot grid grid-cols-2 justify-between gap-8 w-full mt-10"
          type="multiple"
        >
          <Accordion.Item
            data-state="closed"
            className="rounded overflow-hidden h-fit"
            value="item-1"
          >
            <Accordion.AccordionTrigger className="faq-trigger flex gap-4 items-center border-gray-800 rounded bg-gray-800 p-5 border-2 w-full">
              <div className="chevron w-14 h-14 bg-purple-500 text-white flex items-center justify-center rounded">
                <div className="icon">
                  <Icon.Plus size={32} />
                </div>
              </div>
              <h1 className="text-3xl font-effective text-white">
                How long on the market ?
              </h1>
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent className="faq-content border-4 border-gray-800 ">
              <div className="p-5">
                <p className="text-lg">
                  We are completing 1 year in the market and we guarantee the best possible use.
                </p>
              </div>
            </Accordion.AccordionContent>
          </Accordion.Item>
          <Accordion.Item
            data-state="closed"
            className="rounded overflow-hidden h-fit"
            value="item-2"
          >
            <Accordion.AccordionTrigger className="faq-trigger flex gap-4 items-center border-gray-800 rounded bg-gray-800 p-5 border-2 w-full">
              <div className="chevron w-14 h-14 bg-purple-500 text-white flex items-center justify-center rounded">
                <div className="icon">
                  <Icon.Plus size={32} />
                </div>
              </div>
              <h1 className="text-3xl font-effective text-white">
                Are the products undetectable?
              </h1>
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent className="faq-content border-4 border-gray-800 ">
              <div className="p-5">
                <p className="text-lg">
                  Yes, we go through a tough check before we put them online for customers.
                </p>
              </div>
            </Accordion.AccordionContent>
          </Accordion.Item>
          <Accordion.Item
            data-state="closed"
            className="rounded overflow-hidden h-fit"
            value="item-3"
          >
            <Accordion.AccordionTrigger className="faq-trigger flex gap-4 items-center border-gray-800 rounded bg-gray-800 p-5 border-2 w-full">
              <div className="chevron w-14 h-14 bg-purple-500 text-white flex items-center justify-center rounded">
                <div className="icon">
                  <Icon.Plus size={32} />
                </div>
              </div>
              <h1 className="text-3xl font-effective text-white">
                Where do I get Support?
              </h1>
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent className="faq-content border-4 border-gray-800 ">
              <div className="p-5">
                <p className="text-lg">
                  You can send us a support form on our discord one of our STAFFS will help you with whatever you need.
                </p>
              </div>
            </Accordion.AccordionContent>
          </Accordion.Item>
          <Accordion.Item
            data-state="closed"
            className="rounded overflow-hidden h-fit"
            value="item-4"
          >
            <Accordion.AccordionTrigger className="faq-trigger flex gap-4 items-center border-gray-800 rounded bg-gray-800 p-5 border-2 w-full">
              <div className="chevron w-14 h-14 bg-purple-500 text-white flex items-center justify-center rounded">
                <div className="icon">
                  <Icon.Plus size={32} />
                </div>
              </div>
              <h1 className="text-3xl font-effective text-white">
                How long does it take to receive the product?
              </h1>
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent className="faq-content border-4 border-gray-800 ">
              <div className="p-5">
                <p className="text-lg">
                  Product delivery is instantaneous after payment confirmation on our website and you will receive a tag that releases product downloads and a tutorial on how to install.
                </p>
              </div>
            </Accordion.AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </section>
  )
}
