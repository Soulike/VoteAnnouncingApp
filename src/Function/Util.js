/**
 * @constructor
 * */
export class Storage
{
    constructor()
    {
        this.content = {};
    }

    /**
     * @param {number} n
     * */
    key(n)
    {
        if (!Number.isInteger(n))
        {
            throw new TypeError('The parameter key must be an integer');
        }
        else
        {
            return Object.keys(this.content)[n];
        }
    };

    /**
     * @param {string} key
     * */
    getItem(key)
    {
        return this.content[key];
    }

    /**
     * @param {string} key
     * @param {string} value
     * */
    setItem(key, value)
    {
        this.content[key] = value.toString();
    }

    /**
     * @param {string} key
     * */
    removeItem(key)
    {
        delete this.content[key];
    }

    clear()
    {
        this.content = {};
    }
}