from typing import List
from random import randint


def gen_random(num_count, begin, end) -> List:
    assert num_count >= 0
    return [randint(begin, end) for i in range(num_count)]
    
def test_gen_random():
    print('Task 2-1: ', str(gen_random(5, 1, 3))[1:-1])
    print('Task 2-2: ', str(gen_random(3, 1, 100))[1:-1])
    print('Task 2-3: ', str(gen_random(5, -100, 100))[1:-1])
    print('-------------------------------------------------------')

def main():
    test_gen_random()

if __name__ == "__main__":
    main()