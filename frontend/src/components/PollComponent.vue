<template>
  <div class="poll">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="poll.img" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{poll.name}}</strong> <small>{{poll.author}}</small>
              <br>
            </p>
          </div>
            <div class="level-left">
              <a class="level-item">
                <span class="org">{{poll.org}}</span>
              </a>
            </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'poll-component',
  props: {
    poll: Object
  }
}
</script>

<style scoped>
html, body {
  height: 100%;
  padding-top: 10px;
  background: #e6ecf1;
}

#app {
  height: 100%;
  padding-top: 0px;
  text-align: center;
}

#app .button {
  margin-bottom: 20px;
}

#app .poll {
  max-width: 500px;
  margin: 0 auto;
  padding-bottom: 15px;
}

#app .box {
  margin-bottom: 0;
  border-radius: 0;
}

#app .content small {
  color: #00d1b2;
}

#app img {
  border-radius: 30px;
}

#app .level-item {
  padding-left: 10px;
  color: #00d1b2;
}

#app input:focus {
  border-color: #00d1b2;
}

#app .likes {
  padding: 0 7.5px;
}

#app input {
  font-weight: bold;
}

#app .polls-move {
  transition: transform 1s;
}
</style>
