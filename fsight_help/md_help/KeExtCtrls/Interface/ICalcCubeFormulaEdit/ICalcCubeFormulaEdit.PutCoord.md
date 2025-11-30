# ICalcCubeFormulaEdit.PutCoord

ICalcCubeFormulaEdit.PutCoord
-


# ICalcCubeFormulaEdit.PutCoord


## Синтаксис


PutCoord(Coord: [ICalculatedCubeInstanceCoord](KeCubes.chm::/Interface/ICalculatedCubeInstanceCoord/ICalculatedCubeInstanceCoord.htm);
 [Position: Integer = -1]): Integer;


## Параметры


Coord. Координата куба, для
 которой необходимо создать терм в редакторе;


Position. Позиция в редакторе
 куда будет помещен терм. Номер позиции указывается в символах. По умолчанию
 передается значение «-1», при этом терм вставляется в конец выражения.


## Описание


Метод PutCoord позволяет поместить
 в редактор терм, соответствующий указанной координате куба и возвращает
 номер в коллекции термов компонента.


## Пример


Использование метода приведено в примере для [ICalcCubeFormulaEdit.PutCoord](ICalcCubeFormulaEdit.PutCoord.htm).


См. также:


[ICalcCubeFormulaEdit](ICalcCubeFormulaEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
