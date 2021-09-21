def sort(data):
    return sorted(data, key=abs, reverse=True)

def sort_lambda(data):
    return sorted(data, key=lambda value: value if value > 0 else -value, reverse=True)

data_sort = [4, -30, 30, 100, -100, 123, 1, 0, -1, -4]

def test_sort():
    print('Task 4 without lambda: ', str(sort(data_sort))[1:-1])
    print('Task 4 with lambda: ', str(sort_lambda(data_sort))[1:-1])
    print('-------------------------------------------------------')

def main():
    test_sort()

if __name__ == "__main__":
    main()
