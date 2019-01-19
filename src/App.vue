<template>
  <div id="app" class="container" :class="{darkTheme: themeHasChange}">
    <div id="pointer" v-show="!disablePointer">
      <!-- <span class="circle--inner" :style="[bStyles, innerCircleStyles]"></span> -->
      <span class="circle--outer" :style="[bStyles, outerStyles]"></span>
    </div>
    <app-header :themeChanged="themeChanged" @changeTheme="themeChanged = $event"/>
    <main id="main" class="row">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </main>
    <app-footer/>
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      innerCircleStyles: {
        opacity: 0.8,
        width: '20%',
        height: '20%',
        backgroundColor: '#000'
      },
      outerCircleStyles: {
        opacity: 1,
        width: '100%',
        height: '100%',
        backgroundColor: ''
      },
      baseStyles: {
        transform: 'translate3d(0,0,0)'
      },
      top: 0,
      left: 0,
      minSize: 10,
      maxSize: 100,
      scheduled: null,
      isTouch: false,
      themeChanged: null
    }
  },
  methods: {
    move(e) {
      this.top = e.clientY
      this.left = e.clientX
      this.baseStyles.transform = `translate3d(${this.left}px,${this.top}px,0)`
    }
  },
  mounted() {
    let self = this
    if ('ontouchstart' in window) {
      this.isTouch = true
      document.documentElement.style.cursor = 'auto'
    } else {
      window.addEventListener(
        'mousemove',
        event => {
          if (!self.scheduled) {
            setTimeout(function() {
              self.move(self.scheduled)
              self.scheduled = null
            }, 1)
          }
          self.scheduled = event
        },
        {
          capture: true,
          passive: true
        }
      )
    }
  },
  computed: {
    updateScheduled() {
      return this.scheduled
    },
    bStyles() {
      return this.baseStyles
    },
    innerStyles() {
      return this.innerCircleStyles
    },
    outerStyles() {
      return this.outerCircleStyles
    },
    disablePointer() {
      return this.isTouch
    },
    themeHasChange() {
      return this.themeChanged
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Amiri:400,400i,700,700i');
</style>

<style>
/* DEFAULTS/RESETS */
html {
  box-sizing: border-box;
}
html::-webkit-scrollbar {
  width: 0.5em;
}

html::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0);
}

html::-webkit-scrollbar-thumb {
  border-left: thick solid #000;
  /* outline: 1px solid #fafafa; */
}

* {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

html {
  /* cursor: none; */
  scroll-behavior: smooth;
}

body {
  font: normal large/1.618 'Amiri', serif;
  height: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}

/* APP */
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fafafa;
  color: #212121;
  transition: all 0.3s;
}

.darkTheme#app {
  color: #fff;
  background-color: #010101;
}

#pointer {
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 3em;
  height: 3em;
  top: 0;
  left: 0;
  margin: -1.5em 0 0 -1.5em;
  border-radius: 100%;
  backface-visibility: hidden;
  pointer-events: none;
  opacity: 1;
  z-index: 999;
  transition: all 0.1s linear;
}

.circle--inner,
.circle--outer {
  display: block;
  position: absolute;
  margin: auto;
  border-radius: inherit;
}
/* .circle--inner {
  width: 10%;
  height: 10%;
  background-color: #000;
  transition: all 0.2s ease 0.000002s;
} */
.circle--outer {
  width: 100%;
  height: 100%;
  border: thin solid gray;
  opacity: 1;
  transition: all 0.1s ease 0.01s;
}

/* LAYOUT - FLEXBOX - ROWS - COLUMNS */
.container {
  width: 100%;
  max-width: calc(1440px + 9rem);
  margin: 0 auto;
  padding: 0.625rem 4.5rem;
}

.row {
  width: auto;
  margin: 0.625rem 0;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.col {
  padding: 0 0.625rem;
}

.row .col:first-child {
  padding-left: 0;
}

.row .col:last-child {
  padding-right: 0;
}

.col-1 {
  width: 25%;
}

.col-2 {
  width: 50%;
}

.col-3 {
  width: 75%;
}

.col-4 {
  width: 100%;
}

.page-header {
  padding: 0 0 6.875rem;
}

.page-section {
  padding: 0 0 5.3125rem;
}

/* TYPOGRAPHY SIZE/16 = REM */
h1,
h2,
h3,
h4 {
  font-family: 'Amiri', serif;
  font-weight: normal;
}

p {
  font-size: 1rem;
  padding: 0 0 1rem;
}

p:last-child {
  padding: 0;
}

ul li {
  font-size: 1rem;
}

a {
  font-size: 1rem;
  font-weight: 900;
  text-decoration: underline;
  color: #000;
  transition: all 0.25s;
}

a:hover {
  color: #555;
}

.darkTheme a {
  color: #767676;
}

.darkTheme a:hover {
  color: #fff;
}

.headline,
.section-heading,
.subheading {
  color: #000;
}

.darkTheme .headline,
.darkTheme .section-heading,
.darkTheme .subheading {
  color: inherit;
}

.headline {
  padding: 6.875rem 0 1.25rem;
  font-size: 3.75rem;
  font-weight: 900;
  line-height: 1.2;
}

.section-heading {
  font-size: 0.875rem;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 0 0 2.5rem;
}

.subheading {
  font-size: 1.25rem;
  font-weight: 900;
}

.body-2 {
  font-size: 0.875rem;
}

.smaller {
  font-size: 0.75rem;
}

.small {
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.copyright {
  font-size: 0.525rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.foot-note {
  border-top: thin solid lightgray;
}

.darkTheme .foot-note {
  border-top-color: gray;
}

.btn-link {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
}

/* MEDIA */

@media screen and (max-width: 800px) {
  .container {
    padding: 0.625rem 2em;
  }
}

@media screen and (max-width: 600px) {
  .responsive {
    flex-direction: column;
  }

  .responsive [class*='col-'] {
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .headline {
    padding: 3.875rem 0 1.25rem;
    font-size: 1.875rem;
    line-height: 1.2;
  }

  .page-header {
    padding: 0 0 3.875rem;
  }
}
@media screen and (max-width: 400px) {
  .copyright {
    text-align: left;
  }

  body {
    font-size: smaller;
  }
}

@media screen and (min-width: 1920px) {
  body {
    font-size: larger;
  }
}

/* ANIMATIONS */
.fade-enter-active,
.fade-leave-active {
  transform: translateY(0);
  transition: all 0.5s ease 0.001s;
}

.fade-enter,
.fade-leave-to {
  backface-visibility: hidden;
  overflow: hidden;
  transform: translateY(5%);
  opacity: 0;
}
</style>
