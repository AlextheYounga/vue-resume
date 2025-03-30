<template>
	<div id="language-bar" class="text-lg mx-auto">
		<div class="bar w-full mb-4 relative" v-if="typeof languages === 'object'">
			<span v-for="language in languages" :style="{
				width: (language.width + '%'),
				backgroundColor: language.color
			}" :id="`bar-item-${language.properties?.slug}`" class="bar-item">
			</span>
		</div>
		<ul class="flex flex-wrap space-x-3">
			<template v-if="typeof languages === 'object'">
				<template v-for="language in languages">
					<li :ref="language.properties.slug" class="lang-item leading-3">
						<div id="langlabel" class="item-wrapper inline-flex flex-nowrap no-underline text-sm items-center">
							<svg :style="{ color: language.color }" :class="['octicon', language.properties?.slug, 'octicon-dot-fill', 'mr-1']" viewbox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
								<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
							</svg>
							<span class="lang-name mr-1 font-bold text-xs">{{ language.language }}</span>
							<span class="percent">{{ language.width }}%</span>
						</div>
					</li>
				</template>
			</template>
		</ul>
	</div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import axios from 'axios'

const languages = ref([])

async function getLanguages() {
	try {
		const languagesJson = await import('@/assets/languages.json')
		languages.value = languagesJson.default
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

onBeforeMount(() => {
	getLanguages()
});

</script>

<style>
#language-bar .bar {
	display: flex;
	height: 8px;
	overflow: hidden;
	background-color: #e1e4e8;
	border-radius: 6px;
}

#language-bar ul {
	list-style-type: none;
}

#language-bar ul .octicon {
	fill: currentColor;
}
</style>