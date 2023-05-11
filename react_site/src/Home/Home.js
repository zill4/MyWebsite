import Header from './Header.js'
import {
  ArrowPathIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import SlideShow from '../Components/SlideShow.js'
import Timeline from '../Components/Timeline.js'
import Footer from './Footer.js'
import PitchSection from './PitchSection.js'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const entries = [
  {
    date: '11/21 - 4/23',
    title: 'Shotcall',
    description:
    [
      "● Led development on iOS and Android mobile app improving experience of 80% of users.",
      "● Increased file upload from ~10MB to over 2GB  by using AWS MediaConvert to trigger Lambda HLS conversion for video content, developed across the stack; Java Spring, Python Lambda, and TypeScript React.",
      "● Developed backend image watermarking with NodeJS Lambda enabling server side watermarking of content.",
      "● Helped ship features such as Events, Messaging, Feed, Discord Bot, Subscriptions, and bank linking."
    ] 
  },
  {
    date: '5/21 - 11/21',
    title: 'Warlok',
    description: [
      "● Warlok helps content creators connect with businesses, other creators, and fans by providing a place for all three to communicate and share.",
      "● Built using NextJS hosted on Firebase using cloud functions and styled with TailwindCSS."
    ],
  },
  {
    date: '5/19 - 9/20',
    title: 'Samsung',
    description: [
"● Helped populate the Bixby Marketplace from initial Capsule count of less than 20 live Capsules to over 150, over 700% growth, in less than 6-months.",
"● Built sample projects for potential developers, content creators, and small businesses for partnerships to populate the Bixby Marketplace."
    ],
  },
  {
    date: '2/19 - 5/19',
    title: 'Code for fun',
    description: [
"● Facilitated 15+ workshops at K-12 schools, teaching children hands-on lessons about computer hardware and software through Code.org exercises.",
"● Led weekly class in Los Robles McNair Academy for underprivileged children learning game development with Scratch.io (JavaScript abstracted language)."
    ],
  },
  {
    date: '6/18 - 5/19',
    title: '42 Silicon Valley',
    description: ["42 Ambassador program, where students assist the school in 3rd party hosting, planning, and outreach. Volunteering with the Events, Audio Visual, and Cafeteria teams on almost a daily basis."],
  },
  {
    date: '8/17 - 6/18',
    title: 'RingCentral',
    description: ["● Used Word Vector NLP model to accurately capture user sentiment targeting specific product features based on survey responses to prioritize bug fixes and product roadmap decisions."],
  },
  {
    date: '9/15 - 6/18',
    title: 'De Anza College',
    description: [],
  },
  {
    date: '12/96 - 9/15',
    title: 'HOME',
    description: [],
  },
];

const images = [
  'https://img.itch.zone/aW1nLzEyMDcyMDg5LnBuZw==/347x500/CARDtd.png',
  'https://img.itch.zone/aW1nLzM0OTEwMzAuanBn/original/kLStaT.jpg',
  'https://avatars.githubusercontent.com/u/14947372?v=4',
];

export default function Home() {

  return (
    <div className="bg-gray-400">
      <Header/>
      <main>
        {/* Hero section */}
        <div className="relative isolate pt-14">
        <PitchSection/>
        </div>

        {/* Logo cloud */}
        <div className="mx-auto max-w-7xl px-1 lg:px-8">
            <Timeline entries={entries} />    
          <div className="container mx-auto">
              <SlideShow images={images} />
            </div>
        </div>

      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
