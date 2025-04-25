#!/usr/bin/env python3
"""
the code from wait_n and alter it into a new function task_wait_n
"""


import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Wait for a random delay between 0 and max_delay seconds."""
    delays = [wait_random(max_delay) for _ in range(n)]
    return [await delays for delays in asyncio.as_completed(delays)]
