# MasterPanel.GroupName

MasterPanel.GroupName
-


# MasterPanel.GroupName


## Синтаксис


GroupName: String;


## Описание


Свойство GroupName определяет
 имя группы панелей мастера.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [EaxDimBarMaster](dhtmlExpress.chm::/Components/Express/EaxDimBarMaster/EaxDimBarMaster.htm)
 с наименованием «dimBarMaster» (см. «[Пример
 создания компонента EaxDimBarMaster](dhtmlExpress.chm::/Components/Express/EaxDimBarMaster/EaxDimBarMaster_Example.htm)»). В теге BODY добавьте элементы
 DIV с идентификаторами «but1», «but2», «but3» и «but4». Добавим кнопки
 для создания группы панелей, скрытия и отображения этой группы:


var but1 = new PP.Ui.Button( //для первой и второй панели мастера установим общее имя группы
{
    ParentNode: "but1",
    Content: "Создать группу",
    Click: function ()
    {
        var panel1 = dimBarMaster.getItems()[0];
        var panel2 = dimBarMaster.getItems()[1];
        panel1.setGroupName("gr1");
        panel2.setGroupName("gr1");
        console.log("Имя активной группы: " + dimBarMaster.getActiveGroupName());
    }
});
var but2 = new PP.Ui.Button( //скрыть группу "gr1"
{
    ParentNode: "but3",
    Content: "Скрыть группу",
    Click: function ()
    {
        dimBarMaster.hideGroup("gr1")
    }
});
var but3 = new PP.Ui.Button( //показать группу "gr1"
{
    ParentNode: "but3",
    Content: "Показать группу",
    Click: function ()
    {
        dimBarMaster.showGroup("gr1")
    }
});
var but4 = new PP.Ui.Button(//показать только группу "gr1"
{
    ParentNode: "but4",
    Content: "Показать одну группу",
    Click: function ()
    {
        dimBarMaster.showOnlyGroup("gr1")
    }
});

Примечание.
 Данный код нужно добавить в тело функции Ready().


После выполнения примера при нажатии на кнопку «Создать группу» для
 вкладок мастера с индексами 0 и 1 будет установлено общее имя группы,
 в консоль будет выведено имя активной группы. При нажатии на кнопку «Скрыть
 группу» будут скрыты первая и вторая панели мастера. При нажатии на кнопку
 «Показать группу» эти панели будут отображены. При нажатии на кнопку «Показать
 одну группу» будут скрыты все вкладки, кроме вкладок группы «gr1».


См. также:


[MasterPanel](MasterPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
