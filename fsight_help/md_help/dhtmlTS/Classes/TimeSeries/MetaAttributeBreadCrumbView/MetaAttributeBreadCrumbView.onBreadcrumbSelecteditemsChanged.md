# MetaAttributeBreadCrumbView.onBreadcrumbSelecteditemsChanged

MetaAttributeBreadCrumbView.onBreadcrumbSelecteditemsChanged
-


# MetaAttributeBreadCrumbView.onBreadcrumbSelecteditemsChanged


## Синтаксис


onBreadcrumbSelecteditemsChanged:(sender, args);


## Параметры


sender. Компонент вызвавший событие;


args. Аргументы события.


## Описание


Метод onBreadcrumbSelectedltemsChanged создает обработчик события изменения выделенных элементов в навигационной цепочке.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами (см. «[Пример создания компонента MetaAttributeBreadCrumb](../../../Components/TimeSeries/MetaAttributeBreadCrumb/Example_MetaAttributeBreadCrumb.htm)») и в обработчике события открытия документа добавить следующий код:


console.log("Создаем обработчик события изменения выделенных элементов в навигационной цепочке");
console.log(metaAttributeBreadCrumb.onBreadcrumbSelectedltemsChanged());

После выполнения примера будет создан обработчик события изменения выделенных элементов в навигационной цепочке.


См. также:


[MetaAttributeBreadCrumbView](MetaAttributeBreadCrumbView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
