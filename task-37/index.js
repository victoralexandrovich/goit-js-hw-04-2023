// Change code below this line
const getTotalFriendCount = (users) => {
  return users.reduce((total, user) => total + user.friends.length, 0);
};
// Change code above this line
