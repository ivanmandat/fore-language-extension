# MetaAttributeBreadCrumbView.DimSelectionChanged

MetaAttributeBreadCrumbView.DimSelectionChanged
-


# MetaAttributeBreadCrumbView.DimSelectionChanged


## Синтаксис


DimSelectionChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие DimSelectionChanged наступает после изменения отметки измерения на сервере.


## Пример


Для выполнения примера необходимо создать компонент [MetaAttributeBreadCrumb](../../../Components/TimeSeries/MetaAttributeBreadCrumb/MetaAttributeBreadCrumb.htm) с наименованием «metaAttributeBreadCrumb» (см. «[Пример создания компонента MetaAttributeBreadCrumb](../../../Components/TimeSeries/MetaAttributeBreadCrumb/Example_MetaAttributeBreadCrumb.htm)») и в обработчике события открытия документа добавить следующий код:


metaAttributeBreadCrumb.DimSelectionChanged.add(onDummyActionFactory("Отметка измерения на сервере была изменена"));

В результате выполнения примера будет добавлен обработчик события DimSelectionChanged. Для генерации события необходимо выбрать в раскрывающемся списке отметки измерений любой элемент, при этом в консоль браузера будет выведено соответствующее сообщение.


См. также:


[MetaAttributeBreadCrumbView](MetaAttributeBreadCrumbView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
