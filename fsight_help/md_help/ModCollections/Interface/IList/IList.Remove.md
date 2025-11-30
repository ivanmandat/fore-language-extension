# IList.Remove

IList.Remove
-


# IList.Remove


## Синтаксис


Remove(Value: Variant);


## Параметры


Value. Значение
 элемента, который необходимо удалить.


## Описание


Метод Remove осуществляет удаление
 элемента, значение которого передается посредством входного параметра.


## Пример


			Sub UserProc;

Var

    ArrayL: IArrayList;

    i: Integer;

Begin

    ArrayL := New ArrayList.Create;

    For i := 0 To Math.RandBetweenI(0, 100) Do

        ArrayL.Add(Math.RandBetweenI(0, 50));

    End For;

    ArrayL.Remove(50);

End Sub UserProc;


После выполнения примера будет создан динамический массив со случайными
 значениями и из него удален элемент с значением «50», если таковой присутствует.


См. также:


[IList](IList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
