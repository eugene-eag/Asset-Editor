
class UIAssets extends UIPanel
{
    addItem(param)
    {
        let item = document.createElement('ui-assets-item');
        this._content.append(item);

        item.icon = param.icon;
        item.text = param.name;
        item.locked = param.locked;
        item.visible = !param.hidden;

        this.selected = item;
        this._content.addEventListener('click', (event) => this.selected = null);
    }

    removeSelectedItem()
    {
        if(this._selected)
        {
            this._content.removeChild(this._selected);
            this._selected = null;
        }
    }

    duplicateSelectedItem()
    {
        if(this._selected)
            this.addItem({
                icon: this._selected.icon,
                name: this._selected.text
            });
    }

    get selected()
    {
        return this._selected;
    }

    set selected(item)
    {
        if(this._selected != item)
        {
            if(this._selected)
                this._selected.selected = false;

            if(item)
            {
                item.selected = true;
                item.scrollIntoView();
            }
            
            this._selected = item;
        }
    }
}

customElements.define('ui-assets', UIAssets);
