from lab_python_oop.figure import Figure
from lab_python_oop.color import FigureColor


class Square(Figure):
    FIGURE_TYPE = "Квадрат"

    @classmethod
    def get_type(cls):
        return cls.FIGURE_TYPE

    def __init__(self, color_param, side_param):
        self.side = side_param
        self.color = FigureColor()
        self.color.colorproperty = color_param

    def square(self):
        return self.side**2

    def __repr__(self):
        return '%s %s цвета со стороной %.2f площадью %.2f.' % (
            Square.get_type(),
            self.color.colorproperty,
            self.side,
            self.square()
        )
