# IWxLink.InsertPoint

IWxLink.InsertPoint
-


# IWxLink.InsertPoint


## Синтаксис


InsertPoint(Number: Integer; Point: [IGxPointF](ModDrawing.chm::/Interface/IGxPointF/IGxPointF.htm));


## Параметры


Number. Индекс
 точки линии, перед которой будет вставлена новая точка;


Point. Координата
 точки.


## Описание


Метод InsertPoint вставляет
 новую точку.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP», содержащего линию.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub Userproc;

	Var

	    mb: IMetabase;

	    ws: IWxWorkspace;

	    Link: IWxLink;

	    Point: IGxPointF;

	    Shapes: IWxShapes;

	Begin

	    // Получаем рабочее пространство для редактирования

	    mb := MetabaseClass.Active;

	    ws := mb.ItemById("WSP").Edit As IWxWorkspace;

	    Shapes := ws.Shapes;

	    Link := ws.Shapes.Item(0) As IWxLink;

	    Point := New GxPointF.Create(Link.Points(1).X - 3, Link.Points(1).Y - 5);

	    Link.InsertPoint(1, Point);

	    (ws As IMetabaseObject).Save;

	End Sub Userproc;


После выполнения примера на линию будет добавлена новая точка, размещенная
 после начальной точки линии.


См. также:


[IWxLink](IWxLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
