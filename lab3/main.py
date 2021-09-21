from cm_timer import *
from field import field
from gen_random import gen_random
from print_result import print_result
from process_data import process_data
from sort import *
from unique import Unique

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

def test_gen_random():
    print('Task 2-1: ', str(gen_random(5, 1, 3))[1:-1])
    print('Task 2-2: ', str(gen_random(3, 1, 100))[1:-1])
    print('Task 2-3: ', str(gen_random(5, -100, 100))[1:-1])
    print('-------------------------------------------------------')

def test_unique():
    print('Task 3-1: ', str(list(Unique(data_int)))[1:-1])
    print('Task 3-2 ignoring case: ', str(list(Unique(data_str, ignore_case = True)))[1:-1])
    print('Task 3-2 not ignoring case: ', str(list(Unique(data_str, ignore_case = False)))[1:-1])
    print('Task 3-3: ', str(list(Unique(gen_random(100, 1, 5))))[1:-1])
    print('-------------------------------------------------------')

def test_sort():
    print('Task 4 without lambda: ', str(sort(data_sort))[1:-1])
    print('Task 4 with lambda: ', str(sort_lambda(data_sort))[1:-1])
    print('-------------------------------------------------------')

def test_print_result():
    @print_result
    def test_1():
        return 1


    @print_result
    def test_2():
        return 'iu5'


    @print_result
    def test_3():
        return {'a': 1, 'b': 2}


    @print_result
    def test_4():
        return [1, 2]

    print('Task 5:\n')
    test_1()
    test_2()
    test_3()
    test_4()
    print('-------------------------------------------------------')

def test_timer():
    print('Task 6:\n')
    with cm_timer_1():
        time.sleep(1)
    with cm_timer_2():
        time.sleep(1)
    print('-------------------------------------------------------')

def test_process_data():
    print('Task 7:\n')
    process_data()

def main():
    test_field()
    test_gen_random()
    test_unique()
    test_sort()
    test_print_result()
    test_timer()

    #uncomment this to test task 7
    test_process_data()

if __name__ == "__main__":
    main()
