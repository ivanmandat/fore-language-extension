# IEaxGrid.IsRangeDrillable

IEaxGrid.IsRangeDrillable
-


# IEaxGrid.IsRangeDrillable


## Синтаксис


IsRangeDrillable(Range: [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm);
 [DrillType: [EaxDrillType](../../Enums/EaxDrillType.htm) =
 1]): Boolean;


## Параметры


Range. Диапазон ячеек таблицы;


DrillType. Способ детализации
 данных, на возможность применения которого необходимо осуществить проверку.


## Описание


Свойство IsRangeDrillable возвращает
 признак возможности осуществить детализацию данных для указанного диапазона
 ячеек таблицы.


## Комментарии


В качестве значений параметра Range
 необходимо передать диапазон ячеек, расположенных в шапке, боковике или
 ячейки с данными таблицы. Если по одному или нескольким измерениям шапки/боковика,
 которым соответствует диапазон, можно осуществить детализацию данных,
 то свойство вернёт значение True,
 иначе - False.


## Пример


Использование свойства приведено в примере для [IEaxGrid.DrillRange](IEaxGrid.DrillRange.htm).


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
