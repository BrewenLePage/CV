<script setup lang="ts">
</script>

<template>
  <div class="flex flex-row justify-between items-center max-h-28 w-full bg-Charcoal">
        <input type="image" src="logo_gold_sf.png"/>
        <div class="flex flex-row items-center">
            <RouterLink to="/experience" class="link">Mes expériences</RouterLink>
            <RouterLink to="/grade" class="link">Formations</RouterLink>
            <RouterLink to="/" class="link">À propos de moi</RouterLink>
            <RouterLink to="/contact" class="link">Contact</RouterLink>
        </div>
    </div>
</template>

<style >
.link {
    display: flex;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    padding: 1rem;
    color: #D6AD60;
}
</style>
