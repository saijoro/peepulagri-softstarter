import PondBasedMotors from "../PondBasedMotors";
import PondAccordion from "../PondsAccordions";
import { Pondsnav } from "../pondsnav";

const MotersDetailsComponent = () => {
    return ( 
        <div className="w-full flex">
            <div className="w-1/2 flex flex-col">
                <Pondsnav/>
                <PondAccordion/>
            </div>
            <div className="w-1/2">
                <PondBasedMotors/>
            </div>
        </div>
     );
}

export default MotersDetailsComponent;