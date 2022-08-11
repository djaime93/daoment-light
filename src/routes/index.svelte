<script>
    import StepsCard from "../components/StepsCard.svelte";

    const style = {
        wrapper: `flex flex-col w-full justify-center items-center text-gray-500`,
        banner: `flex h-80 rounded-2xl my-4 w-full`,
        container: ``,
        hero: ``,
        heroImage: `h-30 w-30`,
        stepImage: `h-40`,
    }
</script>

<div class={style.wrapper}>

    <div class="w-full h-full max-w-7xl sm:p-6">
        <div class="w-full relative sm:rounded-2xl overflow-hidden h-[60vh] sm:max-h-[40rem] bg-cover bg-center">
            <div class="w-full h-full top-0 left-0 absolute opacity-80 bg-gradient-to-br from-[#D1EFCB] via-[#071F25] to-[#071E26]"></div>
            <div class="w-full h-full flex absolute top-0 left-0 justify-center items-start px-4 flex-col">

                <!-- <img
                class="illustration"
                alt="Daoment Democratized Real Estate Investing"
                src="/images/DREI.svg"
                /> -->

                <!-- <img class="w-1/3" alt="Daoment illustration" src="/images/ilustracion.png" /> -->

                <div class="text-4xl font-bold text-white">You're next big adventure </div>
                <div class="text-xl text-white">See the world on your terms</div>
                <a class="py-3 px-6 bg-[#0030C9] text-white font-semibold rounded-lg mt-4" href="/">Sign Up</a>
            </div>
            <img class="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2019/08/15/17/56/production-4408573_960_720.jpg" alt="">
        </div>
    </div>


    <div class="w-full h-full hidden md:block">
        <div class="flex w-full border-t border-b border-[#0030C9] py-10">
            <!-- <div class="text-2xl text-[#0030C9]">web3</div> -->
            <div class="grid md:grid-cols-3 w-full justify-center items-center text-center gap-4 px-10">
                <div class="p-5">
                    <div class="text-2xl text-[#0030C9]">income-producing</div>
                </div>
                <div class="p-5">
                    <div class="text-2xl text-[#0030C9]">monthly dividends</div>
                </div>
                <div class="p-5">
                    <div class="text-2xl text-[#0030C9]">land appreciation</div>
                </div>
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
        <div class="hidden md:block h-40"></div>
    </div>


    <!-- <div class="flex flex-col justify-center items-center w-full">
        <div class="text-4xl font-semibold text-daoblue">Get notifications about our first tokenized property</div>
        <div class="w-full flex pt-20 pb-20 justify-center items-center gap-6">
            <div><input class="rounded-xl border border-daoblue focus:border-b focus:outline-none focus:border-daoblue placeholder-daoblue px-10 py-2" type="text" placeholder="Email"></div>
            <button class="border border-daoblue text-daoblue hover:bg-daoblue hover:text-white rounded-xl px-4 py-2">Sign Up</button>
        </div>

    </div> -->



    <div class="w-full h-full pb-10">
        <div class="flex w-full border-t bg-daoblue py-10">
            <div class="flex flex-col justify-center items-center w-full">
                <div class="text-4xl font-semibold text-white">Get notifications about our first tokenized property</div>
                <div class="w-full flex flex-col sm:flex-row pt-20 pb-20 justify-center items-center gap-6">
                    <div><input class="rounded-xl focus:border-b focus:outline-none focus:border-daoblue placeholder-daoblue px-10 py-2 text-daoblue" type="text" placeholder="Email"></div>
                    <button class="border border-white text-white hover:text-daoblue hover:bg-white rounded-xl px-4 py-2">Sign Up</button>
                </div>
        
            </div>
        </div>
    </div>

    <div class="w-full h-full md:hidden">
        <div class="flex w-full border-t border-[#0030C9] py-10">
            <!-- <div class="text-2xl text-[#0030C9]">web3</div> -->
            <div class="grid md:grid-cols-3 w-full justify-center items-center text-center gap-4 px-10">
                <div class="p-5">
                    <div class="text-2xl text-[#0030C9]">income-producing</div>
                </div>
                <div class="p-5">
                    <div class="text-2xl text-[#0030C9]">monthly dividends</div>
                </div>
                <div class="p-5">
                    <div class="text-2xl text-[#0030C9]">land appreciation</div>
                </div>
            </div>
        </div>
    </div>
    
</div>