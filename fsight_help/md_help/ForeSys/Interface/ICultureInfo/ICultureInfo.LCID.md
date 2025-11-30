# ICultureInfo.LCID

ICultureInfo.LCID
-


# ICultureInfo.LCID


## Синтаксис


LCID: Integer;


## Описание


Свойство LCID возвращает идентификатор
 текущих настроек языка и региональных стандартов.


## Пример


	Sub UserProc;

	Var

	    CI1, CI2: ICultureInfo;

	Begin

	    CI1 := CultureInfo.CurrentUi;

	    CI2 := CultureInfo.UserDefault;

	    If CI1.LCID = CI2.LCID Then

	        Debug.WriteLine("Региональные настройки, используемые в приложении и ОС, одинаковые.");

	    Else

	        Debug.WriteLine("Региональные настройки, используемые в приложении и ОС, разные.");

	    End If;

	End Sub UserProc;


При выполнении примера будут получены культура визуального интерфейса
 текущего приложения и культура, заданная в операционной системе. Будет
 осуществлено сравнение культур по их идентификатору. Результат сравнения
 будет выведен в консоль среды разработки.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
