# ICultureInfoClass.UserDefault

ICultureInfoClass.UserDefault
-


# ICultureInfoClass.UserDefault


## Синтаксис


UserDefault: [ICultureInfo](../ICultureInfo/ICultureInfo.htm);


## Описание


Свойство UserDefault возвращает
 настройки культуры, используемой в операционной системе.


## Комментарии


Данное свойство вернет тот язык и региональные параметры, которые заданы
 в региональных настройках операционной системы.


## Пример


	Sub UserProc;

	Var

	    CF: ICultureInfo;

	Begin

	    CF := CultureInfo.UserDefault;

	    Debug.WriteLine(CF.NativeCountry);

	    Debug.WriteLine(CF.NativeLanguage);

	End Sub UserProc;


При выполнении примера в окно консоли среды разработки будут выведены
 название страны и языка, заданные в региональных настройках операционной
 системы.


См. также:


[ICultureInfoClass](ICultureInfoClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
