# IEaxGrid.RefreshPart

IEaxGrid.RefreshPart
-


# IEaxGrid.RefreshPart


## Синтаксис


RefreshPart([Value: Integer = 0]);


## Параметры


Value. Параметр, определяющий
 обновляемую область таблицы. В качестве значения параметра должно быть
 указано одно из значений перечисления [EaxGridRefreshPart](../../Enums/EaxGridRefreshPart.htm).


## Описание


Метод RefreshPart обновляет
 указанную область таблицы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox и компонента
 UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных
 для LanerBox. В «UiErAnalyzer1» должна быть загружена рабочая книга базы данных временных
 рядов.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

	Var

	    Expr: IEaxAnalyzer;

	    TableStyle: ITabTableStyle;

	    Grid: IEaxGrid;

	Begin

	    Expr := UiErAnalyzer1.ErAnalyzer;

	    Grid := Expr.Grid;

	    TableStyle := Grid.Style.TableStyle;

	    TableStyle.AssignPredefined(TabTablePredefinedStyle.DarkBlue);

	    Grid.RefreshPart(EaxGridRefreshPart.TableStyle);

	End Sub Button1OnClick;


После выполнения примера будет назначен чередующийся стиль для таблицы
 рабочей книги. Затем будет произведено обновление только стиля таблицы.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
