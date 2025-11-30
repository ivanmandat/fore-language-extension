# Конструктор StackPanel

Конструктор StackPanel
-


# Конструктор StackPanel


## Синтаксис


StackPanel (settings)


## Параметры


settings. JSON-объект со значениями свойств компонента.


## Описание


Конструктор StackPanel создает экземпляр компонента StackPanel.


## Пример


Для выполнения примера добавьте ссылки на файлы PP.js и PP.css. В теге BODY добавьте элементы DIV с идентификаторами «stPan1» и «but1». Создадим компонент [StackPanel](../../Components/StackPanel/StackPanel.htm), панели которого будут добавляться при нажатии на кнопку «Добавить»:


        var stackPanel = new PP.Ui.StackPanel(
        {
            ParentNode: document.getElementById("stPan1"),
            Width: 500,
            Height: 200,
            MinControlSize: 50
        });
        var stacks = [];
        var but1 = new PP.Ui.Button(
        {
            Content: "Добавить",
            ParentNode: document.getElementById("but1"),
            Click: add
        })
            function add()
            {
                var newItem = new PP.Ui.Button(
                {
                    Content: "Панель: ",
                    ResourceKey: "StackPanel"
                })
                newItem.setContent(newItem.getContent() + stacks.length);
                stackPanel.add(newItem);
                stacks.push(newItem);
            }

После выполнения примера на странице будет размещена кнопка «Добавить», при нажатии на которую будут добавляться элементы в компонент [StackPanel](../../Components/StackPanel/StackPanel.htm):


![](../../Components/StackPanel/StackPanel_vertical.gif)


См. также:


[StackPanel](StackPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
