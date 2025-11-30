# IStringList.Add

IStringList.Add
-


# IStringList.Add


## Синтаксис


Add(Value: String): Integer;


## Параметры


Value. Строковое
 значение, которое необходимо добавить в массив.


## Описание


Метод Add добавляет новый элемент
 с указанным значением в конец массива и возвращает его индекс.


## Пример


			Sub UserProc;

Var

    StrL: IStringList;

    i: Integer;

Begin

    StrL := New StringList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        StrL.Add("Значение " + Math.RandBetweenI(0, 100).ToString);

    End For;

End Sub UserProc;


При выполнении примера будет сгенерирован динамический массив строк.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
