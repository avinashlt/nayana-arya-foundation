
export const TEAM_MEMBERS = [
  { name: 'Nayana Arya', role: 'Founder & CEO', bio: 'Nayana founded the organization with a passion for empowering visually impaired children, driven by personal experiences.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
  { name: 'Rohan Verma', role: 'Director of Programs', bio: 'Rohan has over 15 years of experience in educational program development for children with special needs.', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop' },
  { name: 'Priya Singh', role: 'Head of Community Outreach', bio: 'Priya connects our mission with volunteers and donors, building a strong community of support.', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop' },
  { name: 'Anil Kumar', role: 'Chief Financial Officer', bio: 'Anil ensures our financial transparency and sustainability, making every donation count.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' },
];

export type BlogCategory = 'announcement' | 'article' | 'report' | 'news' | 'event';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: BlogCategory;
  image: string;
  readTime: number;
  tags: string[];
  /** Neighbourhood / venue in and around Bengaluru where the activity happened. */
  location?: string;
}

export const BLOG_ARTICLES: BlogPost[] = [
  {
    id: 101,
    title: 'Sensory Nature Walk at Cubbon Park: Learning the City Through Touch, Sound and Scent',
    excerpt: '42 children explored Cubbon Park with volunteer guides, identifying trees by bark and leaf texture, listening for birds, and mapping the park by sound.',
    content: `On a cool Sunday morning, 42 of our children and 30 volunteers gathered at the Cubbon Park bandstand for our first guided sensory walk of the year.

**What we did:**
- Volunteers from the Bengaluru Birdwatchers' group helped children identify koels, mynas and parakeets by their calls
- Children compared the bark of rain trees, gulmohar and silver oak by touch and built a "texture map" of the trail
- A tactile scale model of the park, built by students of a city architecture college, helped children understand the layout before we set off
- We finished with a picnic near the State Central Library, where staff gave a short talk on the Braille section

**Why it matters:**
Many of our children live in dense neighbourhoods and rarely get unstructured time in green spaces. Orientation and mobility skills grow fastest in environments that are safe but unfamiliar. One nine-year-old told us, "I didn't know trees could feel so different from each other." That sentence alone made the morning worth it.

We plan to make this a quarterly event. If you can volunteer as a sighted guide, we would love to hear from you.`,
    author: 'Priya Singh',
    date: 'October 12, 2025',
    category: 'event',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop',
    readTime: 4,
    tags: ['Bengaluru', 'Outdoor', 'Mobility'],
    location: 'Cubbon Park, Central Bengaluru',
  },
  {
    id: 102,
    title: 'Blind Cricket Friendly at Kanteerava: Our Children Meet Karnataka\'s State Players',
    excerpt: 'A morning of blind cricket at Sree Kanteerava Stadium where our children learned the audible-ball game from Karnataka\'s visually impaired cricketers.',
    content: `Cricket is everywhere in Bengaluru, and our children are no exception in their love for it. This month we partnered with members of the Karnataka blind cricket team for a coaching session and a friendly match at Sree Kanteerava Stadium.

**Highlights:**
- 28 children (ages 9 to 16) were introduced to the audible ball, which has ball bearings inside so it can be tracked by sound
- State players ran drills on bowling underarm, batting by sound, and calling out positions
- Three mixed teams of children and volunteers played a six-over match. The final was decided on the last ball.
- Families watched from the stands, and several parents said it was the first time they had seen their child play a team sport

**What comes next:**
We have been offered a weekly slot on a practice ground in Jayanagar. Starting next month, we will run a Saturday blind cricket club. Equipment has been sponsored by a local sports goods store in Chickpet.

Sport teaches confidence, teamwork and resilience in a way classrooms cannot. We are grateful to the players who gave their Sunday to our children.`,
    author: 'Rohan Verma',
    date: 'September 21, 2025',
    category: 'event',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop',
    readTime: 4,
    tags: ['Bengaluru', 'Sports', 'Confidence'],
    location: 'Sree Kanteerava Stadium, Sampangi Rama Nagar',
  },
  {
    id: 103,
    title: 'Riding Namma Metro Independently: Our Orientation & Mobility Workshop',
    excerpt: 'Twenty teenagers learned to navigate Namma Metro on their own, from tactile paving at MG Road to platform announcements and ticket counters.',
    content: `Independence in a city like Bengaluru starts with being able to get around it. Our orientation and mobility team spent two weekends teaching 20 teenagers to use Namma Metro without a sighted companion.

**The route:**
We started at MG Road station and travelled to Indiranagar and back, then practised interchanges at Majestic (Nadaprabhu Kempegowda station).

**Skills covered:**
- Following tactile paving from the entrance to the platform
- Using the help desk and asking station staff for assistance confidently
- Understanding platform announcements and door chimes
- Locating priority seating and emergency intercoms
- Planning a route with an accessible journey app

**A note of thanks:**
BMRCL station staff at MG Road and Indiranagar were patient and welcoming. One station controller stayed past his shift to walk the group through the ticketing process twice.

By the end of the second weekend, 17 of the 20 participants completed a solo trip between two stations while a volunteer followed at a distance. Several have since started using the Metro to reach our centre on their own.`,
    author: 'Rohan Verma',
    date: 'August 30, 2025',
    category: 'news',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=800&auto=format&fit=crop',
    readTime: 5,
    tags: ['Bengaluru', 'Mobility', 'Independence'],
    location: 'MG Road, Indiranagar & Majestic Metro stations',
  },
  {
    id: 104,
    title: 'Deepavali at Murugeshpalaya: A Festival of Sound, Scent and Sweets',
    excerpt: 'Our annual Deepavali celebration brought 120 children, families and neighbours together at our KR Garden centre for music, clay-diya making and a community feast.',
    content: `Deepavali is called the festival of lights, but at our centre it is also a festival of sound, scent and taste. This year over 120 children, parents and neighbours from Murugeshpalaya and HAL 2nd Stage joined us.

**The day included:**
- A clay diya workshop led by a potter from Pottery Town, where children shaped and painted their own lamps
- A rangoli made with textured materials (rice, pulses, flower petals) so every child could create and feel the pattern
- Live music from a volunteer group of Carnatic students, followed by an open mic where our children sang and recited
- A community lunch cooked by mothers from our parent support group
- Sparkler-free celebrations: we chose sound-based and scent-based activities so the evening was comfortable for every child

**Thank you:**
Local shopkeepers on 2nd Main donated sweets and snacks, and a neighbourhood residents' association sponsored the decorations.

Festivals are where children feel most included or most left out. We work hard to make sure ours are the former.`,
    author: 'Nayana Arya',
    date: 'October 20, 2025',
    category: 'event',
    image: 'https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?q=80&w=800&auto=format&fit=crop',
    readTime: 3,
    tags: ['Bengaluru', 'Festival', 'Community'],
    location: 'KR Garden, Murugeshpalaya',
  },
  {
    id: 105,
    title: 'Audio-Described Movie Morning in Koramangala',
    excerpt: 'A Koramangala multiplex opened its doors early so 60 children could watch a Kannada family film with full audio description and tactile posters.',
    content: `For most of our children, going to the cinema has meant sitting beside a sibling who whispers what is happening. This month, a multiplex in Koramangala hosted a private audio-described screening of a popular Kannada family film.

**How it worked:**
- Volunteers from a Bengaluru accessibility collective wrote and recorded the audio description track
- Each child received a headset so the description played alongside the film's own sound
- Before the show, children explored tactile versions of the film poster and the main characters' costumes
- The theatre lowered the volume slightly and kept the lights dim rather than fully dark for children with low vision

**The response:**
"I laughed at the same time as everyone else," one twelve-year-old told us afterwards. For a child who has spent years half a second behind the room, that is a big deal.

The multiplex has agreed to host one accessible screening every quarter. We are also in conversation with two Kannada production houses about including audio description in future releases.`,
    author: 'Priya Singh',
    date: 'July 19, 2025',
    category: 'event',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop',
    readTime: 3,
    tags: ['Bengaluru', 'Accessibility', 'Inclusion'],
    location: 'Koramangala',
  },
  {
    id: 106,
    title: 'Hands-On Science at Visvesvaraya Museum: A Tactile Tour',
    excerpt: 'Museum staff and our volunteers guided 35 children through the Visvesvaraya Industrial and Technological Museum using touch-friendly exhibits and 3D-printed models.',
    content: `Science should be felt, not just seen. We worked with the Visvesvaraya Industrial and Technological Museum on Kasturba Road to design a tactile tour for 35 of our students.

**What the children explored:**
- The Engine Hall, where staff allowed supervised touch of a steam engine's pistons and gears
- 3D-printed scale models of the museum's aircraft and the Wright Flyer, printed by a maker space in HSR Layout
- The Fun Science gallery, where sound and vibration exhibits were already naturally accessible
- A "mystery box" session where children identified machine parts by touch and described their function

**Learning outcomes:**
Our teachers used the visit to anchor lessons on simple machines and energy for the following two weeks. Test scores on the unit were the highest we have recorded.

We are grateful to the museum's education team, who have now asked us to help audit the accessibility of their upcoming galleries.`,
    author: 'Rohan Verma',
    date: 'June 14, 2025',
    category: 'news',
    image: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?q=80&w=800&auto=format&fit=crop',
    readTime: 4,
    tags: ['Bengaluru', 'STEM', 'Education'],
    location: 'Visvesvaraya Museum, Kasturba Road',
  },
  {
    id: 107,
    title: 'Running for Vision: Volunteers Raise ₹8.2 Lakhs at the Bengaluru Marathon',
    excerpt: '64 runners, including 6 of our older students running with guide runners, took part in the Bengaluru Marathon to raise funds for our assistive technology lab.',
    content: `This year's Bengaluru Marathon saw our biggest ever team: 64 runners in Nayana Arya Foundation jerseys, including six of our students aged 15 to 18 who ran the 10K tethered to guide runners.

**The numbers:**
- ₹8.2 lakhs raised through individual fundraising pages
- 64 runners across the 10K and half marathon
- 6 student runners completing their first ever race
- 11 guide runners trained over eight weeks at Kanteerava Stadium

**Where the money goes:**
Every rupee is going towards our assistive technology lab at the Murugeshpalaya centre: refreshable Braille displays, screen-reader licences, and a dedicated accessibility trainer for the next twelve months.

**A student's words:**
"When I crossed the finish line I could hear hundreds of people cheering. I didn't know they were cheering for me until my guide told me. I cried a little."

Thank you to everyone who ran, donated, or stood at the roadside with a drum.`,
    author: 'Anil Kumar (CFO)',
    date: 'May 25, 2025',
    category: 'news',
    image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=800&auto=format&fit=crop',
    readTime: 4,
    tags: ['Bengaluru', 'Fundraising', 'Sports'],
    location: 'Sree Kanteerava Stadium & Cubbon Road',
  },
  {
    id: 108,
    title: 'Clay, Texture and Colour: Art Workshop at Chitrakala Parishath',
    excerpt: 'Art students at Karnataka Chitrakala Parishath hosted a two-day workshop in tactile art, culminating in a small exhibition open to the public.',
    content: `Art is often assumed to be a visual experience. Over two days at Karnataka Chitrakala Parishath, 30 of our children and 15 fine-arts students showed how wrong that assumption is.

**Day one: making**
- Clay sculpture: children shaped animals, faces and household objects
- Textured painting: thickened paints, sand, and fabric scraps so compositions could be read by touch
- Sound-to-colour: a facilitator played short pieces of music and children chose textures they felt matched

**Day two: showing**
The children's work was exhibited in a small gallery alongside descriptive labels in Braille and large print. Over 200 visitors came through, including families, students and passers-by from Kumara Krupa Road.

**What we learned:**
Several children who are shy in classroom settings were confident and articulate when explaining their work. Two of them have asked if they can continue weekly art sessions, and the Parishath students have volunteered to run them.

Proceeds from the small works sold on day two were split between the young artists and our education fund.`,
    author: 'Priya Singh',
    date: 'April 12, 2025',
    category: 'event',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop',
    readTime: 3,
    tags: ['Bengaluru', 'Art', 'Expression'],
    location: 'Karnataka Chitrakala Parishath, Kumara Krupa Road',
  },
  {
    id: 109,
    title: 'Lalbagh Flower Show: An Accessible Tour Through Scent and Touch',
    excerpt: 'Horticulture department staff opened the Lalbagh flower show early for our children, offering a guided tour built around fragrance, texture and sound.',
    content: `The Lalbagh flower show draws lakhs of visitors each Independence Day week. Thanks to the Department of Horticulture, 50 of our children got a quiet early-morning tour before the gates opened to the public.

**The tour:**
- A scent trail through jasmine, rose, tuberose and marigold beds, with staff naming each flower and sharing its uses in Karnataka's festivals
- Touch stations with petals, seed pods and bark from the garden's heritage trees
- A visit to the Glass House, where a guide described the floral sculptures and children felt the structural framework
- Time at the lake, listening to the birds and the fountains

**Our favourite moment:**
A horticulturist handed a six-year-old a fresh sampige (champaka) flower and said, "This is Bengaluru's smell." She kept it in her pocket all day.

We are hopeful this becomes a permanent part of the flower show's programme. Please write to the department and tell them you'd like to see that too.`,
    author: 'Nayana Arya',
    date: 'August 10, 2025',
    category: 'event',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop',
    readTime: 3,
    tags: ['Bengaluru', 'Outdoor', 'Nature'],
    location: 'Lalbagh Botanical Garden',
  },
  {
    id: 110,
    title: 'Whitefield Tech Campus Visit: Students Meet Engineers Working on Accessibility',
    excerpt: 'Our senior students spent a day at a Whitefield technology campus, meeting accessibility engineers and testing screen readers on real products.',
    content: `Our Technology & Accessibility Training programme took a field trip this month to a technology campus in Whitefield, where a team of accessibility engineers hosted 18 of our senior students for a full day.

**The programme:**
- A session on how screen readers are tested in large software products
- Hands-on time with the latest refreshable Braille displays and smart glasses
- A panel where three visually impaired professionals shared their career paths
- A usability lab where our students tested an internal app and gave feedback that the team committed to acting on

**Student feedback:**
"I always thought accessibility was something done for us. Today I saw it is something we can do." (Age 17)

**Outcome:**
The company has offered two paid summer internships for our students in 2026, and their employee volunteer group will run monthly coding evenings at our Murugeshpalaya centre starting in January.

If your company would like to host a similar day, please contact our admin team.`,
    author: 'Rohan Verma',
    date: 'March 15, 2025',
    category: 'announcement',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    readTime: 4,
    tags: ['Bengaluru', 'Technology', 'Careers'],
    location: 'Whitefield',
  },
  {
    id: 1,
    title: 'Bengaluru Tech Firms Partner with Us for Digital Literacy Drive',
    excerpt: 'Leading tech companies in Bengaluru are joining hands with us to provide visually impaired children with cutting-edge assistive technology and coding skills.',
    content: `Leading tech companies in Bengaluru have come together for an unprecedented digital literacy initiative. In partnership with our foundation, companies like TCS, Infosys, and Wipro are providing:
    
- Professional mentors for coding bootcamps
- Donated hardware and software licenses
- Internship opportunities for our graduates
- Scholarship programs for advanced training

This collaboration marks a significant milestone in our mission. Over the past three months, we've trained 50 children in basic programming, web development, and digital entrepreneurship. The response has been overwhelming, with 80% of participants expressing interest in pursuing technology careers.

Our newest batch of students is already working on real-world projects, developing accessible web applications and mobile apps. This hands-on experience is invaluable and opens doors to employment opportunities that were previously unavailable.`,
    author: 'Nayana Arya',
    date: 'December 15, 2024',
    category: 'announcement',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
    readTime: 5,
    tags: ['Technology', 'Partnership', 'Education'],
    location: 'Bengaluru',
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
    image: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=800&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1497375638960-ca368c7231e4?q=80&w=800&auto=format&fit=crop',
    readTime: 6,
    tags: ['Technology', 'Education', 'Guide'],
  },
  {
    id: 4,
    title: 'Success Story: Ravi\'s Journey from Student to Tech Mentor',
    excerpt: 'Read how Ravi transformed his life through our technology program and is now mentoring other visually impaired children.',
    content: `Ravi came to us three years ago, hesitant and uncertain about his future. Today, he's a confident young programmer and mentor.

**The Beginning:**
At age 16, Ravi had already faced rejection from three mainstream schools. His parents were desperate to find a path forward when they discovered our foundation. Despite his initial doubts, Ravi enrolled in our Technology & Accessibility Training program.

**The Transformation:**
Within six months, Ravi had mastered screen reader technology. By the end of the first year, he was writing code. By year two, he had created his first accessible web application. Today, he's working as a junior developer at a tech startup and mentoring 10+ students.

**His Advice:**
"Don't let anyone tell you what you can't do. Your abilities are so much greater than you think. I went from feeling lost to finding my passion. You can too."

**Impact:**
Ravi's story has inspired 25 other students to pursue technology careers. His mentorship has resulted in 3 successful internship placements. Most importantly, he's proof that blindness is not a barrier to success in technology.`,
    author: 'Priya Singh',
    date: 'November 28, 2024',
    category: 'news',
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop',
    readTime: 4,
    tags: ['Success Story', 'Technology', 'Inspiration'],
  },
];

/** The three most recent posts, shown on the home page. */
export const BLOG_POSTS = BLOG_ARTICLES.slice(0, 3);

export const CSR_INFO = {
  contactEmail: 'admin@nayanaaryafoundation.in',
  contactPhone: '+91 8310551091',
  contactPhoneHref: 'tel:+918310551091',
  address: '21 2nd Main, KR Garden, Murugeshpalaya, Bengaluru 560017',
  focusAreas: [
    {
      icon: 'school-outline',
      title: 'Education & Early Intervention',
      description: 'Sponsor a classroom, a year of Braille and large-print learning materials, or a specialist teacher for children aged 3 to 14.',
      scheduleVII: 'Schedule VII (ii): Promoting education, including special education for the differently abled',
    },
    {
      icon: 'laptop-outline',
      title: 'Assistive Technology Lab',
      description: 'Fund refreshable Braille displays, screen-reader licences, accessible laptops and a dedicated technology trainer at our Bengaluru centre.',
      scheduleVII: 'Schedule VII (ii): Employment-enhancing vocational skills',
    },
    {
      icon: 'medkit-outline',
      title: 'Eye Health & Nutrition Camps',
      description: 'Support quarterly eye-screening and nutrition camps in underserved Bengaluru neighbourhoods and nearby rural taluks.',
      scheduleVII: 'Schedule VII (i): Promoting health care including preventive health care',
    },
    {
      icon: 'people-outline',
      title: 'Employee Volunteering',
      description: 'Structured volunteering days for your teams: sighted-guide walks, reading sessions, coding evenings, and accessibility audits of your own products.',
      scheduleVII: 'Builds inclusion within your workforce while serving the community',
    },
  ],
  howItWorks: [
    { step: 'Conversation', text: 'Tell us your CSR priorities, budget window and geography. We will suggest programmes that match.' },
    { step: 'Proposal', text: 'We share a detailed proposal with outcomes, timelines, a line-item budget and the monitoring plan.' },
    { step: 'Agreement', text: 'We sign a simple MoU covering deliverables, fund utilisation, reporting and brand usage.' },
    { step: 'Implementation', text: 'Programmes run at our Murugeshpalaya centre and partner sites across Bengaluru. Your team is welcome to visit at any time.' },
    { step: 'Reporting', text: 'Quarterly progress updates, a year-end impact report, audited utilisation certificates and photo/story content you can share.' },
  ],
  assurances: [
    'Registered NGO based in Bengaluru, Karnataka',
    '12A and 80G certificates and CSR-1 registration details shared on request',
    'Annual accounts audited by an independent chartered accountant',
    'Programme and administrative costs reported separately every year',
    'Child-safeguarding policy and volunteer background checks in place',
  ],
};

export const PROGRAMS = [
    {
        title: 'Early Intervention & Education',
        description: 'Providing specialized education for visually impaired children from an early age to build a strong foundation for their future.',
        icon: 'school-outline',
        image: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=600&auto=format&fit=crop',
        impact: 'Over 500 children have graduated from our early education programs, many going on to mainstream schools.'
    },
    {
        title: 'Technology & Accessibility Training',
        description: 'Equipping children with essential assistive technology skills, including screen readers and Braille devices, to navigate the digital world.',
        icon: 'laptop-outline',
        image: 'https://images.unsplash.com/photo-1497375638960-ca368c7231e4?q=80&w=600&auto=format&fit=crop',
        impact: 'Our students report a 90% increase in confidence and independence after completing the tech program.'
    },
    {
        title: 'Children Empowerment in Rural Areas',
        description: 'Reaching remote communities to ensure that geographical barriers do not prevent children from receiving the support they need.',
        icon: 'leaf-outline',
        image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=600&auto=format&fit=crop',
        impact: 'Established 15 outreach centers in rural districts, serving over 200 children annually.'
    },
];

export const VOLUNTEER_STORIES = [
    { name: 'Sunita Sharma', quote: "Volunteering here has been the most fulfilling experience of my life. Seeing the children's progress firsthand is a reward in itself.", image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop' },
    { name: 'Rajesh Patel', quote: "The organization is incredibly well-run and truly makes a difference. I'm proud to be part of this community.", image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop' },
];