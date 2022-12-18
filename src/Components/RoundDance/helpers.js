export const getCircles = (users) => {
  const circles = [];
  let offset = 10;
  for (let index = 0; index < users.length; ) {
    const end = index + offset;
    circles.push({
      users: users.slice(index, end),
      count: offset,
    });

    index = end;
    offset = offset + 5;
  }

  return circles;
};
