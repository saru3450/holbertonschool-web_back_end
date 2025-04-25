#!/usr/bin/env python3
"""
Write a function (do not create an async function
use the regular function syntax to do this) task_wait_random
"""

import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


async def task_wait_random(max_delay: int) -> asyncio.Task:
    """  takes an integer max_delay and returns a asyncio.Task"""
    return asyncio.Task(wait_random(max_delay))
