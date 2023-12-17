<script setup>
import { ref } from 'vue';

const createSkill = ref(false)

const sliderValue = ref(50);
const skillName = ref('');

const skills = ref([
    { text: 'HTML', percetage: '77' },
    { text: 'CSS', percetage: '86' },
    { text: 'JavaScript', percetage: '65' }
])

function addSkill() {
    skills.value.push({ text: skillName.value, percetage: sliderValue.value })
    sliderValue.value = 50
    skillName.value = ''
}

function toggleSkillCreator() {
    createSkill.value = !createSkill.value; 
}

</script>

<template>
    <div class="skillContainer" v-for="skill in skills">
        <div class="skill" :style="{ 'width': skill.percetage + '%' }">
            <p>{{ skill.text }}</p>
            <p>{{ skill.percetage }}%</p>
        </div>
    </div>

    <div class="skillCreator" :class="{ create : createSkill }" @click="toggleSkillCreator">
        <div class="CreatorBar1"></div>
        <div class="CreatorBar2"></div>
    </div>

    <div class="skillAnlegen" :class="{ newSkill: createSkill }">
        <h3 style="margin: 32px 0 8px 0;">Neuen Skill anlegen:</h3>
        <div class="skillContainer">
            <div class="skill" :style="{ 'width': sliderValue + '%' }">
                <p>{{ skillName }}</p>
                <p>{{ sliderValue }}%</p>
            </div>
        </div>
        <form @submit.prevent="addSkill" style="display: block;">
            <input v-model="sliderValue" type="range" min="0" max="100" class="slider" />
            <input type="text" v-model="skillName" placeholder="Bezeichnung" style="max-width: 50%; margin-right: 8px;" />
            <button>Erstellen</button>
        </form>
    </div>
</template>

<style>
.slider {
    -webkit-appearance: none;
    width: 100%;
    height: 16px;
    border-radius: 5px;
    background: var(--color-background-mute);
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: var(--color-highlight);
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: var(--color-highlight);
    cursor: pointer;
}

.skillContainer {
    width: 100%;
    background-color: var(--color-background-mute);
}

.skill {
    display: flex;
    justify-content: space-between;
    text-align: right;
    padding: 8px;
    margin-bottom: 8px;
    color: var(--vt-c-white);
    background: linear-gradient(90deg, var(--color-analogous2) 0%, var(--color-highlight) 100%);
}

.skillAnlegen {
    display: none;
}

.newSkill {
    display: block;
}

.skillCreator {
    display: inline-block;
    cursor: pointer;
    margin-top: 8px;
}

.CreatorBar1,
.CreatorBar2 {
    width: 35px;
    height: 5px;
    background-color: var(--color-text);
    margin: 6px 0;
    transition: 0.4s;
}

.CreatorBar1 {
    transform: translate(0, 11px) rotate(-90deg);
}

.create .CreatorBar1 {
    transform: translate(0, 11px) rotate(0deg);
}
</style>