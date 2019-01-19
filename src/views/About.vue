<template>
  <div class="row">
    <header class="page-header responsive">
      <div class="col col-2">
        <h1 class="headline">{{headline}}</h1>
      </div>
      <div class="row">
        <p class="col-2">{{subtitle}}</p>
      </div>
    </header>
    <section class="page-section row flex responsive">
      <div class="col col-1">
        <h2 class="section-heading">{{about.heading}}</h2>
      </div>
      <div class="col col-2">
        <p>{{about.content}}</p>
      </div>
    </section>
    <section class="page-section row flex responsive">
      <div class="col col-1">
        <h2 class="section-heading">{{whatIdo.heading}}</h2>
      </div>
      <div class="col col-2">
        <p v-html="whatIdo.content"></p>
      </div>
    </section>
    <section class="page-section row flex responsive">
      <div class="col col-1">
        <h2 class="section-heading">{{colophon.heading}}</h2>
      </div>
      <div class="col col-2">
        <p v-html="colophon.content"></p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headline: 'Front-end Web Developer',
      subtitle: 'Anime enthusiast - Minimalism - Life long student',
      about: {
        heading: `About me`,
        content: `Hi, I’m Giovanni [aka Gio], an enthusiastic front end developer and tinker from California. Life-long student looking for opportunities to help others.
        I specialize in building user-interfaces for humans that are user-friendly, simple and efficient.`
      },
      whatIdo: {
        heading: `What I do`,
        content: `I design responsive web experiences with: HTML, CSS/sass, JavaScript (es6). 
        I preferer to use ReacJS for the front-end UI but I don’t mind using other libraries, FYI
        this site is made with <strong>VueJS</strong>, awkward.
        I also have experience working with RESTful APIs, Canvas API, and Maps API. I love designing modern, 
        interactive and minimal UIs. Have a project? Then, I'm interested <a href="#contact">lets's talk!</a>`
      },
      colophon: {
        heading: 'colophon',
        content: `Front-end: <strong>VueJS</strong> <br/>Hosting: <strong>GitHub Pages</strong> <br/>Fonts: <strong>Amiri</strong> Regular and Bold`
      }
    }
  }
}
</script>

<style scoped>
</style>
