export const lessonType={
    "Marker-Training":0,
    "Sitz Training":1,
    "Platz Training":2
}

export function saveUserData (steps, repeats, lesson){
    if (lesson === lessonType["Marker-Training"]){
        localStorage.setItem('marker-repeats', repeats.toString());
    }else if (lesson === lessonType["Sitz Training"]){
        localStorage.setItem('sitz-repeats', repeats.toString());
        localStorage.setItem('sitz-steps', steps.toString());
    }else if (lesson === lessonType["Platz Training"]){
        localStorage.setItem('platz-repeats', repeats.toString());
        localStorage.setItem('platz-steps', steps.toString());
    }
    console.log("DATEN WURDEN GESPEICHERT");
    console.log("repeats",localStorage.getItem("sitz-repeats"))
    console.log("steps",localStorage.getItem("sitz-steps"))
}

export function getUserData (lesson){
    let steps;
    let repeats;
    if (lesson === lessonType["Marker-Training"]){
        repeats = localStorage.getItem("marker-repeats")
    }else if (lesson === lessonType["Sitz Training"]){
        repeats = localStorage.getItem("sitz-repeats")
        steps = localStorage.getItem("sitz-steps")
    }else if (lesson === lessonType["Platz Training"]){
        repeats = localStorage.getItem("platz-repeats")
        steps = localStorage.getItem("platz-steps")
    }

    if(repeats !== null){
        repeats = parseInt(repeats)
    }else{
        repeats = 0;
    }

    if(steps !== null){
        steps = parseInt(steps)
    }else{
        steps = 0;
    }

    return {"repeats":repeats, "steps":steps}
}

export function finishedLessons (lesson){
   let lessons = localStorage.getItem("finished-lessons")
    if(lessons !== null){
        lessons = JSON.parse(lessons)
        if (lessons.includes(lesson) ===false){
            lessons.push(lesson)
        }else {
            console.log("Wurde schonmal abgeschlossen")
        }


    }else{
        lessons = [];
        lessons.push(lesson)
    }

    localStorage.setItem("finished-lessons", JSON.stringify(lessons));
    console.log(lesson, " wurde hinzugefügt")
    console.log(localStorage.getItem("finished-lessons"))

}
export function getFinishedLessons(){
    let lessons = localStorage.getItem("finished-lessons")
    if(lessons !== null){
        lessons = JSON.parse(lessons)
        }else {
        lessons =[]
    }

    return lessons
    }

export function rewards (lesson){
    let lessons = localStorage.getItem("rewards")
    if(lessons !== null){
        lessons = JSON.parse(lessons)
        if (lessons.includes(lesson) ===false){
            lessons.push(lesson)
        }else {
            console.log("Wurde schonmal abgeschlossen")
        }


    }else{
        lessons = [];
        lessons.push(lesson)
    }

    localStorage.setItem("rewards", JSON.stringify(lessons));
    console.log(lesson, "wurde hinzugefügt")
    console.log(localStorage.getItem("rewards"))

}

export function getRewards(){
    let rewards = localStorage.getItem("rewards")
    if(rewards !== null){
        rewards = JSON.parse(rewards)
    }else {
        rewards =[]
    }

    return rewards
}