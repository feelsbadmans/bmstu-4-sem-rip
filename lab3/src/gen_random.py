from typing import List
from random import randint


def gen_random(num_count, begin, end, need_string = False) -> List:
    assert num_count >= 0

    return_value = []

    for i in range(num_count):
        value = randint(begin, end) 
        return_value.append(str(value) if need_string else value)

    return return_value