# TabSheetBox.OnProtectionFail

TabSheetBox.OnProtectionFail
-


# TabSheetBox.OnProtectionFail


## Синтаксис


Sub TabSheetBoxOnProtectionFail(Sender:
 Object; Args: [ITabProtectionFailedEventArgs](../../Interface/ITabProtectionFailedEventArgs/ITabProtectionFailedEventArgs.htm));


Begin


//набор операторов


End Sub
 TabSheetBoxOnProtectionFail;


## Параметры


Sender - параметр, указывающий
 на компонент, в котором произошло событие.


Args - параметр, позволяющий
 определить дополнительные параметры события.


## Описание


Событие OnProtectionFail возникает
 при срабатывании защиты таблицы.


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события OnProtectionFail
 для компонента TabSheetBox с идентификатором
 «TabSheetBox1».


	Sub TabSheetBox1OnProtectionFail(Sender: Object; Args: ITabProtectionFailedEventArgs);

	Var

	    s: String;

	Begin

	    s:=Args.Message;

	End Sub TabSheetBox1OnProtectionFail;


После выполнения события в переменной «s» будет содержаться информационное
 сообщение.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
