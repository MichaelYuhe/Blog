import dynamic from 'next/dynamic'

const NotionPage = dynamic(() => import('@/components/NotionPage'))

const Announcement = ({ post, className }) => {
  if (!post) {
    return <></>
  }
  return <aside className="rounded shadow overflow-hidden mb-6">

           <h3 className="text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b">
                <i className="mr-2 fas fa-bullhorn" />
           公告</h3>

        {post && (<div id="announcement-content">
            <NotionPage post={post} className='text-center ' />
        </div>)}
</aside>
}
export default Announcement
