<template>
	<van-cell
		:title="title"
		size="large"
		:label="artists">
		<template #right-icon>
			<van-icon @click="play"
				name="play-circle-o"
				size="25" />
		</template>
	</van-cell>
</template>

<script>
export default {
    props: ['title', 'artists','id'],
    methods: {
        play() {
            this.$router.push({
                name: 'play',
                query: {
                    id:this.id
                }
            })
        }
    },
}
</script>

<style></style>
