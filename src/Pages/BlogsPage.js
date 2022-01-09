import React from 'react';
import allBlogs from '../utilits/allBlogs';
import Title from '../Components/Title';

function BlogsPage() {
  return (
    <div>
      <div className="b-title">
        <Title title={'Useful articles'} span={'Useful articles'}/>
      </div>
      <div className="BlogsPage">
        {
          allBlogs.map((blog) =>
            <div className="blog" key={blog.id}>
              <div className="blog-content">
                <img src={blog.image} alt={blog.title}/>
                <a href={blog.link} className="blog-link">
                  {blog.title}
                </a>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default BlogsPage;
