# IStringList.RemoveAt

IStringList.RemoveAt
-


# IStringList.RemoveAt


## Синтаксис


RemoveAt(Index: Integer);


## Параметры


Index. Индекс
 элемента, который необходимо удалить.


## Описание


Метод Remove осуществляет удаление
 элемента с указанным индексом.


## Пример


			Sub UserProc;

Var

    StrL: IStringList;

    i: Integer;

Begin

    StrL := New StringList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        StrL.Add("Number " + Math.RandBetweenI(0, 100).ToString);

    End For;

    StrL.RemoveAt(StrL.Count - 1);

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив строк
 и из него будет удален последний элемент.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
