# Breadcrumb.ItemFilterClick

Breadcrumb.ItemFilterClick
-


# Breadcrumb.ItemFilterClick


## Синтаксис


ItemFilterClick: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ItemFilterClick наступает при нажатии на кнопку фильтрации.


## Комментарии


Событие ItemFilterClick наступает при нажатии на кнопку фильтрации любого из элементов. Событие нажатия кнопки фильтрации для конкретного элемента - [BreadcrumbItem.FilterClick](../BreadcrumbItem/BreadcrumbItem.FilterClick.htm).


## Пример


Для выполнения примера [создайте компонент Breadcrumb](../../Components/Breadcrumb/example_Breadcrumb.htm) с [коллекцией дочерних элементов](../BreadcrumbItemsList/BreadcrumbItemsList.htm). Добавьте обработчик события ItemFilterClick:


     bread.ItemFilterClick.add(function (sender, args) {


           bread.setIsRTL(true);


     });


После выполнения примера при нажатии на кнопку любого из элементов компонента [Breadcrumb](../../Components/Breadcrumb/Breadcrumb.htm) элементы компонента будут располагаться справа налево.


См. также:


[Breadcrumb](Breadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
