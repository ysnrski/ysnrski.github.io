// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-service",
          title: "service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-misc",
          title: "misc",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/misc/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-what-is-friction",
      
        title: "What is Friction?",
      
      description: "Friction, a force that resists the relative motion of two objects in contact, is a fundamental phenomenon that affects many engineering systems. However, the interaction of friction with materials and motion can sometimes be far from straightforward.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/What-is-Friction/";
        
      },
    },{id: "post-nidec-and-makino-milling-machine-a-new-era-in-the-machine-tool-industry",
      
        title: "Nidec and Makino Milling Machine - A New Era in the Machine Tool...",
      
      description: "Nidec tries to acquire Makino Milling Machine to challenge global market, amidst rising competition from global machine tool industry.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Nidec-and-Makino-Milling-Machine-A-New-Era-in-the-Machine-Tool-Industry/";
        
      },
    },{id: "post-技術士試験の出願準備は進んでいますか-overview-of-japan-39-s-professional-engineer-p-e-qualification",
      
        title: "技術士試験の出願準備は進んでいますか？Overview of Japan&#39;s Professional Engineer (P.E.) Qualification",
      
      description: "If you are interested in the Japanese P.E. system and its examination process, this post could be for you.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Overview-of-Japan-Professional-Engineer-PE-Qualification/";
        
      },
    },{id: "post-paper-review-an-investigation-on-utilizing-large-language-model-for-industrial-computer-aided-design-automation",
      
        title: "Paper Review - An Investigation on Utilizing Large Language Model for Industrial Computer-Aided...",
      
      description: "Paper Review - An Investigation on Utilizing Large Language Model for Industrial Computer-Aided Design Automation",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Paper-Review-An-Investigation-on-Utilizing-Large-Language-Model-for-Industrial/";
        
      },
    },{id: "post-design-innovation-ai-generated-cad-vs-nlp-interactive-cad",
      
        title: "Design Innovation - AI-Generated CAD vs NLP Interactive CAD",
      
      description: "Discover how AI and NLP are reshaping CAD systems! From automated design to natural language interfaces, learn about the future of design tools.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Design-Innovation-AI-Generated-CAD-vs-NLP-Interactive-CAD/";
        
      },
    },{id: "post-studying-stem-in-japan-a-guide-for-international-students",
      
        title: "Studying STEM in Japan - A Guide for International Students",
      
      description: "Looking to study in Japan? Check out this post on Japan&#39;s higher education system and key insights for STEM students!",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Studying-STEM-in-Japan-A-Guide-for-International-Students/";
        
      },
    },{id: "post-the-future-of-3d-cad-design-with-natural-language-processing",
      
        title: "The Future of 3D CAD Design with Natural Language Processing",
      
      description: "Explore how NLP is revolutionizing 3D CAD design, making it more accessible, efficient, and intuitive. From automating repetitive tasks to enabling cross-disciplinary collaboration, discover how NLP is reshaping the future of digital manufacturing.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/The-Future-of-3D-CAD-Design-with-Natural-Language/";
        
      },
    },{id: "news-i-have-joined-the-school-of-intelligent-manufacturing-ecosystems-at-xi-an-jiaotong-liverpool-university",
          title: 'I have joined the School of Intelligent Manufacturing Ecosystems at Xi’an Jiaotong-Liverpool University!...',
          description: "",
          section: "News",},{id: "news-the-website-has-been-renewed-and-updated",
          title: 'The website has been renewed and updated!',
          description: "",
          section: "News",},{id: "projects-nonlinear-dynamics-amp-tribology",
          title: 'Nonlinear Dynamics &amp;amp; Tribology',
          description: "Exploring high-paformance actuater through nonlinear dynamics, tribology, and functional material.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-functional-materials-amp-optimization",
          title: 'Functional Materials &amp;amp; Optimization',
          description: "Optimizing meta-characteristics and dynamic motion for adaptive and high-performance structures.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-non-traditional-manufacturing-processes",
          title: 'Non-traditional Manufacturing Processes',
          description: "Advancing precision and efficiency through ultrasonic and laser-based manufacturing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-cyber-physical-interaction",
          title: 'Cyber-Physical Interaction',
          description: "Advancing haptic control and intuitive human-machine interfaces for seamless interaction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
