# IArrayList.Clone

IArrayList.Clone
-


# IArrayList.Clone


## Синтаксис


Clone: [IArrayList](IArrayList.htm);


## Описание


Метод Clone создает копию массива.


## Пример


			Sub UserProc;

Var

    ArrayL, ArrayL1: IArrayList;

    i: Integer;

Begin

    ArrayL := New ArrayList.Create;

    ArrayL1 := New ArrayList.Create;

    For i := 0 To Math.RandBetweenI(0, 100) Do

        ArrayL.Add(Math.RandBetweenI(0, 100));

    End For;

    ArrayL1 := ArrayL.Clone;

    ArrayL.Clear;

End Sub UserProc;


После выполнения примера в массиве «ArrayL1» будет содержаться копия
 массива «ArrayL».


См. также:


[IArrayList](IArrayList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
