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
                O que é tal coisa?
              </h1>
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent className="faq-content border-4 border-gray-800 ">
              <div className="p-5">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  adipisci quia, natus voluptatem distinctio quisquam aperiam
                  quo architecto praesentium! Debitis autem nisi porro deserunt
                  eos omnis ab ducimus eum in?
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
                O que é tal coisa?
              </h1>
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent className="faq-content border-4 border-gray-800 ">
              <div className="p-5">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  adipisci quia, natus voluptatem distinctio quisquam aperiam
                  quo architecto praesentium! Debitis autem nisi porro deserunt
                  eos omnis ab ducimus eum in?
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
                O que é tal coisa?
              </h1>
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent className="faq-content border-4 border-gray-800 ">
              <div className="p-5">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  adipisci quia, natus voluptatem distinctio quisquam aperiam
                  quo architecto praesentium! Debitis autem nisi porro deserunt
                  eos omnis ab ducimus eum in?
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
                O que é tal coisa?
              </h1>
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent className="faq-content border-4 border-gray-800 ">
              <div className="p-5">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  adipisci quia, natus voluptatem distinctio quisquam aperiam
                  quo architecto praesentium! Debitis autem nisi porro deserunt
                  eos omnis ab ducimus eum in?
                </p>
              </div>
            </Accordion.AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </section>
  )
}
