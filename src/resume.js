/**
 * @file resume.js
 * @module resume
 *
 * @description
 * This module provides resume data and functions to extract role-based views of the resume.
 * It exports the complete resume information and two utility functions that allow
 * filtering of the resume data depending on the specified role.
 *
 * The module includes:
 *
 * 1. The "resume" object:
 *    - @property {string|string[]} bio - A bio description of the candidate.
 *    - @property {Object[]} contacts - An array of contact objects. Each object contains:
 *         - href {string}: The URL or contact link.
 *         - icon {Component}: The icon component imported from '@tabler/icons-vue'.
 *         - text {string}: The display text for the contact.
 *    - @property {Object[]} references - An array of reference objects. Each object includes:
 *         - name {string}: The reference's name.
 *         - title {string}: The reference's title.
 *         - company {string}: The company of the reference.
 *         - location {string}: The location of the reference.
 *         - phone {string}: The reference's phone number.
 *         - email {string}: The reference's email.
 *    - @property {Object[]} experience - An array of experience objects. Each object includes:
 *         - title {string}: The job title.
 *         - company {string}: The name of the company.
 *         - location {string}: The job location.
 *         - date {string}: Duration of the experience.
 *         - link {string}: A URL linking to the company or project.
 *         - bullets {string[]}: Key achievements or tasks.
 *    - @property {Object[]} projects - An array of project objects. Each object includes:
 *         - title {string}: The project title.
 *         - stack {string}: The technology stack used.
 *         - link {string}: A URL linking to the project.
 *         - bullets {string[]}: Key features or accomplishments.
 *
 * 2. The "roles" object:
 *    - An internal configuration that maps role identifiers (e.g., "default" or "finance") to arrays of indices.
 *      These indices specify which items from each section of the resume (bio, contacts, references, experience,
 *      projects) are applicable for the respective role variation.
 *
 * 3. The getRoleData(role) function:
 *    - @function
 *    - @param {string} role - A key corresponding to a role configuration in the "roles" object.
 *    - @returns {Object} An object containing the resume data filtered according to the specified role.
 *      For the "bio" property, only a single string value is returned.
 *
 * 4. The getResume(fields, role) function:
 *    - @function
 *    - @param {string[]} fields - An array of keys indicating which sections of the resume should be returned.
 *    - @param {string} [role="default"] - Specifies the role variant to use for filtering resume data.
 *    - @returns {Object} An object that includes only the requested resume fields from the role-based data.
 */


import {
    IconWorldWww,
    IconBrandGithub,
    IconBrandLinkedin,
    IconMail,
    IconMapPin,
    IconDeviceMobile,
} from '@tabler/icons-vue';




export const resume = {
    bio: [`I am a professional software engineer writing professionally in 8 programming languages, doing web development, drone programming, and AI LLM development.`],
    contacts: [
        { href: 'https://alextheyounger.me/', icon: IconWorldWww, text: 'alextheyounger.me' },
        { href: 'mailto:alexyounger07@gmail.com', icon: IconMail, text: 'alexyounger07@gmail.com' },
        { href: 'tel:7705553171', icon: IconDeviceMobile, text: '770.555.3171' },
        { href: 'https://github.com/AlextheYounga', icon: IconBrandGithub, text: 'github.com/AlextheYounga' },
        { href: 'https://www.linkedin.com/in/alexyounger/', icon: IconBrandLinkedin, text: 'linkedin.com/in/alexyounger' },
        { href: 'https://www.google.com/maps/place/Austin,+TX', icon: IconMapPin, text: 'Austin Texas' },
    ],

    references: [
        { name: 'John Doe', title: 'Senior Manager', company: 'Acme Corp', location: 'New York, NY', phone: '123-456-7890', email: 'john.doe@example.com' },
        { name: 'Jane Smith', title: 'Team Lead', company: 'Beta LLC', location: 'Los Angeles, CA', phone: '987-654-3210', email: 'jane.smith@example.com' },
        { name: 'Alice Brown', title: 'Project Coordinator', company: 'Gamma Inc', location: 'Chicago, IL', phone: '555-555-5555', email: 'alice.brown@example.com' }
    ],

    

    experience: [
        {
            title: 'Accounts Data Analyst',
            company: 'FTX',
            location: 'Remote',
            date: 'July 2020 to 2022',
            link: 'https://claims.ftx.com/',
            bullets: [
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
                `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
            ]
        },
        {
            title: 'Real Estate Data Analyst',
            company: 'Bear Stearns',
            location: 'New York',
            date: 'April 2005 to May 2008',
            link: 'https://bearstearns.com',
            bullets: [
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
                `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
            ],
        },
        {
            title: 'Bond Data Analyst',
            company: 'LTCM',
            location: 'New York',
            date: 'October 1997 to March 1998',
            link: 'https://ltcm.com/',
            bullets: [
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
                `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
            ],
        }
    ],

    projects: [
        {
            title: 'Lorem ipsum',
            stack: 'Lorem, ipsum, dolor, sit',
            link: 'https://lorem.com/',
            bullets: [
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
                `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
            ]
        },
        {
            title: 'Lorem ipsum',
            stack: 'Lorem, ipsum, dolor, sit',
            link: 'https://lorem.com/',
            bullets: [
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            ]
        },
        {
            title: 'Lorem ipsum',
            stack: 'Lorem, ipsum, dolor, sit',
            link: 'https://lorem.com/',
            bullets: [
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
                `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
            ]
        },
        {
           title: 'Lorem ipsum',
           stack: 'Lorem, ipsum, dolor, sit',
           link: 'https://lorem.com/',
           bullets: [
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
                `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
           ] 
        },
        {
            title: 'Lorem ipsum',
            stack: 'Lorem, ipsum, dolor, sit',
            link: 'https://lorem.com/',
            bullets: [
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
                `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
            ]
        },
    ]
}

/*
* Here you can create variations of the resume for different roles based on the url.
* Example: resume.vue#finance loads a different variation of data.
*/
const roles = {
    default: {
        bio: [0],
        contacts: [0, 1, 2, 3, 4, 5],
        references: [0, 1, 2],
        experience: [0, 1, 2],
        projects: [0, 2, 4],
    },
    finance: {
        bio: [0],
        contacts: [0, 1, 2, 3, 4, 5],
        references: [0, 1, 2],
        experience: [0, 1, 2],
        projects: [0, 2, 3],
    }
}

export function getRoleData(role) {
    const singleItems = ['bio'];
    const data = {}
    const roleKeys = roles[role]
    for (const key in roleKeys) {
        const items = [];
        for (const index of roleKeys[key]) {
            items.push(resume[key][index])
        }
        data[key] = items;
        if (singleItems.includes(key)) {
            data[key] = items[0];
        }
    }
    return data;
}

export function getResume(fields, role = 'default') {
    const data = {}
    const roleData = getRoleData(role)
    for (const field of fields) {
        data[field] = roleData[field]
    }
    return data;
}