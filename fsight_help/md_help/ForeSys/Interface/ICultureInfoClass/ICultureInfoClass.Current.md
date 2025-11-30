# ICultureInfoClass.Current

ICultureInfoClass.Current
-


# ICultureInfoClass.Current


## Синтаксис


Current: [ICultureInfo](../ICultureInfo/ICultureInfo.htm);


## Описание


Свойство Current возвращает
 культуру текущего потока приложения.


## Комментарии


Данное свойство вернет тот язык и региональные параметры, которые были
 установлены в региональных настройках операционной системы при запуске
 «Форсайт. Аналитическая платформа».
 Текущий язык и региональные параметры, используемые в операционной системе,
 можно получить в свойстве [UserDefault](ICultureInfoClass.UserDefault.htm).


## Пример


	Sub UserProc;

	Var

	    CF: ICultureInfo;

	Begin

	    CF := CultureInfo.Current;

	    Debug.WriteLine(CF.NativeCountry);

	    Debug.WriteLine(CF.NativeLanguage);

	End Sub UserProc;


При выполнении примера в окно консоли будут выведены название страны
 и языка.


См. также:


[ICultureInfoClass](ICultureInfoClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
