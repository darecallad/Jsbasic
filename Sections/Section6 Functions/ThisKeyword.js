// The This Keyword

// method -> obj
// function -> global (window, global)

const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(tag => 
            console.log(this.title, tag),this);
    }
};

video.showTags();