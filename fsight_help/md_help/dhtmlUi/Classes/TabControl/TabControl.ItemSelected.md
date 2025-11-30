# TabControl.ItemSelected

TabControl.ItemSelected
-


# TabControl.ItemSelected


## Синтаксис


ItemSelected: function (sender, args: PP.TabControlArgs);


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие ItemSelected наступает
 при выборе вкладки.


## Комментарии


Одновременно в компоненте может быть выбрана (открыта) одна вкладка.
 Вкладка открывается при нажатии на заголовок. Вкладка закрывается при
 выборе другой вкладки.


## Пример


Для выполнения примера подключите библиотеку компонентов PP.js и таблицы
 визуальных стилей PP.css. Создадим компонент [TabControl](../../Components/TabControl/TabControl.htm).
 Добавим обработчик события ItemSelected:


<script type="text/javascript">

    //Создаем компонент
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

    //Создаем вкладку
 - компонент TabItem

    var tab = new PP.Ui.TabItem({ Caption: "Tab",
 Content: "<div><div style='text-align:center; padding-top:70px'>Content
 Left</div></div>", Position: PP.LTRB.Left });

    //Добавляем вкладку
 к компоненту TabControl

    tabcontrol.addItem(tab);

    //Добавляем обработчик
 события ItemSelected

    tabcontrol.ItemSelected.add(function(sender, args)
 {

            tab.getParent().addItem(new
 PP.Ui.TabItem({ Position: PP.LTRB.Right, Caption: "Tab1" }));

        });

</script>


После выполнения примера на html-странице будет создан компонент [TabControl](TabControl.htm), состоящий
 из одной вкладки, расположенной слева. При выборе данной вкладки, т.е.
 при нажатии на заголовок, справа будет добавлена вкладка с заголовком
 «Tab1».


См. также:


[TabControl](TabControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
