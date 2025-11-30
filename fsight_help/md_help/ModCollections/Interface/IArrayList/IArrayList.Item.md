# IArrayList.Item

IArrayList.Item
-


# IArrayList.Item


## Синтаксис


Item(Index: Integer): Variant;


## Параметры


Index. Индекс
 элемента массива.


## Описание


Свойство Item возвращает значение
 элемента с указанным индексом.


## Пример


			Sub UserProc;

Var

    ArrayL: IArrayList;

    i: Integer;

    v: Variant;

Begin

    ArrayL := New ArrayList.Create;

    For i := 0 To Math.RandBetweenI(0, 100) Do

        ArrayL.Add(Math.RandBetweenI(0, 500));

    End For;

    v := ArrayL.Item(ArrayL.Count - 1);

End Sub UserProc;


После выполнения примера будет создан динамический массив со случайными
 значениями и в переменной «v» будет содержаться значение последнего элемента.


См. также:


[IArrayList](IArrayList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
