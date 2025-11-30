# ITabView.HitTestCell

ITabView.HitTestCell
-


# ITabView.HitTestCell


## Синтаксис


HitTestCell(X: Integer; Y: Integer; Var Row: Integer;
 Var Column: Integer);


## Параметры


X. Координата Х;


Y. Координата Y;


Row. Переменная, в которую
 будет помещен индекс строки, содержащей точку с указанными координатами;


Column. Переменная, в которую
 будет помещен индекс столбца, содержащего точку с указанными координатами.


## Описание


Метод HitTestCell вычисляет
 индексы строки и столбца для ячейки таблицы, содержащей точку, координаты
 которой передаются в качестве входных параметров X и Y.


## Комментарии


Координаты X и Y можно получить любыми событиями таблицы, аргумент которого
 содержит свойство pPoint.


Вычисленные значения будут помещены в переменные, передаваемые в качестве
 параметров Row и Column.


## Пример


Для выполнения примера предполагается наличие формы с компонентом TabSheetBox,
 использующим какой-либо источник данных. Данную процедуру необходимо назначить
 в качестве обработчика события OnMouseDown для компонента TabSheetBox.


	Sub TabSheetBox1OnMouseDown(Sender: Object; Args: IMouseClickEventArgs);

	Var

	    TabS: ITabSheetBox;

	    Sheet: ITabSheet;

	    View: ITabView;

	    Point: IPoint;

	    Row, Column: Integer;

	Begin

	    TabS := Sender As ITabSheetBox;

	    Sheet := TabS.Source.GetTabSheet;

	    View := Sheet.View;

	    Point := Args.pPoint;

	    View.HitTestCell(Point.X, Point.Y, Row, Column);

	    WinApplication.InformationBox("Строка: " + Row.ToString + "; Столбец: " + Column.ToString);

	End Sub TabSheetBox1OnMouseDown;


После выполнения примера при щелчке мышью по ячейке компонента TabSheetBox
 будет выведено сообщение с индексами строки и столбца, содержащих данную
 ячейку.


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
