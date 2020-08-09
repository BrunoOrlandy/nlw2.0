const Database =  require('./db') 

const createProffy = require('./createProffy')

Database.then(async (db)=> {
    
    proffyValue = { 
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "899899899",
        bio: "<p>Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.</p>",
    }

    calssValue = {
        subject: "Química",
        cost: "20",
    }

    classScheduleValues = [{
        weekday: 1,
        time_from: 720,
        time_to: 1220
    },
    {
        weekday: 0,
        time_from: 620,
        time_to: 2220
    }
]

await createProffy(db,{proffyValue,calssValue,classScheduleValues})
 
})