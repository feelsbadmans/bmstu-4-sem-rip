from typing import List
from random import randint


def gen_random(num_count, begin, end) -> List:
    assert num_count >= 0
    return [randint(begin, end) for i in range(num_count)]