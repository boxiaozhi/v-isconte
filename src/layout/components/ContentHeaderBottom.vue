<template>
  <div class="header-container">
    <div class="header" :style="{ height: headerHeight + 'px' }" :class="{ 'hide-icon': !showHeader }">
      <div class="trigger" @click="menuAction('default')">
        <a-icon type="menu" class="trigger-icon" />
      </div>
      <div v-if="isArticleDetail" class="trigger" @click="$router.push({ path: '/article' })">
        <a-icon type="left" class="trigger-icon" />
      </div>
      <div v-if="showListIcon" class="trigger" @click="showListAction(!showList)">
        <c-icon type="icon-mulu" class="trigger-icon" />
      </div>
      <div v-if="isArticle" class="trigger" title="RSS Feed of Article" @click="turnUrl('/feed/article.rss')">
        <c-icon type="icon-rss" class="trigger-icon" />
      </div>
      <div class="right">
        <div v-if="scrollPer" class="scroll-percent">{{ scrollPer }} %</div>
        <transition enter-active-class="animated swing">
          <div v-if="showScrollTop" class="trigger" title="Scroll To Top" @click="scrollTop">
            <a-icon type="up" class="trigger-icon" />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { useThrottleFn } from '@vueuse/core';
import { mapMutations } from 'vuex';
import * as MT from '@/store/mutation-types';
import { contentHeaderMixin } from '@/utils/mixin';

export default {
  name: 'ContentHeader',
  mixins: [contentHeaderMixin],
  data() {
    return {
      isArticle: false,
      isArticleDetail: false,
      isTalk: false,
      showScrollTop: false,
      scrollPer: 0,
    };
  },
  computed: {
    showListIcon() {
      return this.isArticleDetail && this.clientWidth > this.$config.articleShowListWidth;
    },
    showHeader() {
      return this.headerHeight > this.$config.headerHideHeight;
    },
    pinIconRotate() {
      return this.headerPin ? 0 : -45;
    }
  },
  watch: {
    '$route': 'deal'
  },
  mounted() {
    const scrollElement = document.querySelector('html');
    document.addEventListener('scroll', useThrottleFn(() => {
      const scrollHeight = scrollElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrollTop =  scrollElement.scrollTop;
      this.scrollPer = Math.floor(scrollTop/(scrollHeight-clientHeight)*100);
      this.showScrollTop = scrollTop > 100;
    }, 200), false);
  },
  created() {
    this.deal();
  },
  methods: {
    ...mapMutations('app', {
      menuAction: MT.MENU_STATUS,
      darkAction: MT.DARK_MODE,
    }),
    deal() {
      this.isArticleDetail = this.$route.name === 'Article' && this.$route.params.id;
      this.isArticle = ['Article'].includes(this.$route.name);
      this.isTalk = ['/talk'].includes(this.$route.path);
    },
    turnUrl(url) {
      window.location.href = url;
      return true;
    },
    scrollTop() {
      const scrollElement = document.querySelector('html');
      scrollElement.scrollTop = 0;
    },
  },
};
</script>

<style scoped lang="less">
@import '~@/style/variables.less';

.header-container {
  position: fixed;
  bottom: -1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  border-bottom: 1px solid @border-color;
  z-index: 2;
  background: @bg;
  .header {
    width: 100%;
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: row;
    .trigger {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 @padding-2;
      height: 100%;
      cursor: pointer;
      opacity: 0.3;
      .trigger-icon {
        font-size: 18px;
      }
      &:hover,
      &:focus,
      &:active,
      &:target {
        opacity: 1;
      }
    }
    .right {
      display: flex;
      position: absolute;
      padding-right: 20px;
      height: 100%;
      right: 0;
      .scroll-percent {
        line-height: 48px;
        opacity: 0.3;
      }
    }
    .trigger.ant-popover-open {
      opacity: 1;
    }
  }
  .hide-icon {
    .trigger {
      display: none;
      transform: height 0.3s;
    }
  }
}

.dark-theme {
  .header-container {
    background: @dark-theme-bg;
  }
}
</style>
