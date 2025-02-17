import Layout from '@theme/Layout'
//import Heading from '@theme/Heading'
//import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HomeBody from '../Homebody';
//import Banner from './Banner';

function HomepageHeader() {
  //const { siteConfig } = useDocusaurusContext()

  return (
    <header
      className='px-2 py-20 text-center text-slate-800'
      style={{
        backgroundImage: `url('/img/banner.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className='container'>
        {/* <Banner className={'mb-4 text-2xl font-bold md:text-3xl lg:text-5xl'}/> */}
        {/* <Heading as='h1' className='mb-4 text-2xl font-bold md:text-3xl lg:text-5xl'>
        </Heading> */}
      </div>
    </header>
  )
}

export default function Home({ homePageBlogMetadata, recentPosts }) {

  var home = (
    <Layout>
      <HomepageHeader />
      <main>
        <HomeBody recentPosts={recentPosts} homePageBlogMetadata={homePageBlogMetadata} />
      </main>
    </Layout>
  )
  //return <PokeApp child={home}></PokeApp>;
  return home
}