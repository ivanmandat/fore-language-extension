# IException.Line

IException.Line
-


# IException.Line


## Синтаксис


Line: Integer;


## Описание


Свойство Line возвращает номер
 строки, при выполнении которой была вызвана исключительная ситуация.


## Пример


	Sub UserProc;

	Var

	    a: Array[0..1] Of Integer;

	    Ex: IException;

	Begin

	    Try

	        a[2] := 1;

	    Except On e: IndexOutOfRangeException Do

	        Debug.WriteLine("---Ошибка---");

	        Debug.WriteLine(e.Message);

	        Debug.WriteLine(e.Source);

	        Debug.WriteLine(e.Line);

	        Ex := e.NestedException;

	        Debug.WriteLine("---Ошибка, вызвавшая текущее исключение---");

	        Debug.WriteLine(Ex.Source);

	        Debug.WriteLine(Ex.Line);

	    End Try;

	End Sub UserProc;


После выполнения примера будет сгенерирована ошибка «Недопустимый индекс
 элемента!». При обработке ошибки в консоль среды разработки будут выведены
 текст ошибки, идентификатор модуля/формы и номер строки, в которой была
 сгенерирована ошибка, а также наименование и номер строки в файле платформы,
 в котором реализована обработка данной исключительной ситуации.


См. также:


[IException](IException.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
