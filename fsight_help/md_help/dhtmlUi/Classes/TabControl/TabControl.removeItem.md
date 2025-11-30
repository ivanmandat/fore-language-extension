# TabControl.removeItem

TabControl.removeItem
-


# TabControl.removeItem


## Синтаксис


removeItem(value);


## Параметры


value. Индекс удаляемого элемента.


## Описание


Метод removeItem удаляет из
 компонента вкладку по ее индексу.


## Пример


Для выполнения примера подключите библиотеку компонентов PP.js и таблицы
 визуальных стилей PP.css. Создадим компонент [TabControl](../../Components/TabControl/TabControl.htm)
 и html-кнопку, при нажатии на которую будет удалена выделенная вкладка.


<body>

<div id="tabcont1"></div>

<!--Кнопка для удаления выделенной вкладки-->

<button onclick="tabcontrol.removeItem(tabcontrol.getSelectedIndex());">Remove
 selected</button>

<script type="text/javascript">

    // Создаем компонент
 TabControl:

    var tabcontrol = new PP.Ui.TabControl({

            //Идентификатор для тега div

            ParentNode:
 document.getElementById("tabcont1"),

            Width:
 300,

            Height:
 300,

            //Путь к папке с изображениями:

            ImagePath:
 "img"

        });

    //Добавляем вкладки:

    tabcontrol.addItem(new PP.Ui.TabItem({ Position:
 PP.LTRB.Top, Caption: "First tab", Content: "First tab
 content" }));

    tabcontrol.addItem(new PP.Ui.TabItem({ Position:
 PP.LTRB.Top, Caption: "Second tab", Content: "Second tab
 content" }));

</script>

</body>


После выполнения примера на html-странице будет размещен компонент [TabControl](../../Components/TabControl/TabControl.htm),
 состоящий из двух вкладок, и кнопка с надписью «Remove selected». При
 нажатии на кнопку будет удалена выделенная вкладка.


Примечание.
 Вкладка может быть удалена с помощью метода removeItem,
 если для нее установлено [содержимое](../Control/Control.Content.htm).


См. также:


[TabControl](TabControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
