// Changing This

const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        // const self = this; 1
        
        this.tags.forEach(tag => 
            console.log(this.title, tag)
            .bind(this)); //2
    }
    // arrow function inherit value   3 best 
};

video.showTags();


// function playViedo(){
//     console.log(this);
// }

// playViedo.call({name: 'Mosh'}); // ,1 ,2

// playViedo.apply({name: 'Mosh'}); // passing  []

// playViedo.bind({name : 'Mosh'});