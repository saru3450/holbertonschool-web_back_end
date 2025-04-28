#!/usr/bin/env python3
"""the function async generator"""
from typing import AsyncGenerator
import asyncio
import random


async def async_generator() -> AsyncGenerator[float, None, None]:
    """coroutine called async_generator"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
