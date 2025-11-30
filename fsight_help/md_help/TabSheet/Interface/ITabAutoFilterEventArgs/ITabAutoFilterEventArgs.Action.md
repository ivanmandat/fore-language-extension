# ITabAutoFilterEventArgs.Action

ITabAutoFilterEventArgs.Action
-


# ITabAutoFilterEventArgs.Action


## Синтаксис


Action: [TabAutoFilterAction](../../Enums/TabAutoFilterAction.htm);


## Описание


Свойство Action возвращает тип
 выбранного условия автофильтра.


## Пример


Для выполнения примера предполагается наличие формы. На форме расположен
 компонент TabSheetBox и компонент UiTabSheet с наименованием «UiTabSheet1»,
 который является источником данных для компонента TabSheetBox. Данная
 процедура установлена в качестве обработчика события [OnAutoFilter](../../Class/TabSheetBox/TabSheetBox.OnAutoFilter.htm).


	Sub TabSheetBox1OnAutoFilter(Sender: Object; Args: ITabAutoFilterEventArgs);

	Var

	    i: Integer;

	Begin

	    i := Args.Action;

	End Sub TabSheetBox1OnAutoFilter;


После выполнения события в переменной «i»
 будет содержаться тип выбранного условия автофильтра.


См. также:


[ITabAutoFilterEventArgs](ITabAutoFilterEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
