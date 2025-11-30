# TabControl.ItemMoved

TabControl.ItemMoved
-


# TabControl.ItemMoved


## Синтаксис


ItemMoved: function (sender, args:  PP.TabControlArgs);


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие ItemMoved наступает
 после перемещения вкладки.


## Комментарии


Вкладки перемещаются при помощи механизма Drag&Drop


Событие актуально, если для свойства [TabControl.DragDropEnabled](TabControl.DragDropEnabled.htm)
 установлено значение true.


## Пример


Для выполнения примера подключите библиотеку компонентов PP.js и таблицы
 визуальных стилей PP.css. Создайте компонент [TabControl](../../Components/TabControl/TabControl.htm)
 и добавьте обработчик события ItemMoved:


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

    tabcontrol.addItem(new PP.Ui.TabItem({ Position:
 PP.LTRB.Top, Caption: "First tab", Content: "Content 1"
 }));

    tabcontrol.addItem(new PP.Ui.TabItem({ Position:
 PP.LTRB.Top, Caption: "Second tab", Content: "Content 2"
 }));

    //Добавляем обработчик
 события ItemMoved

    tabcontrol.ItemMoved.add(function (sender, args)
 {

            args.Item.setCaption(args.Item.getOrderNumber().toString());

    });

</script>


После выполнения примера на html-странице будет размещен компонент [TabControl](../../Components/TabControl/TabControl.htm),
 содержащий две вкладки с заголовками «First tab» и «Second tab». После
 перемещения вкладки в качестве заголовка будет установлен ее порядковый
 номер.


См. также:


[TabControl](TabControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
