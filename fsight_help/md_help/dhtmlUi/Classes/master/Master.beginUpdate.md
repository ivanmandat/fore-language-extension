# Master.beginUpdate

Master.beginUpdate
-


# Master.beginUpdate


## Синтаксис


beginUpdate ();


## Описание


Метод beginUpdate начинает обновление мастера.


## Комментарии


Метод используется вместе с методом [Master.endUpdate](Master.endUpdate.htm). Если перед перерисовкой мастера вызвать метод beginUpdate, то перерисовка будет применяться только после вызова [Master.endUpdate](Master.endUpdate.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента Master с наименованием «master». Добавим кнопки «Begin update» и «End update»:


        var butBegin = new PP.Ui.Button(
        {
            Content: "Begin update",
            ParentNode: document.body,
            Click: function ()
            {
                master.beginUpdate();
                master.addNavItem(new PP.Ui.NavigationItem(
                {
                    Title: "New Item"
                }))
            }
        });
        var butEnd = new PP.Ui.Button(
        {
            Content: "End update",
            ParentNode: document.body,
            Click: function ()
            {
                master.endUpdate();
            }
        });

После выполнения примера при нажатии на кнопку «Begin update» не будет осуществляться перерисовка компонента. При нажатии на кнопку «End update» в компонент будет добавлена новая панель с заголовком «New item».


См. также:


[Master](Master.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
