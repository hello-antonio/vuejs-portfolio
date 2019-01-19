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
        <h2 class="section-heading">Portfolio</h2>
      </div>
      <div class="col col-3">
        <ul class="projects flex">
          <li class="projects--item" v-for="item in portfolio" :key="item.id">
            <a
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              :style="{pointerEvents:`${item.link.length != 0 ? '':'none'}`}"
            >
              <h3>{{item.title}}</h3>
              <div class="foot">
                <div class="small projects--item--type">{{item.type}}</div>
                <div class="small projects--item--status">{{item.status}}</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section class="page-section row">
      <div class="col col-4">
        <h2 class="section-heading">Developer tools</h2>
      </div>
      <div class="row flex responsive responsive-lg">
        <div class="col col-1 list-a">
          <p>JS Development</p>
          <p class="bold">ReactJS
            <br>VueJS
            <br>Webpact
            <br>GSAP
            <br>AnimeJS
            <br>JQuery
            <br>NodeJS
          </p>
        </div>
        <div class="col col-1 list-a">
          <p>CSS Development</p>
          <p>SCSS/Sass
            <br>Material UI
            <br>Bootstrap, Foundation, etc
          </p>
        </div>
        <div class="col col-1 list-a">
          <p>Version Control System</p>
          <p>Git
            <br>GitHub
          </p>
        </div>
        <div class="col col-1 list-a">
          <p>Misc.</p>
          <p>Design: Adobe Xd &amp; Figma
            <br>Code Editor: VS Code
            <br>Chrome Dev Tools
            <br>Lighthouse
            <br>NPM
            <br>Ubuntu Linux OS
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headline: `Experience & Development`,
      subtitle: `Here you'll find a collection of school and personal projects/assigments`,
      portfolio: [
        {
          id: 1,
          title: 'Pixel Art Maker',
          content:
            'Pixel art maker is a web art editor that allows you to draw pixel art. The project was built with vanillaJS.',
          date: 'jan 2018',
          link: 'http://gioalo.github.io/pixel-art-maker/',
          type: 'web app',
          status: 'live'
        },
        {
          id: 2,
          title: 'Jean Doette Portfolio',
          content:
            "For this project a mock-up was given to replicate the design only using HTML and CSS (frameworks weren't allowed). The site is responsive and displays images, descriptions and links to each of the portfolio project.",
          date: 'mar 2018',
          link: 'http://gioalo.github.io/FEND-project-01-portfolio/',
          type: 'website',
          status: 'live'
        },
        {
          id: 3,
          title: 'Memory Match Game',
          content:
            'The task for this project was to make a matching cards game with vanillaJS.',
          date: 'apr 2018',
          link: 'http://gioalo.github.io/FEND-memory-game-project/',
          type: 'web game',
          status: 'live'
        },
        {
          id: 4,
          title: 'Frogger Arcade Game',
          content:
            'This is a web game written in vanillaJS and HTML5 Canvas API, its a clone game from the classic arcade game Frogger. I implemented the game functionality and designed the UI.',
          date: 'may 2018',
          link: 'http://gioalo.github.io/FEND-arcade-game/',
          type: 'web game',
          status: 'live'
        },
        {
          id: 5,
          title: 'Restaurant Reviews',
          content:
            'The task in hand was to convert a static webpage for restaurants to a mobile-ready web application. I added a11y and convert the design to be responsive. Last, I add a service worker to begin the process of creating a seamless offline experience for users.',
          date: 'jun 2018',
          link: 'http://gioalo.github.io/FEND-restaurant-reviews-app-1/',
          type: 'website',
          status: 'live'
        },
        {
          id: 6,
          title: 'My Reads',
          content:
            'This project is a books website and my first React app. A user can search books from a books API (Udacity books API), the user can add/move books to the e.g., read, want to read, and currently reading shelves.',
          date: 'jul 2018',
          link: 'https://github.com/gioalo/FEND-my-reads-app',
          type: 'web app',
          status: 'repo'
        },
        {
          id: 7,
          title: 'My Neighborhood Maps',
          content:
            'For this project the task was to make a maps app, super cool! My app displays the parks maps in the Bay Area. The user can filter/search the parks by location and category. The app uses third-party APIs services (Foursquare Places API and the Leaflet Maps).',
          date: 'aug 2018',
          link: 'https://github.com/gioalo/FEND-neighborhood-maps-app',
          type: 'web app',
          status: 'repo'
        },
        {
          id: 8,
          title: 'Sass Master',
          content:
            'This project its been cooking with Sass. Its just a collection of modules for typography settings (vertical rhythm, font size ratios), grids, media-queries, colours, that kind of stuff!',
          date: 'ongoing',
          link: '',
          type: 'website',
          status: 'coming soon'
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  list-style: none;
  justify-content: space-between;
  flex-wrap: wrap;
}

.projects--item {
  width: calc(100% / 2 - 2rem);
  flex: 1 1 auto;
  margin: 0 1rem 1.25rem;
  padding: 0 0 1.25rem;
  border-bottom: thin solid lightgray;
}

.darkTheme .projects--item {
  border-bottom-color: gray;
}

.projects--item a {
  display: block;
  color: inherit;
  text-decoration: none;
}

.projects--item:hover a {
  color: #000;
}

.darkTheme .projects--item a {
  color: #767676;
}

.darkTheme .projects--item:hover a {
  color: #fff;
}

.projects--item h3 {
  font-weight: 900;
  font-size: 1.25rem;
}

.projects--item .small {
  font-weight: normal;
}

.foot {
  display: flex;
  flex-flow: row nowrap;
}

.projects--item--type {
  color: inherit;
}

.projects--item--status,
.projects--item--type {
  width: 50%;
}

.projects--item--status {
  text-align: right;
}

.list-a {
  padding: 0 0 2.5rem;
}

.list-a:last-child {
  padding: 0;
}

.list-a p:first-child {
  font-weight: bold;
}

@media screen and (max-width: 800px) {
  .responsive-lg {
    flex-wrap: wrap;
  }

  .responsive-lg [class*='col-'] {
    width: 50%;
    flex: 1 1 auto;
  }
}

@media screen and (max-width: 700px) {
  .responsive .projects--item {
    width: 100%;
    margin: 0 0 1.25rem;
    position: relative;
  }
}
</style>
