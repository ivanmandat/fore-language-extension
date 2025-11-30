# TabControl.ItemDeselected

TabControl.ItemDeselected
-


# TabControl.ItemDeselected


## Синтаксис


ItemDeselected: function (sender, args: PP.[TabControlArgs](../TabControlArgs/TabControlArgs.htm));


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие ItemDeselected наступает
 при закрытии вкладки.


## Комментарии


Одновременно в компоненте может быть выбрана (открыта) одна вкладка.
 Вкладка открывается при нажатии по заголовку. Вкладка закрывается при
 выборе другой вкладки.


## Пример


Для выполнения примера подключите библиотеку компонентов PP.js и таблицы
 визуальных стилей PP.css. Создадим компонент [TabControl](../../Components/TabControl/TabControl.htm).
 Добавим обработчик события ItemDeselected:


//Создаем компонент TabControl:
var tabcontrol = new PP.Ui.TabControl({
    ParentNode: document.getElementById("tabcont1"),
    Width: 250,
    Height: 50,
    //Путь к папке с изображениями:
    ImagePath: "img"
});
//Добавляем вкладки в компонент TabControl:
tabcontrol.addItem(new PP.Ui.TabItem({
    Position: PP.LTRB.Top,
    Caption: "First tab",
    Content: "Content 1"
}));
tabcontrol.addItem(new PP.Ui.TabItem({
    Position: PP.LTRB.Top,
    Caption: "Second tab",
    Content: "Content 2"
}));
//Добавляем обработчик события ItemDeselected
tabcontrol.ItemDeselected.add(function (sender, args) {
    alert("The " + tabcontrol.getItems()[tabcontrol.getSelectedIndex()].getCaption() + " was closed");
});

После выполнения примера при закрытии вкладки будет выдаваться сообщение
 «The (заголовок закрытой вкладки) was closed».


См. также:


[TabControl](TabControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
