import React from 'react'
import ControllerButton from './Button';


class ButtonList extends React.Component <{}, {buttons: JSX.Element[]}> {


    lines: string[] = [
        // Haegri
        "",
        "HAEGRI / HERON",
        "bonhoga: a spiritual or childhood place",
        "slud: an interval of sunshine between rain showers",
        "lisk: a wisp",
        "",
        // Cartography
        "CARTOGRAPHY",
        // Moon Jells
        "",
        "THE MOON JELLYFISH",
        "shoormal: the shoreline mark on a beach; the water's edge",
        // Speaking Shaetlan
        "SPEAKIN SHAETLAN",
        "",
        // Salt in the blood
        "SALT IN THE BLOOD",
        "",
        "Lass, you've parched your tongue of your own land.",
        "'Propered' your words so dry they sift between your teeth",
        "like sand flitting down an hourglass.",
        "I gave you a language,",
        "one that could capture the percussion of waves",
        "on its consonants, unravel the threads of the soul with a single word:",
        "shoormal, mareel, bonhoga;",
        "a gift that you've left out to moulder in the gales.",
        "",
        "Let me start over:",
        "Lass, you don't have the words to hold me on the page,",
        "and you'll never find me there until you understand",
        "the salt that courses through your veins is the lifeblood",
        "of an older conversation, one that ebbs and floods",
        "just as the tide. These words are my gift to you.",
        "Take them; give them a pulse.",
        // STEEPEL
        "",
        "STEEPEL",
        "pining: drying",
        "bloom: the efflorescence on the outside of thoroughly dried fish",
        // Raingos
        "RAINGÖS",
        "",
        "You're surely exhausted,",
        "singing your prophecies of storms in these downpour days,",
        "with none who want to listen",
        "for that long tear of urgent song",
        "which first ripped open your throat.",
        "",
        "Never heed.",
        "Columns of clouds are rising in the east;",
        "song or silence, they gather.",
        // Lamplight
        "LAMPLIGHT",
        "",
        "A swarm of light writhes",
        "on the pavements made mirrors from this drizzle,",
        "and it's like we're stalking above some sunken, sundered world;",
        "an upturned city, humming the lullaby of the rain,",
        "where our shadows best become us.",
        // Slockit Light
        "SLOCKIT LIGHT",
        "",
        "Maybe it's that moon in your veins;",
        "a swell in the blood that sent you here,",
        "or maybe you just knew this islands holds its lost things close.",
        "Whichever way, you seem to find yourself",
        "most where the light wrecks: sea caves, ruined houses - ",
        "you're taken by the folksongs of their stones,",
        "the way a voice sounds there,",
        "against the darkest point of the dark.",
        "",
        // Akker
        "AKKER",
        "ill-luckit: unlucky",
        "ess: ash",
        "kleeber: soapstone",
        "helli-möld: burial ground (lit. 'holy earth')",
        "akker: fragments",
        "slockit: a light which has gone out",
        // Migration day
        "MIGRATION DAY",
        // Barncl
        "BARNACLE WING",
        // summer
        "SUMMER, 1939",
        "bölliments: odds and ends",
        "",
        //marel
        "MAREEL",
        "skirled: to laugh or scream with a shrill sound",
        "",
        "THE MOTH TRAP",
        "",
        "SELKIE",
        "",
        "MODER DY",
        ""
    ]

    constructor (props: any) {
        super(props);
        this.state= { buttons: [] };
    }

    componentDidMount() {
    


        const myButtons = this.lines.map (
            (line) => <ControllerButton line={line}/>
        );
        this.setState({
            buttons: myButtons
        });
    }

    render() {
        console.log(this.state.buttons);
        return this.state.buttons.map(
            button => (<li>{button}</li>)
        );
    }
}

export default ButtonList;