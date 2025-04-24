#!/usr/bin/env python3
"""
- annontate the below function parameters
- return value with appropirate type
"""
from typing import Iterable, Tuple, List, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """the function return """
    return [(i, len(i)) for i in lst]
