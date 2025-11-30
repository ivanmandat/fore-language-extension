# IArrayList.ToArray

IArrayList.ToArray
-


# IArrayList.ToArray


## Синтаксис


ToArray: Array;


## Описание


Метод ToArray осуществляет преобразование
 в обычный массив.


## Комментарии


Если текущий динамический массив пуст, то метод возвращает значение
 Null.


## Пример


			Sub UserProc;

Var

    ArrayL: IArrayList;

    Arr: Array Of Variant;

    i: Integer;

Begin

    ArrayL := New ArrayList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        ArrayL.Add(Math.RandBetweenI(0, 100));

    End For;

    Arr := ArrayL.ToArray;

End Sub UserProc;


После выполнения примера в переменной «Arr» будет содержаться одномерный
 массив со случайным количеством элементов.


См. также:


[IArrayList](IArrayList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
