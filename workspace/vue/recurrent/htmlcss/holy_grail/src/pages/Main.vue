<template>
  <main class="mt-2 grid">
    <div class="w-full h-56 bg-red-400 flex items-center justify-center mb-4">
      <img src="" alt="広告" />
    </div>
    <div
      class="mb-4 flex flex-col"
      v-for="video in $store.state.videoList"
      :key="video.videoId"
    >
      <a
        class="mb-2 mx-auto mt-auto"
        :href="videoPath"
        @click="videoId = video.videoId"
        target="_blank"
      >
        <img :src="video.image" :alt="video.title" />
      </a>
      <div class="pl-4">
        <a :href="videoPath" @click="videoId = video.videoId" target="_blank">
          <div>{{ video.title }}</div>
        </a>
      </div>
      <div class="pl-4 text-xs">{{ video.publishedAt }}</div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      videoId: null,
      params: {
        q: "",
        part: "snippet",
        type: "video",
        maxResults: "50",
        publishedBefore: "2007-12-31T23:59:59Z",
        key: `${process.env.VUE_APP_FIREBASE_API_KEY}`,
        order: "viewCount",
      },
    };
  },
  created() {
    this.$store.dispatch("search", {
      params: this.params,
    });
  },
  computed: {
    videoPath() {
      return `https://www.youtube.com/watch?v=${this.videoId}`;
    },
  },
};
</script>

<style>
</style>