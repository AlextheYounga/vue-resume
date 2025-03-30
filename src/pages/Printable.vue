<template>
    <main id="printable" class="bg-white">
        <div id="external" class="absolute top-5 right-5 cursor-pointer text-red-900">
            <a href="https://resume.alexyounger.me" target="_blank">
                <IconExternalLink class="w-8 h-8" />
            </a>
        </div>
        <div class="flex items-center h-[100vh]">
            <div id="leftside" class="w-1/3 xl:w-1/4">
                <div class="py-16 mx-4 shadow-xl rounded-lg border-gray-200 border">
                    <div class="max-w-xl p-3 space-y-4">
                        <img id="headshot" class="flex mx-auto rounded-full border-red-900 relative text-center border-4" src="/bridge-standing.jpg" />
                        <div id="contacts" class="w-full lg:w-2/3">
                            <span v-for="contact of contacts" :key="contact.text" class="flex items-center my-1 text-sm">
                                <component :is="contact.icon" class="w-6 h-6 mr-1 text-red-900"></component>
                                <a class="text-red-900" :href="contact.href"> {{ contact.text }} </a>
                            </span>
                        </div>

                        <div id="references" class="text-sm">
                            <h3 class="font-semibold text-gray-500 text-md">REFERENCES</h3>
                            <div v-for="reference of references" :key="reference.name" class="mb-4">
                                <h4 class="text-base">{{ reference.name }}</h4>
                                <p class="flex flex-wrap">
                                    <span class="flex items-center mr-2 text-gray-700 text-xs">
                                        <IconBuilding class="h-4 w-4 mr-1" /> {{ reference.company }}
                                    </span>
                                    <span class="flex items-center mr-2 text-gray-700 text-xs">
                                        <IconUserCircle class="h-4 w-4 mr-1" /> {{ reference.title }}
                                    </span>
                                    <span class="flex items-center mr-2 text-gray-700 text-xs">
                                        <IconMail class="h-4 w-4 mr-1" /> {{ reference.email }}
                                    </span>
                                    <span class="flex items-center mr-2 text-gray-700 text-xs">
                                        <IconDeviceMobile class="h-4 w-4 mr-1" /> {{ reference.phone }}
                                    </span>
                                    <span class="flex items-center mr-2 text-gray-700 text-xs">
                                        <IconMapPin class="h-4 w-4 mr-1" /> {{ reference.location }}
                                    </span>
                                </p>
                            </div>
                        </div>

                        <!-- https://mini-qr.vercel.app/ -->
                        <img id="qr" class="w-1/2 pt-6 mx-auto" src="/qr-code.png" />
                    </div>
                </div>
            </div>

            <div id="rightside" class="w-2/3 xl:w-3/4">
                <div class="max-w-5xl ml-5 mr-3">
                    <h1 class="text-5xl tracking-wide font-bold text-center text-red-900">ALEX YOUNGER</h1>
                    <hr class="w-1/2 text-red-900 mx-auto my-2" />
                    <h1 class="text-xl tracking-wide font-bold text-center text-red-900">FULL STACK SOFTWARE ENGINEER</h1>
                    <div class="space-y-4">
                        <div id="bio">
                            <h3 class="text-md font-semibold text-gray-500">BIO</h3>
                            <p class="text-sm text-gray-900">
                                {{ bio }}
                            </p>
                        </div>

                        <div id="languagebar">
                            <div class="flex">
                                <h3 class="text-md font-semibold text-gray-500 mr-2">SKILLS</h3>
                                <IconApi class="h-6 w-6 text-red-900" />
                                <a href="https://alextheyounger.me/api/languages/stats" target="_blank">
                                    <IconExternalLink class="h-4 w-4 text-red-900" />
                                </a>
                            </div>
                            <LanguageBar />
                        </div>

                        <div id="experience" class="w-full">
                            <h3 class="font-semibold text-gray-500 text-md">
                                EXPERIENCE
                            </h3>

                            <div v-for="exp of experience" :key="exp.company" class="mb-2">
                                <div class="flex flex-wrap items-center">
                                    <div class="flex items-center mr-4">
                                        <h4 class="text-red-900 font-bold text-md mr-1">{{ exp.company }}</h4>
                                        <a :href="exp.link" class="text-red-900">
                                            <IconExternalLink class="h-4 w-4" />
                                        </a>
                                    </div>
                                    <span class="flex text-red-900 items-center font-bold text-md">
                                        <IconUserCircle class="h-4 w-4 mr-1" /> {{ exp.title }}
                                    </span>

                                </div>
                                <div class="flex space-x-4 text-xs text-gray-500">
                                    <span class="flex items-center">
                                        <IconCalendar class="h-4 w-4 mr-1" /> {{ exp.date }}
                                    </span>
                                    <span class="flex items-center text-xs">
                                        <IconMapPin class="h-4 w-4 mr-1" /> {{ exp.location }}
                                    </span>
                                </div>
                                <ul class="list-disc">
                                    <li v-for="bullet of exp.bullets" :key="bullet" class="text-gray-700 text-xs ml-6">
                                        {{ bullet }}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="w-full">
                            <h3 class="font-semibold text-gray-500 text-md">
                                NOTABLE PROJECTS
                            </h3>
                            <div v-for="proj of projects" :key="proj.title" class="mb-2">
                                <div class="flex items-center text-md text-red-900 font-bold">
                                    <div class="flex items-center mr-4">
                                        <h4 class="mr-1">{{ proj.title }}</h4>
                                        <a :href="proj.link" class="text-red-900">
                                            <IconExternalLink class="h-4 w-4" />
                                        </a>
                                    </div>
                                    <span class="flex items-center">
                                        <IconStack class="h-4 w-4 mr-1" /> {{ proj.stack }}
                                    </span>
                                </div>
                                <ul class="list-disc">
                                    <li v-for="bullet of proj.bullets" :key="bullet" class="text-gray-700 text-xs ml-6">
                                        {{ bullet }}
                                    </li>
                                </ul>
                            </div>
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
    IconMail,
    IconMapPin,
    IconDeviceMobile,
    IconBuilding,
    IconUserCircle,
    IconExternalLink,
    IconCalendar,
    IconApi,
    IconStack
} from '@tabler/icons-vue';
import { getResume } from '@/resume.js'

const resume = getResume(['bio', 'contacts', 'references', 'experience', 'projects']);
const {
    bio,
    contacts,
    references,
    experience,
    projects,
} = resume;
</script>