# Menu.ImageList

Menu.ImageList
-


# Menu.ImageList


## Синтаксис


ImageList: PP.[ImageList](dhtmlCommon.chm::/Classes/imagelist/imagelist.htm)


## Описание


Свойство ImageList устанавливает
 [спрайт](../../Components/ImageList/ImageList.htm) для меню.


## Комментарии


Спрайт - это набор изображений в одном графическом файле. Для того чтобы
 установить конкретное изображение из спрайта для элементов меню, нужно
 задать координаты [строки](../MenuItem/MenuItem.RowIndex.htm)
 и [столбца](../MenuItem/MenuItem.RowIndex.htm) данного изображения
 в спрайте.


## Пример


Для выполнения примера в теге HEAD подключите ссылки на библиотеку компонентов
 PP.js и табицы визуальных стилей PP.css. Далее приведен пример динамического
 создания компонента Menu, для элементов которого установлены изображения
 из спрайта «menu_icon.png«, который должен находиться в папке «img» корневого
 каталога:


<body>


<div id="but2"></div>


<script type="text/javascript">


    //кнопка
 для вызова меню


    var but2 = new PP.Ui.[Button](../Button/Button.htm)({ ParentNode: document.getElementById("but2"),
 Content: "Show menu" });


    //компонент
 [ImageList](../../Components/ImageList/ImageList.htm)


    var imageList = new PP.[ImageList](dhtmlCommon.chm::/Classes/imagelist/imagelist.htm)({


        Source:
 "img/menu_icon.png",


        IconHeight:
 17,


        IconWidth:
 17


    });


    //компонент
 [Menu](../../Components/Menu/Menu.htm)


    var menu1 = new PP.Ui.[Menu](Menu.htm)({


        ImageList:
 imageList,


        //Элементы
 меню:


        Items:
 [


                {
 [MenuHeader](../MenuHeader/MenuHeader.htm): {Content: "Main"}},


                {
 [MenuItem](../MenuItem/MenuItem.htm): { Content: "Olap",
 ColumnIndex: 0, RowIndex: 0, HotKey: "Ctrl+N", Id: "itemWithHotKey"}
 },


                {
 [MenuItem](../MenuItem/MenuItem.htm): { Content: "Report",
 ColumnIndex: 0, RowIndex: 1} },


                {
 [Separator](../Separator/Separator.htm): {}},


                {
 [MenuItem](../MenuItem/MenuItem.htm): { Content: "AdHoc",
 ColumnIndex: 0, RowIndex: 2} },


                {
 [MenuItem](../MenuItem/MenuItem.htm): { Content: "Time
 Series", ColumnIndex: 0, RowIndex: 3, Visible: false} }


               ]


    });


    //Событие
 нажатия на кнопку but2


    but2.Click.add(function
 (sender, args) { menu1.show(50, 50) })


</script>


</body>


После выполнения примера на html-странице будет размещена кнопка «Show
 menu», при нажатии на которую будет вызвано меню, состоящее из [заголовка](../MenuHeader/MenuHeader.htm)
 и четырех элементов (последний - [невидимый](../MenuItem/MenuItem.Visible.htm)).
 Между вторым и третьим пунктами меню установлен [разделитель](../Separator/Separator.htm).
 Для первого пункта меню задано [название
 «горячих клавиш»](../MenuItem/MenuItem.HotKey.htm) и идентификатор. Для каждого пункта меню установлено
 изображение из заданного спрайта:


![](../../Components/Menu/Menu8.gif)


См. также:


[Menu](Menu.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
