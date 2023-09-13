altura = 0
alturahomem = 0
numerohomem = 0
mulheres = 0
maior = 0
menor = 0

for x in range (15):
    print ()
    n = str (input ('Nome:'))
    a = float (input ('Altura:'))
    s = int (input ('Sexo: [1] MASCULINO - [2] FEMININO:'))
    print ()

    if a > maior:
        maior = a
        if menor == 0:
            menor = a
        else:
            menor = menor
    elif a > menor:
        if menor == 0:
            menor = a
        else:
            menor = menor
    else:
        menor = a
    altura += a

    if s == 1:
        alturahomem += a
        numerohomem += 1
    elif s == 2:
        mulheres += 1
    else:
        print ('Opção inválida.')
        print ()

print (f'A maior altura é de {maior} m. A menor altura é de {menor} m.')
print (f'A média de altura é dos homens é {(alturahomem/numerohomem):.2f} m.')
print (f'O número de mulheres é {mulheres}.')