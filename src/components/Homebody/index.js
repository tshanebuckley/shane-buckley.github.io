import React from 'react'
import Link from '@docusaurus/Link'
import Image from '@theme/IdealImage'
import useBaseUrl from '@docusaurus/useBaseUrl'
import TagsListInline from '@theme/TagsListInline'

import { Avatar } from '../ui/avatar'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Button } from '../ui/button'

import VerticalTimeline from '../Timeline'
// import SkillsCarousel from '../SkillsList'

function RecentBlogPostCard({ recentPost }) {
  const { blogData } = recentPost

  return (
    <Card className='flex w-full flex-col border-0 bg-transparent shadow-none'>
      <Link
        to={blogData.metadata.permalink}
        className='overflow-hidden rounded-lg transition-opacity hover:opacity-90'
      >
        <Image
          className='h-auto w-full object-cover'
          img={useBaseUrl(blogData.metadata.frontMatter.image)}
          alt={blogData.metadata.title}
          loading='lazy'
        />
      </Link>

      <CardContent className='mt-2 p-4'>
        <Link to={blogData.metadata.permalink} className='mt-4'>
          <p className='p-0 text-xl font-semibold'>{blogData.metadata.title}</p>
        </Link>

        <p className='mb-4 mt-2 line-clamp-2 dark:text-gray-400'>{blogData.metadata.description}</p>
        <div className='my-2 flex items-center gap-2'>
          {blogData.metadata.authors.map((author, index) => (
            <Link
              href={author.page.permalink}
              title={author.name}
              key={index}
              className='transition-opacity hover:opacity-80'
            >
              <Avatar>
                <Image
                  alt={author.name}
                  img={useBaseUrl(author.imageURL)}
                  className='aspect-square h-full w-full'
                />
              </Avatar>
            </Link>
          ))}

          <div className='text-sm dark:text-gray-400'>
            <span>{new Date(blogData.metadata.date).toLocaleDateString()}</span>
            <span className='mx-2'>•</span>
            <span>{Math.ceil(blogData.metadata.readingTime)} min read</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className='px-2'>
        {blogData.metadata.tags.length > 0 && (
          <div className='blog-tags flex flex-wrap gap-2'>
            <TagsListInline tags={blogData.metadata.tags} />
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

function HomeBodyHeader({ text }) {
  return (
    <div className='mb-16 text-center bg-input rounded-full h-10'>
      <h2 className='mb-4 text-3xl font-bold tracking-wide'>{text}</h2>
    </div>
  )
}

export default function HomeBody({ homePageBlogMetadata, recentPosts }) {
  const overview = `
  I'm a technology professional that loves to explore new and different programming technologies, languages, and strategies in my free time. I have a passion for working on scientific applications in the fields of bioinformatics and chemistry.
  `

  return (
    <div className='container my-8 max-w-7xl'>
      <HomeBodyHeader text="Overview"/>
      <Avatar className={'relative flex shrink-0 overflow-hidden rounded-full mx-auto w-52 h-52'}>
        <img src="https://github.com/tshanebuckley.png"></img>
      </Avatar>
      <br></br>
      <div className="max-w-2xl mx-auto p-2">
        <div className="space-y-6">
          <p className="text-primary text-resume text-gray-600 mt-1">{overview}</p>
        </div>
        <p className="text-primary text-resume text-gray-500">- Software Experience: 5 years</p>
        <p className="text-primary text-resume text-gray-500">- Bachelor's of Science in Bioinformatics</p>
        <p className="text-primary text-resume text-gray-500">- Expertise in implementing scientific domain functional requirements</p>
      </div>
      <br></br>
      <HomeBodyHeader text="Resume"/>
      <VerticalTimeline />
      <br></br>
      <HomeBodyHeader text={homePageBlogMetadata.blogTitle}/>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
        {recentPosts.map((recentPost, index) => (
          <div key={index}>
            <RecentBlogPostCard recentPost={recentPost} />
          </div>
        ))}
      </div>

      <div className='mt-8 text-center'>
        <Link to={homePageBlogMetadata.path}>
          <Button>See all</Button>
        </Link>
      </div>
    </div>
  )
}
