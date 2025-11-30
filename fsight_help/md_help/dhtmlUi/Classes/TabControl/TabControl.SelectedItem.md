# TabControl.SelectedItem

TabControl.SelectedItem
-


# TabControl.SelectedItem


## Синтаксис


SelectedItem: [PP.TabItem](../TabItem/TabItem.htm);


## Описание


Свойство SelectedItem определяет
 выделенную вкладку.


## Комментарии


Одновременно в компоненте может быть выделена только одна вкладка. Выделить
 вкладку значит раскрыть её содержимое.


По умолчанию выделена первая вкладка.


Также вкладку можно выделить с помощью свойства [TabControl.SelectedIndex](TabControl.SelectedIndex.htm).


## Пример


Для выполнения примера подключите библиотеку компонентов PP.js и таблицы
 визуальных стилей PP.css. Создадим компонент [TabControl](../../Components/TabControl/TabControl.htm).


<script type="text/javascript">

    //Создаем компонент
 TabControl:

    var tabcontrol = new PP.Ui.TabControl({

            //Идентификатор для тега div

            ParentNode:
 document.getElementById("tabcont1"),

            Width:
 250,

            Height:
 50,

            //Путь к папке с изображениями:

            ImagePath:
 "img"

        });

    //Добавляем вкладки
 в компонент TabControl:

    tabcontrol.addItem(new PP.Ui.TabItem({Position:
 PP.LTRB.Top, Caption: "First tab"}));

    tabcontrol.addItem(new PP.Ui.TabItem({Position:
 PP.LTRB.Top, Caption: "Second tab"}));

    //Устанавливаем,
 что выделена вторая вкладка:

    tabcontrol.setSelectedItem(tabcontrol.getItems()[1]);

</script>


После выполнения примера на html-странице будет размещен компонент [TabControl](../../Components/TabControl/TabControl.htm),
 состоящий из двух вкладок. Вторая вкладка выделена.


См. также:


[TabControl](TabControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
