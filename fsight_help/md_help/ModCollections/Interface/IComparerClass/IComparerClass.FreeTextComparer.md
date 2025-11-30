# IComparerClass.FreeTextComparer

IComparerClass.FreeTextComparer
-


# IComparerClass.FreeTextComparer


## Синтаксис


FreeTextComparer: [IComparer](../IComparer/IComparer.htm);


## Описание


Свойство FreeTextComparer возвращает
 объект для свободного сравнения текста.


## Комментарии


При сравнении ищется вхождение строки X в строку Y. Если строка состоит
 из нескольких слов, то ищутся вхождения по каждому слову в отдельности.
 При поиске вхождений отбрасываются окончания существительных. Например,
 для слов «Доход», «Доходы», «Доходов», «О доходах» будет искаться вхождение
 «Доход».


Для данного объекта метод [IComparer.Compare](../IComparer/IComparer.Compare.htm)
 будет возвращать:


	- 0 - в случае
	 если обнаружено вхождение строки X в Y;


	- -1 - если
	 полное вхождение строки X в Y не найдено.


Для использования дополнительных параметров сравнения приведите значение
 свойства FreeTextComparer к типу
 [IFreeTextComparer](../IFreeTextComparer/IFreeTextComparer.htm).


## Пример


			Sub UserProc;

    Function TestCompare(x: String; y: String): Integer;

    Var

        pComparer: IComparer;

        iResult: Integer;

    Begin

        pComparer := Comparer.FreeTextComparer;

        iResult := pComparer.Compare(x, y);

        Select Case iResult

            Case  0: Debug.WriteLine("'" + x + "'  '" + y + "' -> объекты совпадают");

            Case - 1: Debug.WriteLine("'" + x + "'  '" + y + "' -> частичное совпадение или вхождений не найдено");

        End Select;

        Return iResult;

    End Function TestCompare;

Begin

    TestCompare("find a cat", "finding of cats is some kind of difficult process"); //0

    TestCompare("find a cat", "now we see how cats are found"); //-1

    TestCompare("find cats", "there is a cat. find it"); // 0

    TestCompare("houses", "housing problem"); //0

    TestCompare("торг домами", "торговый дом"); //0

    TestCompare("торговля домами", "торговый дом"); //-1

    TestCompare("Доход", "население страны"); //-1

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты сравнения:


Module execution started


'find a cat'  'finding of cats is some kind
 of difficult process' -> объекты совпадают


'find a cat'  'now we see how cats are found'
 -> частичное совпадение или вхождений не найдено


'find cats'  'there is a cat. find it' ->
 объекты совпадают


'houses'  'housing problem' -> объекты совпадают


'торг домами'  'торговый дом' -> объекты
 совпадают


'торговля домами'  'торговый дом' -> частичное
 совпадение или вхождений не найдено


'Доход'  'население страны' -> частичное
 совпадение или вхождений не найдено


Module execution finished


См. также:


[IComparerClass](IComparerClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
