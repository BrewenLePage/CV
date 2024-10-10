<script setup>
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-8xl">À propos de moi</h1>
    <div class="flex flex-col items-center">
      <div class="flex flex-row justify-between items-start bg-tan w-full p-10">
        <span>
        <img
          id="photo"
          src="https://media.licdn.com/dms/image/v2/D4E03AQHxvawB8lFNEw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698651125608?e=1733961600&v=beta&t=MDzuC-fmZBaf-4KUAtfUMGyYzkShuBs6mFOYiSKhMP8"
          alt="photo de moi"
          class="w-1/3 rounded-3xl"
        />
      </span>
        <div class="flex flex-col items-center justify-between w-1/2">
          <h2 class="flex text-4xl">Brewen Le Page</h2>
          <h2 class="flex text-4xl">25 ans</h2>
          <h2 class="flex text-4xl">3 ans d'expérience</h2>
        </div>
      </div>
      <div class="flex flex-col w-3/6 mr-10 align items-center">
        <h2>Passion pour l'innovation technologique</h2>
        <p>
          Ma fascination pour les nouvelles technologies a été le fil conducteur
          de mon parcours personnel et professionnel. Cette passion, qui a pris
          racine dès mon plus jeune âge à travers les jeux vidéo, s'est
          développée au fil des années pour englober un large éventail de
          domaines technologiques.
        </p>
        <h2>Origines de mon intérêt</h2>
        <p>
          Les jeux vidéo ont été la porte d'entrée de mon univers technologique.
          Ils m'ont non seulement offert des heures de divertissement, mais ont
          également éveillé ma curiosité pour les systèmes complexes qui les
          sous-tendent. Cette fascination précoce a jeté les bases d'une
          exploration plus approfondie du monde numérique.
        </p>
        <h2>Évolution académique et professionnelle</h2>
        <p>
          Au cours de mes études supérieures, j'ai naturellement orienté mon
          parcours vers des domaines liés à la technologie. La programmation, en
          particulier, a capté mon attention. J'ai découvert que la création de
          logiciels ou de site web était une extension naturelle de ma passion
          pour les systèmes interactifs que j'avais d'abord expérimentés à
          travers les jeux vidéo.
        </p>
        <h2>Perspective d'avenir</h2>
        <p>
          Aujourd'hui, mon intérêt pour les nouvelles technologies continue de
          s'épanouir. Je reste à l'affût des dernières innovations et m'efforce
          constamment d'élargir mes compétences. Cette curiosité insatiable et
          ma volonté d'apprendre sont des atouts précieux dans un secteur en
          perpétuelle évolution. Je suis convaincu que ma passion et mon
          expérience dans le domaine des nouvelles technologies, couplées à mes
          compétences en programmation, me permettent d'apporter une perspective
          unique et précieuse à tout projet innovant.
        </p>
      </div>
    </div>
  </div>
</template>

<style>

img{
  opacity: 0;
  font-size: 0px
}
img span{
  display: inline-block;
  position: relative;
  overflow: hidden;
}
img span::after{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
}
img:nth-child(1){
  animation: imgAppeared 0s 1s forwards;
}
img:nth-child(1) span::after{
  background: #122620;
  animation: slide-in 0.75s ease-out forwards,
  slide-out 0.75s 1s ease-out forwards;
}
@keyframes slide-in {
    100% {
        transform: translateX(0%);
    }
}
@keyframes slide-out {
    100% {
        transform: translateX(100%)
    }
}
@keyframes imgAppeared {
    100% {
        opacity: 1;
    }
}
</style>
