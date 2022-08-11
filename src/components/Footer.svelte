<script>
    const style = {
        wrapper: `flex w-full h-full border-t border-[#0030C9] justify-center items-center text-[#0030C9]`,
        container: ` flex w-full h-full justify-between items-center max-w-7xl text-sm`,
        footerLogoContainer: `py-10 px-6 w-1/2 h-full border-r border-[#0030C9]`,
        footerInfoContainer: `py-10 px-6 w-1/2 h-full flex flex-col sm:flex-row justify-between items-center gap-4`,
        // wrapper: ``,
        logoContainer: `flex`,
        logo: `h-6`,
        logoText: ``,
        menuCol: ``,
        menuHeading: ``,
        menuItem: `text-gray-500`,
    }
</script>

<div class={style.wrapper}>
    <div class={style.container}>
        <div class={style.footerLogoContainer}>
            <div class="flex items-center w-full h-full flex-col sm:flex-row justify-between gap-4">
                <div class={style.logoContainer}>
                    <a href="/"><img class={style.logo} src="/images/Icono.jpeg" alt="" /></a>
                    <!-- <a href="/"><img class={style.logo} src="/images/IconoNegro.png" alt="" /></a> -->
                    <div class={`${style.logoText}`}>AO</div>
                    <div class={style.logoText}>MENT</div>
                </div>
                <div>This could be a catch phrase</div>
            </div>

        </div>
        <div class={style.footerInfoContainer}>
            <div class={style.menuCol}>
                <div class={style.menuHeading}>Services</div>
                <div class={style.menuItem}>Email</div>
                <div class={style.menuItem}>Campaigns</div>
            </div>
            <div class={style.menuCol}>
                <div class={style.menuHeading}>Services</div>
                <div class={style.menuItem}>Email</div>
                <div class={style.menuItem}>Campaigns</div>
            </div>
            <div class={style.menuCol}>
                <div class={style.menuHeading}>Services</div>
                <div class={style.menuItem}>Email</div>
                <div class={style.menuItem}>Campaigns</div>
            </div>
        </div>
    </div>
</div>