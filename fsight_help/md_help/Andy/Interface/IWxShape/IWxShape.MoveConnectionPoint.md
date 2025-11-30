# IWxShape.MoveConnectionPoint

IWxShape.MoveConnectionPoint
-


# IWxShape.MoveConnectionPoint


## Синтаксис


MoveConnectionPoint(Index: Integer; Point: [IGxPointF](ModDrawing.chm::/Interface/IGxPointF/IGxPointF.htm));


## Параметры


Index. Индекс точки соединения
 объекта;


Point.
 Точка, в которую требуется переместить точку соединения объекта.


## Описание


Метод MoveConnectionPoint перемещает
 точку соединения объекта в указанную точку.


## Комментарии


Для получения количества точек соединения объекта используйте свойство
 [IWxShape.ConnectionPointCount](IWxShape.ConnectionPointsCount.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP», содержащего несколько соединенных фигур.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    mb: Imetabase;

	    wsp: IWxWorkspace;

	    Shape: IWxShape;

	    Point: IGxpointF;

	Begin

	    //Получаем рабочее пространство для редактирования

	    mb := MetabaseClass.Active;

	    wsp := mb.ItemById("Workspace").Edit As IWxWorkspace;

	    // Получаем фигуру

	    Shape := wsp.Shapes.Item(0);

	    // Создаем точку с новыми координатами

	    Point := New GxPointF.Create(100, 100);

	    // Присваиваем последней добавленной точке указанные координаты при условии, что количество точек не равно 0

	    If Shape.ConnectionPointsCount <> 0 Then

	        Shape.MoveConnectionPoint(Shape.ConnectionPointsCount - 1, Point);

	    End If;

	    //Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера точка соединения фигуры переместится
 в точку с заданными координатами.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
