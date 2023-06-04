const myLuckyNums = [1,2,3,4,568,8];
const myLuckyStrings = myLuckyNums.map(num => num.toString());
console.log(myLuckyStrings);

type listOfFriend = {
    friend1: string;
    friend2: string;
    friend3: string;
    friend4: number;
}

type listOfFriendReadOnly = {
    readonly [key in keyof listOfFriend] : listOfFriend[key];
    //friend1: string;
    //friend2: string;
    //friend3: string;
    //friend4: string;
}

const friendList: listOfFriendReadOnly = {
    friend1: "AAA",
    friend2: "BBB",
    friend3: "CCC",
    friend4: 54534,
}
