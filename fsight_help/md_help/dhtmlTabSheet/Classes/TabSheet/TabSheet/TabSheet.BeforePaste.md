# TabSheet.BeforePaste

TabSheet.BeforePaste
-


**


# TabSheet.BeforePaste


## Синтаксис


BeforePaste: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы: Cancel - признак отмены операции вставки, Data - вставляемые данные (TL - верхняя левая ячейка диапазона, BR - нижняя правая ячейка диапазона, Cells - массив вставляемых ячеек), StartCoord - начальная координата вставляемых данных, являющаяся объектом типа PP.Ui.[TabSheetCoord](../TabSheetCoord/TabSheetCoord.htm).


## Описание


Событие BeforePaste** наступает перед вставкой текста в ячейку таблицы.


## Пример


Пример использования метода приведён на странице описания свойства [TabSheetSettings.EnableCopyPaste](../../../Interfaces/TabSheetSettings/TabSheetSettings.EnableCopyPaste.htm).


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
