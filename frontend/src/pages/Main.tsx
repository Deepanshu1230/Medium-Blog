import { Cardcomponent } from "../components/Cardcomponent"
import { Footer } from "../components/Footer"
import { Herosection } from "../components/Herosection"
import { Herosection2 } from "../components/HeroSection2"
import { Mainav } from "../components/Mainnav"
import { Brainnew } from "../icons/Brain"
import { Tagsnew } from "../icons/Featureicon"
import { Sticky } from "../icons/Stick"



export const Main=()=>{
    return (
        <div>
            {/* navbar */}
            <div>
                <Mainav/>
            </div>

            <div>
                <Herosection/>
            </div>

            <div>
                <Herosection2/>
            </div>

            <div className="flex flex-col md:flex-row pt-16 px-11 gap-x-11 justify-between">
                <Cardcomponent icon={<Brainnew/>} topic={`Transform lengthy content into \n crisp, engaging summaries that capture every essential detail`}
                text={"Intelligent Summaries"}
                />

                <Cardcomponent icon={<Tagsnew/>} text={"Smart Categorization"}
                topic={"Automatically generate relevant tags and categories that enhance discoverability."}

                />

                <Cardcomponent icon={<Sticky/>} text={"Content Enhancement"} 
                topic={"Elevate your writing with AI-powered suggestions and style improvements."}

                />
            </div>

            <div>
                <Footer/>
            </div>




        </div>
    )
}