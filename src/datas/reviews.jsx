import threestar from "../assets/3star.png";
import fourstar from "../assets/4star.png";
import fivestar from "../assets/5star.png";
import mesh from "../assets/mesh.png";
import nirbay from "../assets/nirbay.png";
import alex from "../assets/alex.png";

const reviews = [
  {
    id: "1",
    name: "Mesh",
    saying:
      "Bangalore Palace impresses with its grandeur and stunning architecture. The intricate woodwork and beautiful paintings are a treat for history enthusiasts. While the entry fee is high and it can get quite crowded, the visit is still worthwhile for a glimpse into the city's royal past. Be prepared for additional charges if you plan to take photos.",
    star: threestar,
    img: mesh,
  },
  {
    id: 2,
    name: "Alex",
    saying:"We had an amazing time at the lively venue. The atmosphere was vibrant, and the energy was infectious. One of the highlights of the day was spotting a sleek McLaren, which added an extra touch of excitement to our experience. Earlier, we also visited an art gallery, which was beautiful and added a touch of culture to our day. Everywhere we went, everyone treated us really nicely, making the entire day even more enjoyable.",
    star: fivestar,
    img: alex,
  },
  {
    id: 3,
    name: "Nirbay Singh",
    saying:"This mall is not a regular mall. I went there without knowing much about this place. It's a very upmarket shopping place with many luxury brands. There is sufficient parking and access to mall from the parking area is very easy. The most unique part of the mall is their food court area which is an open terrace where you get the gorgeous view to the UB City Tower. There is an open amphitheater. The food options, music and the overall ambience is definitely worth the experience. The toilets where great. You may be up for disappointment if you go there expecting a budget shopping experience.",
    star: fourstar,
    img: nirbay,
  },
];


export default reviews;