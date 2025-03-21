import qrcode

# Função para gerar o QR Code
def gerar_qrcode(url):
    # Cria o objeto QRCode
    qr = qrcode.QRCode(
        version=1,  # Tamanho do QR Code
        error_correction=qrcode.constants.ERROR_CORRECT_L,  # Nível de correção de erro
        box_size=10,  # Tamanho das caixas do QR Code
        border=4,  # Tamanho da borda
    )
    
    # Adiciona a URL ao QR Code
    qr.add_data(url)
    qr.make(fit=True)

    # Cria a imagem do QR Code
    img = qr.make_image(fill='black', back_color='white')

    # Salva o QR Code gerado como uma imagem
    img.save("qrcode.png")

    # Exibe o QR Code
    img.show()

# Solicita a URL ao utilizador
url = input("Digite a URL para gerar o QR Code: ")
gerar_qrcode(url)


#pip install qrcode[pil]
