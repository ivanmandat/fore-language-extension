# ITabProtectionFailedEventArgs.Message

ITabProtectionFailedEventArgs.Message
-


# ITabProtectionFailedEventArgs.Message


## Синтаксис


Message: String;


## Описание


Свойство Message возвращает
 информационное сообщение о запрещенном действии при включенной защите
 таблицы.


## Пример


	Sub TabSheetBox1OnProtectionFail(Sender: Object; Args: ITabProtectionFailedEventArgs);

	Var

	    s: String;

	Begin

	    s:=Args.Message;

	End Sub TabSheetBox1OnProtectionFail;


После выполнения события в переменной «s» будет содержаться информационное
 сообщение.


См. также:


[ITabProtectionFailedEventArgs](ITabProtectionFailedEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
