# EaxGridView.PropertyChanged

EaxGridView.PropertyChanged
-


# EaxGridView.PropertyChanged


## Синтаксис


PropertyChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы - объект класса [PP.Mb.Ui.PropertyChangedEventArgs](EaxGridView.PropertyChanged.htm), содержащий следующие свойства: PropertyName - наименование свойства, Metadata - метаданные (FixedRowCount - количество фиксированных строк, FixedColumnCount - количество фиксированных столбцов), TypeUpdateData - тип обновляемых данных.


## Описание


Событие PropertyChanged наступает после выбора пункта контекстного меню панели свойств экспресс-отчета.


## Пример


Пример использования события приведен на странице «[Пример создания компонента EaxGrid](../../../Components/Express/EaxGrid/EaxGrid_Example.htm)».


См. также:


[EaxGridView](EaxGridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
