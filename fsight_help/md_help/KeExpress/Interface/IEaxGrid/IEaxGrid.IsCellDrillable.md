# IEaxGrid.IsCellDrillable

IEaxGrid.IsCellDrillable
-


# IEaxGrid.IsCellDrillable


## Синтаксис


IsCellDrillable(Row: Integer; Column: Integer; DrillType:
 [EaxDrillType](../../Enums/EaxDrillType.htm)): Boolean;


## Параметры


Row. Индекс строки, в которой
 расположена ячейка;


Column. Индекс столбца, в котором
 расположена ячейка;


DrillType. Способ детализации
 данных, на возможность применения которого необходимо осуществить проверку.


## Описание


Свойство IsCellDrillable возвращает
 признак возможности осуществить детализацию данных в указанной ячейке
 таблицы.


## Комментарии


В качестве значений параметров Row
 и Column необходимо передать
 координаты одной из ячеек, расположенной в шапке, боковике или ячейки
 с данными таблицы. Если по одному или нескольким измерениям шапки/боковика,
 которым соответствует ячейка, можно осуществить детализацию данных, то
 свойство вернёт значение True,
 иначе - False.


## Пример


Использование свойства приведено в примере для [IEaxGrid.DrillCell](IEaxGrid.DrillCell.htm).


См. также:


[IEaxGrid](IEaxGrid.htm)
 | [IEaxGrid.IsRangeDrillable](IEaxGrid.IsRangeDrillable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
