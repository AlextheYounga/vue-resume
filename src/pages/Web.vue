<template>
    <main id="web" class="bg-slate-900">
        <div id="printbutton" class="absolute top-5 right-5 cursor-pointer text-sky-100">
            <IconPrinter class="w-6 h-6" @click="printPage" />
        </div>
        <div class="flex flex-wrap p-4 lg:p-8">
            <div id="leftside" class="w-full lg:w-1/3">
                <div class="max-w-xl mx-auto space-y-6">
                    <div class="flex flex-wrap items-center">
                        <img id="headshot" class="w-1/2 flex relative text-center border-sky-100 border-4 rounded-full lg:mr-4" src="/bridge-standing.jpg" />
                        <div class="w-full lg:w-1/2">
                            <h1 id="title" class="text-sky-100 text-5xl tracking-wide font-bold">ALEX YOUNGER</h1>
                            <hr class="text-sky-100 w-full my-4" />
                            <h2 class="text-sky-100 text-xl tracking-wide font-bold">FULL STACK ENGINEER</h2>
                        </div>
                    </div>

                    <div id="bio" class="pl-4 border-l-4 border-sky-100">
                        <h3 class="text-sky-200 pb-2 text-xl font-bold tracking-wide">BIO</h3>
                        <p class="text-sm text-sky-100">
                            {{ bio }}
                        </p>
                    </div>

                    <div id="contact-container">
                        <h3 class="text-sky-200 tracking-wide font-bold text-xl text-left">CONTACT</h3>
                        <div class="flex flex-wrap justify-center items-center">
                            <div id="contacts" class="w-full p-1">
                                <span v-for="contact of contacts" :key="contact.text" class="text-sky-100 flex items-center my-2 text-sm">
                                    <component :is="contact.icon" class="w-6 h-6 mr-2"></component>
                                    <a :href="contact.href" class="underline text-cyan-400" target="_blank"> {{ contact.text }} </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="rightside" class="w-full lg:w-2/3">
                <div class="max-w-5xl mx-auto">
                    <div class="m-4">
                        <div class="flex flex-wrap">
                            <div id="experience" class="w-full lg:w-1/2 lg:px-2">
                                <h3 class="text-sky-200 pb-2 text-xl font-bold">
                                    EXPERIENCE
                                </h3>
                                <div v-for="exp of experience" :key="exp.company" class="mb-4">
                                    <div class="flex flex-wrap items-center">
                                        <div class="flex mr-4 items-center">
                                            <h4 class="text-sky-100 text-lg font-bold mr-1">{{ exp.company }}</h4>
                                            <a :href="exp.link" class="text-sky-100" target="_blank">
                                                <IconExternalLink class="h-5 w-5" />
                                            </a>
                                        </div>
                                        <span class="flex text-sky-100 items-center font-bold">
                                            <IconUserCircle class="h-5 w-5" /> {{ exp.title }}
                                        </span>
                                    </div>
                                    <div class="flex flex-wrap text-gray-400 text-xs">
                                        <span class="flex items-center">
                                            <IconCalendar class="h-5 w-5 mr-1" /> {{ exp.date }}
                                        </span>
                                        <span class="flex items-center">
                                            <IconMapPin class="h-5 w-5 mr-1" /> {{ exp.location }}
                                        </span>
                                    </div>
                                    <ul class="list-disc">
                                        <li v-for="bullet of exp.bullets" :key="bullet" class="text-gray-300 text-sm ml-4 lg:ml-6">
                                            {{ bullet }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="w-full lg:w-1/2 lg:px-2">
                                <h3 class="text-sky-200 pb-2 text-xl font-bold">
                                    NOTABLE PROJECTS
                                </h3>
                                <div v-for="proj of projects" :key="proj.title" class="mb-4">
                                    <div class="flex flex-wrap items-center">
                                        <div class="flex mr-4 items-center">
                                            <h4 class="text-sky-100 text-lg font-bold mr-1">{{ proj.title }}</h4>
                                            <a :href="proj.link" class="text-sky-100" target="_blank">
                                                <IconExternalLink class="h-5 w-5" />
                                            </a>
                                        </div>
                                        <span class="flex text-sky-100 items-center font-bold">
                                            <IconStack class="h-5 w-5" /> {{ proj.stack }}
                                        </span>
                                    </div>
                                    <ul class="list-disc">
                                        <li v-for="bullet of proj.bullets" :key="bullet" class="text-gray-300 text-sm ml-4 lg:ml-6">
                                            {{ bullet }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="languagebar">
                            <div class="flex">
                                <h3 class="text-sky-200 pb-2 text-xl font-bold mr-2">SKILLS</h3>
                                <IconApi class="h-6 w-6 text-sky-100" />
                                <a href="https://alextheyounger.me/api/languages/stats" target="_blank">
                                    <IconExternalLink class="h-4 w-4 text-sky-100" />
                                </a>
                            </div>

                            <LanguageBar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>



<script setup>
import LanguageBar from '@/components/LanguageBar.vue';
import {
    IconPrinter,
    IconCalendar,
    IconUserCircle,
    IconMapPin,
    IconExternalLink,
    IconApi,
    IconStack
} from '@tabler/icons-vue';
import { getResume } from '@/resume.js'

function printPage() {
    alert(`Recommended print settings:
    - Layout: Portrait
    - Paper size: Letter
    - Show background graphics
    - Margins: None
    `);
    window.print();
}

const resume = getResume(['bio', 'contacts', 'experience', 'projects']);
const {
    bio,
    contacts,
    experience,
    projects
} = resume;
</script>