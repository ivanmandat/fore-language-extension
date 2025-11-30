# IEaxRangeCellStyles.Add

IEaxRangeCellStyles.Add
-


# IEaxRangeCellStyles.Add


## Синтаксис


Add(Range: [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm);
 Style:[ITabCellStyle](TabSheet.chm::/Interface/ITabCellStyle/ITabCellStyle.htm));


## Параметры


Range. Диапазон, к которому
 применяется стиль;


Style. Добавляемый стиль.


## Описание


Метод Add добавляет указанный
 стиль в коллекцию.


## Комментарии


Если параметр Range и/или Style имеют значение Null,
 то добавления стиля в коллекцию не происходит.


После добавления стиля значение [IEaxRangeCellStyles.Count](IEaxRangeCellStyles.Count.htm)
 увеличивается на единицу.


## Пример


Использование метода приведено в примере для [IEaxTableStyle.RangeCellStyles](../IEaxTableStyle/IEaxTableStyle.RangeCellStyles.htm).


См. также:


[IEaxRangeCellStyles](IEaxRangeCellStyles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
