# IStringList.Reverse

IStringList.Reverse
-


# IStringList.Reverse


## Синтаксис


Reverse;


## Описание


Метод Reverse осуществляет переворот
 массива.


## Пример


	Sub UserProc;

	Var

	    StrL: IStringList;

	Begin

	    StrL := New StringList.Create;

	    StrL.Add("B");

	    StrL.Add("A");

	    StrL.Add("C");

	    StrL.Add("E");

	    Debug.WriteLine("Исходный массив строк:");

	    ShowList(StrL);

	    Debug.WriteLine("Массив строк после сортировки:");

	    StrL.Sort;

	    ShowList(StrL);

	    Debug.WriteLine("Массив строк после переворота массива:");

	    StrL.Reverse;

	    ShowList(StrL);

	End Sub UserProc;


	Sub ShowList(List: IStringList);

	Var

	    s, res: String;

	Begin

	    For Each s In List Do

	        res := res + s + ' ';

	    End For;

	    Debug.WriteLine(String.Trim(res));

	End Sub ShowList;


После выполнения примера будет сгенерирован динамический массив строк.
 В массиве будет осуществлена сортировка и переворот значений. Значения
 массива на различных этапах его преобразования будут выводиться в консоль
 среды разработки.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
