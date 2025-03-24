/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shehan Malinga",
  title: "Hi all, I'm Shehan Malinga",
  subTitle: emoji(
    "A passionate System Engineer 🚀 with expertise in Cloud Computing, Kubernetes, Virtualization, DevOps, and IT Infrastructure. Experienced in designing, deploying, and managing scalable systems with a strong focus on automation, security, and high availability."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/shehan-malinga-61a652204/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  whatsapp: "https://wa.me/947XXXXXXXX", // Add your WhatsApp number here
  // Instagram, Twitter and Kaggle are also supported in the links!
  display: true // Set true to display this section, defaults to false
};


// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate System Engineer exploring modern infrastructure & cloud-native technologies",
  skills: [
    emoji(
      "⚙️ Configuration, monitoring & optimization of enterprise-level systems and networks"
    ),
    emoji("💾 Expertise in HPE server and storage solutions"),
    emoji(
      "🛠️ Backup & disaster recovery planning using Veeam and Scality object storage"),
      emoji(
      "🔧 Troubleshooting hardware and software issues in data center environments"),
      emoji(
      "📦 Containerized application deployments using Docker & Kubernetes")
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws",
    style: { color: "#FF9900" } // AWS Orange
  },
  {
    skillName: "Azure",
    fontAwesomeClassname: "fab fa-microsoft",
    style: { color: "#0089D6" } // Azure Blue
  },
  {
    skillName: "Kubernetes",
    fontAwesomeClassname: "fas fa-cube",
    style: { color: "#326CE5" } // Kubernetes Blue
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker",
    style: { color: "#2496ED" } // Docker Blue
  },
  {
    skillName: "Veeam",
    fontAwesomeClassname: "fas fa-shield-alt",
    style: { color: "#00B336" } // Veeam Green
  },
  {
    skillName: "Google Cloud",
    fontAwesomeClassname: "fab fa-google",
    style: { color: "#4285F4" } // Google Cloud Blue
  },
  {
    skillName: "Backups",
    fontAwesomeClassname: "fas fa-hdd",
    style: { color: "#FFD700" } // Backup Yellow
  },
  // --- Cloud-Native & DevOps Tools ---
  {
    skillName: "Terraform",
    fontAwesomeClassname: "fas fa-code-branch",
    style: { color: "#5C4EE5" } // Terraform Purple
  },
  {
    skillName: "Helm",
    fontAwesomeClassname: "fas fa-anchor",
    style: { color: "#0F1689" } // Helm Blue
  },
  {
    skillName: "Prometheus",
    fontAwesomeClassname: "fas fa-fire",
    style: { color: "#E6522C" } // Prometheus Orange
  },
  {
    skillName: "Grafana",
    fontAwesomeClassname: "fas fa-chart-line",
    style: { color: "#F46800" } // Grafana Orange
  },
  {
    skillName: "OpenShift",
    fontAwesomeClassname: "fas fa-cloud",
    style: { color: "#EE0000" } // OpenShift Red
  },
  // --- Software Development Related Icons ---
  {
    skillName: "React",
    fontAwesomeClassname: "fab fa-react",
    style: { color: "#61DAFB" } // React Blue
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt",
    style: { color: "#F05032" } // Git Red
  },
  {
    skillName: "CI/CD",
    fontAwesomeClassname: "fas fa-tools",
    style: { color: "#6C757D" } // CI/CD Grey
  },
  {
    skillName: "Agile Development",
    fontAwesomeClassname: "fas fa-project-diagram",
    style: { color: "#4CAF50" } // Agile Green
  },
  
],



  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Orubandisiyambalawa School Polonnaruwa ",
      logo: require("./assets/images/royalcollage.png"),
      subHeader: "GCE Ordinary Level (O/L)",
      duration: "january 2004 - Octomber 2015",
      
    },
    {
      schoolName: "Royal Central College Polonnaruwa",
      logo: require("./assets/images/royalcollage.png"),
      subHeader: "GCE Advanced Level (A/L)",
      duration: "September 2016 - Octomber 2018",
      desc: "Studied Engineering Technology",
      descBullets: [
        "Information and Communication Technology (ICT)",
        "Engineering Technology",
        "Science for Technology"
      ]
    },
    {
      schoolName: "Sri Lanka Institute of Information Technology (SLIIT)",
      logo: require("./assets/images/sliit.png"),
      subHeader: "BSc (Hons) in Information Technology",
      duration: "September 2021 - Present",
      desc: "Main Focus Areas",
      descBullets: [
        "Networking & Cloud Computing",
        "Software Development",
        "Databases & Information Systems",
        "Mobile & Web App Development",
        "Cybersecurity",
        "System Analysis & Design"
      
      
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show the Proficiency Section
  experience: [
    {
      Stack: "Cloud Computing & Virtualization", // Expertise in cloud and VMs
      progressPercentage: "90%" // High expertise level
    },
    {
      Stack: "DevOps & Automation", // Includes CI/CD, Infrastructure as Code
      progressPercentage: "85%"
    },
    {
      Stack: "Infrastructure & System Administration", // Covers servers, networking, storage
      progressPercentage: "80%"
    },
    {
      Stack: "Security & Backup Solutions", // Includes Veeam, Disaster Recovery, and IT Security
      progressPercentage: "75%"
    },
    {
      Stack: "Networking & Troubleshooting", // CCNA skills and network diagnostics
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // No need to show coding proficiency badges for this role
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "System Engineer",
      company: "Hewlett Packard Enterprise",
      companylogo: require("./assets/images/HPE.png"),
      
      date: "Sep 2023 - Present",
      desc: <span style={{ color: "#00bfff", fontWeight: "bold" }}>Plexus Global (Pvt) Ltd</span>,
      descBullets: [
        "🖥️ Server and Server Systems-Experienced in deploying and managing HPE ProLiant and HPE Synergy servers across production and DR environments. Skilled in virtualization, composable infrastructure, and server monitoring to ensure high availability and performance",
        "🔄 Backup Solutions-Specialized in implementing backup and disaster recovery using Veeam Backup & Replication. Familiar with Acronis, Windows Server Backup, and cloud-based solutions like Azure Backup for data protection and business continuity.",
        "🌐 NetworkingHands- on experience with Aruba switches, VLAN configuration, trunking, and network troubleshooting. Strong understanding of LAN/WAN setups, static and dynamic routing, and securing enterprise networks",
        "💻Software Development-Proficient in developing modern web and mobile applications using React, React Native, and Android (Java/Kotlin). Capable of creating responsive UIs, API integrations, and deploying full-stack solutions."
      ]
    },
    
    
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Systems and Infrastructure I have Designed, Deployed, or Supported as a System Engineer ",
  projects: [
    {
      image: require("./assets/images/Adani.png"),
      
      projectName: "HPE Synergy Installation and Deployment at Colombo West international",
      projectDesc: "Successfully installed and deployed six HPE Synergy chassis across the Production and DR sites at Colombo West International. This upgrade enhances infrastructure agility, scalability, and efficiency through HPE’s composable infrastructure solution.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },

    {
      image: require("./assets/images/Synergy1.jpg"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Introduction to Networks",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/CCNA_1.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/earner/earned/badge/1ce84e00-00c3-4c52-aac6-0e83adbb0dca"
        },
        
      ]
    },
    {
      title: "Switching, Routing, and Wireless Essentials",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/CCNA_2.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        
      ]
    },

    {
      title: " Enterprise Networking, Security, and Automation",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/CCNA_3.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        
      ]
    },
    {
      title: " Introduction to Cybersecurity",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/I2CS__1_.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        
      ]
    },
    {
      title: " Enterprise Networking, Security, and Automation",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/CCNA_3.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        
      ]
    },
    {
      title: " Enterprise Networking, Security, and Automation",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/CCNA_3.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        
      ]
    },
    {
      title: " Fortinet Certified Associate Cybersecurity",
      subtitle: "Completed Fortinet Certified Fundamentals (FCF) in Cybersecurity certification from Fortinet",
      image: require("./assets/images/fortinet_1.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/earner/earned/badge/78132be8-2f84-4551-9029-a1eb9b759d4a"
        },
        
      ]
    },
    {
      title: "Fortinet Certified Fundamentals Cybersecurity",
      subtitle: "Completed Fortinet Certified Fundamentals (FCF) in Cybersecurity certification from Fortinet",
      image: require("./assets/images/fortinet_2.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/earner/earned/badge/78132be8-2f84-4551-9029-a1eb9b759d4a"
        },
        
      ]
    },
    {
      title: "AWS Academy Cloud Foundations",
      subtitle: "Completed Fortinet Certified Fundamentals (FCF) in Cybersecurity certification from Fortinet",
      image: require("./assets/images/AWS_1.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/earner/earned/badge/78132be8-2f84-4551-9029-a1eb9b759d4a"
        },
        
      ]
    },
    {
      title: "VMSP SaaS Protection",
      subtitle: "Validates knowledge in securing SaaS applications using Veeam solutions, focusing on backup, recovery, and data protection best practices.",
      image: require("./assets/images/VMSP_1.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/earner/earned/badge/78132be8-2f84-4551-9029-a1eb9b759d4a"
        },
        
      ]
    },
    {
      title: "VMSP Cloud Service Provider",
      subtitle: " validates expertise in delivering and managing Veeam-powered cloud services, including backup, disaster recovery, and data protection.",
      image: require("./assets/images/VMSP_2.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/earner/earned/badge/78132be8-2f84-4551-9029-a1eb9b759d4a"
        },
        
      ]
    },
    {
      title: "VMSP Cybersecurity & DR",
      subtitle: "Validates skills in implementing cybersecurity measures and disaster recovery solutions using Veeam technologies.",
      image: require("./assets/images/VMSP_3.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/earner/earned/badge/78132be8-2f84-4551-9029-a1eb9b759d4a"
        },
        
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "My LinkedIn Posts 🔁 ",
  
  subtitle:
    "Sharing my journey, insights, and experiences in Cloud, DevOps, and System Engineering through my LinkedIn content.",
  displayMediumBlogs: false,
  blogs: [
    {
      url: "https://www.linkedin.com/posts/shehan-malinga-61a652204_mastering-docker-series-%E0%B6%AF%E0%B7%80%E0%B6%B1-%E0%B6%9A%E0%B6%A7%E0%B7%83%E0%B6%B1-%E0%B6%85%E0%B6%B4-activity-7298187934564851713-HksT?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQQrfYBCjHJX-oawkBnUV4bZZht3S7HsgY",
      title: "Docker Compose 🚀",
      description:
        "Mastering Docker series දෙවෙනි කොටසින් අපි බලමු Docker Compose ගැන..",
        
    },
    {
      url: "https://www.linkedin.com/posts/shehan-malinga-61a652204_mastering-docker-series-%E0%B6%B4%E0%B6%BD%E0%B7%80%E0%B6%B1-%E0%B6%9A%E0%B6%A7%E0%B7%83%E0%B6%B1-%E0%B6%85%E0%B6%B4-activity-7294906535917301760-3ARw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQQrfYBCjHJX-oawkBnUV4bZZht3S7HsgY",
      title: "Docker Engine",
      description:
        "Docker Engine එක core part of docker කීවොත් නිවැරදි. Host machine(server/VM or locak machine) එකක් මත docker engine install කරලා containers run කරන්න පුලුවන්",
        
    },
    {
      url: "https://www.linkedin.com/posts/shehan-malinga-61a652204_understanding-the-veeam-3-2-1-1-0-backup-activity-7294674165750448128-R8Bj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQQrfYBCjHJX-oawkBnUV4bZZht3S7HsgY",
      title: "Veeam 3-2-1-1-0 Backup Rule 😉",
      description:
        "Veeam follows a best practice backup strategy called the 3-2-1-1-0 rule to ensure that your data is always protected and recoverable",
       
    },
    {
      url: "https://www.linkedin.com/posts/shehan-malinga-61a652204_%F0%9D%90%8C%F0%9D%90%9A%F0%9D%90%AC%F0%9D%90%AD%F0%9D%90%9E%F0%9D%90%AB%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A0-%F0%9D%90%8A%F0%9D%90%AE%F0%9D%90%9B%F0%9D%90%9E%F0%9D%90%AB%F0%9D%90%A7%F0%9D%90%9E%F0%9D%90%AD%F0%9D%90%9E%F0%9D%90%AC-%F0%9D%90%AC%F0%9D%90%9E%F0%9D%90%AB%F0%9D%90%A2%F0%9D%90%9E%F0%9D%90%AC-activity-7294605737240997890-Uz2Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQQrfYBCjHJX-oawkBnUV4bZZht3S7HsgY",
      title: "K8s Client -Server Architecture",
      description:
        "මෙි වෙද්දි ඔයාලා දන්නවා K8s කියන්නේ ප්‍රධාන වශයෙන්ම containers orchestration tool එකක් open source තියෙන.",
       
    },
    {
      url: "httpshttps://www.linkedin.com/posts/shehan-malinga-61a652204_kubernetes-k8s-containerorchestration-activity-7290331126265483265-BGDJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQQrfYBCjHJX-oawkBnUV4bZZht3S7HsgY://www.linkedin.com/posts/shehan-malinga-61a652204_understanding-the-veeam-3-2-1-1-0-backup-activity-7294674165750448128-R8Bj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQQrfYBCjHJX-oawkBnUV4bZZht3S7HsgY",
      title: "Pods ✨",
      description:
        "Pods ගැන කතා කරද්දි pods are one of the most fundamental concept of k8s කිවොත් අපි නිවැරදි.ඒ කියන්නේ kubernetes object model හි කුඩාම ඒකකය විදිහට අපිට pods හදුන්වන්න පුලුවන්",
       
    },
    {
      url: "httpshttps://www.linkedin.com/posts/shehan-malinga-61a652204_kubernetes-k8s-containerorchestration-activity-7290331126265483265-BGDJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQQrfYBCjHJX-oawkBnUV4bZZht3S7HsgY://www.linkedin.com/posts/shehan-malinga-61a652204_understanding-the-veeam-3-2-1-1-0-backup-activity-7294674165750448128-R8Bj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQQrfYBCjHJX-oawkBnUV4bZZht3S7HsgY",
      title: "What is Kubernetes ✨",
      description:
        "🚀 Software development, DevOps, system engineer මෙි ඕනම field එක්ක ඉන්න කෙනෙක් දැනගන්න ඕන දෙයක් තමා monolithic architecture එක හා microservice architecture එක කියන්න දේ ✨",
       
    },
    {
      url: "httpshttps://www.linkedin.com/posts/shehan-malinga-61a652204_kubernetes-k8s-containerorchestration-activity-7290331126265483265-BGDJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQQrfYBCjHJX-oawkBnUV4bZZht3S7HsgY://www.linkedin.com/posts/shehan-malinga-61a652204_understanding-the-veeam-3-2-1-1-0-backup-activity-7294674165750448128-R8Bj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQQrfYBCjHJX-oawkBnUV4bZZht3S7HsgY",
      title: "Azure Tags🌐",
      description:
        "Managing resources in Azure can get overwhelming, especially as your infrastructure scales. That’s where Azure Tags come to the rescue! Azure Tags are key-value pairs that help you organize and manage your resources more effectively",
       
    },
    {
      url: "httpshttps://www.linkedin.com/posts/shehan-malinga-61a652204_kubernetes-k8s-containerorchestration-activity-7290331126265483265-BGDJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQQrfYBCjHJX-oawkBnUV4bZZht3S7HsgY://www.linkedin.com/posts/shehan-malinga-61a652204_understanding-the-veeam-3-2-1-1-0-backup-activity-7294674165750448128-R8Bj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQQrfYBCjHJX-oawkBnUV4bZZht3S7HsgY",
      title: "Azure TCO Calculator",
      description:
        "Migrating to the cloud is more than a technical shift—it’s a strategic business decision. For many organizations,",
       
    },

  ],
  display: true
};




// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️  "),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+71 1714193 / +78 8782639",
  email_address: "shehanmalingang@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
