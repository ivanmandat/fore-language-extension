# ICultureInfo.LongDateFormat

ICultureInfo.LongDateFormat
-


# ICultureInfo.LongDateFormat


## Синтаксис


LongDateFormat: String;


## Описание


Свойство LongDateFormat возвращает
 полный формат даты с учётом настроек региональных параметров.


## Пример


			Sub UserProc;

Var

    CI: ICultureInfo;

    S: String;

Begin

    CI := CultureInfo.Current;

    S := CI.LongDateFormat;

    Debug.WriteLine(S);

End Sub UserProc;


После выполнения примера в консоль будет выведен полный формат даты
 с учётом региональных настроек системы.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
