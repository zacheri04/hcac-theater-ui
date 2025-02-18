/*
* InteractiveScreen.tsx
* 
* This is the screen that displays when
* the screen is in an inactive state
*/

import buSeal from "/buSeal.png";
import BULogo from "/BULogo.svg";

type Props = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const InactiveScreen: React.FC<Props> = ({onClick}) => {
    return (
        <>
            {/* Background Seal */}
            <div className="absolute opacity-5 flex w-svw h-svh justify-center items-center z-0">
                <img src={buSeal} />
            </div>

            {/* Through the Years footer */}
            <div className="absolute flex flex-col justify-between items-center z-10 w-svw h-svh pb-20">
                <img src={BULogo} width={500} />
                <p className="text-7xl font-[Lora]">Through the Years</p>
            </div>

            {/* Touch to Begin pulsing prompt */}
            <div className="absolute flex items-center justify-center z-10 animate-pulse w-svw h-svh">
                <p className="text-9xl font-[Lora]">Touch to Begin</p>
            </div>

            {/* Button that lays over the entire thing so user can click anywhere */}
            <button className="" onClick={onClick}>
                <div className="absolute z-30 w-svw h-svh" />
            </button>
        </>
    );
};

export default InactiveScreen