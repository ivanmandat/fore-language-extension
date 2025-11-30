# ILanerBox.HitTest

ILanerBox.HitTest
-


# ILanerBox.HitTest


## Синтаксис


HitTest(X: Integer; Y: Integer): [LanerBoxArea](../../Enums/LanerBoxArea.htm);


## Параметры


X. Горизонтальная координата;


Y. Вертикальная координата.


## Описание


Метод HitTest возвращает область
 компонента по указанным координатам.


## Комментарии


Координаты задаются относительно верхнего левого угла компонента.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента LanerBox с наименованием «LanerBox1» и компонента UiErAnalyzer,
 являющегося источником данных для LanerBox. В UiErAnalyzer должна быть
 загружена рабочая книга базы данных временных рядов. Также на форме присутствует
 компонент Memo с наименованием «Memo1».


Указанная процедура является обработчиком события OnMouseDown для LanerBox.


	Sub LanerBox1OnMouseDown(Sender: Object; Args: IMouseClickEventArgs);

	Var

	    BoxArea: LanerBoxArea;

	    Point: IPoint;

	Begin

	    Point := Args.pPoint;

	    BoxArea := LanerBox1.HitTest(Point.X, Point.Y);

	    Select Case BoxArea

	        Case LanerBoxArea.None: Memo1.Lines.Add("Область не определена");

	        Case LanerBoxArea.MethodsBar: Memo1.Lines.Add("Панель моделирования");

	        Case LanerBoxArea.Toolbar: Memo1.Lines.Add("Панель инструментов");

	        Case LanerBoxArea.Tabsheet: Memo1.Lines.Add("Таблица данных");

	        Case LanerBoxArea.DimPanel: Memo1.Lines.Add("Панель размерностей");

	    End Select;

	End Sub LanerBox1OnMouseDown;


После выполнения примера в «Memo1» будет выведено наименование области LanerBox,
 по которой щелкнули мышью.


См. также:


[ILanerBox](ILanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
