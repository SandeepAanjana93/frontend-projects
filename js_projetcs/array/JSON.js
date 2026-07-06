let person = {
    "name": "sandeep",
    "gender": "male",
    "dob": "4 aug 2004",
    "friends": ["Nirmal patidar", "Shyam jat", "Sumit dhakad", "Narendra aanjana", "Rani rathore"],
    "address": {
        "city": "ujjain",
        "state": {
            "local_state": "madhya pradesh",
            "job_state": "Tamilnadu",
            "home_dist": "nagda"
        }
    },

    "age": 25,
    "isStudent": true,
    "skills": ["python", "ML", "HTML", "CSS", "JavaScript"],

}

console.log(person)
console.log("--------------------------------")

let second = {
    name: 'sandeep',
    gender: 'male',
    dob: '4 aug 2004',
    friends: [
        'Nirmal patidar',
        'Shyam jat',
        'Sumit dhakad',
        'Narendra aanjana',
        'Rani rathore'
    ],
    address: {
        city: 'ujjain',
        state: {
            local_state: 'madhya pradesh',
            job_state: 'Tamilnadu',
            home_dist: 'nagda'
        }
    },
    age: 25,
    isStudent: true,
    skills: ['python', 'ML', 'HTML', 'CSS', 'JavaScript']
}

console.log(JSON.stringify(second))
console.log("--------------------------------")
