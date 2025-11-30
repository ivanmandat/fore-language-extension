# Пример создания компонента ToolBar

Пример создания компонента ToolBar
-


# Пример создания компонента ToolBar


Для выполнения примера подключите библиотеку компонентов PP.js и таблицы визуальных стилей PP.css. Далее приведен javascript-код, при помощи которого создается компонент [ToolBar](ToolBar.htm). Необходимо наличие файла с наименованием «ui-icons_222222_256x240.png», содержащего набор пиктограмм для кнопок.


<script type="text/javascript">


//Создаем компонент  ImageList, содержащий набор изображений кнопок


    var imageList = new PP.ImageList();


    imageList.setSource("ui-icons_222222_256x240.png");


    imageList.setIconHeight(16);


    imageList.setIconWidth(16);


//Создаем компонент ToolBar - панель инструментов


    var toolBar = new PP.Ui.ToolBar({


        ParentNode: document.getElementById("toolB"),


        ImageList: imageList,


    });


//Кнопка с изображением


    var imgbtn = new PP.Ui.ToolBarButton({


        Parent: toolBar,


        Content: "Вырезать",


        ToolTip: "Вырезать",


        ColumnIndex: 7,


        RowIndex: 6,


        IsFlat: true//Плоская кнопка


    });


//Простая кнопка


    var simplebtn = new PP.Ui.ToolBarButton({


        Parent: toolBar,


        Content: "Копировать",


        ToolTip: "Копировать",


        IsFlat: false//Выпуклая кнопка


    });


//Разделитель


    var separator1 = new PP.Ui.ToolBarSeparator();


//Добавляем кнопки и разделитель на панель инстументов


    toolBar.addItem(imgbtn);


    toolBar.addItem(simplebtn);


    toolBar.insertItem(separator1, 1);


</script>


После выполнения примера на html-странице будет размещена панель инструментов с двумя кнопками:


![](ToolBar2.gif)


См. также:


[ToolBar](ToolBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
