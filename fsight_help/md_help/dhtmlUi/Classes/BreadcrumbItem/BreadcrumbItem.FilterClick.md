# BreadcrumbItem.FilterClick

BreadcrumbItem.FilterClick
-


# BreadcrumbItem.FilterClick


## Синтаксис


FilterClick: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие FilterClick наступает при нажатии на [кнопку фильтрации](BreadcrumbItem.FilterButton.htm).


## Комментарии


Событие FilterClick наступает при нажатии на кнопку фильтрации конкретного элемента. Событие нажатия кнопки фильтрации для любого из элементов - [Breadcrumb.ItemFilterClick](../Breadcrumb/Breadcrumb.ItemFilterClick.htm).


## Пример


Для выполнения примера [создайте компонент Breadcrumb](../../Components/Breadcrumb/example_Breadcrumb.htm) с [коллекцией дочерних элементов](../BreadcrumbItemsList/BreadcrumbItemsList.htm). Добавьте обработчик события FilterClick:


        var item = bread.getItems().getItem(0);


        item.FilterClick.add(function (sender, args) {


            item._FilterButton.dispose();


        });


После выполнения примера при нажатии на кнопку ![](../../Components/Breadcrumb/bread8.gif) первого элемента [коллекции](../BreadcrumbItemsList/BreadcrumbItemsList.htm) данная кнопка будет удалена.


См. также:


[BreadcrumbItem](BreadcrumbItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
