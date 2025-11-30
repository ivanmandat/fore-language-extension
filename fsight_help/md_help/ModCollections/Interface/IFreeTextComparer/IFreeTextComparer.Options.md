# IFreeTextComparer.Options

IFreeTextComparer.Options
-


# IFreeTextComparer.Options


## Синтаксис


Options: [TextComparerOptions](../../Enums/TextComparerOptions.htm);


## Описание


Свойство Options определяет
 параметры сравнения.


## Комментарии


Options позволяет производить
 сравнение с учетом регистра и полноты слов.


## Пример


Для выполнения примера добавьте ссылку на системную сборку «Collections».


			Sub UserProc;

    Function TestCompare(x: String; y: String): Integer;

    Var

        pComparer: IComparer;

        FreeComparer: IFreeTextComparer;

        iResult: Integer;

    Begin

        pComparer := Comparer.FreeTextComparer;

        FreeComparer := pComparer As IFreeTextComparer;

        FreeComparer.Options := TextComparerOptions.MatchCase Or TextComparerOptions.WholeWord;

        iResult := pComparer.Compare(x, y);

        Select Case iResult

            Case 0: Debug.WriteLine("'" + x + "'  '" + y + "' -> объекты совпадают");

            Case - 1: Debug.WriteLine("'" + x + "'  '" + y + "' -> частичное совпадение или вхождений не найдено");

        End Select;

        Return iResult;

    End Function TestCompare;

Begin

    TestCompare("Пермский", "пермский");

    TestCompare("Пермский", "перм");

    TestCompare("Пермский", "Пермский");

    TestCompare("Пермский", "Перм");

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты сравнения
 с учетом регистра и полноты слов.


См. также:


[IFreeTextComparer](IFreeTextComparer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
