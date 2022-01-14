import { modFox, modScene, togglePoopBag, toggleRain } from "./ui";
import {
  RAIN_CHANCE,
  SCENES,
  DAY_LENGTH,
  NIGHT_LENGTH,
  getNextDieTime,
  getNextHungerTime,
  getNextPoopTime,
  TICK_RATE,
} from "./constants";

const gameState = {
  current: "INIT",
  clock: 1,
  wakeTime: -1,
  sleepTime: -1,
  hungryTime: -1,
  poopTime: -1,
  dieTokens: [],
  dieTime: -1,
  tick() {
    this.clock++;
    console.log("clock", this.clock);

    if (this.clock === this.wakeTime) {
      this.wake();
    } else if (this.clock === this.sleepTime) {
      this.sleep();
    }

    if (this.hungryTime === this.clock) {
      this.hungry();
      this.poopTime = getNextPoopTime(this.clock);
      this.dieTime = getNextDieTime(this.clock);
    }

    if (this.poopTime === this.clock) {
      this.poop();
      this.dieTime = getNextDieTime(this.clock);
    }

    if (this.dieTime === this.clock) {
      this.die();
    }

    return this.clock;
  },
  startGame() {
    this.current = "HATCHING";
    this.wakeTime = this.clock + 2;
    modFox("egg");
    modScene("day");
  },
  wake() {
    this.current = "IDLING";
    this.wakeTime = -1;
    this.scene = Math.random() > RAIN_CHANCE ? 0 : 1;
    this.scene === 1 ? modFox("rain") : modFox("idling");
    modScene(SCENES[this.scene]);
    this.sleepTime = this.clock + DAY_LENGTH;
    this.hungryTime = getNextHungerTime(this.clock);
  },
  sleep() {
    this.current = "SLEEP";
    this.poopTime = getNextPoopTime(this.clock + NIGHT_LENGTH);
    this.hungryTime = getNextHungerTime(this.clock + NIGHT_LENGTH);
    this.dieTime = -1;
    modFox("sleep");
    modScene("night");
    this.wakeTime = this.clock + NIGHT_LENGTH;
  },
  hungry() {
    this.current = "HUNGRY";
    modFox("hungry");
  },
  poop() {
    this.current = "POOPING";
    modFox("pooping");
    setTimeout(() => {
      this.current = "POOPED";
      this.hungryTime = getNextHungerTime(this.clock);
      modFox("pooped");
    }, 5000);
  },
  die() {
    console.log("die", this.dieTokens);
    this.dieTokens.push("token");
    if (this.dieTokens.length > 3) {
      this.current = "DEAD";
      this.sleepTime = -1;
      this.hungryTime = -1;
      this.poopTime = -1;
      this.dieTokens = [];
      this.dieTime = -1;
      modFox("dead");
      modScene("dead");
    }
  },
  handleUserAction(icon) {
    if (
      ["SLEEP", "FEEDING", "CELEBRATING", "HATCHING", "POOPING"].includes(
        this.current
      )
    ) {
      //do nothing
      return;
    }

    if (this.current === "INIT" || this.current === "DEAD") {
      this.startGame();
      return;
    }

    switch (icon) {
      case "weather":
        this.changeWeather();
        break;
      case "poop":
        this.cleanUpPoop();
        break;
      case "fish":
        this.feed();
        break;
    }
  },
  changeWeather() {
    console.log("changeWeather");
    if (this.scene === 0) {
      this.scene = 1;
      toggleRain(true);
      modFox("rain");
      modScene("rain");
    } else {
      this.scene = 0;
      toggleRain(false);
      modFox("idling");
      modScene("day");
    }
  },
  cleanUpPoop() {
    console.log("clean up poop");
    if (this.current === "POOPED") {
      this.dieTime = -1;
      this.poopTime = -1;
      togglePoopBag(true);
      modFox("celebrate");
      setTimeout(() => {
        togglePoopBag(false);
        this.current = "IDLING";
        this.hungryTime = getNextHungerTime(this.clock);
        this.scene === 1 ? modFox("rain") : modFox("idling");
      }, TICK_RATE);
    }
  },
  feed() {
    console.log("feed");
    if (this.current === "HUNGRY") {
      this.current = "FEEDING";
      this.dieTime = -1;
      modFox("eating");
      setTimeout(() => {
        this.current = "IDLING";
        this.poopTime = getNextPoopTime(this.clock);
        modFox("celebrate");
        setTimeout(() => {
          this.scene === 1 ? modFox("rain") : modFox("idling");
        }, 2000);
      }, TICK_RATE);
    }
  },
};

export const handleUserAction = gameState.handleUserAction.bind(gameState);
export default gameState;
