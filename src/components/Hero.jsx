import React from 'react'

const Hero = () => {
  const featuredBlogs = [
    {
      id: 1,
      title: "Breaking: Major Economic Policy Shift",
      category: "Economy",
      date: "May 27, 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
      excerpt: "Global markets respond to unprecedented policy changes..."
    },
    {
      id: 2,
      title: "Tech Giants Announce Breakthrough in AI",
      category: "Technology",
      date: "May 26, 2025",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3",
      excerpt: "Revolutionary developments in artificial intelligence..."
    },
    {
      id: 3,
      title: "Climate Summit Reaches Historic Agreement",
      category: "Environment",
      date: "May 25, 2025",
      image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?ixlib=rb-4.0.3",
      excerpt: "World leaders unite in groundbreaking climate initiative..."
    },

    {
      id: 4,
      title: "Space Exploration Milestone Achieved",
      category: "Science",
      date: "May 27, 2025",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3",
      excerpt: "Historic breakthrough in deep space exploration..."
    },
    {
      id: 5,
      title: "Global Health Initiative Launched",
      category: "Health",
      date: "May 26, 2025",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3",
      excerpt: "International cooperation for pandemic preparedness..."
    },
    {
      id: 6,
      title: "Revolutionary Green Energy Project",
      category: "Environment",
      date: "May 25, 2025",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3",
      excerpt: "Breakthrough in sustainable energy production..."
    },
    {
      id: 7,
      title: "Quantum Computing Breakthrough",
      category: "Technology",
      date: "May 27, 2025",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3",
      excerpt: "Scientists achieve quantum supremacy with new processor design..."
    },
    {
      id: 8,
      title: "Global Market Recovery",
      category: "Finance",
      date: "May 26, 2025",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3",
      excerpt: "Stock markets show signs of strong recovery worldwide..."
    },
    {
      id: 9,
      title: "New Cancer Treatment Discovery",
      category: "Health",
      date: "May 26, 2025",
      image: "https://images.unsplash.com/photo-1576671081803-5f97a7f31f31?ixlib=rb-4.0.3",
      excerpt: "Revolutionary therapy shows promising results in clinical trials..."
    },
    {
      id: 10,
      title: "Renewable Energy Milestone",
      category: "Environment",
      date: "May 25, 2025",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3",
      excerpt: "Solar power achieves cost parity with fossil fuels globally..."
    },
    {
      id: 11,
      title: "Artificial Intelligence Ethics",
      category: "Technology",
      date: "May 25, 2025",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3",
      excerpt: "Global summit addresses AI governance and ethical guidelines..."
    },
    {
      id: 12,
      title: "Space Tourism Launch",
      category: "Science",
      date: "May 24, 2025",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3",
      excerpt: "First commercial space hotel announces opening date..."
    }
  ];

  const sidebarSections = [
    { title: "Breaking News", color: "red" },
    { title: "Top Stories", color: "blue" },
    { title: "Most Read", color: "green" },
    { title: "Trending", color: "purple" },
    { title: "Editor's Pick", color: "orange" },
    { title: "Latest Updates", color: "pink" }
  ];

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('/Francium2016.jpeg')] bg-cover bg-center"
        style={{
          opacity: 0.8
        }}
      />
      
      {/* Translucent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/25" />

      {/* Content Grid */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="flex gap-8">
          {/* Marquee Sidebar */}
          <div className="hidden lg:block w-64 h-[1460px] overflow-hidden backdrop-blur-md bg-white/10 rounded-xl shadow-xl">
            <div className="animate-marquee">
              {[...sidebarSections, ...sidebarSections].map((section, index) => (
                <div 
                  key={index}
                  className={`p-6 border-b border-white/10 hover:bg-${section.color}-600/20 transition-colors cursor-pointer group`}
                >
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {section.title}
                  </h3>
                  <div className="flex items-center text-gray-100 text-sm">
                    <span className={`w-2 h-2 rounded-full bg-${section.color}-500 mr-2`}></span>
                    {featuredBlogs[index % featuredBlogs.length].title.slice(0, 30)}...
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Blog Grid */}
          <div className="flex-1">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
              {featuredBlogs.map((blog) => (
                <div 
                  key={blog.id}
                  className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-xl"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"/>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-red-600 text-gray-50 text-sm font-medium rounded-full backdrop-blur-sm">
                        {blog.category}
                      </span>
                      <span className="text-white font-semibold text-sm">
                        {blog.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-100 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <button className="mt-4 text-red-400 font-medium hover:text-red-300 transition-colors flex items-center gap-2">
                      Read More 
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero