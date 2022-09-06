<script>
    const style = {
        wrapper: `flex w-full h-full border-t border-[#0030C9] justify-center items-center text-[#0030C9]`,
        container: ` flex w-full h-full justify-between items-center max-w-7xl text-sm`,
        footerLogoContainer: `py-10 px-6 w-1/2 h-full border-r border-daoblue`,
        footerInfoContainer: `py-10 px-6 w-1/2 h-full flex flex-col sm:flex-row justify-between items-start gap-4`,
        // wrapper: ``,
        logoContainer: `flex h-full justify-start items-start`,
        logo: `border-2`,
        logoText: ``,
        menuCol: `flex flex-col`,
        menuHeading: ``,
        menuItem: `text-gray-500`,
    }
</script>

<div class={style.wrapper}>
    <div class={style.container}>
        <div class={style.footerLogoContainer}>
            <div class="flex items-center w-full h-full flex-col sm:flex-row justify-between gap-4">
                <div class={style.logoContainer}>
                    <a href="/"><img class={style.logo} src="/images/DAOMENT-SELLO-CMYK-2.svg" alt="" /></a>
                    <!-- <a href="/"><img class={style.logo} src="/images/IconoNegro.png" alt="" /></a> -->
                </div>
                <div>Democratized Real Estate Investing</div>
            </div>

        </div>
        <div class={style.footerInfoContainer}>
            <div class={style.menuCol}>
                <div class={style.menuHeading}>Navigation</div>
                <a class={style.menuItem} href="/">Home</a>
                <a class={style.menuItem} href="/">About</a>
                <a class={style.menuItem} href="/">FAQs</a>
            </div>
            <div class={style.menuCol}>
                <div class={style.menuHeading}>Services</div>
                <a class={style.menuItem} href="/">Marketplace</a>
            </div>
            <div class={style.menuCol}>
                <div class={style.menuHeading}>Contact Us</div>
                <a class={style.menuItem} href="/">info@daoment.io</a>
            </div>
        </div>
    </div>
</div>