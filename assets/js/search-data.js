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
          description: "Reinforcement learning, embodied AI, and robotic manipulation",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Reinforcement learning, robot manipulation, and embodied AI.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-services",
          title: "services",
          description: "Peer review and academic service.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Code, experiments and open-source work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-a-paper-has-been-accepted-for-publication-in-ieee-icassp-2023",
          title: 'A paper has been accepted for publication in IEEE ICASSP,2023.',
          description: "",
          section: "News",},{id: "news-one-paper-has-been-accepted-for-publication-in-the-ieee-irc-2023",
          title: 'One paper has been accepted for publication in the IEEE IRC,2023.',
          description: "",
          section: "News",},{id: "news-a-paper-has-been-accepted-for-publication-in-tmlr",
          title: 'A paper has been accepted for publication in TMLR.',
          description: "",
          section: "News",},{id: "news-presented-the-open-seminar-and-submitted-the-thesis",
          title: 'Presented the Open Seminar and submitted the thesis.',
          description: "",
          section: "News",},{id: "news-a-paper-has-been-accepted-for-publication-in-tmlr",
          title: 'A paper has been accepted for publication in TMLR.',
          description: "",
          section: "News",},{id: "news-successfully-defended-the-phd-thesis",
          title: 'Successfully defended the PhD Thesis.',
          description: "",
          section: "News",},{id: "news-a-paper-has-been-accepted-for-presentation-at-aamas-2026-oral",
          title: 'A Paper has been accepted for presentation at AAMAS 2026 (ORAL).',
          description: "",
          section: "News",},{id: "news-joined-the-alogrithmic-robotics-group-ntu-as-research-fellow",
          title: 'Joined the Alogrithmic Robotics Group @ NTU as Research Fellow.',
          description: "",
          section: "News",},{id: "news-the-preprint-of-the-final-work-from-my-phd-match-or-replay-self-imitating-proximal-policy-optimization-is-on-arxiv",
          title: 'The preprint of the final work from my PhD, Match or Replay: Self-Imitating...',
          description: "",
          section: "News",},{id: "projects-robotics-and-automation-in-agriculture",
          title: 'Robotics and Automation in Agriculture',
          description: "Visual perception for robotic systems in agricultural environments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%61%75%72%61%76.%63%68%61%75%64%68%61%72%79@%6E%65%75%72%61-%72%6F%62%6F%74%69%63%73.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/gaurav-chaudhary-phd-254499a5", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=YSWeJo0AAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/gaurav-gaurav", "_blank");
        },
      },{
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
