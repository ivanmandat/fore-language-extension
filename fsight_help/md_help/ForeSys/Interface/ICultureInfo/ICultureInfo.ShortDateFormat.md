# ICultureInfo.ShortDateFormat

ICultureInfo.ShortDateFormat
-


# ICultureInfo.ShortDateFormat


## Синтаксис


ShortDateFormat: String;


## Описание


Свойство ShortDateFormat возвращает
 краткий формат даты с учётом настроек региональных параметров.


## Пример


			Sub UserProc;

Var

    CI: ICultureInfo;

    S: String;

Begin

    CI := CultureInfo.Current;

    S := CI.ShortDateFormat;

    Debug.WriteLine(S);

End Sub UserProc;


После выполнения примера в консоль будет выведен краткий формат даты,
 заданный в настройках региональных параметров.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
