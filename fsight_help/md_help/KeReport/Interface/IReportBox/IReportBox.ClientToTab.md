# IReportBox.ClientToTab

IReportBox.ClientToTab
-


# IReportBox.ClientToTab


## Синтаксис


ClientToTab(Point: [IGxPoint](ModDrawing.chm::/Interface/IGxPoint/IGxPoint.htm));


## Параметры


Point - координаты курсора
 относительно компонента, которые необходимо преобразовать в координаты
 относительно отчета.


## Описание


Метод ClientToTab преобразует
 координаты компонента ReportBox
 в координаты отчета, являющегося источником данных этого компонента.


## Пример


Пусть в событии на щелчок мыши в ячейке отчета, загруженного в компонент
 «ReportBox1», указан следующий текст:


			Sub ReportBox1OnCellClick(Report: IReportBox; TabSheet: IPrxSheet; Row: Integer; Column: Integer);

Var

    Point: IGxPoint;

    Coord1, Coord2: String;

Begin

    Point := WinApplication.CursorPosition;

    Coord1 := Point.X.ToString + ":" + Point.Y.ToString;

    Point := ReportBox1.ScreenToClient(Point.X, Point.Y) As IGxPoint;

    ReportBox1.ClientToTab(Point);

    Coord2 := Point.X.ToString + ":" + Point.Y.ToString;

End Sub ReportBox1OnCellClick;


Если щелкнуть в ячейке отчета, то переменная «Coord1» будет содержать
 координаты курсора относительно экрана, а переменная «Coord2» - координаты
 курсора относительно отчета, загруженного в компонент.


См. также:


[IReportBox](IReportBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
