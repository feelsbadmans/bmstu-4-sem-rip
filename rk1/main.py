from mocks import *

def main():
    one_to_many = [(proc.title, proc.id, pc.title, pc.price) 
        for proc in processors 
        for pc in pcs  
        if pc.proc_id == proc.id]
    
    many_to_many_temp = [(proc.title, proc_pc.proc_id, proc_pc.pc_id) 
        for proc in processors 
        for proc_pc in proc_pcs
        if proc.id==proc_pc.proc_id]
    
    many_to_many = [(pc.title, title) 
        for title, proc_id, pc_id in many_to_many_temp
        for pc in pcs if pc.id==pc_id]

    res_1 = list(filter(lambda i: i[0].lower().find('микропроцессор') != -1, one_to_many))

    res_2 = []
    res_2_ids = []

    for i in one_to_many:
        if res_2_ids.count(i[1]) != 0:
            continue
        buf = list(filter(lambda x: x[1] == i[1], one_to_many))
        res_2_ids.append(i[1])
        sum = 0
        count = len(buf)
        for j in buf:
            sum += j[3]
        res_2.append((i[0], round(sum / count, 2)))

    a = ['a', 'а']

    res_3 = list(filter(lambda i: a.count(i[0][0].lower()) != 0, many_to_many))

    print('Задание 1', res_1)
    print('Задание 2', res_2)
    print('Задание 3', res_3)    

if __name__ == "__main__":
    main()