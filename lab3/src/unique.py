# Итератор для удаления дубликатов
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