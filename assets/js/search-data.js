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
        },{id: "news-i-have-joined-the-school-of-intelligent-manufacturing-ecosystems-at-xi-an-jiaotong-liverpool-university",
          title: 'I have joined the School of Intelligent Manufacturing Ecosystems at Xi’an Jiaotong-Liverpool University!...',
          description: "",
          section: "News",},{id: "news-the-website-has-been-renewed-and-updated",
          title: 'The website has been renewed and updated!',
          description: "",
          section: "News",},{id: "projects-exploring-nonlinear-dynamics-in-precision-motion-control-systems",
          title: 'Exploring Nonlinear Dynamics in Precision Motion Control Systems',
          description: "Investigating the intricate dynamics and optimization techniques behind high-precision positioning, enhanced by dynamic simulations and real-world performance insights, alongside functional material-based actuation designs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-smart-structures-amp-dynamic-optimization",
          title: 'Smart Structures &amp;amp; Dynamic Optimization',
          description: "Pushing the boundaries of design by optimizing meta-characteristics and dynamic motions for advanced, adaptable structures.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-non-traditional-manufacturing-processes",
          title: 'Non-traditional Manufacturing Processes',
          description: "Leveraging cutting-edge ultrasonic and laser technologies to revolutionize manufacturing with enhanced precision and efficiency",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-virtual-reality-and-haptic-technology-for-cyber-physical-interaction",
          title: 'Virtual Reality and Haptic Technology for Cyber-Physical Interaction',
          description: "Exploring advanced human haptic control systems and designing intuitive human-machine interfaces for seamless interaction",
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
