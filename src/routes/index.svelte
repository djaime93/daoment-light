<script>
    import StepsCard from "../components/StepsCard.svelte";
    import DaomentReitSvg from "../components/svgs/DaomentReitSVG.svelte";
    import LineChart from "../components/charts/LineChart.svelte";
    import BarChart from "../components/charts/BarChart.svelte";
    import BarChartMin from "../components/charts/BarChartMin.svelte";
    import HorizontalBarChart from "../components/charts/HorizontalBarChart.svelte";
    import Register from "../components/forms/Register.svelte"

    const style = {
        wrapper: `flex flex-col w-full justify-center items-center text-gray-500`,
        banner: `flex h-80 rounded-2xl my-4 w-full`,
        container: ``,
        hero: ``,
        heroImage: `h-30 w-30`,
        stepImage: `h-40`,
    }

    let email

    const handleSubmit = () => {
        console.log("email: ", email)
    }
</script>

<div class={style.wrapper}>

    <div class="w-full h-full max-w-7xl sm:p-6">
        <div class="w-full relative sm:rounded-2xl overflow-hidden h-[60vh] sm:max-h-[40rem] bg-cover bg-center">
            <div class="w-full h-full top-0 left-0 absolute opacity-80 bg-gradient-to-br from-[#D1EFCB] via-[#071F25] to-[#071E26]"></div>
            <div class="w-full h-full flex absolute top-0 left-0 justify-center items-start px-4 flex-col">

                <div class="flex w-full"><DaomentReitSvg/></div>
                <a class="py-3 px-6 bg-daoblue text-white font-semibold rounded-lg mt-4" href="/signup">Sign Up</a>
            </div>
            <img class="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2019/08/15/17/56/production-4408573_960_720.jpg" alt="">
        </div>
    </div>

    <div class="w-full h-full py-6 sm:px-6 max-w-7xl">
        <div class="flex flex-col sm:flex-row w-full justify-between items-center">
            <div class="flex flex-col pb-6">
                <div class="text-4xl pb-6">A New Way To Invest</div>
                <div>Get exclusive access to commercial and residential real estate deals.</div>
            </div>
            <div class="flex flex-col divide-y-2 divide-gray-200">
                <div class="pb-3 text-xl">Earn monthly rental distributions</div>
                <div class="py-3 text-xl">Accessible Ticket Prices</div>
                <div class="py-3 text-xl">Increased liquidity through a global market</div>
                <div class="pt-3 text-xl">Transparent management and distributions through blockchain</div>
            </div>
        </div>
    </div>

    <div class="w-full h-full py-6 sm:px-6 max-w-7xl">
        <div class="flex flex-col w-full lg:h-80 relative sm:rounded-2xl bg-gray-100 items-center py-10 gap-5">
            <div class="text-3xl font-bold">How It Works</div>
            <div class="lg:absolute lg:bottom-0 lg:left-0 lg:transform lg:translate-y-1/3 grid lg:grid-cols-3 w-full justify-center items-center gap-4 px-4 sm:px-10">
                
                <StepsCard content={{image:"/images/Buy.svg",
                                    title:"Buy",
                                    info:"Buy equity shares of hand picked real estate deals, open to both accredited and non-accredited investors."}}/>

                <StepsCard content={{image:"/images/Earn.svg",
                                    title:"Earn",
                                    info:"Recieve monthly rental distributions and accrue apreciation as the value of the asset goes up over time."}}/>

                <StepsCard content={{image:"/images/Trade.svg",
                                    title:"Trade",
                                    info:"Exit your position without lockups or holding periods. Sell your shares to a global market in a global platform."}}/>

            </div>
        </div>
        <div class="hidden lg:block h-40"></div>
    </div>

    <div class="w-full h-full py-6 sm:px-6 max-w-7xl">
        <div class="text-center text-2xl font-bold">20-year annualized returns by asset class (1999-2018)</div>
        <div class="hidden sm:block">
            <BarChart/>
        </div>
        <div class="sm:hidden">
        <BarChartMin/>
        </div>
        <!-- <HorizontalBarChart/> -->
        <!-- <LineChart/> -->
        <div class="text-xs pt-2">Source: J.P. Morgan Asset Management</div>
    </div>

    <!-- <div class="flex flex-col justify-center items-center w-full">
        <div class="text-4xl font-semibold text-daoblue">Get notifications about our first tokenized property</div>
        <div class="w-full flex pt-20 pb-20 justify-center items-center gap-6">
            <div><input class="rounded-xl border border-daoblue focus:border-b focus:outline-none focus:border-daoblue placeholder-daoblue px-10 py-2" type="text" placeholder="Email"></div>
            <button class="border border-daoblue text-daoblue hover:bg-daoblue hover:text-white rounded-xl px-4 py-2">Sign Up</button>
        </div>

    </div> -->

    <Register/>
    
</div>