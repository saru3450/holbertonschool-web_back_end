#!/usr/bin/env python3
"""
Import wait_random from the previous python
"""

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """wait_n should return the list of all the delays (float values)."""
    delays = [wait_random(max_delay) for _ in range(n)]
    return [await delays for delays in asyncio.as_completed(delays)]
