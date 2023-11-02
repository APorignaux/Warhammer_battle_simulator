import { useState } from "react"

const listeAttaque = [
    "Bolter gun",
    "Omnissian Axe",
    "Grav-pistol",
    "Servo-arm"
]

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

function Button_block() {

        const [hp_Xenos, setHp_Xenos] = useState(50)
        const [hp, setHp] = useState(75)
        const [combo_counter, setCombo_Counter] = useState(0)
        const [damage_counter, setDamage_Counter] = useState(undefined)
        const [self_damage_counter, setSelf_Damage_Counter] = useState(undefined)
        let winner = "Nobody Wins"
        
        function winner_choser() {
            if (hp > 0) {
                winner = "Space Marine Wins, glory to the emperor of mankind !!!"
            }
            else if (hp_Xenos > 0) {
                winner = "ork wins, let's go boyz !!!"
            }
            else {
                winner = "well, nobody is  left"
            }
        }
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        function resetButton() {
            setHp_Xenos(50)
            setHp(75)
        }
    if (hp_Xenos > 0 && hp > 0) {    

        const listeCompetences = []
        for (let index = 0; index < listeAttaque.length; index++) {
            listeCompetences.push(<p>{listeAttaque[index]}</p>)
        }
            
        async function AttackOne() {
            if (hp_Xenos > 0){
                let damage = getRandomInt(12)
                setHp_Xenos(hp_Xenos - damage)
                xenos_attack()
                setCombo_Counter(combo_counter + 1)
                console.log(combo_counter)
                setDamage_Counter("- "+damage)
                await delay(1000);
                setDamage_Counter(undefined)
            }
            else {
                console.log("xenos is dead")
            }
        }

        async function AttackTwo() {
            if (hp_Xenos > 0){
                let damage = getRandomInt(16)
                setHp_Xenos(hp_Xenos - damage)
                xenos_attack()
                setCombo_Counter(combo_counter + 0.5)
                console.log(combo_counter)
                setDamage_Counter("- "+damage)
                await delay(1000);
                setDamage_Counter(undefined)
            }
            else {
                console.log("xenos is dead")
            }
        }
        async function AttackThree() {
            if (hp_Xenos > 0){
                let damage = getRandomInt(8)
                setHp_Xenos(hp_Xenos - damage)
                xenos_attack()
                setCombo_Counter(combo_counter + 2)
                console.log(combo_counter)
                setDamage_Counter("- "+damage)
                await delay(1000);
                setDamage_Counter(undefined)
            }
            else {
                console.log("xenos is dead")
            }
        }
        async function AttackFour() {
            if (hp_Xenos > 0){
                if (combo_counter < 4) {
                    let damage = getRandomInt(20)
                    setHp_Xenos(hp_Xenos - damage)
                    console.log(hp_Xenos)
                    xenos_attack()
                    console.log(combo_counter)
                    setDamage_Counter("- "+damage)
                    await delay(1000);
                    setDamage_Counter(undefined)
                }
                if (combo_counter > 3) {
                    let damage = getRandomInt(20) * 3
                    setHp_Xenos(hp_Xenos - damage)
                    console.log(hp_Xenos)
                    xenos_attack()
                    console.log(combo_counter)
                    setDamage_Counter("- "+damage)
                    await delay(1000);
                    setDamage_Counter(undefined)
                    setCombo_Counter(0)
                }
            }
            else {
                console.log("xenos is dead")
            }
        }
        async function xenos_attack() {
            let xenos_attack_choice = getRandomInt(4)
            if (xenos_attack_choice == 1) {
                await delay(1000)
                setHp(hp - 5)
                setSelf_Damage_Counter("- 5")
                await delay(1000);
                setSelf_Damage_Counter(undefined)
            }
            else if (xenos_attack_choice == 2) {
                await delay(1000)
                setHp(hp - 8)
                setSelf_Damage_Counter("- 8")
                await delay(1000);
                setSelf_Damage_Counter(undefined)
            }
            else if (xenos_attack_choice == 3) {
                await delay(1000)
                setHp(hp - 12)
                setSelf_Damage_Counter("- 12")
                await delay(1000);
                setSelf_Damage_Counter(undefined)
            }
            else if (xenos_attack_choice == 4) {
                await delay(1000)
                setHp(hp - 16)
                setSelf_Damage_Counter("- 16")
                await delay(1000);
                setSelf_Damage_Counter(undefined)
            }
            else {
                await delay(1000)
                setHp(hp - 20)
                setSelf_Damage_Counter("- 20")
                await delay(1000);
                setSelf_Damage_Counter(undefined)
            }
        }
        return (
            <>
                <main className="master">
                    <div className="Player">
                        <div className="hptext">Player hp : {hp}</div>
                        <div className="Player_Damage_print">{self_damage_counter}</div>
                        <img className="spacemarine"></img>
                    </div>
                    <div className="Xenos">
                        <div>tyranid hp : {hp_Xenos}</div>
                        <div className="Xenos_Damage_print">{damage_counter}</div>
                        <img className="xenos" ></img>
                    </div>
                </main>
                <main className="No-master">
                    <div className="Att-Int">
                        <div id="bolter" className="Attack_button1" onClick={AttackOne}>{listeCompetences[0]}</div>
                        <div id="axe" className="Attack_button2" onClick={AttackTwo}>{listeCompetences[1]}</div>
                        <div id="pistol" className="Attack_button3" onClick={AttackThree}>{listeCompetences[2]}</div>
                        <div id="arm" className="Attack_button4" onClick={AttackFour}>{listeCompetences[3]}</div>
                    </div>
                </main>
            </>
        )
    }
    else {
            winner_choser()
        return(
            <div className="end_game">
                <div className="winning_message">{winner}</div>
                <div className="button_Div"><button calssName="reset_button" onClick={resetButton}>reset</button></div>
                
            </div>
        )
    }
        // function SecondStage() {
        //     if (hp_Xenos == 0) {
        //             document.getElementById(TheOrc).classList.remove("xenos")
        //             document.getElementById(TheOrc).classList.add("xenosdead")
        //         }
        //     }
}

export default Button_block;