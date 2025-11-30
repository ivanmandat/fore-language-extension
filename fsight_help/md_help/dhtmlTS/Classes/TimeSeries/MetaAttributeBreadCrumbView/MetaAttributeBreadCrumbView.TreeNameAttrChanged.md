# MetaAttributeBreadCrumbView.TreeNameAttrChanged

MetaAttributeBreadCrumbView.TreeNameAttrChanged
-


# MetaAttributeBreadCrumbView.TreeNameAttrChanged


## Синтаксис


TreeNameAttrChanged : function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие TreeNameAttrChanged наступает после изменения типа наименования уровней элементов измерения.


## Пример


Для выполнения примера необходимо создать компонент [MetaAttributeBreadCrumb](../../../Components/TimeSeries/MetaAttributeBreadCrumb/Example_MetaAttributeBreadCrumb.htm) с наименованием «metaAttributeBreadCrumb» и в обработчике события открытия документа добавить следующий код:


metaAttributeBreadCrumb.TreeNameAttrChanged.add(onDummyActionFactory("Произошло событие изменения атрибута"));

В результате выполнения примера будет добавлен обработчик события TreeNameAttrChanged. Для генерации события нужно выбрать новый тип наименования уровней у одного из элементов измерения (команда контекстного меню для значения атрибута «Наименование уровней»), после чего в консоль браузера будет выведено соответствующее сообщение.


См. также:


[MetaAttributeBreadCrumbView](MetaAttributeBreadCrumbView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
