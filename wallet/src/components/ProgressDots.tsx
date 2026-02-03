import { GoDotFill } from "react-icons/go";

const ProgressDots = ({currentStep}: {currentStep: number, total: number})=>{

    return <div className="flex">
        {currentStep === 1 && 
        <div className="flex">
            <GoDotFill color="green"/>
            <GoDotFill />
            <GoDotFill />
        </div>
        }
        {currentStep === 2 && 
        <div className="flex">
            <GoDotFill color="green"/>
            <GoDotFill color="green"/>
            <GoDotFill />
        </div>
        }
        {currentStep === 3 && 
        <div className="flex">
            <GoDotFill color="green"/>
            <GoDotFill color="green"/>
            <GoDotFill color="green"/>
        </div>
        }
    </div>
}

export default ProgressDots;