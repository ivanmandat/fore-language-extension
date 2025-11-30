# PrxSheetType

PrxSheetType
-


# PrxSheetType


## Описание


Перечисление PrxSheetType содержит
 типы листов регламентного отчета.


Используется следующими свойствами и методами:


	- [IPrxSheet.Type](../Interface/IPrxSheet/IPrxSheet.Type.htm);


	- [IPrxSheets.Add](../Interface/IPrxSheets/IPrxSheets.Add.htm);


	- [IPrxSheets.Insert](../Interface/IPrxSheets/IPrxSheets.Insert.htm);


	- [IPrxSheets.InsertAfter](../Interface/IPrxSheets/IPrxSheets.InsertAfter.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 1
		 Table. Таблица.


		 3
		 JsPlugin. Лист, сформированный
		 JS-плагином.


## Комментарии


Перечисление PrxSheetType используется
 при определении типа листа регламентного отчёта, а также для задания типа
 листа при его создании. Для работы с листом в зависимости от его типа
 применяются различные интерфейсы: [IPrxTable](../Interface/IPrxTable/IPrxTable.htm)
 для значения Table, [IPrxJsPlugin](../Interface/IPrxJsPlugin/IPrxJsPlugin.htm) для значения JsPlugin.


## Пример


Примеры использования приведены в описании методов [IPrxSheets.Add](../Interface/IPrxSheets/IPrxSheets.Add.htm)
 и [IPrxSheets.Item](../Interface/IPrxSheets/IPrxSheets.Item.htm).


См. также:


[Перечисления сборки Report](KeReport_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
