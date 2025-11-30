# MetaAttributeBreadCrumbView.AttributeSortChanged

MetaAttributeBreadCrumbView.AttributeSortChanged
-


# MetaAttributeBreadCrumbView.AttributeSortChanged


## Синтаксис


AttributeSortChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие AttributeSortChanged наступает после изменения сортировки в атрибуте.


## Пример


Для выполнения примера необходимо создать компонент [MetaAttributeBreadCrumb](../../../Components/TimeSeries/MetaAttributeBreadCrumb/MetaAttributeBreadCrumb.htm) с наименованием «metaAttributeBreadCrumb» (см. «[Пример создания компонента MetaAttributeBreadCrumb](../../../Components/TimeSeries/MetaAttributeBreadCrumb/Example_MetaAttributeBreadCrumb.htm)») и в обработчике события открытия документа добавить следующий код:


metaAttributeBreadCrumb.AttributeSortChanged.add(onDummyActionFactory("Сортировка в атрибуте была изменена"));

В результате выполнения примера будет добавлен обработчик события AttributeSortChanged. Для генерации события нужно изменить сортировку в атрибуте события, после чего в консоль браузера будет выведено соответствующее сообщение.


См. также:


[MetaAttributeBreadCrumbView](MetaAttributeBreadCrumbView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
