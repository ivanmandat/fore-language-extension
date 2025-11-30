# ILanerBox.DecreaseLag

ILanerBox.DecreaseLag
-


# ILanerBox.DecreaseLag


## Синтаксис


DecreaseLag;


## Описание


Метод DecreaseLag выполняет
 уменьшение лага выделенного ряда.


## Комментарии


Признак того, что лаг ряда может быть уменьшен возвращает свойство [ILanerBox.CanDecreaseLag](ILanerBox.CanDecreaseLag.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox с наименованием
 «LanerBox1» и компонента UiErAnalyzer, являющегося источником данных для
 LanerBox. В UiErAnalyzer должна быть загружена рабочая книга базы данных
 временных рядов.


Описанная процедура должна быть назначена обработчиком события OnClick
 для кнопки. Пример выполняется при нажатии кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Can: Boolean;

	Begin

	    Can := LanerBox1.CanDecreaseLag;

	    If Can Then

	        LanerBox1.IDecreaseLag;

	    End If;

	End Sub Button1OnClick;


После выполнения примера для выделенного ряда будет уменьшен лаг,
 если это возможно.


См. также:


[ILanerBox](ILanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
