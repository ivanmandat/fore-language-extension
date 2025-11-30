# ITabObjectEventArgs.Action

ITabObjectEventArgs.Action
-


# ITabObjectEventArgs.Action


## Синтаксис


Action: [TabObjectAction](../../Enums/TabObjectAction.htm);


## Описание


Свойство Action возвращает тип
 действия, совершенного над объектом таблицы.


## Пример


	Sub TabSheetBox1OnObjectActivate(Sender: Object; Args: ITabObjectEventArgs);

	Var

	    i: Integer;

	Begin

	    i := Args.Action;

	End Sub TabSheetBox1OnObjectActivate;


После выполнения события в переменной «i» будет содержаться тип совершенного
 действия.


См. также:


[ITabObjectEventArgs](ITabObjectEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
