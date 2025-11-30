# IStringList.RemoveRange

IStringList.RemoveRange
-


# IStringList.RemoveRange


## Синтаксис


RemoveRange(Index: Integer; Count: Integer);


## Параметры


Index. Индекс элемента, с которого
 начинается удаляемый диапазон;


Count. Количество элементов
 в диапазоне, который необходимо удалить.


## Описание


Метод RemoveRange осуществляет
 удаление диапазона элементов.


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

    StrL.RemoveRange(StrL.Count - 10, 10);

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив строк
 и из него удалены последние 10 элементов.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
