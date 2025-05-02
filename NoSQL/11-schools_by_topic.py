#!/usr/bin/env python3
"""
 function that returns the list of school
"""
from pymongo import MongoClient


def schools_by_topic(mongo_collection, topic):
    """ mongo_collection will be the pymongo """
    return list(mongo_collection.find({"topics": topic}))
