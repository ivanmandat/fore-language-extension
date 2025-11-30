# IMsFormulaGenTermPoint.Coord

IMsFormulaGenTermPoint.Coord
-


# IMsFormulaGenTermPoint.Coord


## Синтаксис


Coord(Index: Integer): [IMatrixModelCoord](ForeSys.chm::/Interface/IMatrixModelCoord/IMatrixModelCoord.htm);


## Параметры


Index. Индекс значения, для
 которого необходимо получить матричную координату.


## Описание


Свойство Coord возвращает координату
 в матрице для значения с указанными индексом.


## Комментарии


Параметр Index принимает значение
 больше нуля, если значение терма формируется путём агрегации данных. Количество
 доступных значений возвращает свойство [IMsProblemCalculation.ValuesCount](IMsFormulaGenTermPoint.ValuesCount.htm).


## Пример


Использование свойства приведено в примере для [IMsProblemCalculation.GetFormulaInfo](../IMsProblemCalculation/IMsProblemCalculation.GetFormulaInfo.htm).


См. также:


[IMsFormulaGenTermPoint](IMsFormulaGenTermPoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
