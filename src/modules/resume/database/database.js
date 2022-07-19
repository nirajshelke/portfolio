export default class Database {
    //static firebase;
    static database;

    static resumeData = {
        header: {
            name: 'Nirajkumar Shelke',
            title: '3x Certified | 1x Trailhead Ranger | Senior Salesforce Developer',
            phone: '+91 8551985589',
            email: 'nirajshelke@hotmail.com',
            link: 'https://nirajshelke.github.io/portfolio/',
            location: 'Pune, India',
            photo: 'resources/img/profile_pic.png'
        },
        sections: {
            social: {
                title: 'SOCIAL MEDIA',
                items: [
                    {
                        title: 'GitHub',
                        icon: 'resources/img/icon_github.svg',
                        path: 'https://github.com/nirajshelke',
                        link: 'nirajshelke'
                    },
                    {
                        title: 'LinkedIn',
                        icon: 'resources/img/icon_linkedin.svg',
                        path: 'https://linkedin.com/in/nirajkumar-shelke',
                        link: 'nirajkumar-shelke'
                    }
                ]
            },
            experience: {
                title: 'EXPERIENCE',
                items: [
                    {
                        position: 'Senior Salesforce Developer',
                        dateRange: {
                            isOngoing: true,
                            fromYear: "Jun'22",
                            toYear: ''
                        },
                        workplace: 'Clear (ClearTax)',
                        location: 'Bangalore',
                        description: '',
                        bullets: [
                            {
                                id: '001',
                                value: 'Working as a Senior Salesforce Developer to drive the automation journey with Salesforce platform at Clear.'
                            },
                            {
                                id: '002',
                                value: 'Implementing Salesforce Sales and Service Cloud.'
                            },
                            {
                                id: '003',
                                value: 'Working on Core Apex, LWC, Integration, Apex based API, Flows, Salesforce Securities, Mulesoft and other web technologies.'
                            },
                            {
                                id: '004',
                                value: 'Involved in all phases of SDLC.'
                            }
                        ]
                    },
                    {
                        position: 'Software Engineer',
                        dateRange: {
                            isOngoing: false,
                            fromYear: "Feb'21",
                            toYear: "Jun'2022"
                        },
                        workplace: 'Principal Global Services',
                        location: 'Pune',
                        description: '',
                        bullets: [
                            {
                                id: '001',
                                value: 'Working to create an high efficiency custom-build application for end to end Insurance policy management using Salesforce Platform, Mulesoft and other web technologies.'
                            },
                            {
                                id: '002',
                                value: 'Received an appreciation for active contribution in organisation level Ideathons and Innovations.'
                            },
                            {
                                id: '003',
                                value: 'Working on Core Apex, Aura Components, LWC, Integration, Apex based API, Salesforce Configurations, Mulesoft and other web technologies.'
                            },
                            {
                                id: '004',
                                value: 'Involved in all phases of SDLC.'
                            }
                        ]
                    },
                    {
                        position: 'Application Development Analyst',
                        dateRange: {
                            isOngoing: false,
                            fromYear: "Oct'2018",
                            toYear: "Feb'2021"
                        },
                        workplace: 'Accenture Solutions Pvt. Ltd.',
                        location: 'Pune',
                        description: '',
                        bullets: [
                            {
                                id: '011',
                                value: 'Worked to create highly efficient and scalable custom-build Job board application for a globally renowned staffing client using Salesforce Platform Development.'
                            },
                            {
                                id: '012',
                                value: 'Received an appreciation for contribution in Project level Automation to reduce manual efforts and monitoring.'
                            },
                            {
                                id: '013',
                                value: 'Worked on Apex, Visualforce, Aura Components, LWC, Integration, Apex based API and Salesforce Configurations.'
                            },
                            {
                                id: '014',
                                value: 'Involved in all phases of SDLC.'
                            }
                        ]
                    }
                ]
            },
            technology: {
                title: 'SKILLS',
                items: [
                    {
                        title: 'Web Technologies',
                        tags: [
                            'HTML5',
                            'CSS',
                            'Javascript',
                            'SOAP/REST',
                            'LWC OSS',
                            'Java'
                        ]
                    },
                    {
                        title: 'Salesforce',
                        tags: [
                            'Apex',
                            'Triggers',
                            'Batch Apex',
                            'SOQL',
                            'SOSL',
                            'Lightning Web Components Framework(LWC)',
                            'Lightning Aura Framework',
                            'Visualforce',
                            'Lightning Flows',
                            'Sales Cloud',
                            'Service Cloud',
                            'Apex Web Services',
                            'Lightning Platform',
                            'Salesforce APIs',
                            'Mulesoft',
                            'Salesforce Security Model',
                            'Data Model',
                            'Salesforce Configuration'
                        ]
                    },
                    {
                        title: 'Tools',
                        tags: [
                            'Mulesoft Anypoint Studio',
                            'Azure Devops',
                            'Jira',
                            'ANT Migration Tool',
                            'GitHub',
                            'Bitbucket',
                            'Bamboo',
                            'VS Code',
                            'Eclipse',
                            'Flosum',
                            'Postman',
                            'Apigee Edge'
                        ]
                    }
                ]
            },
            skill: {
                title: 'INDUSTRY EXPERIENCE',
                items: [
                    {
                        name: 'Lightning Web Components / Aura',
                        score: '70'
                    },
                    {
                        name: 'Apex / Visualforce',
                        score: '80'
                    },
                    {
                        name: 'API Integrations',
                        score: '70'
                    },
                    {
                        name: 'Service Cloud',
                        score: '50'
                    },
                    {
                        name: 'Sales Cloud',
                        score: '50'
                    },
                    {
                        name: 'User Interface Design / User Experience',
                        score: '70'
                    }
                ]
            },
            talent: {
                title: 'STRENGTHS',
                items: [
                    {
                        title: 'Programming',
                        icon: 'resources/img/icon_code.svg',
                        description:
                            'Apex, Javascript, OOP, Java, Data Structures, Algorithms, etc,'
                    },
                    {
                        title: 'Database',
                        icon: 'resources/img/icon_database.svg',
                        description: 'SOQL, SOSL, RDBMS'
                    },
                    {
                        title: 'Design',
                        icon: 'resources/img/icon_css.svg',
                        description: 'HTML5, CSS, SLDS'
                    }
                ]
            },
            education: {
                title: 'EDUCATION',
                items: [
                    {
                        degree: 'Bachelor of Engineering',
                        institution:
                            'Singhgad Institute of Technology and Science',
                        location: 'Pune',
                        gpa: '71.04%',
                        dateRange: {
                            fromYear: '2014',
                            toYear: '2018'
                        }
                    }
                ]
            },
            achievement: {
                title: 'ACIEVEMENTS',
                items: [
                    {
                        title: '',
                        icon: '',
                        description: '',
                        link: ''
                    }
                ]
            },
            certificate: {
                title: 'CERTIFICATIONS',
                items: [
                    {
                        title: 'Platform Developer I',
                        issuer: 'Salesforce Inc',
                        icon: 'resources/img/PD1.png'
                    },
                    {
                        title: 'Platform App Builder',
                        issuer: 'Salesforce Inc',
                        icon: 'resources/img/PAB.png'
                    },
                    {
                        title: 'Administrator',
                        issuer: 'Salesforce Inc',
                        icon: 'resources/img/Admin.png'
                    }
                ]
            }, 
            volunteer: {},
            publication: {
                title: 'PERSONAL PROJETCTS',
                items: [
                    {
                        title: 'Advanced Data Loader',
                        link: 'https://github.com/nirajshelke/Advanced-Data-Loader',
                        platform: 'Force.com',
                        description:
                            "It's a tool built on Force.com platform, which Supports all DML operations like data loader and additionally it provides an Operations to bulk Import Custom Metadata Types. It gives user an ability to schedule data Load activities and generates Success and Error files after execution."
                    },
                    {
                        title: 'Advanced SOQL Builder',
                        link: 'https://github.com/nirajshelke/AdvancedSoqlBuilder',
                        platform: 'Force.com',
                        description:
                            "It's a advanced SOQL query builder tool which is built on Force.com using lwc and Apex which Provides provides ability to query data from salesforce. it provides inline editing of the Queried data and also provides an ability to export data in csv."
                    },
                    {
                        title: 'Covid19 Vaccine Tracker',
                        link: 'https://github.com/nirajshelke/Covid19-Vaccine-Tracker',
                        platform: 'Force.com',
                        description:
                            "It's an application built on Force.com platform, sends notification on mobile about vaccine availabily in your area"
                    },
                    {
                        title: 'Classic Snake Game',
                        link: 'https://github.com/nirajshelke/classic-snake-game',
                        platform: 'Force.com',
                        description: "It's a classic snake game built using LWC."
                    }
                ]
            },
            award: {
                title: 'AWARDS',
                items: [
                    {
                        title: 'Bright Spot Award',
                        icon: 'resources/img/icon_award1.svg',
                        description: 'Accenture Solutions Pvt. Ltd.'
                    },
                    {
                        title: 'Increamental Innovation',
                        icon: 'resources/img/icon_award2.svg',
                        description: 'Principal Global Services'
                    }
                ]
            }
        }
    };

    /*static retrieve() {
        this.firebase = window.firebase;

        return this;
    }*/

    static assignTo(srcCmp, cmpPty) {
        srcCmp[cmpPty] = JSON.parse(JSON.stringify(this.resumeData));
    }
}
