#!/usr/bin/env python3
"""
function sum_mixed_list which takes a list mxd_lst
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int]]) -> float:
    """ returns their sum as a float."""
    return sum(mxd_lst)
