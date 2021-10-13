var clipboard = new ClipboardJS('.btn-copy');

clipboard.on('success', function(e) {
    alert('Firma copiada')
})

const getValue = (id) => (document.getElementById(id).value)

function download(filename, text, button) {
    var element = document.querySelector(button)
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
}

var input = document.querySelector("#whatsapp");
  window.intlTelInput(input, {
    // any initialisation options go here
    initialCountry: "co"
  });

const formGenerate = document.getElementById('form-generate')

if(formGenerate){
    const btnGenerate = document.getElementById('btn-submit')
    const content = document.getElementById('content')

    btnGenerate.addEventListener('click', (e) => {
        e.preventDefault()
        let name = getValue('name')
        let lastName = getValue('lastname')
        let whatsapp = getValue('whatsapp')
        let email = getValue('email')

        let generateHtml = `
        <table id="mail-box" style="background-image: url('http://geniorama.site/mail-resources/bg-firma-correo.png'); font-family: Arial, Helvetica, sans-serif; background-repeat: no-repeat; background-size: cover;">
        <tbody>
            <tr>
                <td style="padding: 30px;">
                <img src="http://geniorama.site/mail-resources/logoRecurso-7.png" alt="" style="width: 200px"> 
                </td>
                <td style="padding: 30px;">
                    <table>
                        <tr>
                            <td>
                                <p>
                                    <img src="http://geniorama.site/mail-resources/profile.png" alt="" style="width: 20px">
                                    <span style="color: #353535; font-weight: bold;">${name} ${lastName}</span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://api.whatsapp.com/send?phone=57${whatsapp}&text=Hola,%20¿Qué%20tal%20estás ${name}?" style="text-decoration: none; display: block;" target="_blank">
                                    <img src="http://geniorama.site/mail-resources/whatsapp.png" alt="" style="width: 20px" >
                                    <span style="color: #353535; ">${whatsapp}</span>
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <a href="mailto:${email}" style="text-decoration: none; display: block; margin: 10px 0;">
                                    <img src="http://geniorama.site/mail-resources/mailRecurso.png" alt="" style="width: 20px" >
                                    <span style="color: #353535;">${email}</span>
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <a href="http://geniorama.site/" style="text-decoration: none; display: block; margin: 10px 0; margin-top: 20px;" target="_blank">
                                    <img src="http://geniorama.site/mail-resources/web.png" alt="" style="width: 20px" >
                                    <span style="color: #353535;">www.geniorama.site</span>
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <a href="mailto:hola@geniorama.site" style="text-decoration: none; display: block; margin: 10px 0;">
                                    <img src="http://geniorama.site/mail-resources/mailRecurso.png" alt="" style="width: 20px" >
                                    <span style="color: #353535;">hola@geniorama.site</span>
                                </a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    `

    document.querySelector('.gen-action-buttons').classList.remove('d-none')
    document.querySelector('.gen-action-buttons').classList.add('d-block')

        content.innerHTML = generateHtml
        const buttonDownload = document.querySelector('#mail-html')

        download('firma.html', generateHtml, '#mail-html')
    })

    
    
      
      // Start file download.
    //   download("hello.txt","<p>This is the content of my file :)</p>");
      
}