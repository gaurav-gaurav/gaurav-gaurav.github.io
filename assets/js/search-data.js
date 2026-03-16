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
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-a-paper-has-been-accepted-for-publication-in-ieee-icassp-2023",
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
          section: "News",},{id: "projects-robotics-and-automation-in-agriculture",
          title: 'Robotics and Automation in Agriculture',
          description: "Visual perception for robotic systems in agricultural environments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals.html";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning.html";
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
