# Конструктор BreadcrumbItem

Конструктор BreadcrumbItem
-


# Конструктор BreadcrumbItem


## Синтаксис


PP.Ui.BreadcrumbItem(settings);


## Параметры


settings. JSON-объект со значениями свойств компонента.


## Описание


Конструктор BreadcrumbItem создает экземпляр класса [BreadcrumbItem](BreadcrumbItem.htm).


## Пример


Для выполнения примера на html-странице в теге HEAD добавьте ссылки на библиотеку PP.js и визуальные стили PP.css. Создадим компонент [Breadcrumb](../Breadcrumb/Breadcrumb.htm) и добавим коллекцию его дочерних элементов:


//Создаем компонент Breadcrumb


var bread = new PP.Ui.Breadcrumb({


    ParentNode: document.getElementById("bc1"),


    Width: 400


});


//Создаем коллекцию элементов компонента Breadcrumb


var items = new PP.Ui.BreadcrumbItemsList(bread);


//Создаем элементы компонента Breadcrumb


var item1 = new PP.Ui.BreadcrumbItem({


    Content: "Элемент1"


});


var item2 = new PP.Ui.BreadcrumbItem({


    Content: "Элемент2"


});


var item3 = new PP.Ui.BreadcrumbItem({


    Content: "Элемент3"


});


//Добавляем элемент в коллекцию:


items.add(item3);


//Добавляем элемент на первое место в коллекции


items.insert(item1, 0);


//Добавляем элемент в позицию перед элементом с наименование «item3»


items.insertBefore(item2, item3);


//Устанавливаем коллекцию элементов для компонента


bread._Items = items;


После выполнения примера на html-страницу будет добавлен компонент [Breadcrumb](../../Components/Breadcrumb/Breadcrumb.htm). Будет создана коллекция, состоящая из трех элементов. Выбор элементов коллекции осуществляется из меню, которое раскрывается при нажатии на [кнопку добавления элементов](../Breadcrumb/Breadcrumb.StartMenuButton.htm):


![](../../Components/Breadcrumb/bread2.gif)


См. также:


[BreadcrumbItem](BreadcrumbItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
