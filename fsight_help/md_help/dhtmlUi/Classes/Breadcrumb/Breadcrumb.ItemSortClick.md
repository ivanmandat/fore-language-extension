# Breadcrumb.ItemSortClick

Breadcrumb.ItemSortClick
-


# Breadcrumb.ItemSortClick


## Синтаксис


ItemSortClick: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ItemSortClick наступает при нажатии на кнопку сортировки.


## Пример


Для выполнения примера [создайте компонент Breadcrumb](../../Components/Breadcrumb/example_Breadcrumb.htm) с [коллекцией дочерних элементов](../BreadcrumbItemsList/BreadcrumbItemsList.htm). Добавьте обработчик события ItemSortClick:


        bread.ItemSortClick.add(function (sender, args) {


            items = bread.getItems();


            for (var i = 0; i < items.getCount(); i++) {


                items.getItem(i)._SortButton.setToolTip("Сортировка")


            }


        });


После выполнения примера при нажатии на кнопку ![](../../Components/Breadcrumb/bread9.gif) любого из элементов для всех кнопок сортировки будет добавлена всплывающая подсказка «Сортировка».


См. также:


[Breadcrumb](Breadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
