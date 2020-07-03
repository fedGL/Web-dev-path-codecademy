const team = {
  _players: [
    {firstName: 'Pablo',lastName: 'Sanchez',age: 18},
    {firstName: 'Mike', lastName: 'Rhodes', age: 20},
    {firstNane: 'Tom', lastName: 'Baker', age: 20}
  ],
  _games: [
    {opponent: 'Big Horns',teamPoints: 67, opponentPoints: 65},
    {opponent: 'Thunder Cats',teamPoints: 83, opponentPoints: 91},
    {opponent: 'Rockets',teamPoints: 75, opponentPoints: 73}
  ],
  get players (){ return this._players},
  get games (){ return this._games},

  addPlayer (firstName,lastName,age){
    if(typeof firstName == 'string' && typeof lastName == 'string' && typeof age == 'number'){
      this._players.push({firstName,lastName,age});
    }
  },
  addGame (opponentName,teamPoints,opponentPoints){
    const newGame = {opponentName,teamPoints,opponentPoints};
    this._games.push(newGame);
  }
};

team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);
team.addGame('Beavers',68,85);
console.log(team.games);
