import sitz from "./sitz.png";
import platz from "./platz.png";
import markerImg from "./marker-img.png";

export const lessons=[
    {
        "name": "Sitz Training",
        "shortDescription":"Sitz ist ein Grundkommando, das in vielen Alltagssituationen wichtig und hilfreich sein kann.",
        "Description":"Sitz ist ein Grundkommando, das in vielen Alltagssituationen wichtig und hilfreich sein kann. Es eignet sich besonders gut als erstes Kommando, das du mit deinem Hund trainieren kannst. Dein Hund setzt sich wahrscheinlich jetzt schon oft und gerne von allein hin, weshalb man dies relativ einfach auf Kommando einführen kann.",
        "needs":"Du solltest das Marker-Traing erfolgreich absolviert haben.\n \nBereite ein paar Leckerlis vor, die Dein Hund sehr gerne mag und halte sie in deiner Hosentasche bereit.",
        "noted":" Achte darauf, dass du die Aufmerksamkeit deines Hundes hast, bevor du die Übungen startest.\n \n Belohne das Verhalten Deines Hundes dann, wenn dein Hund das Kommando richtig ausführt, das Belohnungssignal wird dir beim Timing helfen. \n \nUnerwünschtes Verhalten solltest du einfach ignorieren und die Übung nochmal versuchen.",
        "img":sitz,
        "model":"https://teachablemachine.withgoogle.com/models/Wq9KYv2Br/",
        "steps":[
            {
                "Schritt":"Schritt 1",
                "Beschreibung":"Nimm ein Leckerli in deine Hand und bewege es langsam über die Nase Deines Hundes. Starte nach Ablauf den Count-Downs.",
                "richtig": "Sitz",
                "richtigText":"Super!",
                "falsch":"Springen",
                "falschText":"Du hältst die Hand mit dem Leckerli etwas zu hoch, versuche es tiefer.",
                "nichts":"Sonstiges",
                "nichtsText":"Du hältst die Hand mit dem Leckerli etwas zu weit hinten, versuche es weiter vorne.",
                "Wiederholungen":4,
                "Zurueckstufen":false,
            },
            {
                "Schritt":"Schritt 2",
                "Beschreibung":"Mache weiter wie im ersten Schritt sag aber dabei jetzt Sitz und hebe den Zeigefinger als Sichtsignal. Starte nach Ablauf den Count-Downs.",
                "richtig": "Sitz",
                "richtigText":"Super!",
                "falsch":"Springen",
                "falschText":"Du hältst die Hand mit dem Leckerli etwas zu hoch, versuche es tiefer.",
                "nichts":"Sonstiges",
                "nichtsText":"Du hältst die Hand mit dem Leckerli etwas zu weit hinten, versuche es weiter vorne.",
                "Wiederholungen":3,
                "Zurueckstufen":false,
            },
            {
                "Schritt":"Schritt 3",
                "Beschreibung":"Führe jetzt deinen Hund nicht mehr mit dem Leckerli ins Sitz, sondern gib ihm das Kommando Sitz zusammen mit dem Sichtzeichen. Starte nach Ablauf den Count-Downs.",
                "richtig": "Sitz",
                "richtigText":"Super!",
                "falsch":"Springen",
                "falschText":"Du hältst die Hand mit dem Leckerli etwas zu hoch, versuche es tiefer.",
                "nichts":"Sonstiges",
                "nichtsText":"Du hältst die Hand mit dem Leckerli etwas zu weit hinten, versuche es weiter vorne.",
                "Wiederholungen":2,
                "Zurueckstufen":true,
                "ZurueckstufenText":"Dein Hund scheint noch nicht ganz verstanden zu haben, was du möchtest, wiederhole Schritt 2 noch ein paarmal"
            }
        ]

    },{
        "name": "Platz Training",
        "shortDescription":"Nachdem dein Hund das Kommando „Sitz“ gelernt hat, ist es jetzt an der Zeit für das Kommando „Platz“.",
        "Description":"Nachdem dein Hund das Kommando „Sitz“ gelernt hat, ist es jetzt an der Zeit für das Kommando „Platz“. Dein Hund hat jetzt schon ein Gefühl dafür bekommen, wie das Training funktioniert und ihm wird es immer einfacher fallen zu verstehen, was du von ihm möchtest.",
        "needs":"Du solltest das Marker-Traing erfolgreich absolviert haben.\n \nDein Hund sollte bereits das Kommando Sitz beherrschen.\n \nBereite ein paar Leckerlis vor, die Dein Hund sehr gerne mag und halte sie in deiner Hosentasche bereit.",
        "noted":"Achte darauf, dass du die Aufmerksamkeit deines Hundes hast, bevor du die Übungen startest.\n \n Belohne das Verhalten deines Hundes dann, wenn dein Hund das Kommando richtig ausführt, das Belohnungssignal wird dir beim Timing helfen.\n \n Unerwünschtes Verhalten solltest du einfach ignorieren und die Übung einfach nochmal versuchen.",
        "img":platz,
        "model":"https://teachablemachine.withgoogle.com/models/SNGXOPcEI/",
        "steps":[
            {
                "Schritt":"Schritt 1",
                "Beschreibung":"Lass deinen Hund sitzen und nimm ein Leckerli in deine Hand und bewege es senkrecht an der Nase deines Hundes vorbei nach unten. Starte nach Ablauf den Count-Downs.",
                "richtig": "Platz",
                "richtigText":"Super!",
                "falsch":"",
                "falschText":"",
                "nichts":"Sonstiges",
                "nichtsText":"Zeige deinem Hund die Belohnung, die ihn erwartet, und probiere die Übung einfach nochmal.",
                "Wiederholungen":5,
                "Zurueckstufen":false,
            },
            {
                "Schritt":"Schritt 2",
                "Beschreibung":"Mache weiter wie im ersten Schritt, sag aber dabei jetzt „Platz“ und zeige deine flache Hand als Sichtsignal. Starte nach Ablauf den Count-Downs.",
                "richtig": "Platz",
                "richtigText":"Super!",
                "falsch":"",
                "falschText":"",
                "nichts":"Sonstiges",
                "nichtsText":"Zeige deinem Hund die Belohnung, die ihn erwartet, und probiere die Übung einfach nochmal.",
                "Wiederholungen":3,
                "Zurueckstufen":false,
            },
            {
                "Schritt":"Schritt 3",
                "Beschreibung":"Führe jetzt deinen Hund nicht mehr mit dem Leckerli ins Sitz, sondern gib ihm das Kommando Sitz zusammen mit dem Sichtzeichen. Starte nach Ablauf den Count-Downs.",
                "richtig": "Platz",
                "richtigText":"Super!",
                "falsch":"",
                "falschText":"",
                "nichts":"Sonstiges",
                "nichtsText":"Zeige deinem Hund die Belohnung, die ihn erwartet, und probiere die Übung einfach nochmal.",
                "Wiederholungen":1,
                "Zurueckstufen":true,
                "ZurueckstufenText":"Dein Hund scheint noch nicht ganz verstanden zu haben, was du möchtest, wiederhole Schritt 2 noch ein paarmal."
            }
        ]

    },


]

export const markerLesson ={
    "name": "Marker-Training",
    "shortDescription":"Durch den Einsatz eines Marker-Signals kannst du erwünschtes Verhalten deines Hundes besonders gut positiv unterstreichen",
    "Description":"Durch den Einsatz eines Marker-Signals kannst du erwünschtes Verhalten deines Hundes besonders gut positiv unterstreichen. Deinem Hund verknüft das Marker-Signal mit einer Belohnung. Das Signal bekommt so eine positive Bedeutung und kann präzise eingesetzt werden um die Belohnung zu verstärken. Deinem Hund wird es so leichter fallen zu verstehen, wenn er etwas richtig gemacht hat. Das Training wird dadurch viel effektiver. In der App wird dieses Marker-Signal automatisiert eingesetzt, dadurch bekommst auch du ein besseres Gefühl dafür, wann du deinen Hund am besten belohnen kannst.\n" +
        "Damit dein Hund das Belohnungssignal auch als Belohnung versteht, muss dieses erst mit etwas Positivem verknüpft werden. Das wird in dieser Einheit passieren.",
    "needs":"Bereite ein paar Leckerlis vor, die dein Hund sehr gerne mag und halte sie in deiner Hosentasche bereit.",
    "noted":"Achte darauf, dass du die Aufmerksamkeit deines Hundes hast, bevor du die Übungen startest.\n" +
        "Gib deinem Hund konsequent bei jedem ertönen des Signals ein Leckerli.\n",
    "img":markerImg,
    "steps":[
        {
            "Schritt":"Schritt 1",
            "Beschreibung":"Nimm ein Leckerli in deine Hand und bewege es senkrecht an der Nase deines Hundes vorbei, während dein Hund sitzt.",
            "richtig": "Platz",
            "richtigText":"Super!",
            "falsch":"",
            "falschText":"",
            "nichts":"Sonstiges",
            "nichtsText":"Zeige deinem Hund die Belohnung, die ihn erwartet, und probiere die Übung einfach nochmal.",
            "Wiederholungen":2,
            "Zurueckstufen":false,
        }

    ]


}
