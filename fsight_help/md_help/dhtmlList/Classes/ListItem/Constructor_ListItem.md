# Конструктор ListItem

Конструктор ListItem
-


# Конструктор ListItem


## Синтаксис


PP.Ui.ListItem(settings);


## Параметры


settings. JSON-объект со значениями свойств компонента.


## Описание


Конструктор ListItem создает экземпляр компонента [ListItem](../../Components/ListItem/ListItem.htm).


## Пример


Для выполнения примера подключите к html-странице ссылки на библиотеку PP.js и таблицы визуальных стилей PP.css. Создадим список (компонент [ListBox](../../Components/ListBox/ListBox.htm)), состоящий из трех элементов (компонентов [ListItem](../../Components/ListItem/ListItem.htm)):


<div id="LB"></div>


<script type="text/javascript">


    var listitem = new PP.Ui.ListItem({//1-ая строка


            Content: "Element1",


            RowIndex: 0,


            ColumnIndex: 0


        });


    var listitem1 = new PP.Ui.ListItem({//2-ая строка


            Content: "Element2",


            RowIndex: 1,


            ColumnIndex: 0,


            Selected: true//строка выделенная


        });


    var listitem2 = new PP.Ui.ListItem({//3-яя строка


            Content: "Element3",


            RowIndex: 2,


            ColumnIndex: 0,


            IsVisible: false//строка невидимая


        });


    var listbox = new PP.Ui.ListBox({ //Создаем список.


            ParentNode: document.getElementById("LB"),


            Width: 200


    });


//Добавляем элементы в список:


    listbox.addItem(listitem);


    listbox.addItem(listitem1);


    listbox.addItem(listitem2);


    listitem.getParent().setIsRTL(true);//Возвращаем родительский компонент и для него устанавливаем значение свойства IsRTL в true.


</script>


После выполнения примера на html-странице будет размещен компонент [ListBox](../../Components/ListBox/ListBox.htm), состоящий из трех элементов. Второй элемент является выделенным. Третий элемент - невидимый. Содержимое строк выравнено по правому краю.


См. также:


[ListItem](ListItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
