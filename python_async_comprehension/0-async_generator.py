#!/usr/bin/env python3
"""Write a coroutine called async_generator"""
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None, None]:
    """
    Coroutine qui génère 10 nombs aléatoires entre 0 et 1
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
