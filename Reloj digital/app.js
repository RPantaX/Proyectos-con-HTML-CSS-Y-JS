document.body.setAttribute('onload','digital()')

function digital(){
    let f= new Date();
    setInterval(()=>{
        document.getElementById('hora').innerHTML=new Date().toLocaleTimeString()
    },1000);
    const meses=['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const dias=['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
    let diaSemana= dias[f.getDay()];
    let dia=f.getDate();
    let mes= meses[f.getMonth()]
    document.getElementById('fecha').innerHTML=diaSemana+'. '+dia+' '+mes;
    
}
