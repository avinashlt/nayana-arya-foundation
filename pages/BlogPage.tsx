import '../types';
import React, { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: 'announcement' | 'article' | 'report' | 'news';
  image: string;
  readTime: number;
  tags: string[];
}

const BLOG_ARTICLES: BlogPost[] = [
  {
    id: 1,
    title: 'Bengaluru Tech Firms Partner with Us for Digital Literacy Drive',
    excerpt: 'Leading tech companies in Bengaluru are joining hands with us to provide visually impaired children with cutting-edge assistive technology and coding skills.',
    content: `Leading tech companies in Bengaluru have come together for an unprecedented digital literacy initiative. In partnership with our foundation, companies like TCS, Infosys, and Wipro are providing:
    
- Professional mentors for coding bootcamps
- Donated hardware and software licenses
- Internship opportunities for our graduates
- Scholarship programs for advanced training

This collaboration marks a significant milestone in our mission. Over the past three months, we\'ve trained 50 children in basic programming, web development, and digital entrepreneurship. The response has been overwhelming, with 80% of participants expressing interest in pursuing technology careers.

Our newest batch of students is already working on real-world projects, developing accessible web applications and mobile apps. This hands-on experience is invaluable and opens doors to employment opportunities that were previously unavailable.`,
    author: 'Nayana Arya',
    date: 'December 15, 2024',
    category: 'announcement',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
    readTime: 5,
    tags: ['Technology', 'Partnership', 'Education'],
  },
  {
    id: 2,
    title: 'Annual Impact Report 2024: Key Achievements and Milestones',
    excerpt: 'Our 2024 annual report showcases our achievements, financial transparency, and future roadmap. See how your donations made a difference.',
    content: `2024 has been a transformative year for Nayana Arya Foundation. Our annual impact report reveals:

**Key Metrics:**
- 500+ children benefited from our programs
- 150+ active volunteers contributed 5,000+ hours
- 25+ community centers established in rural areas
- 90% success rate in mainstream school enrollment

**Financial Highlights:**
- Total donations received: ₹1.5 Crores
- Program expenses: ₹1.2 Crores (80%)
- Administrative costs: ₹0.3 Crores (20%)
- Zero debt, fully operational

**New Initiatives Launched:**
1. Rural Outreach Expansion Program
2. Technology Skills Bootcamp
3. Health and Wellness Initiative
4. Parent Support and Counseling Services

Our commitment to transparency means every rupee you donate is tracked and accounted for. Download our full annual report on our website.`,
    author: 'Anil Kumar (CFO)',
    date: 'December 10, 2024',
    category: 'report',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    readTime: 8,
    tags: ['Annual Report', 'Transparency', 'Impact'],
  },
  {
    id: 3,
    title: 'Understanding Assistive Technology: A Guide for Caregivers',
    excerpt: 'Learn about the assistive technologies that are changing the lives of visually impaired children and how caregivers can support their use.',
    content: `Assistive technology has revolutionized the way visually impaired individuals interact with the world. This comprehensive guide covers:

**Screen Readers:**
JAWS, NVDA, and VoiceOver are screen readers that convert text to speech or Braille. They allow users to navigate computers and smartphones independently.

**Magnification Software:**
For those with low vision, magnification tools can enlarge content on screens, making reading and computing more accessible.

**Refreshable Braille Displays:**
These devices convert digital text to Braille in real-time, allowing users to read documents, emails, and websites.

**Mobility Aids:**
GPS navigation, white canes with sensors, and mobility apps help users navigate physical spaces with confidence.

**Tips for Caregivers:**
1. Invest in quality assistive technology
2. Ensure regular training and support
3. Encourage independent exploration
4. Update software regularly
5. Connect with support communities

At our foundation, we provide training and support for all these technologies. Contact us to learn more.`,
    author: 'Rohan Verma',
    date: 'December 5, 2024',
    category: 'article',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?q=80&w=800&auto=format&fit=crop',
    readTime: 6,
    tags: ['Technology', 'Education', 'Guide'],
  },
  {
    id: 4,
    title: 'Success Story: Ravi\'s Journey from Student to Tech Mentor',
    excerpt: 'Read how Ravi transformed his life through our technology program and is now mentoring other visually impaired children.',
    content: `Ravi came to us three years ago, hesitant and uncertain about his future. Today, he\'s a confident young programmer and mentor.

**The Beginning:**
At age 16, Ravi had already faced rejection from three mainstream schools. His parents were desperate to find a path forward when they discovered our foundation. Despite his initial doubts, Ravi enrolled in our Technology & Accessibility Training program.

**The Transformation:**
Within six months, Ravi had mastered screen reader technology. By the end of the first year, he was writing code. By year two, he had created his first accessible web application. Today, he\'s working as a junior developer at a tech startup and mentoring 10+ students.

**His Advice:**
"Don\'t let anyone tell you what you can\'t do. Your abilities are so much greater than you think. I went from feeling lost to finding my passion. You can too."

**Impact:**
Ravi\'s story has inspired 25 other students to pursue technology careers. His mentorship has resulted in 3 successful internship placements. Most importantly, he\'s proof that blindness is not a barrier to success in technology.`,
    author: 'Priya Singh',
    date: 'November 28, 2024',
    category: 'news',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    readTime: 4,
    tags: ['Success Story', 'Technology', 'Inspiration'],
  },
];

interface BlogCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  const categoryColors: Record<string, string> = {
    announcement: 'bg-blue-100 text-blue-800',
    article: 'bg-purple-100 text-purple-800',
    report: 'bg-green-100 text-green-800',
    news: 'bg-orange-100 text-orange-800',
  };

  return (
    <article 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
      onClick={() => onClick(post)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(post);
        }
      }}
      aria-label={`Article: ${post.title}`}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase ${categoryColors[post.category]}`}>
          {post.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-ocean-blue-800 mb-2 line-clamp-2 group-hover:text-ocean-blue-600">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span>{post.author}</span>
          <span>{post.readTime} min read</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = BLOG_ARTICLES.filter(post => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories = Array.from(new Set(BLOG_ARTICLES.map(post => post.category)));

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-ocean-blue-800 tracking-tight">News & Blog</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest articles, announcements, and stories from the field.
          </p>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-lg focus:ring-ocean-blue-500 focus:border-ocean-blue-500 transition"
              aria-label="Search articles"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selectedCategory === null
                  ? 'bg-ocean-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              aria-pressed={selectedCategory === null}
            >
              All Articles
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                className={`px-6 py-2 rounded-full font-medium transition capitalize ${
                  selectedCategory === category
                    ? 'bg-ocean-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Article */}
        {filteredPosts.length > 0 && (
          <section className="mb-16 bg-ocean-blue-50 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8">
              <img 
                src={filteredPosts[0].image} 
                alt={filteredPosts[0].title} 
                className="w-full h-64 object-cover rounded-lg"
              />
              <div>
                <span className="text-sm font-bold text-ocean-blue-600 uppercase">{filteredPosts[0].category}</span>
                <h2 className="text-3xl font-bold text-ocean-blue-800 mt-2 mb-4">{filteredPosts[0].title}</h2>
                <p className="text-gray-600 mb-4">{filteredPosts[0].excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{filteredPosts[0].author}</span>
                  <span>{filteredPosts[0].date}</span>
                </div>
                <button
                  onClick={() => setSelectedPost(filteredPosts[0])}
                  className="bg-ocean-blue-600 text-white px-6 py-2 rounded-lg hover:bg-ocean-blue-700 transition"
                >
                  Read Full Article
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section>
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map(post => (
                <BlogCard key={post.id} post={post} onClick={setSelectedPost} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found. Try adjusting your search or filters.</p>
            </div>
          )}
        </section>
      </div>

      {/* Article Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedPost(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
        >
          <div 
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 id="article-modal-title" className="text-2xl font-bold text-ocean-blue-800">{selectedPost.title}</h2>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-80 object-cover rounded-lg mb-6" />
              <div className="mb-4 flex items-center justify-between text-sm text-gray-600">
                <span>{selectedPost.author}</span>
                <span>{selectedPost.date} • {selectedPost.readTime} min read</span>
              </div>
              <div className="prose max-w-none text-gray-700 space-y-4">
                {selectedPost.content.split('\n\n').map((paragraph, idx) => (
                  paragraph.startsWith('-') || paragraph.startsWith('**') ? (
                    <div key={idx} className="whitespace-pre-wrap">{paragraph}</div>
                  ) : (
                    <p key={idx}>{paragraph}</p>
                  )
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedPost.tags.map(tag => (
                  <span key={tag} className="bg-ocean-blue-100 text-ocean-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="w-full bg-ocean-blue-600 text-white px-4 py-2 rounded-lg hover:bg-ocean-blue-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
