import sys
import math

def get_coef(index, message):
    try:
        coef_str = sys.argv[index]
    except:
        print(message)
        coef_str = input()
    coef = float(coef_str)
    return coef


def get_roots(a, b, c):
    pre_result = set()
    D = b*b - 4*a*c
    if D == 0.0:
        root = -b / (2.0*a)
        pre_result.add(root)
    elif D > 0.0:
        sqD = math.sqrt(D)
        root1 = (-b + sqD) / (2.0*a)
        root2 = (-b - sqD) / (2.0*a)
        pre_result.add(root1)
        pre_result.add(root2)

    result = set()
    for i in pre_result:
        if i >= 0:
            result.add(math.sqrt(i))
            result.add(-math.sqrt(i))
    return sorted(result)


def main():
    a = get_coef(1, 'Введите коэффициент А:')
    b = get_coef(2, 'Введите коэффициент B:')
    c = get_coef(3, 'Введите коэффициент C:')
    # Вычисление корней
    roots = get_roots(a,b,c)
    # Вывод корней
    len_roots = len(roots)
    if len_roots == 0:
        print('Нет корней')
    elif len_roots == 1:
        print('Один корень: %f' % roots.pop())
    elif len_roots == 2:
        print('Два корня: ' + ', '.join(list(map(str, roots))));
    elif len_roots == 3:
        print('Три корня: ' + ', '.join(list(map(str, roots))));
    elif len_roots == 4:
        print('Четыре корня: ' + ', '.join(list(map(str, roots))));

if __name__ == "__main__":
    main()