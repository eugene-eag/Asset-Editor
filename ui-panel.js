
class UIPanel extends UIBaseElement
{
    _initialize()
    {
        this.className = 'ui-panel';

        this._titlebar = document.createElement('div');
        this._titlebar.className = 'ui-panel-titlebar';
        this._titlebar.addEventListener('click', (event) => {
            this.folded = !this.folded;
        });

        this._titlebarText = document.createElement('div');
        this._titlebarText.className = 'ui-panel-titlebar-text';

        this._titlebarButton = document.createElement('img')
        this._titlebarButton.className = 'ui-panel-titlebar-button';

        this._content = document.createElement('div');
        this._content.className = 'ui-panel-content';

        this._titlebar.append(this._titlebarText, this._titlebarButton);
        this.append(this._titlebar, this._content);

        this.title = this.getAttribute('title');
        this.folded = this.getAttribute('folded') == 'true';
        this.grow = this.getAttribute('grow') == 'true';
    }

    get title()
    {
        return this._titlebarText.innerText;
    }

    set title(str)
    {
        this._titlebarText.innerText = str;
    }

    get grow()
    {
        return this._grow;
    }

    set grow(value)
    {
        this._grow = value;
        this.style.flexGrow = value ? '1' : '0';
    }

    get folded()
    {
        return this._folded;
    }

    set folded(value)
    {
        this._folded = value;

        if(value)
        {
            this._content.style.display = 'none';
            this._titlebarButton.src = 'icons/fold.svg';
            this.style.flexGrow = '0';
            this.style.minHeight = '3em';
        }
        else
        {
            this._content.style.display = 'flex';
            this._titlebarButton.src = 'icons/unfold.svg';
            this.style.flexGrow = this._grow ? '1' : '0';
            this.style.minHeight = '8em';
        }

        let event = new CustomEvent('fold', {detail: {folded: value}});
        this.dispatchEvent(event);
    }
}

customElements.define('ui-panel', UIPanel);
