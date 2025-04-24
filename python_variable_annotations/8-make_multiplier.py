#!/usr/bin/env python3
"""
function make_multiplier that takes a float multiplier
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """the function return the result of the function mul_function"""
    def mul_tiplier(value: float) -> float:
        """multiplie value by multiplier"""
        return multiplier * value
    return mul_tiplier
