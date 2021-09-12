from lab_python_oop.figure import Figure
from lab_python_oop.color import FigureColor


class Rectangle(Figure):
    FIGURE_TYPE = "Прямоугольник"

    @classmethod
    def get_type(cls):
        return cls.FIGURE_TYPE

    def __init__(self, color_param, width_param, height_param):
        self.width = width_param
        self.height = height_param
        self.color = FigureColor()
        self.color.colorproperty = color_param

    def square(self):
        return self.width*self.height

    def __repr__(self):
        return '%s %s цвета шириной %.2f и высотой %.2f площадью %.2f.' % (
            Rectangle.get_type(),
            self.color.colorproperty,
            self.width,
            self.height,
            self.square()
        )
