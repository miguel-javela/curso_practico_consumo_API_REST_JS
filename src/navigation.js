window.addEventListener('DOMContentLoaded',navigator,false);
window.addEventListener('hashchange',navigator,false);

function navigator(){
    console.log({location})
    if(location.hash.startsWith('#trends')){
        trendsPage();
    } else if (location.hash.startsWith('#search=')){
        searchPage();
    } else if (location.hash.startsWith('#movie=')){
        movieDetailsPage
    } else if (location.hash.startsWith('#category=')){
        categoriesPage();
    } else {
        homePage();
    }
}

function trendsPage (){
    console.log('TRENDS!!!!!!!') 
}

function searchPage (){
    console.log('Search') 
}

function movieDetailsPage (){
    console.log('home') 
}

function categoriesPage (){
    console.log('home') 
}

function homePage (){
    console.log('home')
    getTrendingMoviesPreview();
    getCategoriesPreview(); 
}