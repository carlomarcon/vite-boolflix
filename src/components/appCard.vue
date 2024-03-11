<script>
import { store } from "./store";

export default {
  props: {
    list: Object,
    check: Boolean,
    listType: Array,
  },

  methods: {
    score: function (number) {
      return Math.floor(number / 2 + 1);
    },
    console: function () {
      console.log(this.listType.length);
    },
  },
};
</script>
<template>
  <div
    class="card"
    :class="{
      cardNormal: listType.length > 8,
      cardSmall: listType.length < 8,
    }"
    @click="console"
  >
    <img
      :src="'https://image.tmdb.org/t/p/original' + list.poster_path"
      alt=""
      class="cover"
      v-if="list.poster_path !== null"
    />
    <h1 v-else>Image not found</h1>
    <div class="description">
      <i
        v-for="num in 5"
        :class="{
          'fa-regular fa-star': score(list.vote_average) < num,
          'fa-solid fa-star': score(list.vote_average) >= num,
        }"
      ></i>

      <div class="overflow">
        <div v-if="check === true">
          <h2>{{ list.title }}</h2>
          <p>{{ list.overview }}</p>
        </div>
        <div v-else>
          <h2>{{ list.name }}</h2>
          <p>{{ list.overview }}</p>
        </div>
      </div>
    </div>

    <!-- <h3>{{ list.title }}</h3> -->

    <img
      v-if="list.original_language === 'it'"
      src="https://static-00.iconduck.com/assets.00/flag-italy-emoji-2048x1279-lgfb3r16.png"
      alt=""
      class="flag"
    />
    <img
      v-if="list.original_language === 'fr'"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Flag_of_France.png/1200px-Flag_of_France.png"
      alt=""
      class="flag"
    />
    <img
      v-if="list.original_language === 'pt'"
      src="data:image/png;base64,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"
      alt=""
      class="flag"
    />
    <img
      v-if="list.original_language === 'en'"
      src="https://t4.ftcdn.net/jpg/01/71/57/89/360_F_171578974_eNhE6sEpc6jsK6Py7IxhTbIZZQ7878Wb.jpg"
      alt=""
      class="flag"
    />
    <img
      v-if="list.original_language === 'th'"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/2560px-Flag_of_Thailand.svg.png"
      alt=""
      class="flag"
    />

    <img
      v-else-if="
        list.original_language != 'th' &&
        list.original_language != 'en' &&
        list.original_language != 'en' &&
        list.original_language != 'pt' &&
        list.original_language != 'fr' &&
        list.original_language != 'it'
      "
      src="data:image/png;base64,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"
      class="flag"
      alt=""
    />
    <!-- <h3>{{ list.original_language }}</h3> -->
  </div>
</template>
<style lang="scss" scoped>
.cardSmall {
  width: calc(100% / 3);
  height: 22rem;
}

.cardNormal {
  width: calc(100% / 4);
  height: 25rem;
}
.card {
  display: flex;
  position: relative;

  h1 {
    position: absolute;
    top: 65%;
    border: 1px dotted grey;
    z-index: 0;
  }

  &:hover {
    .cover {
      z-index: 0;
      filter: brightness(30%);
    }
    .flag {
      display: none;
    }

    .description {
      text-align: center;
      z-index: 1;

      .fa-solid.fa-star {
      }

      i {
        color: white;
        height: 20px;
        width: 20px;
        margin: 10px 0;
      }
    }
  }

  .description {
    z-index: -1;
    position: absolute;

    .overflow {
      font-size: 1rem;
      height: 150px;
      width: 100%;
      color: white;
      overflow-y: auto;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }

  .flag {
    width: 100px;
    height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  h2,
  h4 {
    z-index: -1;
  }
}
</style>
