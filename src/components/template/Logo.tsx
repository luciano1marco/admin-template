//-------------------------------------------------------------------------
export default function Logo(){
    return (
        <div className={`   flex flex-col items-center justify-center
                            h-16 w-16 rounded-full 
                            bg-white `}>
             <div className={` h-3 w-3 rounded-full bg-blue-400 ml-0.3`}/>
             <div className={` h-3 w-5  bg-red-600 mb-0.3`}/>
             <div className={` flex mt-0.3`}>
                <div className={` h-3 w-3 rounded-full bg-yellow-500 mr-0.3`}/>
                <div className={` h-3 w-3 rounded-full bg-green-400 ml-0.3`}/>

             </div>

             
        </div>
    )
}
