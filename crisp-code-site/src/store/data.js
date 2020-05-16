const data = {
    profileImage : "someurl",
    header : "Software Engineer",
    location : "San Jose, CA",
    objective : "It is my lifelong dream to work as a programmer in the game industry. As a software engineer, I am looking for challenging problems, passionate teams, and long hours in front a terminal creating magic. My skills are rooted in C programming, but extended to object-oriented abstractions like C++, Java, JavaScript, and Python. I have experience with Unreal Engine 4 and done VR development using Unity. Games are my passion, and my goal is to build them for the rest of my life. がんばります",
    news : ["link1","link2","link3","link4"],
    message : "hi",
    firstName : "Justin",
    lastName : "Crisp",
    middleName : "Lawrence",
    experience: [
        {
            title: 'Bixby Developer Relations',
            company: 'Samsung',
            location: 'Mountain View, CA',
            start: 'May 2019',
            end: 'present',
            img: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGAMic0n8G_5A/company-logo_100_100/0?e=1597276800&v=beta&t=eX04GnxJ9BFMp7deNXkLNUdElfWcBTXiGjEbnJVeMPs',
            bullets: [
                "•	Populated Bixby Marketplace from initial Capsule count of less than 20 live Capsules to over 150, over 700% growth, in less than 6-months.",
                "•	Managed multiple outreach campaigns for content creators, application developers, and voice developers.",
                "•	Provided Technical support for top tier Alexa and App Store developers from, idea to live on Bixby Marketplace."
            ]
        },
        {
            title: 'Technical Instructor',
            company: 'Code For Fun',
            location: 'Fremont, CA',
            start: 'Feb 2019',
            end: 'May 2019',
            img: 'https://media-exp1.licdn.com/dms/image/C560BAQHSVjrlIMgftQ/company-logo_100_100/0?e=1597276800&v=beta&t=gbI6_CgXtfFzlERH0vx9vriJwSPL7A314jv2TQgMuO8',
            bullets: [
                "• Facilitated multiple workshop events at K-12 schools, teaching children hands-on lessons about computer hardware and software through Code.org exercises.",
                "• Led class in Los Robles McNair Academy for underprivileged children learning game development with Scratch.io (JavaScript abstracted language)."
            ]
        },
        {
            title: 'Product Analyst',
            company: 'RingCentral',
            location: 'Belmont, CA',
            start: 'Aug 2017',
            end: 'Jun 2018',
            img: 'https://media-exp1.licdn.com/dms/image/C510BAQEL9GFURUUdwA/company-logo_100_100/0?e=1597276800&v=beta&t=8A3OniT_kAUZpj5QC4oyKRBTPSZ_UMF1OyfX50RSZ2E',
            bullets: [
                "• Trained Word Vector NLP model to accurately capture user sentiment targeting specific product features based on survey responses to prioritize bug fixes and product roadmap decisions.",
                "• Worked with multiple teams across design and engineering to bring product features to production."
            ]
        }
    ],
    achievements: [
        {
            title: 'Samsung Bixby Hackathon at 42 Silicon Valley - 1st Place',
            location: 'Samsung Research America',
            start: 'Apr 2019',
            img: {
                link: 'https://www.42.us.org/wp-content/uploads/2019/04/samsung-bixby-9.jpg',
                title: 'Justin Crisp presenting his winning project',
                height: '40%',
                width: '40%'
                },
            links: [
                {link: "https://www.42.us.org/42-silicon-valley-hosts-samsung-bixby-hackathon/", title: "42 Silicon Valley Hosts Samsung Bixby Hackathon"},
                {link: "https://github.com/zill4/BixbyDungeonMaster", title: "Bixby Dungeon Master Github"},
                {link: "https://www.42.us.org/samsung-bixby-voice-ai-developer-hackathon-session-42-silicon-valley/", title: "Samsung Bixby Voice AI Developer Hackathon Session 42 Silicon Valley"},
                {link: "https://medium.com/@justincrisp_39391/hackathons-and-demons-271bc6034301", title: "Hackathons and Demons Medium Article"}
            ],
            description: "Samsung's newly released voice assistant Bixby was made with the intention for developers to create the next wave of applications for it. Members of the Bixby team hosted a competition for students at 42 Silicon Valley, of which the students would break into teams and have one week to develop an app of their choice, using the Bixby Developer Studio. For me, I wrote a small game / utility called Bixby and Dragons, that would be in itself a proof of concept for future games on the platform."
        },
        {
            title: 'Samsung SXR Hackathon - 3rd Place',
            location: 'Samsung SXR Team',
            start: 'Nov 2018',
            links: [],
            img: {
                link: '../../images/win_sxr.jpg',
                title: 'Team 42 showing off their prizes.',
                height: '30%',
                width: '30%'
                },

            description: "After working on an experimental platform for AR development created by the Samsung XR team, our team created a small prototype game for the platform. We were team 42, all students from 42 Silicon Valley, and the game was an AR version of Tron light cycles developed in Unity. This was a great event, and I would look forward to working with their SDK more in the future."
        },
        {
            title: 'Owl Hack 2017 - 1st Place',
            location: 'Foothill College',
            start: 'Nov 2017',
            links: [],
            img: {
                link: '../../images/1st_owl_hacks.jpg',
                title: 'Justin Crisp presenting his winning project',
                height: '25%',
                width: '25%'
                },

            description: "As a part of the team CoLab team of 2. I was the backend engineer - I created a Tomcat 9 Sever hosted on AWS linked to a MySQL database that was able to receive and send API calls in JSON from the frontend. The frontend engineer created a design and flow for the mobile iOS platform and was able to send HTTP API requests to my backend."
            
        }
    ]
}

export default data;