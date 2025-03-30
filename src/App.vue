<template>
	<Web />
	<Printable />
</template>


<script setup>
import Web from '@/pages/Web.vue';
import Printable from '@/pages/Printable.vue';
</script>

<style>
body {
	background-color: #0f172b;
	font-family: 'Ubuntu', sans-serif;
	--glowy-text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #0ea5e9, 0 0 4px #0ea5e9, 0 0 5px #0ea5e9, 0 0 6px #0ea5e9, 0 0 7px #0ea5e9;
	--primary-color: #dff2fe;
	--subtext-color: #99a1af;
	--link-color: #a2f4fd;
	--text-color: #f1f5f9;
	--accent-background: #162456;
}
#printable {
	display: none;
}
#web {
	display: block;
}
#title {
	text-shadow: var(--glowy-text-shadow);
}
#headshot {
	max-width: 200px;
}
#langlabel .lang-name {
	color: var(--text-color);
}

#langlabel .percent {
	color: var(--subtext-color);
}
#language-bar ul {
	justify-content: space-around;
}

@media print {
	body {
		background-color: #fff;
		font-family: 'Ubuntu', sans-serif;
		--primary-color: #82181a;
		--subtext-color: #364153;
		--text-color: #101828;
	}
	#web {
		display: none;
	}
	#printable {
		display: block;
	}
	#headshot {
		max-width: 150px;
	}
	#printbutton {
		display: none;
	}
	#language-bar ul {
		justify-content: unset;
	}
	#langlabel .lang-name, #langlabel .percent {
		font-size: 0.65rem;
	}
}
</style>
