# MetaAttributeBreadCrumbView.AttributeFilterChanged

MetaAttributeBreadCrumbView.AttributeFilterChanged
-


# MetaAttributeBreadCrumbView.AttributeFilterChanged


## Синтаксис


AttributeFilterChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие AttributeFilterChanged наступает после включения/отключения фильтра в атрибуте.


## Пример


Для выполнения примера необходимо создать компонент [MetaAttributeBreadCrumb](../../../Components/TimeSeries/MetaAttributeBreadCrumb/MetaAttributeBreadCrumb.htm) с наименованием «metaAttributeBreadCrumb» (см. «[Пример создания компонента MetaAttributeBreadCrumb](../../../Components/TimeSeries/MetaAttributeBreadCrumb/Example_MetaAttributeBreadCrumb.htm)») и в обработчике события открытия документа добавить следующий код:


metaAttributeBreadCrumb.AttributeFilterChanged.add(onDummyActionFactory("Фильтр в атрибуте был включен/выключен"));

В результате выполнения примера будет добавлен обработчик события AttributeFilterChanged. Для генерации события нужно включить/отключить фильтр в атрибуте, после чего в консоль браузера будет выведено соответствующее сообщение.


См. также:


[MetaAttributeBreadCrumbView](MetaAttributeBreadCrumbView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
