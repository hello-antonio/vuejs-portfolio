<template>
  <header class="row">
    <nav id="nav" class="col col-4">
      <router-link v-for="item in pages" :key="item.id" :to="item.url">{{ item.name }}</router-link>
      <div
        class="theme--icon"
        @click.prevent="changeTheme()"
        :style="{transform: `${ currentTheme ? 'rotate(45deg)' : 'rotate(-45deg)'}`}"
      >
        <span class="theme--icon--inner"></span>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    themeChanged: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      pages: [
        { id: 1, name: 'Giovanni De Andre', url: '/' },
        { id: 2, name: 'Experience & Development', url: '/experience' }
      ],
      toggleTheme: false
    }
  },
  methods: {
    changeTheme() {
      this.toggleTheme = !this.toggleTheme
      this.$emit('changeTheme', this.toggleTheme)
    }
  },
  computed: {
    currentTheme() {
      return this.toggleTheme
    }
  }
}
</script>

<style scoped>
/* HEADER */

/* MAIN NAVIGATION */
#nav {
  position: relative;
  min-height: 6.875rem;
  text-align: left;
  display: flex;
  align-items: center;
}

#nav a {
  width: 25%;
  padding: 2em 0;
  margin: 0 2em;
  text-decoration: none;
  color: #555;
  font-weight: normal;
}

.darkTheme #nav a {
  color: #767676;
}

#nav a:hover {
  color: #000;
}

.darkTheme #nav a:hover {
  color: #fff;
}

#nav a:first-child {
  margin-left: 0;
}

#nav a:last-child {
  margin-right: 0;
}

#nav a.router-link-exact-active {
  color: #000;
}

.darkTheme #nav a.router-link-exact-active {
  color: #fff;
}

.theme--icon {
  position: absolute;
  right: 0;
  width: 1.25rem;
  height: 1.25rem;
  background-color: #010101;
  overflow: hidden;
  border-radius: 100%;
  border: 0.1rem solid #010101;
  transition: all 0.3s 0.003s;
}

.theme--icon--inner {
  position: absolute;
  width: 100%;
  height: 50%;
  right: 0;
  background-color: #fafafa;
}

@media screen and (max-width: 800px) {
  #nav a {
    width: 50%;
  }
}
@media screen and (max-width: 600px) {
  #nav a {
    margin: 0 0.5em;
    font-size: 0.75rem;
  }
}
</style>
