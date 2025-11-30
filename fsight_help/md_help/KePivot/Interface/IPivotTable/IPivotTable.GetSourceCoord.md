# IPivotTable.GetSourceCoord

IPivotTable.GetSourceCoord
-


# IPivotTable.GetSourceCoord


## Синтаксис


GetSourceCoord(Row: Integer; Column: Integer;
Var SourceKey: Integer): [IMatrixCoord](KeMatrix.chm::/Interface/IMatrixCoord/IMatrixCoord.htm);


## Параметры


Row. Индекс строки;


Column. Индекс столбца;


SourceKey. Переменная, в которую
 будет помещён ключ источника.


## Описание


Метод GetSourceCoord возвращает
 координату в матрице с данными по индексу строки и столбца таблицы.


## Комментарии


В отличии от свойства [Coord](IPivotTable.Coord.htm),
 метод GetSourceCoord позволяет
 получить ключ источника при работе с таблицей, в которой могут быть данные
 из различных источников данных. Например, если таблица получена при работе
 с виртуальным кубом.


См. также:


[IPivotTable](IPivotTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
