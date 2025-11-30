# IStringList.ItemLength

IStringList.ItemLength
-


# IStringList.ItemLength


## Синтаксис


ItemLength(Index: Integer): Integer;


## Параметры


Index. Индекс
 элемента массива.


## Описание


Свойство ItemLength возвращает
 длину элемента массива.


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

    i := StrL.ItemLength(Math.RandBetweenI(50, StrL.Count));

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив строк.
 В переменной i будет содержаться длина случайного элемента массива.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
