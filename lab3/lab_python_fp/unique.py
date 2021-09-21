# Итератор для удаления дубликатов
from gen_random import gen_random
class Unique(object):
    def __init__(self, items, **kwargs):
        self.used_elements = set()
        self.data = list(items)
        self.index = 0

        if 'ignore_case' in kwargs.keys():
            self.ignore_case = kwargs['ignore_case']
        else:
            self.ignore_case = False

    def __next__(self):
        while True:
            if self.index >= len(self.data):
                raise StopIteration

            current = self.data[self.index]
            self.index += 1

            if ((self.ignore_case or not isinstance(current, str)) and current not in self.used_elements):
                self.used_elements.add(current)
                return current
                
            elif (not self.ignore_case and isinstance(current, str) and current.upper() not in self.used_elements 
                    and current.lower() not in self.used_elements):
                self.used_elements.add(current.upper())
                self.used_elements.add(current.lower())
                return current

    def __iter__(self):
        return self

data_int = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2]
data_str = ['a', 'A', 'b', 'B', 'a', 'A', 'b', 'B']

def test_unique():
    print('Task 3-1: ', str(list(Unique(data_int)))[1:-1])
    print('Task 3-2 ignoring case: ', str(list(Unique(data_str, ignore_case = True)))[1:-1])
    print('Task 3-2 not ignoring case: ', str(list(Unique(data_str, ignore_case = False)))[1:-1])
    print('Task 3-3: ', str(list(Unique(gen_random(100, 1, 5))))[1:-1])
    print('-------------------------------------------------------')

def main():
    test_unique()

if __name__ == "__main__":
    main()