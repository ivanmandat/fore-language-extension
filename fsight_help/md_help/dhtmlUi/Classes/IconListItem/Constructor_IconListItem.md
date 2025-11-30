# Конструктор IconListItem

Конструктор IconListItem
-


# Конструктор IconListItem


## Синтаксис


PP.Ui.IconListItem (settings);


## Параметры


settings. JSON объект со значениями
 свойств компонента.


## Описание


Конструктор IconListItem создает
 экземпляр компонента [IconListItem](../../Components/IconListItem/IconListItem.htm).


## Пример


Для выполнения примера подключите к html-странице ссылки на библиотеку
 PP.js и таблицы визуальных стилей PP.css. Создадим [список](dhtmlList.chm::/components/listbox/listbox.htm),
 состоящий из пиктограмм. Для этого необходимо, чтобы на одном уровне с
 html-страницей, на которой будет размещен список, находился файл с наименованием
 «1.png». Данный файл содержит набор пиктограмм, который выглядит следующим
 образом:


![](IconListItem1.gif)


Ссылка на этот файл и установленные размеры пиктограмм будут содержаться
 в параметрах невизуального компонента [ImageList](../../Components/ImageList/ImageList.htm).


Каждая пиктограмма будет помещаться в отдельном элементе списка - компоненте
 [IconListItem](../../Components/IconListItem/IconListItem.htm).
 Поэтому нам понадобится создать 5 экземпляров компонента [IconListItem](../../Components/IconListItem/IconListItem.htm).


<script type="text/javascript">


//Создаем компонент ImageList


var imagelist2 = new PP.[ImageList](dhtmlCommon.chm::/Classes/imagelist/imagelist.htm)({


        Source:"1.png",


        IconHeight:
 32,


        IconWidth:
 32});


var listbox2 = new PP.Ui.ListBox({//Создаем
 компонент ListBox


        ParentNode:
 document.getElementById("example2"),


        ImageList:
 imagelist2,


        Orientation:
 1//Определяем, что список будет горизонтальным.


     });


//Создаем компоненты IconListItem:


var ILI = new PP.Ui.IconListItem({


        Selected:
 true,//Первый компонент списка будет выделен.


        Content:
 "IconListItem 0"


    });


var ILI1 = new PP.Ui.IconListItem({


        Content:
 "IconListItem 1"


    });


var ILI2 = new PP.Ui.IconListItem({


        Content:
 "IconListItem 2"


    });


var ILI3 = new PP.Ui.IconListItem({


        Content:
 "IconListItem 3"


    });


    var ILI4 = new PP.Ui.IconListItem({


        Content:
 "IconListItem 4"


    });


//Добавляем созданные элементы
 в список:


listbox2.addItem(ILI);


listbox2.addItem(ILI1);


listbox2.addItem(ILI2);


listbox2.addItem(ILI3);


listbox2.addItem(ILI4);


//Определяем индексы строк
 и столбцов, в которых будут помещаться пиктограммы, а также высоту и ширину
 элементов списка:


var a = listbox2.getItems();


    for (var i = 0; i < a.length;
 i++) {


         a[i].setColumnIndex(0);


         a[i].setRowIndex(i);


         a[i].setHeight(36);


         a[i].setWidth(a[i]
 instanceof PP.Ui.IconListItem ? 36 : 150);


    }


</script>


После выполнения примера на html-странице будет размещен список, имеющий
 следующий вид:


![](IconListItem2.gif)


Другой вариант кода для размещения этого списка представлен в описании
 свойства [ListBox.Orientation](dhtmlList.chm::/Classes/listbox/listbox.orientation.htm).


См. также:


[IconListItem](IconListItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
