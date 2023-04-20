//Destination assets
import moonImg from "/public/assets/destination/image-moon.webp";
import europaImg from "/public/assets/destination/image-europa.webp";
import marsImg from "/public/assets/destination/image-mars.webp";
import titanImg from "/public/assets/destination/image-titan.webp";
//Crew assets
import douglasPic from "/public/assets/crew/image-douglas-hurley.webp";
import markPic from "/public/assets/crew/image-mark-shuttleworth.webp";
import victorPic from "/public/assets/crew/image-victor-glover.webp";
import anoushehPic from "/public/assets/crew/image-anousheh-ansari.webp";
//Technology assets
import vehiclePic from "/public/assets/technology/image-launch-vehicle-landscape.jpg";
import vehiclePicPortrait from "/public/assets/technology/image-launch-vehicle-portrait.jpg";
import spaceCapsulePic from "/public/assets/technology/image-space-capsule-landscape.jpg";
import spaceCapsulePicPortrait from "/public/assets/technology/image-space-capsule-portrait.jpg";
import spacePortPic from "/public/assets/technology/image-spaceport-landscape.jpg";
import spacePortPicPortrait from "/public/assets/technology/image-spaceport-portrait.jpg";
import { StaticImageData } from "next/image";
import { nanoid } from "nanoid";

export type Travel = {
  name: string;
  image: StaticImageData;
  description: string;
  distance: string;
  time: string;
  id: string;
};

//Destination Data
export const travels: Travel[] = [
  {
    name: "MOON",
    image: moonImg,
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    time: "3 DAYS",
    id: nanoid(),
  },
  {
    name: "MARS",
    image: marsImg,
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    time: "9 MONTHS",
    id: nanoid(),
  },
  {
    name: "EUROPA",
    image: europaImg,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    time: "3 YEARS",
    id: nanoid(),
  },
  {
    name: "TITAN",
    image: titanImg,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    time: "7 YEARS",
    id: nanoid(),
  },
];

export type Crew = {
  name: string;
  image: StaticImageData;
  job: string;
  bio: string;
  id: string;
};

//Crew Data
export const crewMembers: Crew[] = [
  {
    name: "Douglas Hurley",
    image: douglasPic,
    job: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    id: nanoid(),
  },
  {
    name: "MARK SHUTTLEWORTH",
    image: markPic,
    job: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    id: nanoid(),
  },
  {
    name: "Victor Glover",
    image: victorPic,
    job: "PILOT",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    id: nanoid(),
  },
  {
    name: "Anousheh Ansari",
    image: anoushehPic,
    job: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    id: nanoid(),
  },
];

//Technology Data
export const technologies = [
  {
    technologyName: "LAUNCH VEHICLE",
    technologyPic: [vehiclePic, vehiclePicPortrait],
    technologyDescription:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    indexId: 0,
  },
  {
    technologyName: "SPACEPORT",
    technologyPic: [spacePortPic, spacePortPicPortrait],
    technologyDescription:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
    indexId: 1,
  },
  {
    technologyName: "SPACE CAPSULE",
    technologyPic: [spaceCapsulePic, spaceCapsulePicPortrait],
    technologyDescription:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    indexId: 2,
  },
];

//NavBar data
export const NavBarLinks = [
  ["00", " home", "/"],
  ["01", " destination", "/destination"],
  ["02", " crew", "/crew"],
  ["03", " technology", "/technology"],
];
