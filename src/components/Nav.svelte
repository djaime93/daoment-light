<script>
    const style = {
        navWrapper: `flex flex-cols p-6 justify-between items-center`, //border-b-2 border-black
        logoContainer: `flex justify-center items-center`,
        logo: `h-10`,
        logoText: `hidden md:block text-2xl font-bold text-[#071F25]`,
        nav: `flex flex-cols gap-10`,
        
        // navItem: `text-gray-400`,
        navItem: `text-[#0030C9] hidden md:block`,
        
        user: `flex flex-cols gap-2`,

        // getStartedButton: `hidden md:block bg-[#071F25] py-3 px-4 rounded-xl text-white font-semibold`, //  bg-[#314BA0] #0026CC #071F25
        getStartedButton: `hidden md:block bg-daoblue py-3 px-4 rounded-xl text-white font-semibold text-center`, //  bg-[#314BA0] #0026CC #071F25
        signInButton: `hidden md:block bg-black py-3 px-4 rounded-xl text-white font-semibold text-center`, //  bg-[#314BA0] #0026CC #071F25
        
        mobile: `md:hidden py-3 px-4 text-[#071F25] font-semibold text-3xl text-daoblue`,
    }
</script>


<div class={style.navWrapper}>
    
    <div class={style.logoContainer}>
        <a href="/"><img class={style.logo} src="/images/Icono.jpeg" alt="" /></a>
        <!-- <a href="/"><img class={style.logo} src="/images/IconoNegro.png" alt="" /></a> -->
    </div>
    <div class={style.nav}>
        <a class={style.navItem} href="/">Home</a>
        <a class={style.navItem} href="/about">About</a>
        <a class={style.navItem} href="/faqs">FAQs</a>
        <a class={style.navItem} href="/marketplace">Marketplace</a>
    </div>
    <div class={style.user}>
        <a class={style.getStartedButton} href="/signup">Get Started</a>
        <a class={style.signInButton} href="/signup">Sign In</a>
        
        
        <a class={style.mobile} href="/signup">
            =
        </a>
    </div>
</div>