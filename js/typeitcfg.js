import './TypeIt.js';

// Template
new TypeIt("#intwel", {
    lifeLike: true,
})
.type("Welcome to the ######### website.")
.break()
.pause(600)
.type("Plus a little more.")
.go();

new TypeIt("#troll", {
    strings: ["If you are really sure click the button below me"]
}).go();