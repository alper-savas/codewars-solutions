function fight(robot1, robot2, tactics) {
  const robotArr = [robot1, robot2];
  let turn = robot2.speed > robot1.speed ? 1 : 0;
  while (
    robot1.health > 0 &&
    robot2.health > 0 &&
    (robot1.tactics.length > 0 || robot2.tactics.length > 0)
  ) {
    const tactic = robotArr[turn].tactics.shift();
    const tacticValue = tactics[tactic];
    robotArr[(turn + 1) % 2].health -= tacticValue;
    turn = robotArr[(turn + 1) % 2].tactics.length > 0 ? (turn + 1) % 2 : turn;
  }
  if (robot1.health > robot2.health) {
    return `${robot1.name} has won the fight.`;
  } else if (robot2.health > robot1.health) {
    return `${robot2.name} has won the fight.`;
  } else {
    return "The fight was a draw.";
  }
}
