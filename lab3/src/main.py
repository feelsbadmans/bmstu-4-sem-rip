from field import field
from gen_random import gen_random

goods = [
    {'title': 'Ковер', 'price': 2000, 'color': 'green'},
    {'title': 'Диван для отдыха', 'price': 5300, 'color': 'black', 'material': 'Кожа'}
]

def test_field():
    print('\nTask 1-1: ' + ', '.join(field(goods, 'title')))
    print('Task 1-2: ' + ', '.join(field(goods, 'title', 'price')))
    print('Task 1-3: ' + ', '.join(field(goods, 'title', 'price', 'material')))

def test_gen_random():
    print('\nTask 2-1: ' + ', '.join(gen_random(5, 1, 3, True)))
    print('Task 2-2: ' + ', '.join(gen_random(3, 1, 100, True)))
    print('Task 2-3: ' + ', '.join(gen_random(5, -100, 100, True)))

def main():
    test_field()
    test_gen_random()

if __name__ == "__main__":
    main()