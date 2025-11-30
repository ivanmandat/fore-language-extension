# TabControl.AfterAddItem

TabControl.AfterAddItem
-


# TabControl.AfterAddItem


## Синтаксис


AfterAddItem: function (sender, args: PP.TabControlArgs);


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие AfterAddItem наступает
 после добавления в компонент новой вкладки.


## Комментарии


Событие наступает при использовании метода [addItem](TabControl.addItem.htm)
 и при добавлении вкладок с использованием [специальной
 вкладки со знаком «+»](TabControl.IsAddTabButtonVisible.htm).


## Пример


Для выполнения примера подключите библиотеку компонентов PP.js и таблицы
 визуальных стилей PP.css. Создадим компонент [TabControl](../../Components/TabControl/TabControl.htm).
 Добавим обработчик события AfterAddItem:


//Создаем компонент TabControl:
var tabcontrol = new PP.Ui.TabControl({
    //Идентификатор для тега div
    ParentNode: document.getElementById("tabcont1"),
    Width: 300,
    Height: 200,
    //Путь к папке с изображениями:
    ImagePath: "img"
    });
    //Добавляем вкладку в компонент TabControl:
    tabcontrol.addItem(new PP.Ui.TabItem({ Position: PP.LTRB.Top, Caption: "Вкладка"}));
    //Добавляем обработчик события AfterAddItem:
    tabcontrol.AfterAddItem.add(onAfterAddItem);
    //Обработчик события AfterAddItem:
    function onAfterAddItem(sender, args) {
    alert("Вкладка " + args.Item.getCaption() + " добавлена");
;}

После выполнения примера на html-странице будет размещен компонент [TabControl](../../Components/TabControl/TabControl.htm).
 После добавления новой вкладки на экран будет выводиться сообщение «Вкладка
 (порядковый номер) добавлена».


См. также:


[TabControl](TabControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
