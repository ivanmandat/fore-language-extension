# EaxGridView.DataChanged

EaxGridView.DataChanged
-


# EaxGridView.DataChanged


## Синтаксис


DataChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.
 Доступные аргументы - объект класса [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm),
 содержащий следующие свойства: PropertyName -
 наименование свойства, Metadata - метаданные (Data - признак наличия измененных
 данных , before - данные до изменения, after - данные после изменения),
 TypeUpdateData - тип обновляемых данных.


## Описание


Событие DataChanged наступает
 после изменения данных в ячейках таблицы рабочей области экспресс-отчета.


## Пример


Пример использования события приведен на странице «[Пример
 создания компонента EaxGrid](../../../Components/Express/EaxGrid/EaxGrid_Example.htm)».


См. также:


[EaxGridView](EaxGridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
