
class UIAssetsItem extends UIBaseElement
{
    _initialize()
    {
        this.className = 'ui-assets-item';

        this._icon = document.createElement('img');
        this._icon.className = 'ui-assets-item-icon';

        this._text = document.createElement('div');
        this._text.className = 'ui-assets-item-text';

        this._toggleLocked = document.createElement('img');
        this._toggleLocked.className = 'ui-assets-item-toggle';
        this._toggleLocked.src = 'icons/lock.svg';

        this._toggleVisible = document.createElement('img');
        this._toggleVisible.className = 'ui-assets-item-toggle';
        this._toggleVisible.src = 'icons/eye.svg';

        this.append(this._icon, this._text, this._toggleLocked, this._toggleVisible);

        this.addEventListener('click', (event) =>
        {
            let assets = this.parentNode.parentNode;
            assets.selected = this;
            event.stopPropagation();
        });

        this._toggleLocked.addEventListener('mousedown', (event) =>
        {
            this.locked = !this.locked;
        });

        this._toggleVisible.addEventListener('mousedown', (event) =>
        {
            this.visible = !this.visible;
        });
    }

    get icon()
    {
        return this._icon.src;
    }

    set icon(url)
    {
        this._icon.src = url;
    }

    get text()
    {
        return this._text.innerText;
    }

    set text(str)
    {
        this._text.innerText = str;
    }

    get locked()
    {
        return this._locked;
    }

    set locked(value)
    {
        this._locked = value;
        this._toggleLocked.style.opacity = value ? '1' : '0.25';
    }

    get visible()
    {
        return this._visible;
    }

    set visible(value)
    {
        this._visible = value;
        this._toggleVisible.style.opacity = value ? '1' : '0.25';
    }

    get selected()
    {
        return this._selected;
    }

    set selected(value)
    {
        this._selected = value;
        
        if(value)
            this.classList.add('ui-assets-item-selected');
        else
            this.classList.remove('ui-assets-item-selected');
    }

}

customElements.define('ui-assets-item', UIAssetsItem);
