document.addEventListener('DOMContenLoaded', function(){
    // INIT
    let cookiesBanner = document.querySelector('.cookies-banner')
    let cookiesBannerDelay = 2000
    let cookiesBannerCloseButton = document.querySelector('.cookies-banner-button .button')
    if (cookiesBanner){
        setTimeout(showBanner, cookiesBannerDelay)
        ;
    }
    if (cookiesBannerCloseButton) {
        cookiesBannerCloseButton.addEventListener('click', cookiesBannerCloseButtonClicked)
    }
    // Function
    function cookiesBannerCloseButtonClicked(e) {
        e.preventDefault()
        hideBanner()
    }

    function showBanner (){
        cookiesBanner.classList.add('show')
    }
    
    function hideBanner(){
        cookiesBanner.classList.remove('show')
    }

})