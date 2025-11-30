# ICultureInfo.Language

ICultureInfo.Language
-


# ICultureInfo.Language


## Синтаксис


Language: String;


## Описание


Свойство Language возвращает
 наименование языка культуры на английском языке.


## Пример


	Sub UserProc;

	Var

	    CF: ICultureInfo;

	Begin

	    CF := CultureInfo.UserDefault;

	    Debug.WriteLine(CF.Language);

	    Debug.WriteLine(CF.LocalizedLanguage);

	    Debug.WriteLine(CF.NativeLanguage);

	    Debug.WriteLine(CF.ThreeLetterISOLanguageName);

	    Debug.WriteLine(CF.ThreeLetterWindowsLanguageName);

	    Debug.WriteLine(CF.TwoLetterISOLanguageName);

	End Sub UserProc;


При выполнении примера будет получена текущая культура, заданная в операционной
 системе. В консоль среды разработки будут выведены различные наименования
 языка и коды, используемые для обозначения языка культуры.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
