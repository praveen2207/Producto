import React from 'react';
class Footer extends React.Component{
    render(){
        return(
        <section id="footer" style={{backgroundColor:"black"}}>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p class="h6">&copy All right Reserved.<a class="text-green ml-2" href="index.html" target="_blank">Producto</a></p>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default Footer;