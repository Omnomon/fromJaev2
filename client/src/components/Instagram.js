import React from "react"

export default class Instagram extends React.Component{
	render(){
		return(

		<section className="recent_posts padbot40">
			
			{/*<!-- CONTAINER -->*/}
			<div className="container">
				<h2>New instagram posts</h2>
				
				{/*<!-- ROW -->*/}
				<div className="row" data-appear-top-offset='-100' data-animated='fadeInUp'>
					<div className="col-lg-6 col-md-6 padbot30">
						<div className="recent_post_item clearfix">
							<div className="recent_post_date">15<span>oct</span></div>
							<a className="recent_post_img" href="blog-post.html" ><img src="images/blog/recent1.jpg" alt="" /></a>
							<a className="recent_post_title" href="blog-post.html" >Be Unafraid, Self-Hosted WordPress Is WAY Easier Nowadays</a>
							<div className="recent_post_content">The beauty of self-hosted WordPress, is that you can build your site however you like, want to add forums to your website? Done. Want to add a ecommerce to your blog? Done.</div>
							<ul className="post_meta">
								<li><i className="fa fa-comments"></i>Commetcs <span className="sep">|</span> 15</li>
							</ul>
						</div>
					</div>
					
					<div className="col-lg-6 col-md-6 padbot30">
						<div className="recent_post_item clearfix">
							<div className="recent_post_date">07<span>dec</span></div>
							<a className="recent_post_img" href="blog-post.html" ><img src="images/blog/recent2.jpg" alt="" /></a>
							<a className="recent_post_title" href="blog-post.html" >True Story: I Went Two Weeks Without Social Media</a>
							<div className="recent_post_content">Since I began blogging 5.5 years ago, social media (and my blog) have taken hold on my life. I’ve been an early adopter for most major networks and use them extensively.  This past year I’ve been overwhelmed.</div>
							<ul className="post_meta">
								<li><i className="fa fa-comments"></i>Commetcs <span className="sep">|</span> 15</li>
							</ul>
						</div>
					</div>
				</div>{/*<!-- //ROW -->*/}
			</div>{/*<!-- //CONTAINER -->*/}
		</section>
		)
	}
}