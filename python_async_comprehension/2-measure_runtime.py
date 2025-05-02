#!/usr/bin/env python3
"""Import async_comprehension from the previous file"""
import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """coroutine that will execute async_comprehension"""
    firstTime = time.time()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    lastTime = time.time()
    totalTime = lastTime - firstTime
    return totalTime
