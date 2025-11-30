# IStringList.Insert

IStringList.Insert
-


# IStringList.Insert


## Синтаксис


Insert(Index: Integer; Value: String);


## Параметры


Index. Индекс позиции, в которую
 необходимо добавить элемент;


Value. Значение элемента, который
 необходимо добавить.


## Описание


Метод Insert осуществляет вставку
 элемента в заданную позицию.


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

    StrL.Insert(StrL.Count, "Last Value");

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив строки
 в конец массива добавлен еще один элемент.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
