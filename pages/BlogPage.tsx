import '../types';
import React, { useState } from 'react';
import { BLOG_ARTICLES, BlogPost } from '../constants';

const CATEGORY_COLORS: Record<string, string> = {
  announcement: 'bg-ocean-blue-100 text-ocean-blue-800',
  article: 'bg-purple-100 text-purple-800',
  report: 'bg-green-100 text-green-800',
  news: 'bg-warm-amber-100 text-warm-amber-800',
  event: 'bg-primary-red-100 text-primary-red-800',
};

const LocationBadge: React.FC<{ location?: string; className?: string }> = ({ location, className = '' }) => {
  if (!location) return null;
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-medium text-ocean-blue-700 ${className}`}>
      <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
      {location}
    </span>
  );
};

interface BlogCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => (
  <article
    className="bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group overflow-hidden border border-cream-200 flex flex-col"
    onClick={() => onClick(post)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick(post);
      }
    }}
    aria-label={`Article: ${post.title}`}
  >
    <div className="relative overflow-hidden h-48">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${CATEGORY_COLORS[post.category]}`}>
        {post.category}
      </span>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <LocationBadge location={post.location} className="mb-2" />
      <h3 className="text-lg font-bold text-ocean-blue-800 mb-2 line-clamp-2 group-hover:text-primary-red-600 transition-colors">{post.title}</h3>
      <p className="text-neutral-600 text-sm mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
      <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
        <span>{post.date}</span>
        <span>{post.readTime} min read</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {post.tags.map(tag => (
          <span key={tag} className="text-xs bg-cream-100 text-neutral-700 px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </article>
);

const renderParagraph = (paragraph: string, idx: number) => {
  const trimmed = paragraph.trim();
  // Bulleted list block
  if (trimmed.startsWith('- ')) {
    return (
      <ul key={idx} className="list-disc pl-6 space-y-1">
        {trimmed.split('\n').map((line, i) => (
          <li key={i}>{line.replace(/^-\s*/, '')}</li>
        ))}
      </ul>
    );
  }
  // Numbered list block
  if (/^\d+\.\s/.test(trimmed)) {
    return (
      <ol key={idx} className="list-decimal pl-6 space-y-1">
        {trimmed.split('\n').map((line, i) => (
          <li key={i}>{line.replace(/^\d+\.\s*/, '')}</li>
        ))}
      </ol>
    );
  }
  // Heading followed by body lines (e.g. **Highlights:**\n- ...)
  if (trimmed.startsWith('**')) {
    const [headingLine, ...rest] = trimmed.split('\n');
    const heading = headingLine.replace(/\*\*/g, '');
    const body = rest.join('\n').trim();
    return (
      <div key={idx}>
        <h3 className="font-bold text-ocean-blue-800 mb-2">{heading}</h3>
        {body && (body.startsWith('- ') || /^\d+\.\s/.test(body)
          ? renderParagraph(body, idx * 1000)
          : <p className="whitespace-pre-wrap">{body}</p>)}
      </div>
    );
  }
  return <p key={idx} className="whitespace-pre-wrap">{trimmed}</p>;
};

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = BLOG_ARTICLES.filter(post => {
    const term = searchTerm.toLowerCase();
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      (post.location ?? '').toLowerCase().includes(term) ||
      post.tags.some(tag => tag.toLowerCase().includes(term));
    return matchesCategory && matchesSearch;
  });

  const categories = Array.from(new Set(BLOG_ARTICLES.map(post => post.category)));
  const bengaluruCount = BLOG_ARTICLES.filter(p => p.tags.includes('Bengaluru') || (p.location ?? '').includes('Bengaluru')).length;

  return (
    <div className="bg-cream-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-14 animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-red-600">Stories from the field</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-ocean-blue-800 tracking-tight">News, Events & Blog</h1>
          <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
            What our children, families and volunteers have been up to across Bengaluru, and the lessons we are learning along the way.
          </p>
          <p className="mt-3 text-sm text-neutral-500">
            {bengaluruCount} stories from activities in and around Bengaluru
          </p>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="mb-6 relative max-w-2xl mx-auto">
            <ion-icon name="search-outline" class="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-neutral-400" aria-hidden="true"></ion-icon>
            <input
              type="text"
              placeholder="Search by title, place (e.g. Cubbon Park) or topic…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-3 bg-white border-2 border-cream-200 rounded-full focus:ring-2 focus:ring-ocean-blue-400 focus:border-ocean-blue-400 transition shadow-soft"
              aria-label="Search articles"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selectedCategory === null
                  ? 'bg-ocean-blue-600 text-white shadow-soft'
                  : 'bg-white text-neutral-700 hover:bg-ocean-blue-50 border border-cream-200'
              }`}
              aria-pressed={selectedCategory === null}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                className={`px-6 py-2 rounded-full font-medium transition capitalize ${
                  selectedCategory === category
                    ? 'bg-ocean-blue-600 text-white shadow-soft'
                    : 'bg-white text-neutral-700 hover:bg-ocean-blue-50 border border-cream-200'
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
          <section className="mb-16 bg-white rounded-3xl overflow-hidden shadow-soft-lg border border-cream-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
              <img
                src={filteredPosts[0].image}
                alt={filteredPosts[0].title}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${CATEGORY_COLORS[filteredPosts[0].category]}`}>{filteredPosts[0].category}</span>
                  <LocationBadge location={filteredPosts[0].location} />
                </div>
                <h2 className="text-3xl font-bold text-ocean-blue-800 mt-4 mb-4 leading-tight">{filteredPosts[0].title}</h2>
                <p className="text-neutral-600 mb-6 text-lg">{filteredPosts[0].excerpt}</p>
                <div className="flex items-center justify-between text-sm text-neutral-500 mb-6">
                  <span>{filteredPosts[0].author}</span>
                  <span>{filteredPosts[0].date} · {filteredPosts[0].readTime} min read</span>
                </div>
                <div>
                  <button
                    onClick={() => setSelectedPost(filteredPosts[0])}
                    className="bg-primary-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-red-700 transition shadow-soft hover:shadow-soft-lg"
                  >
                    Read the full story
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section>
          {filteredPosts.length > 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map(post => (
                <BlogCard key={post.id} post={post} onClick={setSelectedPost} />
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-cream-200">
              <ion-icon name="leaf-outline" class="text-5xl text-ocean-blue-300" aria-hidden="true"></ion-icon>
              <p className="text-neutral-600 text-lg mt-4">We couldn't find a story matching that. Try another word or clear the filters.</p>
            </div>
          ) : null}
        </section>
      </div>

      {/* Article Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-ocean-blue-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedPost(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-soft-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-cream-200 p-6 flex justify-between items-start gap-4 rounded-t-3xl">
              <h2 id="article-modal-title" className="text-2xl font-bold text-ocean-blue-800 leading-snug">{selectedPost.title}</h2>
              <button
                onClick={() => setSelectedPost(null)}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-cream-100 hover:bg-cream-200 text-neutral-600 text-2xl leading-none flex items-center justify-center transition"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="p-6 md:p-8">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-80 object-cover rounded-2xl mb-6" />
              <div className="mb-6 flex flex-wrap items-center justify-between gap-2 text-sm text-neutral-600">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${CATEGORY_COLORS[selectedPost.category]}`}>{selectedPost.category}</span>
                  <LocationBadge location={selectedPost.location} />
                </div>
                <span>{selectedPost.author} · {selectedPost.date} · {selectedPost.readTime} min read</span>
              </div>
              <div className="prose max-w-none text-neutral-700 text-lg leading-relaxed space-y-5">
                {selectedPost.content.split(/\n\s*\n/).map((paragraph, idx) => renderParagraph(paragraph, idx))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {selectedPost.tags.map(tag => (
                  <span key={tag} className="bg-ocean-blue-50 text-ocean-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-cream-200">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="w-full bg-ocean-blue-600 text-white px-4 py-3 rounded-full font-semibold hover:bg-ocean-blue-700 transition"
                >
                  Back to all stories
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
