import * as React from 'react'
import { GetStaticProps } from 'next'
import NextLink from 'next/link'

import { Container } from '@components/Container'
import { Icon } from '@components/Icon'
import { Image } from '@components/Image'
import { Posts } from '@components/Posts'
import { ScheduleButton } from '@components/ScheduleButton'
import { Post } from '@interfaces/post'
import { constants } from '@utils/constants'
import { getAllPostsFrontMatter } from '@utils/mdx'

interface Props {
  posts: Array<Post>
}

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <Container as="main" className="px-8 text-xl grid-in-main space-y-14">
        <div className="flex flex-col items-center justify-center p-6 mx-4 space-y-4 bg-indigo-100 rounded-lg shadow-md shadow-indigo-300 dark:shadow-aura-gray dark:bg-aura-purple-fading md:mx-0 md:space-x-8 lg:p-12 md:space-y-0 md:flex-row">
          <picture className="relative flex-none w-40 h-40 rounded-full md:h-44 md:w-44">
            <Image
              alt="Cody Brunner Avatar"
              className="absolute flex-none object-cover w-40 h-40 rounded-full md:h-44 md:w-44"
              height={176}
              priority
              src="/images/me.jpg"
              width={176}
            />
          </picture>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Hey, I&apos;m Cody 👋🏻</h2>
            <p className="text-xl text-left lg:text-3xl lg:leading-snug">
              I am a <strong className="font-bold">Software Developer</strong>{' '}
              from the{' '}
              <span aria-label="USA" className="font-bold">
                <span className="dark:text-red-500">U</span>
                <span className="dark:text-white">S</span>
                <span className="dark:text-blue-500">A</span>
              </span>{' '}
              living in{' '}
              <span aria-label="Colombia" className="font-bold">
                <span className="dark:text-yellow-500">Col</span>
                <span className="dark:text-blue-500">om</span>
                <span className="dark:text-red-500">bia</span>
              </span>{' '}
              currently working as a{' '}
              <span className="font-bold">Freelance Developer</span>.
            </p>
          </div>
        </div>
        <div className="space-y-8 md:space-y-14">
          <div className="mx-4 md:mx-0 lg:text-center">
            <p className="font-semibold leading-6 tracking-wide text-indigo-600 uppercase dark:text-aura-purple text-md lg:text-xl">
              Blog
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 dark:text-aura-blue tracking-light lg:text-5xl">
              Latest Posts
            </h1>
            <p className="max-w-2xl mt-4 text-xl leading-9 text-gray-500 lg:text-xl lg:mx-auto">
              Here are the latest posts from my blog. I write about many things,
              but mostly you find articles on technology and my experiences as
              an expat.
            </p>
          </div>
          <Posts posts={posts} />
          <div className="flex justify-end w-full">
            <NextLink href="/blog" passHref>
              <a className="px-6 py-2 transition-colors duration-200 ease-in-out bg-indigo-100 rounded-lg shadow-md shadow-indigo-300 dark:shadow-aura-gray dark:bg-aura-purple-fading group hover:bg-indigo-200 hover:dark:bg-aura-pink">
                <Icon
                  className="w-8 h-8 text-indigo-500 dark:text-aura-green group-hover:dark:text-aura-gray group-hover:text-pink-500"
                  name="arrowRight"
                />
              </a>
            </NextLink>
          </div>
          <hr className="border-red-500 dark:border-aura-purple" />
          {/* NOTE Project Section */}
          {/* <div className="mx-4 md:mx-0 lg:text-center">
            <p className="font-semibold leading-6 tracking-wide text-indigo-600 uppercase text-md lg:text-xl">
              Projects
            </p>
            <p className="max-w-2xl mt-4 text-xl leading-9 text-gray-500 lg:text-xl lg:mx-auto">
              Here are a few of my most recent projects. All source code can be
              found on GitHub.
            </p>
          </div>
          <ul className="flex flex-col space-y-8">
            {myProjects.map(project => (
              <li className="text-center border" key={project.name}>
                <div className="relative inline-block p-4 text-gray-900 rounded-md outline-none group hover:bg-stone-200 focus:shadow-sm focus:text-gray-700 ">
                  <div className="relative z-10 space-y-4 pointer-events-none lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-y-6">
                    <div className="flex items-center pr-4 lg:space-x-6 lg:pb-0 lg:col-span-3">
                      <div className="flex-shrink-0 hidden w-12 h-12 lg:inline-block">
                        <Image
                          alt=""
                          className="rounded-full"
                          height={48}
                          src={project.assetPath}
                          width={48}
                        />
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-2xl font-bold">{project.name}</h1>
                        <p className="text-lg tracking-tight text-gray-800 lg:text-lg lg:leading-8">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center pt-4 space-x-6 border-t border-gray-900 lg:pl-4 lg:space-x-0 lg:border-l lg:border-t-0">
                      <div className="inline-block w-12 h-12 lg:hidden">
                        <Image
                          alt=""
                          className="rounded-full"
                          height={48}
                          src={project.assetPath}
                          width={48}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-end w-full">
            <NextLink href="/projects" passHref>
              <a className="px-6 py-2 transition-colors duration-200 ease-in-out bg-indigo-100 rounded-lg group hover:bg-indigo-200">
                <Icon
                  className="w-8 h-8 text-indigo-500 group-hover:text-pink-500"
                  name="arrowRight"
                />
              </a>
            </NextLink>
          </div>
          <hr className="border-red-500" /> */}
          <div className="mx-4 md:mx-0 lg:text-center">
            <p className="font-semibold leading-6 tracking-wide text-indigo-600 uppercase dark:text-aura-purple text-md lg:text-xl">
              Contact Me
            </p>
            <p className="max-w-2xl my-4 text-xl leading-9 text-gray-500 lg:text-xl lg:mx-auto">
              You can schedule a time to chat with me via phone or Google Meet
              using Appointlet; and if you are interested in hiring me grab my
              resume below.
            </p>
            <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:justify-evenly">
              <ScheduleButton />
              <div className="flex justify-center">
                <a
                  aria-label={constants.externalLinks.resume.label}
                  className="text-white bg-indigo-500 shadow-md hover:shadow-none shadow-indigo-300 dark:shadow-aura-gray dark:bg-aura-pink dark:text-aura-black dark:hover:bg-aura-purple-fading dark:hover:text-aura-white transition duration-200 ease-in-out rounded-lg inline-flex items-center px-4 py-2.5 no-underline font-semibold hover:bg-indigo-300 hover:text-pink-600 transform hover:scale-95 space-x-2"
                  href={constants.externalLinks.resume.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon name="resume" />
                  <span>Cody&apos;s Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllPostsFrontMatter()

  return {
    props: {
      posts: posts.reverse().slice(0, 5),
    },
  }
}

export default Home
