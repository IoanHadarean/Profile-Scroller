const data = [{
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingFor: 'female',
        location: 'Boston MA',
        image: "https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingFor: 'male',
        location: 'Miami FL',
        image: "https://randomuser.me/api/portraits/women/82.jpg"
    },
    {
        name: 'William Johnson',
        age: 38,
        gender: 'male',
        lookingFor: 'female',
        location: 'Lynn MA',
        image: "https://randomuser.me/api/portraits/men/83.jpg"
    },
    {
        name: 'Jack Williams',
        age: 21,
        gender: 'male',
        lookingFor: 'female',
        location: 'England LO',
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        name: 'Sarah Monroe',
        age: 24,
        gender: 'female',
        lookingFor: 'male',
        location: 'England MA',
        image: "https://randomuser.me/api/portraits/women/20.jpg"
    },
    {
        name: 'Simen O\'Reilly',
        age: 25,
        gender: 'male',
        lookingFor: 'female',
        location: 'Ireland DB',
        image: "https://randomuser.me/api/portraits/men/24.jpg"
    },
    {
        name: 'Li Yang',
        age: 26,
        gender: 'female',
        lookingFor: 'male',
        location: 'England LP',
        image: "https://randomuser.me/api/portraits/women/17.jpg"
    }
];


const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {

    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class = "list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
        </ul>
        <ul class = "list-group">
            <li class="list-group-item">Age: ${currentProfile.age}</li>
        </ul>
        <ul class = "list-group">
            <li class="list-group-item">Location: ${currentProfile.location}</li>
        </ul>
        <ul class = "list-group">
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
        </ul>
        `;

        document.getElementById('imageDisplay').innerHTML = `
        <img src="${currentProfile.image}">`;
    }
    else {
        // No more profiles
        window.location.reload();
    }
}


// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true };
        }
    };
}
