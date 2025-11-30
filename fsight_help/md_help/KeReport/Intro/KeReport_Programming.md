# Общие принципы программирования с использованием сборки Report

Общие принципы программирования с использованием сборки Report
-


# Общие принципы программирования
 с использованием сборки Report


Сборка Report предназначена
 для работы с регламентными отчетами. Программирование на Fore с
 использованием данной сборки заключается в последовательном создании/открытии
 и настройке отчета.


Процесс работы с регламентным отчетом состоит из следующих этапов:


![](Process.gif)

[


Для создания отчета используйте метод IMetabase.CreateObject](KeReport_Programming_Source.htm).


Для открытия отчета:


	- в режиме просмотра используйте метод [IMetabaseObjectDescriptor.Open](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm);


	- в режиме редактирования используйте метод [IMetabaseObjectDescriptor.Edit](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Edit.htm).


После создания или открытия существующего отчета доступны следующие
 действия:


	- [выбор источника данных
	 отчета;](KeReport_Programming_Source.htm)


	- [настройка среза
	 данных](KeReport_Programming_DataArea.htm), [области данных](KeReport_Programming_DataArea.htm),
	 [аналитической области
	 данных](KeReport_Programming_DataArea.htm);


	- настройка [стилевого
	 оформления области данных](KeReport_Programming_FormatConditions.htm), [элементов
	 управления](KeReport_Programming_Controls.htm) и [объектов
	 отчета](KeReport_Programming_Objects.htm);


	- [настройка параметров
	 страницы и экспорт отчета](KeReport_Programming_PageSettings.htm).


См. также:


[Введение](../KeReport_Introduction.htm)
 | [Интерфейсы сборки Report](../Interface/KeReport_Interface.htm)
 | [Классы сборки Report](../Class/KeReport_Classes.htm) | [Перечисления сборки Report](../Enums/KeReport_Enums.htm)
 | [Примеры](../Samples/KeReport_Example.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
