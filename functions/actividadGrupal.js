const assignRank = (level) =>
level < 10 ? "Novato" :
level <= 49 ? "Aventurero" :
"Leyenda";
console.log(assignRank(25));