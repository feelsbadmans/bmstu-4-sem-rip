from typing import Dict, List


def field(dicts: List[Dict], *args: List[str]) -> List:
    assert len(args) > 0 and len(dicts) > 0
    
    return_value = []

    for dict in dicts:
        buf_dict = {}
        for key in dict.keys():
            if len(args) == 1:
                if key in args:
                    return_value.append(dict[key])
            else:
                if key in args:
                    buf_dict[key] = dict[key]
        if len(args) > 1: return_value.append(buf_dict)
    
    
    return return_value

