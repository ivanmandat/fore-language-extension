# ITabSheet.AdjustFormula

ITabSheet.AdjustFormula
-


# ITabSheet.AdjustFormula


## Синтаксис


AdjustFormula(Formula: String; SourceCell: [ITabRange](../ITabRange/ITabRange.htm); DestinationCell: [ITabRange](../ITabRange/ITabRange.htm)): String;


## Параметры


Formula — формула, которую необходимо преобразовать для ячейки DestinationCell;


SourceCell — ячейка, которая является базовой при корректировке.


DestinationCell — ячейка, относительно адреса которой, происходит коррекция.


## Описание


Метод AdjustFormula корректирует формулу так, чтобы ее источником стала ячейка DestinationCell.


## Комментарии


Для определения, будут ли вычисляться формулы в ячейках, используйте свойство [ITabSheet.EnableFormulas](ITabSheet.EnableFormulas.htm).


## Пример


Использование свойства приведено в примере для [ITabSheet.EnableFormulas](ITabSheet.EnableFormulas.htm).


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
