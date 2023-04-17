//Destination assets
import moonImg from '../assets/destination/image-moon.webp'
import europaImg from '../assets/destination/image-europa.webp'
import marsImg from '../assets/destination/image-mars.webp'
import titanImg from '../assets/destination/image-titan.webp'
//Crew assets
import douglasPic from '../assets/crew/image-douglas-hurley.webp'
import markPic from '../assets/crew/image-mark-shuttleworth.webp'
import victorPic from '../assets/crew/image-victor-glover.webp'
import anoushehPic from '../assets/crew/image-anousheh-ansari.webp'
//Technology assets
import vehiclePic from '../assets/technology/image-launch-vehicle-landscape.jpg'
import vehiclePicPortrait from '../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceCapsulePic from '../assets/technology/image-space-capsule-landscape.jpg'
import spaceCapsulePicPortrait from '../assets/technology/image-space-capsule-portrait.jpg'
import spacePortPic from '../assets/technology/image-spaceport-landscape.jpg'
import spacePortPicPortrait from '../assets/technology/image-spaceport-portrait.jpg'


//Destination Data
export const travels = [
    {
    travelName: 'MOON',
    travelImg: moonImg,
    travelParagraph: 'See our planet as you\'ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you\'re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    travelDistance: '384,400 KM',
    travelTime: '3 DAYS',
    indexId: 0,
    },
    {
      travelName: 'MARS',
      travelImg: marsImg,
      travelParagraph: 'Don\'t forget to pack your hiking boots. You\'ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It\'s two and a half times the size of Everest!',
      travelDistance: '225 MIL. KM',
      travelTime: '9 MONTHS',
      indexId: 1,
    },
    {
      travelName: 'EUROPA',
      travelImg: europaImg,
      travelParagraph: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover\'s dream. With an icy surface, it\'s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      travelDistance: '628 MIL. KM',
      travelTime: '3 YEARS',
      indexId: 2
    },
    {
      travelName: 'TITAN',
      travelImg: titanImg,
      travelParagraph: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      travelDistance: '1.6 BIL. KM',
      travelTime: '7 YEARS',
      indexId: 3,
    }
  ]

//Crew Data
export const crewMembers = [
    {
        memberName: 'Douglas Hurley',
        memberPic: douglasPic,
        memberJob: 'Commander',
        memberBio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        indexId: 0,
    },
    {
        memberName: 'MARK SHUTTLEWORTH',
        memberPic: markPic,
        memberJob: 'Mission Specialist',
        memberBio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        indexId: 1,
    },
    {
        memberName: 'Victor Glover',
        memberPic: victorPic,
        memberJob: 'PILOT',
        memberBio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
        indexId: 2
    },
    {
        memberName: 'Anousheh Ansari',
        memberPic: anoushehPic,
        memberJob: 'Flight Engineer',
        memberBio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
        indexId: 3,
    }
]

//Technology Data
export const technologies = [
    {
        technologyName: 'LAUNCH VEHICLE',
        technologyPic: [vehiclePic, vehiclePicPortrait],
        technologyDescription: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!',
        indexId: 0,
    },
    {
        technologyName: 'SPACEPORT',
        technologyPic: [spacePortPic, spacePortPicPortrait],
        technologyDescription: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth\'s rotation for launch.',
        indexId: 1,
    },
    {
        technologyName: 'SPACE CAPSULE',
        technologyPic: [spaceCapsulePic, spaceCapsulePicPortrait],
        technologyDescription: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
        indexId: 2
    }
]

//NavBar data 
export const NavBarLinks = [
    ['00', ' home', "/space-tourism"],
    ['01', ' destination', "/space-tourism/destination"],
    ['02', ' crew', "/space-tourism/crew"],
    ['03', ' technology', "/space-tourism/technology"],
]


