# Введение: Сборка Dimensions

Введение: Сборка Dimensions
-


# Введение в сборку Dimensions


В данном разделе представлено описание сборки Dimensions,
 содержащей средства для работы со справочниками репозитория.


Назначение справочников - объединение данных, хранящихся в [реляционных источниках данных](KeDb.chm::/KeDb_Introduction.htm),
 по определенной иерархической зависимости. Справочники используются при
 создании некоторых видов кубов, также могут применяться в различных элементах
 управления и параметрах объектов.


Основными интерфейсами сборки Dimensions
 являются:


	- [IDimensionModel](../interface/IDimensionModel/IDimensionModel.htm)
	 - интерфейс, содержащий свойства для доступа к базовым свойствам структуры
	 любого справочника.


	- [ICalendarDimension](../interface/ICalendarDimension/ICalendarDimension.htm)
	 - интерфейс, содержащий свойства и методы для работы со структурой
	 календарного справочника.


	- [IStandardDimension](../interface/IStandardDimension/IStandardDimension.htm)
	 - интерфейс, содержащий свойства и методы для работы со структурой
	 табличного справочника.


	- [IUserDimension](../interface/IUserDimension/IUserDimension.htm)
	 - интерфейс, содержащий свойства и методы для работы со структурой
	 вычисляемого справочника.


	- [ICustomDimension](../interface/ICustomDimension/ICustomDimension.htm)
	 - интерфейс, содержащий свойства и методы для работы со структурой
	 конструируемого справочника.


Интерфейсы для работы с открытыми объектами:


	- [ICalendarDimInstance](../interface/ICalendarDimInstance/ICalendarDimInstance.htm)
	 - интерфейс, содержащий методы для работы с иерархией элементов в
	 календарном справочнике.


	- [IDimInstance](../interface/IDimInstance/IDimInstance.htm)
	 - интерфейс, содержащий свойства и методы для доступа к данным справочников.


Более подробно работа со справочниками рассмотрена в следующих подразделах:


	- [Структура
	 справочников](Dimensions/KeDims_StructureDimensions.htm)


	- [Работа
	 с данными справочников](Instance/KeDims_Instance.htm)


	- [Дополнительные
	 объекты справочников](Additional/KeDims_AdditionalObject.htm)


	- [Настройка
	 прав доступа к элементам справочника](Access/KeDims_Access_Elements.htm)


Примеры:


[Примеры реализации различных задач
 с использованием сборки Dimensions](../Samples/KeDims_Sample.htm)


Дополнительные
 сведения:


[Интерфейсы сборки Dimensions](../interface/KeDims_Interface.htm)
 | [Перечисления
 сборки Dimensions](../Enums/KeDims_Enums.htm)
 | [Классы
 сборки Dimensions](../Class/KeDims_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
