<template>
  <footer class="row footer">
    <div class="row flex responsive">
      <div class="col col-1">
        <h2 class="section-heading" id="contact">contact</h2>
      </div>
      <div class="col col-2">
        <p>
          Hope you find my skills and experience interesting and consider me for your project.
          I’ll be looking forward to hearing from you soon!
        </p>
        <p>Email me,</p>
        <p>
          <a href>hello.giolara[at]gmail.com</a>
        </p>
        <p>Say hello,</p>
        <p class="social flex">
          <a
            class="social-link"
            v-for="item in links"
            :key="item.id"
            :href="item.url"
          >{{ item.name }}</a>
        </p>
        <p>Download CV</p>
        <p>
          <a class="btn-link" href="http://" target="_blank" rel="noopener noreferrer">Resume.pdf</a>
        </p>
      </div>
    </div>
    <div class="row page-foot">
      <div class="flex foot-note">
        <p class="col-2 copyright">giovanni de andre - 2019</p>
        <p class="col-2 copyright t-right">all rights not reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      email: {
        id: 5,
        name: 'hello.giolara@gmail.com',
        url: 'mailto:hello.giolara@gmail.com',
        email: true
      },
      links: [
        { id: 2, name: 'LinkedIn', url: 'https://linkedin/in/giovannideandre' },
        { id: 3, name: 'CodePen', url: 'https://codepen.io/GiovanniDeAndre' },
        { id: 4, name: 'GitHub', url: 'https://github.com/gioalo' }
      ]
    }
  }
}
</script>

<style scoped>
/* FOOTER */
.footer {
  padding: 5.3125rem 0 0;
  border-top: thin solid lightgray;
}

.darkTheme .footer {
  border-top-color: gray;
}

.page-foot {
  padding: 6.875rem 0 1.25rem;
}

.page-foot p {
  padding: 1.25rem 0;
}

.social {
  justify-content: space-between;
  max-width: 320px;
}

.social a {
  width: calc(100% / 3 - 2em);
}

.copyright.t-right {
  text-align: right;
}
</style>
