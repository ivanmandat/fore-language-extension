# IFreeTextComparer.ForEachWord

IFreeTextComparer.ForEachWord
-


# IFreeTextComparer.ForEachWord


## Синтаксис


ForEachWord: Boolean;


## Описание


Свойство ForEachWord определяет,
 осуществлять ли сравнение по вхождению как каждого слова в отдельности,
 так и всех слов одновременно.


## Комментарии


По умолчанию свойству установлено значение False.


## Пример


Для выполнения примера укажите в инспекторе сборок ссылку на системную
 сборку «Collections».


			Sub Main;


Begin

    TestCompare("Пермский округ", "Пермский край");

    TestCompare("Пермский округ", "Московский округ");

    TestCompare("Пермский округ", "Московский край");

End Sub Main;


Function TestCompare(x: String; y: String): Integer;

Var

    pComparer: IComparer;

    FreeComparer: IFreeTextComparer;

    iResult: Integer;

Begin

    pComparer := Comparer.FreeTextComparer;

    FreeComparer := pComparer As IFreeTextComparer;

    FreeComparer.ForEachWord:= True;

    iResult := FreeComparer.Compare(x, y);

    Select Case iResult

        Case 0: Debug.WriteLine("'" + x + "'  '" + y + "' -> одно из слов входит в искомую строку");

        Case -1,1: Debug.WriteLine("'" + x + "'  '" + y + "' -> ни одно из слов не входит в искомую строку");

    End Select;

    Return iResult;

End Function TestCompare;


После выполнения примера в окно консоли будут выведены результаты сравнения:


'Пермский округ'  'Пермский край' -> одно из слов входит в искомую строку

'Пермский округ'  'Московский округ' -> одно из слов входит в искомую строку

'Пермский округ'  'Московский край' -> ни одно из слов не входит в искомую строку


См. также:


[IFreeTextComparer](IFreeTextComparer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
