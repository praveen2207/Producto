import React from 'react';
class Footer extends React.Component{
    render(){
        return(
        <section id="footer" style={{backgroundColor:"black"}}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p className="h6">&copy All right Reserved.<a className="text-green ml-2" href="index.html" target="_blank">Producto</a></p>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default Footer;