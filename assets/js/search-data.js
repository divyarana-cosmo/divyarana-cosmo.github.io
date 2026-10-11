// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Weak lensing and galaxy clustering, from the stellar mass inside galaxies to the edges of dark matter halos and the expansion of the Universe.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Papers in reverse chronological order. † marks a student supervised or mentored by me. The complete list is on NASA ADS.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching-amp-mentoring",
          title: "Teaching &amp; Mentoring",
          description: "Courses I have taught and students I have supervised.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae. A PDF version is available via the download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-am-now-coordinating-the-galaxy-galaxy-lensing-key-project-for-euclid-data-release-1",
          title: 'I am now coordinating the galaxy–galaxy lensing Key Project for Euclid Data Release...',
          description: "",
          section: "News",},{id: "news-our-hsc-year-3-photometric-redshift-calibration-with-lensing-shear-ratios-with-joint-cosmic-shear-constraints-on-s-8-is-published-in-physical-review-d",
          title: 'Our HSC Year 3 photometric-redshift calibration with lensing shear ratios, with joint cosmic-shear...',
          description: "",
          section: "News",},{id: "news-our-research-was-featured-in-nature-india",
          title: 'Our research was featured in Nature India.',
          description: "",
          section: "News",},{id: "news-two-student-led-papers-are-on-arxiv-dannaé-díaz-axtle-on-halo-mass-assembly-in-cosmic-filaments-and-jitendra-joshi-on-assembly-bias-in-erass1-x-ray-clusters",
          title: 'Two student-led papers are on arXiv: Dannaé Díaz-Axtle on halo mass assembly in...',
          description: "",
          section: "News",},{id: "news-new-paper-weighing-galaxies-inside-out-forecasts-that-small-scale-galaxy-galaxy-lensing-with-euclid-can-constrain-the-stellar-initial-mass-function-to-about-8-5",
          title: 'New paper: Weighing Galaxies Inside-Out forecasts that small-scale galaxy–galaxy lensing with Euclid can...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%6E%61@%73%74%72%77.%6C%65%69%64%65%6E%75%6E%69%76.%6E%6C", "_blank");
        },
      },{
        id: 'social-ads',
        title: 'Ads',
        section: 'Socials',
        handler: () => {
          window.open("https://ui.adsabs.harvard.edu/search/q=author%3A%22Rana%2C%20Divya%22&sort=date%20desc", "_blank");
        },
      },{
        id: 'social-arxiv',
        title: 'Arxiv',
        section: 'Socials',
        handler: () => {
          window.open("https://arxiv.org/search/?searchtype=author&query=Rana%2C+Divya", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/divya_rana_cv.pdf", "_blank");
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
