<script setup lang="ts">
import paragraphHighlight from '@elonehoo/paragraph-highlight/src'

const content = "Tropical birds scattered as Drake veered the Jeep onto an old rutted track, snapping branches and tearing away vines, plowing through the rain forest with killers in pursuit, bullets flying, a gorgeous but pouty girl in the passenger's seat, and a bitch of a headache. . With only one of his arms on the wheel, the Jeep slewed to the left, and the pouty girl screamed as he forced the vehicle back onto the trail just before they would have crashed into a felled tree."+
"Tropical birds scattered as Drake swerved the Jeep onto a rutted old track, snapping branches and ripping vines, hurtling through the rain forest with killers in pursuit, bullets flying, and a beautiful but pouting girl in the passenger seat with headache. With only one arm on the wheel, the Jeep veered to the left, and the grumpy girl screamed, forcing the vehicle back onto the road just before they slammed into a felled tree."

const query = ref('Drak')

</script>

<template>
  <div>
    <h1>
      <paragraphHighlight highlight-tag="text" query="highlight">paragraph highlight</paragraphHighlight>
    </h1>
    <div class="card">
      <input
        id="input"
        v-model="query"
        type="text"
        autocomplete="false"
        p="x-4 y-2"
        w="250px"
        text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
      >
      <br />
      Query
      <br />
      <paragraphHighlight :query="query">{{content}}</paragraphHighlight>
    </div>
  </div>
</template>

<style>
.card {
  width: 500px;
  max-width: 100vw;
  margin: auto;
  margin-top: 40px;
  /* background: white; */
  padding: 20px;
  padding-bottom: 30px;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, .1);
}
text{
  background-color: #42b983;
  color: #FFFFFFF0;
}
</style>
