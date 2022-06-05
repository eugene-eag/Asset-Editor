
class UIBaseElement extends HTMLElement
{
    constructor()
    {
        super();
        this._initialized = false;
    }

    connectedCallback()
    {
        if(!this._initialized)
        {
            this._initialized = true;
            this._initialize();
        }
    }
}
