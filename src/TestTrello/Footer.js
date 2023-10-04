import React from "react";

export function Footer(){

    return(
        <div>
           <footer className="footer py-4">
                <div className="container-xxl ">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0">&copy; {new Date().getFullYear()};Powered By NewsHunt </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}