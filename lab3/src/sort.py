def sort(data):
    return sorted(data, key=abs, reverse=True)

def sort_lambda(data):
    return sorted(data, key=lambda value: value if value > 0 else -value, reverse=True)
