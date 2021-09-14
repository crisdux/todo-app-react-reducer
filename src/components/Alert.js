import React, { useEffect } from 'react'

const Alert = ({ contentAlert, styleAlert, cerrarAlert }) => {

    useEffect(() => {
        setTimeout(() => {
            cerrarAlert();
        }, 1200)
        return () => {
            clearTimeout(contentAlert);
        }
    }, [cerrarAlert]);

    return (

        <div className="flex justify-center">
            <span className={`w-32 text-center bg-green-500 text-white px-2 py-1 rounded mt-4 `}>
                {contentAlert}
            </span>
        </div>
    )
}

export default Alert
