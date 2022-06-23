let maxPage;
let page=1;
let infiniteScroll;

searchFormBtn.addEventListener('click', () =>{
    searchFormInput.value
    location.hash = '#search=' + searchFormInput.value;
})

trendingBtn.addEventListener('click', () =>{
    location.hash = '#trends'
})

arrowBtn.addEventListener('click', () =>{
    history.back();
    //location.hash = '#home'
})

window.addEventListener('DOMContentLoaded',navigator,false);
window.addEventListener('hashchange',navigator,false);
window.addEventListener('scroll',infiniteScroll,false);

function navigator(){
    console.log({location})
    if(infiniteScroll){
        window.removeEventListener('scroll',infiniteScroll, {passive: false});
        infiniteScroll = undefined;
    }

    if(location.hash.startsWith('#trends')){
        trendsPage();
    } else if (location.hash.startsWith('#search=')){
        searchPage();
    } else if (location.hash.startsWith('#movie=')){
        movieDetailsPage();
    } else if (location.hash.startsWith('#category=')){
        categoriesPage();
    } else {
        homePage();
    }

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    if(infiniteScroll){
        window.addEventListener('scroll',infiniteScroll,{passive: false});
    }
}

function homePage (){
    console.log('home')
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    headerTitle.classList.remove('inactive')
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    getTrendingMoviesPreview();
    getCategoriesPreview(); 
}

function categoriesPage (){
    console.log('categories');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.remove('inactive');

    const [_,categoryData] = location.hash.split('=');
    const [categoryId,categoryName] = categoryData.split('-');
    headerCategoryTitle.innerHTML = categoryName;

    getMoviesByCategory(categoryId);
}

function movieDetailsPage (){
    console.log('movie!!');

    headerSection.classList.add('header-container--long');
    //headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');

    const [_,movieId] = location.hash.split('=');
    getMovieById(movieId);
}

function searchPage (){
    console.log('Search')

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.remove('inactive');

    const [_,query] = location.hash.split('=');
    getMoviesBySearch(query);
}

function trendsPage (){
    console.log('TRENDS!!!!!!!')

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.remove('inactive');

    headerCategoryTitle.innerHTML = 'Tendencias';
    getTrendingMovies();
    infiniteScroll = getPaginatedTrendingMovies;
}