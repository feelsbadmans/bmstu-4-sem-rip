import json

from lab_python_fp.cm_timer import cm_timer_1
from lab_python_fp.field import field
from lab_python_fp.gen_random import gen_random
from lab_python_fp.print_result import print_result
from lab_python_fp.unique import Unique

path = 'lab3/json/data_light.json'

def process_data():
    with open(path, encoding='utf-8') as f:
        data = json.load(f)

    @print_result
    def f1(value):
        return sorted(Unique(field(value, 'job-name')))


    @print_result
    def f2(value):
        return list(filter(lambda x: x.lower().startswith('программист'), value))


    @print_result
    def f3(value):
        return list(map(lambda x: x + ' с опытом Python', value))


    @print_result
    def f4(value):
        salary = list(gen_random(len(value), 100000, 200000))
        return list(map(lambda x: x[0] + ', зарплата ' + str(x[1]) + ' руб', list(zip(value, salary))))

    with cm_timer_1():
        f4(f3(f2(f1(data))))
    
