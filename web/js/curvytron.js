/*!
 * curvytron 0.0.1
 * https://github.com/Gameo/curvytron
 * MIT
 */

function EventEmitter(){this._eventElement=document.createElement("div")}function OptionResolver(t){this.allowExtra="undefined"!=typeof t&&t,this.defaults={},this.types={},this.optional=[],this.required=[]}function onload(){loaded||(window.removeEventListener("load",onload),loaded=!0,window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,new Game)}function Game(){this.canvas=document.createElement("canvas"),this.rendered=(new Date).getTime(),this.frame=null,this.players=[],this.loop=this.loop.bind(this),this.canvas.setAttribute("resize",!0),document.body.appendChild(this.canvas),paper.setup(this.canvas),this.addPlayer(new Player("red")),this.start()}function Player(t){this.color=t||"red",this.head=new paper.Point(0,0),this.lastPosition=this.head.clone(),this.trail=new paper.Path,this.angle=.5,this.velocities=[],this.key=!1,this.updateVelocities(),this.trail.strokeColor=this.color,this.trail.strokeWidth=this.radius,this.trail.strokeCap="round",this.trail.strokeJoin="round",this.trail.fullySelected=!0;var e=this;window.addEventListener("keydown",function(t){e.key=t.keyCode}),window.addEventListener("keyup",function(){e.key=!1})}EventEmitter.prototype.emit=function(t,e){this._eventElement.dispatchEvent(new CustomEvent(t,{detail:e}))},EventEmitter.prototype.addEventListener=function(t,e){this._eventElement.addEventListener(t,e,!1)},EventEmitter.prototype.removeEventListener=function(t,e){this._eventElement.removeEventListener(t,e,!1)},EventEmitter.prototype.on=EventEmitter.prototype.addEventListener,EventEmitter.prototype.off=EventEmitter.prototype.removeEventListener,OptionResolver.prototype.setDefaults=function(t){for(var e in t)t.hasOwnProperty(e)&&(this.defaults[e]=t[e]);return this},OptionResolver.prototype.setTypes=function(t){for(var e in t)t.hasOwnProperty(e)&&(this.types[e]=t[e]);return this},OptionResolver.prototype.setOptional=function(t){return this.allowExtra?void 0:(this.addToArray(this.optionals,t),this)},OptionResolver.prototype.setRequired=function(t){return this.addToArray(this.required,t),this},OptionResolver.prototype.resolve=function(t){var e={};for(var i in this.defaults)this.defaults.hasOwnProperty(i)&&(e[i]=this.getValue(t,i));for(var o=this.required.length-1;o>=0;o--)if(i=this.required[o],"undefined"==typeof e[i])throw'Option "'+i+'" is required.';return e},OptionResolver.prototype.getValue=function(t,e){var i=null;if(!this.optionExists(e))throw'Unkown option "'+e+'".';return"undefined"!=typeof t[e]?i=t[e]:"undefined"!=typeof this.defaults[e]&&(i=this.defaults[e]),this.checkType(e,i),i},OptionResolver.prototype.checkType=function(t,e){var i="undefined"!=typeof this.types[t]?this.types[t]:!1,o=typeof e;if(i&&o!==i&&("string"===i&&(e=String(e)),"boolean"===i&&(e=Boolean(e)),"number"===i&&(e=Number(e)),o=typeof e,i!==o))throw'Wrong type for option "'+t+'". Expected '+this.types[t]+" but got "+typeof e},OptionResolver.prototype.optionExists=function(t){return this.allowExtra?!0:"undefined"!=typeof this.defaults[t]||this.optional.indexOf(t)>=0||this.required.indexOf(t)>=0},OptionResolver.prototype.addToArray=function(t,e){for(var i,o=e.length-1;o>=0;o--)i=e[o],t.indexOf(i)>=0&&t.push(i)};var loaded=!1;window.addEventListener("load",onload),Game.prototype.draw=function(){paper.view.draw()},Game.prototype.update=function(t){for(var e=this.players.length-1;e>=0;e--)this.players[e].update(t)},Game.prototype.addPlayer=function(t){this.players.push(t)},Game.prototype.start=function(){this.frame||this.loop()},Game.prototype.stop=function(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=null)},Game.prototype.loop=function(){this.frame=window.requestAnimationFrame(this.loop);var t=(new Date).getTime(),e=t-this.rendered;this.rendered=t,this.draw(),this.update(e)},Player.prototype.velocity=5,Player.prototype.radius=10,Player.prototype.precision=10,Player.prototype.update=function(){this.key&&this.setAngle(this.angle+.1*("37"==this.key?-1:1)),this.head=this.head.add(this.velocities),this.lastPosition.getDistance(this.head)>this.precision&&(this.lastPosition=this.head.clone(),this.trail.moveTo(this.head),this.trail.lineTo(this.head))},Player.prototype.setAngle=function(t){this.angle=t,this.updateVelocities()},Player.prototype.updateVelocities=function(){this.velocities=[Math.cos(this.angle)*this.velocity,Math.sin(this.angle)*this.velocity]};