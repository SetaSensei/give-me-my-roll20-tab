// import * as jsonata from 'jsonata';
//@ts-ignore
import ActorSheet5eCharacter from '../../systems/dnd5e/module/actor/sheets/character.js';

export class MyR20 extends Application {
  get template() {
    //@ts-ignore
    if (!game.user.isGM && this.actor.limited && !game.settings.get(MODULE_ID, MySettings.expandedLimited)) {
      return `../../systems/dnd5e/module/actor/sheets/character.js`;
    }

    return `../../systems/dnd5e/module/actor/sheets/character.js`;
  }

}
Hooks.on('init', () => {
  console.log('Initializing ...')
})

Hooks.on('ready', () => {
  console.log('Readying ...')
})

Hooks.on('renderActorSheet5e', async (app, html, data) => {
  console.log('Rendering ...')
  console.log(JSON.stringify(data.inventory))
  // var t = jsonata("data.inventory[label='DND5E.ItemTypeWeaponPl']").evaluate(data)
  // console.log(t)
  // data.inventory.forEach(item => {
  //   console.log(item)
  // });
})

// Actors.registerSheet('dnd5e', MyR20, {
//   label: 'OGL Character Sheet',
//   types: ['character'],
//   makeDefault: false,
// });