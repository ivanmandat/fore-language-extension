# ILogonParams.ReportError

ILogonParams.ReportError
-


# ILogonParams.ReportError


## Синтаксис


ReportError: Boolean;


## Описание


Свойство ReportError определяет признак того, настроен ли вывод сообщения об ошибке при неверном вводе имени пользователя/пароля.


## Комментарии


Если при неверном вводе имени пользователя/пароля выводится сообщение об ошибке, то свойство возвращает значение True, иначе - False.


## Пример


Для выполнения примера подключите ссылку на сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    LogSes: ILogonSession;

    Res : Boolean;

Begin

    MB := MetabaseClass.Active;

    LogSes := MB.LogonSession;

    Res := LogSes.CreateLogonParams.ReportError;

    Debug.WriteLine(Res);

End Sub UserProc;


После выполнения примера в консоль будет выведено значение, определяющее, выводится ли сообщение об ошибке при неверном вводе имени пользователя/пароля.


См. также:


[ILogonParams](ILogonParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
