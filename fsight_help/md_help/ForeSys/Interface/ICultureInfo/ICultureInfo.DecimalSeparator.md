# ICultureInfo.DecimalSeparator

ICultureInfo.DecimalSeparator
-


# ICultureInfo.DecimalSeparator


## Синтаксис


DecimalSeparator: String;


## Описание


Свойство DecimalSeparator возвращает
 текущий разделитель целой и дробной части.


## Пример


	Sub UserProc;

	Var

	    CF: ICultureInfo;

	Begin

	    CF := CultureInfo.UserDefault;

	    Debug.WriteLine("'" + CF.DecimalSeparator + "'");

	    Debug.WriteLine("'" + CF.ThousandSeparator + "'");

	End Sub UserProc;


При выполнении примера будет получена текущая культура, заданная в операционной
 системе. В консоль среды разработки будут выведены заданные для культуры:
 разделитель целой и дробной части; разделитель групп разрядов.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
