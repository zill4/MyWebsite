const data = {
    profileImage : "someurl",
    header : "Software Engineer",
    location : "Seattle, WA",
    objective : "As a software engineer, I am looking for challenging problems, passionate teams, and long hours in front a terminal creating magic. My skills are rooted in C programming, but extended to object-oriented abstractions like C++, Java, JavaScript, and Python. I have experience with Unreal Engine 4 and done VR development using Unity. Games are my passion, and my goal is to build them for the rest of my life. がんばります",
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
            end: 'Sept 2020',
            img: '../../images/samsung.jpg',
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
            img: '../../images/cff.png',
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
            img: '../../images/rc.png',
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
                height: '80%',
                width: '80%'
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
                height: '60%',
                width: '60%'
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
                height: '50%',
                width: '50%'
                },

            description: "As a part of the team CoLab team of 2. I was the backend engineer - I created a Tomcat 9 Sever hosted on AWS linked to a MySQL database that was able to receive and send API calls in JSON from the frontend. The frontend engineer created a design and flow for the mobile iOS platform and was able to send HTTP API requests to my backend."
            
        }
    ],
    projects: [
        // {
        //     title: 'ZillA',
        //     location: 'Samsung Research America',
        //     start: 'Apr 2019',
        //     img: {
        //         link: '../../images/Zill.png',
        //         title: 'Project ZillA',
        //         height: '80%',
        //         width: '80%'
        //         },
        //     links: [
        //         {link: "https://connect.unity.com/p/zilla-project", title: "Unity Project Page"},
        //         {link: "https://www.zill4.com/", title: "ZillA Website: Work in Progress"}
        //     ],
        //     description: "ZillA is an Action RPG built with Unity."
        // },
        {
            title: 'Warlok',
            location: 'Seattle',
            start: 'Feb 2020',
            img: {
                link: '../../images/warlok_logo.png',
                title: 'Project ZillA',
                height: '80%',
                width: '80%'
                },
            links: [
                {link: "https://warlok.net/", title: "Warlok: Work in Progress"}
            ],
            description: "Warlok is a content creator platform for creating and managing partnerships, sponsorships, and fan engagement."
        },
        {
            title: 'SocialEye',
            location: 'Samsung SXR Team',
            start: 'Nov 2018',
            links: [
                {link: "https://socialeye.net/", title: "SocialEye.net Website"},
            ],
            img: {
                link: '../../images/eye.png',
                title: 'Search the YouTube V3 API for channels based on viewer count. More features coming soon!',
                height: '60%',
                width: '60%'
                },

            description: "SocialEye was the beginning to Warlok, and currently lets you mass search the YouTube API for content creators."
        },
        {
            title: 'This Website!',
            location: 'Foothill College',
            start: 'Nov 2017',
            links: [
                {link: "https://github.com/zill4/MyWebsite", title: "Github Repository"}
            ],
            img: {
                link: '../../images/svelte.png',
                title: 'A Cybernetically Enhanced Framework',
                height: '50%',
                width: '50%'
                },

            description: "Built using Svelte a web framework similar to React. I decided to write this website from scratch with Svelte to learn something new and challenge myself."
            
        },
        {
            title: '42 Silicon Valley Projects',
            location: 'Foothill College',
            start: 'Nov 2017',
            links: [
                {link: "https://github.com/zill4/ft_ls", title: "The Linux LS command recreated from scratch in C."},
                {link: "https://github.com/zill4/ft_printf", title: "The C Printf function recreated from scratch in C."},
                {link: "https://github.com/zill4/fillit", title: "An executable that fits 4x4 characters in the smallest square. Like Tetris."},
                {link: "https://github.com/zill4/Libft", title: "A library of C functions used in the above C projects."},
                {link: "https://github.com/zill4/42_projects", title: "A repository of all my projects completed at 42."}
            ],
            img: {
                link: '../../images/42.png',
                title: '0 Tuition 0 Classes 0 Teachers 100% Coding',
                height: '50%',
                width: '50%'
                },

            description: "Linked here are repositories of projects I finished while at 42. These projects are primarily written in scratch using C compiled with GCC."
            
        }
    ]
}

export default data;