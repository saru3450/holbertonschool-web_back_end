#!/usr/bin/env python3
"""
 function to_kv that takes a string k
 float v as arguments and returns a tuple
 first element of the tuple is the string k
"""
from typing import Tuple, List, Union


def to_kv(k:  str, v: Union[int, float]) -> Tuple[str, float]:
    """square of the int/float v"""
    return (k, float(v ** 2))
