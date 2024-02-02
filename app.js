let gold = 0
let reward = 10
let potions = 0


const player = {
    name: 'Knight',
    type: 'Human',
    damage: 10,
    health: 50
}

const heroes = [
    {
        name: 'Sam',
        type: 'dwarf',
        damage: 5,
        health: 100,
    },
    {
        name: 'Jake',
        type: 'elf',
        damage: 10,
        health: 50,
    }
]

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}

// function bossLevelIncrease(){
//     const bossHealth = 10
//     const bossMaxHealth = 10
//     const bossDamage = 1
//     const bossLevel = 1
    
//      if(boss.level++){
//         let boss.Health = 
//      }




function drawPlayer() {
    const name = document.getElementById('playerName')
    const health = document.getElementById('playerHealth')
    const damage = document.getElementById('playerDamage')
    
    
    name.innerText = player.name
    health.innerText = player.health
    damage.innerText = player.damage
    document.getElementById('playerGold').innerHTML = gold
}

function drawSam() {
    if(gold >= 100) {
    const name = document.getElementById('heroName1')
    const health = document.getElementById('heroHealth1')
    const damage = document.getElementById('heroDamage1')
    document.getElementById('hero-1').style.display = 'block'
    
    const foundSam = heroes.find(hero => hero.name = 'Sam')
    name.innerHTML = foundSam.name
    health.innerHTML = foundSam.health
    damage.innerHTML = foundSam.damage
    setInterval(samAttack, 1000)
    samAttack() 
    }
}

function drawJake() {
    if(gold > 1000) {
        const name = document.getElementById('heroName2')
        const health = document.getElementById('heroHealth2')
        const damage = document.getElementById('heroDamage2')
        document.getElementById('hero-2').style.display = 'block'
        
        const foundJake = heroes.find(hero => hero.name = 'Jake')
        name.innerHTML = foundJake.name
        health.innerHTML = foundJake.health
        damage.innerHTML = foundJake.damage
        setInterval(samAttack, 1000)
        jakeAttack()
    }
}

function usePotion() {
    if(potions >= 0) {
        potions -= 1
        player.health += 10
        document.getElementById('potion').innerHTML = potions
        drawPlayer()
    }
}

function buyPotion() {
    document.getElementById('potion').innerHTML = potions
    
    
    if(gold > 25) {
        gold -= 25
        potions += 1
        document.getElementById('potion').innerHTML = potions
        drawPlayer()
        checkPotion()
    } 
}

        
     
function playerAttack() {
    boss.health -= player.damage
    console.log(boss.health)
    nextLevel()
    callHealthBar()
}

function samAttack() { 
    const team = heroes.find(hero => hero.name == 'Sam')
    boss.health -= team.damage
    console.log(boss.health)
    nextLevel()
    callHealthBar()
}

function jakeAttack() {
    
    const team = heroes.find(hero => hero.name == 'Jake')
    boss.health -= team.damage
    console.log(boss.health)
    nextLevel()
    callHealthBar()
}

function bossAttack() {
    const team = heroes.filter(hero => hero.health)
    team.forEach(heros => heros.health -= boss.damage)
    player.health -= boss.damage
    drawPlayer()
}

function nextLevel() {
    const level = document.getElementById('bossLevel')
    document.getElementById('reward').innerHTML = reward

    
    if(boss.health <= 0) {
        gold += reward
        reward += 10
        boss.level++
        boss.maxHealth += 20
        boss.health = boss.maxHealth
        level.innerText = boss.level
        player.damage += 5
        document.getElementById('reward').innerHTML = reward
        drawPlayer()
    }
}

function callHealthBar(){
document.getElementById('bossBar').style.width = `${boss.health/boss.maxHealth*100}%`

}

//nextLevel()
drawPlayer()
// ANCHOR time intervals

//setInterval(bossAttack, 5000)