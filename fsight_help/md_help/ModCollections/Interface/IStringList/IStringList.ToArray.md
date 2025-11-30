# IStringList.ToArray

IStringList.ToArray
-


# IStringList.ToArray


## Синтаксис


ToArray: Array;


## Описание


Метод ToArray осуществляет преобразование
 к обычному строковому массиву.


## Комментарии


Если текущий массив пуст, то метод ToArray
 возвращает значение Null.


## Пример


			Sub UserProc;

Var

    StrL: IStringList;

    s: Array Of String;

    i: Integer;

Begin

    StrL := New StringList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        StrL.Add("Number " + Math.RandBetweenI(0, 100).ToString);

    End For;

    s := StrL.ToArray;

End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться строковый
 массив, состоящий из одной строки.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
