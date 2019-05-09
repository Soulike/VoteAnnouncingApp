import {Storage} from './Util';

let storage = null;

try
{
    storage = window.localStorage;
    window.localStorage.getItem('');
}
catch (e)
{
    storage = new Storage();
}

export function setEventName(eventName)
{
    storage.setItem('eventName', eventName);
}

export function getEventName()
{
    return storage.getItem('eventName');
}

export function removeEventName()
{
    storage.removeItem('eventName');
}

export function setPeopleList(peopleList)
{
    storage.setItem('peopleList', JSON.stringify(peopleList));
}

export function getPeopleList()
{
    try
    {
        const peopleListJson = storage.getItem('peopleList');
        if (peopleListJson)
        {
            return JSON.parse(peopleListJson);
        }
        else
        {
            return [];
        }
    }
    catch (e)
    {
        return [];
    }
}

export function removePeopleList()
{
    storage.removeItem('peopleList');
}