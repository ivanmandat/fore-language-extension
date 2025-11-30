# IDebug.IsLinux

IDebug.IsLinux
-


# IDebug.IsLinux


## Синтаксис


		IsLinux: Boolean;


## Описание


Свойство IsLinux возвращает
 признак выполнения кода в операционной системе семейства Linux.


## Комментарии


Свойство возвращает True, если
 текущий код выполняется в ОС семейства Linux и False,
 если код выполняется в ОС Windows.


## Пример


					Sub UserProc;

		Var

		    //...

		    Result: Variant;

		    //...

		Begin

		    //...

		    //Выполняемый код

		    //...

		    If Debug.IsLinux Then

		        Debug.WriteLine("Work in Linux: " + Result);

		    Else

		        Debug.WriteLine("Work in Windows: " + Result);

		    End If;

		End Sub UserProc;


Указанная процедура может использоваться для выполнения какого-либо
 кода. В консоль среды разработки будет выводиться информация об операционной
 системе, в которой осуществляется выполнение кода.


См. также:


[IDebug](IDebug.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
