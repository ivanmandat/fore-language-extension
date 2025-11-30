# Breadcrumb.AddItem

Breadcrumb.AddItem
-


# Breadcrumb.AddItem


## Синтаксис


AddItem: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие AddItem наступает во время добавления элемента в компонент [Breadcrumb](../../Components/Breadcrumb/Breadcrumb.htm).


## Пример


Для выполнения примера [создайте компонент Breadcrumb](../../Components/Breadcrumb/example_Breadcrumb.htm) с коллекцией дочерних элементов [BreadcrumbItem](../BreadcrumbItem/BreadcrumbItem.htm). Добавьте обработчики событий AddItem и [BeforeAddItem](Breadcrumb.BeforeAddItem.htm):


        bread.BeforeAddItem.add(function (sender, args) {


            console.log("BeforeAddItem");


        });


        bread.AddItem.add(function (sender, args) {


            alert("AddItem");


        });


После выполнения примера перед добавлением элемента, то есть при выборе элемента из раскрывающегося списка, который отображается при нажатии на кнопку ![](../../Components/Breadcrumb/bread4.gif), в консоль браузера будет выведено сообщение «BeforeAddItem». Во время добавления элемента на экран будет выведено сообщение «AddItem».


См. также:


[Breadcrumb](Breadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
