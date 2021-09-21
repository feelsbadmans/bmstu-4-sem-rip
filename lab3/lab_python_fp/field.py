from typing import Dict, List


def field(dicts: List[Dict], *args: List[str]) -> List:
    assert len(args) > 0 and len(dicts) > 0
    
    return_value = []

    for dict in dicts:
        buf_dict = {}
        for key in dict.keys():
            if len(args) == 1:
                if key in args:
                    return_value.append(dict[key])
            else:
                if key in args:
                    buf_dict[key] = dict[key]
        if len(args) > 1: return_value.append(buf_dict)
    
    return return_value

goods = [
    {'title': 'Ковер', 'price': 2000, 'color': 'green'},
    {'title': 'Диван для отдыха', 'price': 5300, 'color': 'black', 'material': 'Кожа'}
]
data_int = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2]
data_str = ['a', 'A', 'b', 'B', 'a', 'A', 'b', 'B']
data_sort = [4, -30, 30, 100, -100, 123, 1, 0, -1, -4]

def test_field():
    print('Task 1-1: ', str(field(goods, 'title'))[1:-1])
    print('Task 1-2: ', str(field(goods, 'title', 'price'))[1:-1])
    print('Task 1-3: ', str(field(goods, 'title', 'price', 'material'))[1:-1])
    print('-------------------------------------------------------')

def main():
    test_field()

if __name__ == "__main__":
    main()
