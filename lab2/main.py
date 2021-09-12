from lab_python_oop.rectangle import Rectangle
from lab_python_oop.circle import Circle
from lab_python_oop.square import Square


def main():
    r = Rectangle("синего", 4, 3)
    c = Circle("зеленого", 11)
    s = Square("красного", 22)
    print(r)
    print(c)
    print(s)

if __name__ == "__main__":
    main()