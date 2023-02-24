import './TypeIt.js';

// Template
new TypeIt("#ID", {
	loop: true
}).type("Sedrowow ").pause(1500).type("Chaos ").pause(1500).type("Companies").move(-16).delete(7).move(6).delete(4).move(-1).delete(1).type(".").move(2).delete(1).type(".").move(9).pause(4000).delete().go();

new TypeIt("#troll", {
  strings: ["click the button below to see our services"]
}).go();

new TypeIt("#oof", {
}).go();

//Sedrowow Chaos Companies