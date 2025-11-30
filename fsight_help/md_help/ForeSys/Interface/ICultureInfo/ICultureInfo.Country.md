# ICultureInfo.Country

ICultureInfo.Country
-


# ICultureInfo.Country


## Синтаксис


Country: String;


## Описание


Свойство Country возвращает
 наименование страны (региона) культуры на английском языке.


## Пример


	Sub UserProc;

	Var

	    CF: ICultureInfo;

	Begin

	    CF := CultureInfo.UserDefault;

	    Debug.WriteLine(CF.Country);

	    Debug.WriteLine(CF.LocalizedCountry);

	    Debug.WriteLine(CF.NativeCountry);

	End Sub UserProc;


При выполнении примера будет получена текущая культура, заданная в операционной
 системе. В консоль среды разработки будут выведены три наименования страны,
 которой соответствует культура: наименование страны на английском языке,
 на языке установленной версии .NET Framework и на языке отображения самой
 культуры.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
