from field import field

goods = [
    {'title': 'Ковер', 'price': 2000, 'color': 'green'},
    {'title': 'Диван для отдыха', 'price': 5300, 'color': 'black', 'material': 'Кожа'}
]

def test_field():
    print('Task 1-1: ' + ', '.join(field(goods, 'title')))
    print('Task 1-2: ' + ', '.join(field(goods, 'title', 'price')))
    print('Task 1-3: ' + ', '.join(field(goods, 'title', 'price', 'material')))

def main():
    test_field()

if __name__ == "__main__":
    main()