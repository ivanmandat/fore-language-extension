# ICubeClass.CurrentCoord

ICubeClass.CurrentCoord
-


# ICubeClass.CurrentCoord


## Синтаксис


CurrentCoord: [IMatrixCoord](kematrix.chm::/interface/imatrixcoord/imatrixcoord.htm);


## Описание


Свойство CurrentCoord возвращает
 текущую координату в стандартном кубе.


## Комментарии


Данное свойство используется в макросах, определяющих значение вычисляемых
 показателей стандартного куба.


## Пример


Данный пример является макросом для куба и установлен в качестве формулы
 вычисляемого показателя куба.


			Public Function GetActiveCoord: Variant;

Var

    Result: Variant;

    Coord: IMatrixCoord;

    i: Integer;

Begin

    Coord := CubeClass.CurrentCoord;

    Result := "Текущая координата: ";

    For i := 0 To Coord.Count - 1 Do

        Result := Result + Coord.Item(i).ToString + " ";

    End For;

    Return Result;

End Function GetActiveCoord;


При построении куба в качестве значения вычисляемого показателя будет
 выводиться текущая координата в кубе.


См. также:


[ICubeClass](ICubeClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
