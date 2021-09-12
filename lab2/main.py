from lab_python_oop.rectangle import Rectangle
from lab_python_oop.circle import Circle
from lab_python_oop.square import Square
from logbook import Logger, StreamHandler
import sys


def main():
    rectangle = Rectangle("синего", 6, 7)
    circle = Circle("зеленого", 6)
    square = Square("красного", 6)
    StreamHandler(sys.stdout).push_application()
    log = Logger('Фигура')
    print(rectangle)
    log.info(rectangle.FIGURE_TYPE)
    print(circle)
    log.info(circle.FIGURE_TYPE)
    print(square)
    log.info(square.FIGURE_TYPE)

if __name__ == "__main__":
    main()