class Processor:
    """Процессор"""
    def __init__(self, id, title, num_cores, freq, price):
        self.id = id
        self.title = title
        self.numb_cores = num_cores
        self.freq = freq
        self.price = price
 
class PC:
    """Компьютер"""
    def __init__(self, id, title, proc_id, price):
        self.id = id
        self.title = title
        self.proc_id = proc_id
        self.price = price
 
class ProcessorPC:
    """
    Процессоры компьютеров
    """
    def __init__(self, proc_id, pc_id):
        self.proc_id = proc_id
        self.pc_id = pc_id
