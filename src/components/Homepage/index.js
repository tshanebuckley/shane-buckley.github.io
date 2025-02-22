import Layout from '@theme/Layout'
import HomeBody from '../Homebody';

function HomepageHeader() {

  return (
    <header
      className='px-2 py-20 text-center text-slate-800'
      style={{
        backgroundImage: `url('/img/banner.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
    </header>
  )
}

export default function Home() { //{ homePageBlogMetadata, recentPosts }
  var home = (
    <Layout>
      <HomepageHeader />
      <main>
        {/* <HomeBody recentPosts={recentPosts} homePageBlogMetadata={homePageBlogMetadata} /> */}
        <HomeBody />
      </main>
    </Layout>
  )
  return home
}