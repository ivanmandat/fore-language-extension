# TabSheet.BeforeCopy

TabSheet.BeforeCopy
-


**


# TabSheet.BeforeCopy


## Синтаксис


BeforeCopy: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы: Cancel - признак отмены операции копирования, PlaintText - текстовая строка с содержимым копируемого диапазона ячеек, Range - копируемый диапазон, являющийся объектом типа PP.Ui.[TabSheetRange](../TabSheetRange/TabSheetRange.htm).


## Описание


Событие BeforeCopy** наступает перед копированием содержимого диапазона ячеек таблицы.


## Пример


Пример использования метода приведён на странице описания свойства [TabSheetSettings.EnableCopyPaste](../../../Interfaces/TabSheetSettings/TabSheetSettings.EnableCopyPaste.htm).


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
