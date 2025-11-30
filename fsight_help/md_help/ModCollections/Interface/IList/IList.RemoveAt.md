# IList.RemoveAt

IList.RemoveAt
-


# IList.RemoveAt


## Синтаксис


RemoveAt(Index: Integer);


## Параметры


Index. Индекс
 позиции элемента, который необходимо удалить.


## Описание


Метод RemoveAt осуществляет
 удаление элемента, индекс позиции которого передается посредством входного
 параметра.


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

    ArrayL.RemoveAt(ArrayL.Count - 1);

End Sub UserProc;


После выполнения примера будет создан динамический массив со случайными
 значениями и из него удален последний элемент.


См. также:


[IList](IList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
