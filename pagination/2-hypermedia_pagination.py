#!/usr/bin/env python3
"""
Implement a get_hyper method that takes the same arguments
"""
import csv
import math
from typing import List, Dict, Any


def index_range(page: int, page_size: int) -> tuple:
    """return a tuple of size two containing a start index and an end index"""
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """simple pagination"""
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        first_index, last_index = index_range(page, page_size)
        data = self.dataset()

        if first_index >= len(data):
            return []
        return data[first_index:last_index]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        """ returns a dictionary containing the following key-value pairs """
        data_page = self.get_page(page, page_size)
        totalPages = math.ceil(len(self.dataset()) / page_size)
        return {
            'page_size': len(data_page),
            'page': page,
            'data': data_page,
            'next_page': page + 1 if page < totalPages else None,
            'prev_page': page - 1 if page > 1 else None,
            'total_pages': totalPages
        }
