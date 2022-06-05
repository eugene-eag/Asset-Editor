
class UIButton extends UIBaseElement
{
    _initialize()
    {
        this.className = 'ui-button';

        this._icon = document.createElement('img');
        this._icon.className = 'ui-button-icon';
        
        this._text = document.createElement('div');
        this._text.className = 'ui-button-text';

        this.append(this._icon, this._text);

        this.icon = this.getAttribute('icon');
        this.iconSize = parseFloat(this.getAttribute('iconsize'));
        this.text = this.getAttribute('text');
        this.show = this.getAttribute('show');
        this.direction = this.getAttribute('direction');
        this.toggle = this.getAttribute('toggle') == 'true';
        this.on = this.getAttribute('on') == 'true';

        this.addEventListener('click', (event) => {
            if(this.toggle)
                this.on = !this.on;
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

    get iconSize()
    {
        return this._icon.offsetWidth;
    }

    set iconSize(value)
    {
        this._icon.style.width = this._icon.style.height = value + 'em';
    }

    get text()
    {
        return this._text.innerText;
    }

    set text(str)
    {
        this._text.innerText = str;
    }

    get show()
    {
        this._show;
    }

    set show(mode)
    {
        this._show = mode;

        let fn = (icon, text) =>
        {
            this._icon.style.display = icon ? 'block' : 'none';
            this._text.style.display = text ? 'block' : 'none';
        }

        switch(mode)
        {
            case 'text': fn(false, true); break;
            case 'icon': fn(true, false); break;
            default /* both */: fn(true, true); break;
        }
    }

    get direction()
    {
        return this.style.flexDirection;
    }

    set direction(value)
    {
        this.style.flexDirection = value;
    }

    get on()
    {
        return this._on;
    }

    set on(value)
    {
        this._on = value;
        
        if(value)
            this.classList.add('ui-button-on');
        else
            this.classList.remove('ui-button-on');
    }
}

customElements.define('ui-button', UIButton);
