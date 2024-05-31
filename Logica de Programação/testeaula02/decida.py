import datetime 
import random
while True:
    palavras = ["Bom dia, meu querido Pinda! Que a luz do sol que nasce entre as montanhas ilumine nossos caminhos hoje.", "Aqui em Pinda, cada novo dia é uma oportunidade para vivermos com alegria e gratidão. Bom dia!", "Começar o dia em Pindamonhangaba é como acordar em um pedacinho do paraíso. Bom dia, vizinhos!", "Que as boas energias das águas do Rio Paraíba nos inspirem a enfrentar qualquer desafio que o dia nos trouxer. Bom dia!", "Em Pindamonhangaba, o dia começa com o canto dos pássaros e o perfume das flores. Que a natureza nos lembre da beleza da vida. Bom dia a todos!"


]
    instrucao = input("O que posso decidir por você? ")
    palavra_aleatoria = random.choice(palavras)
    

    if instrucao == "que horas são?":
    
       hora_atual = datetime.datetime.now()
       hora_formada = hora_atual.strftime("%H:%M:%S")

       print("A hora certa é:", hora_formada)

    if instrucao == "que dia é hoje?":

        data_atual = datetime.datetime.now()
        data_formatada = data_atual.strftime("%d/%m/%y")

        print("Hoje é:", data_formatada)

    if instrucao == "pare":
       break
    print(palavra_aleatoria)
