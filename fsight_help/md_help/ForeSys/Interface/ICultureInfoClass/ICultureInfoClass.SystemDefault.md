# ICultureInfoClass.SystemDefault

ICultureInfoClass.SystemDefault
-


# ICultureInfoClass.SystemDefault


## Синтаксис


SystemDefault: [ICultureInfo](../ICultureInfo/ICultureInfo.htm);


## Описание


Свойство SystemDefault возвращает
 настройки культуры, выбранной в операционной системы для программ, не
 поддерживающих Юникод.


## Комментарии


Данная культура устанавливается в региональных настройках операционной
 системы и будет использоваться для отображения текста в программах, не
 поддерживающих Юникод.


## Пример


	Sub UserProc;

	Var

	    CF: ICultureInfo;

	Begin

	    CF := CultureInfo.SystemDefault;

	    Debug.WriteLine(CF.NativeLanguage);

	End Sub UserProc;


При выполнении примера в окно консоли среды разработки будут выведены
 наименование языка культуры, которая установлена в операционной системе
 и используется программами, не поддерживающими Юникод.


См. также:


[ICultureInfoClass](ICultureInfoClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
