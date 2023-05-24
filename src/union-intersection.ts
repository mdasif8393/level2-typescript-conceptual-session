//intersection
type HeroTypeA = {
    name: string;
    age: number;
}

type HeroTypeB = HeroTypeA & {
    salary: number;
    position: string
}

const heroData : HeroTypeB = {
    name: "Assa",
    age: 21,
    salary: 12211,
    position: "Bekar"
}

//union
const myFavHero : HeroTypeA | HeroTypeB = {
    name: "Fav",
    age: 23,
    salary: 323,
}