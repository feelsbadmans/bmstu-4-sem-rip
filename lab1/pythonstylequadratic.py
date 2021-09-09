coefs = {'a': 0, 'b': 0, 'c': 0}

for i in coefs.keys():
    try:
        coefs[i] = float(input('Введите коэффициент %s: ' % i))
    except ValueError:
        coefs[i] = float(input('Ошибка! Повторите ввод коэффициента %s: ' % i))

print('Число корней уравнения: %d\n%s' % ((2 if (coefs['b']**2 - 4*coefs['a']*coefs['c']) > 0 else 1 if (coefs['b']**2 - 4*coefs['a']*coefs['c']) == 0 else 0), 
('' if (coefs['b']**2 - 4*coefs['a']*coefs['c']) < 0  else 'Корни уравнения: '+', '.join(list(map(str, set([(-coefs['b'] - (coefs['b']**2 - 4*coefs['a']*coefs['c'])**(1/2))/(2*coefs['a']), (-coefs['b'] + (coefs['b']**2 - 4*coefs['a']*coefs['c'])**(1/2))/(2*coefs['a'])])))))))