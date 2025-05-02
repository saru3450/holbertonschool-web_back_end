#!/usr/bin/env python3
"""
Function that changes all topics of a school document
"""

from pymongo import MongoClient


def update_topics(mongo_collection, name, topics):
    """ mongo_collection will be the pymongo """
    mongo_collection.update_many(
        {'name': name},
        {'$set': {'topics': topics}}
    )
