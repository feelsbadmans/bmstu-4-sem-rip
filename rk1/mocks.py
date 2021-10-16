from models import *

processors = [
    Processor(1, 'AMD FX 4300', 4, 3800, 4000),
    Processor(2, 'AMD FX 8300', 8, 3500, 8000),
    Processor(3, 'Микропроцессор AMD Ryzen 7 3800', 8, 3800, 16000),
    Processor(4, 'Intel Core i7-6700', 8, 3800, 16000),
    Processor(5, 'Микропроцессор Intel Core i7-6700K', 8, 4000, 20000),
]

pcs = [
    PC(1, 'BichMachina', 1, 20000),
    PC(2, 'Dota2PC', 5, 50000),
    PC(3, 'NaMinimalkah', 2, 25000),
    PC(4, 'PC4', 3, 35023),
    PC(5, 'PC5', 3, 40123),
    PC(6, 'PC6', 4, 37421),
    PC(7, 'TOP-PC', 5, 52421),
    PC(8, 'BEST-PC', 4, 40000),
    PC(9, 'Античный ПК', 1, 18000),
    PC(10, 'Автобот', 3, 45000),
    PC(11, 'Антивирус', 2, 40322)
]

proc_pcs = [
    ProcessorPC(1, 1),
    ProcessorPC(1, 9),
    ProcessorPC(2, 3),
    ProcessorPC(2, 11),
    ProcessorPC(3, 4),
    ProcessorPC(3, 5),
    ProcessorPC(3, 10),
    ProcessorPC(4, 6),
    ProcessorPC(4, 8),
    ProcessorPC(5, 2),
    ProcessorPC(5, 7),
]