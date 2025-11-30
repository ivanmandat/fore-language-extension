# IWxShape.AddConnectionPoint

IWxShape.AddConnectionPoint
-


# IWxShape.AddConnectionPoint


## Синтаксис


		AddConnectionPoint(Point: [IGxPointF](ModDrawing.chm::/Interface/IGxPointF/IGxPointF.htm)):
		 Integer;


## Параметры


Point.
 Точка соединения объекта.


## Описание


Метод AddConnectionPoint добавляет точку
 соединения объекта.


## Комментарии


Переданные пользователем координаты автоматически корректируются, чтобы
 попадать на границу [IWxShape](IWxShape.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP», содержащего фигуру.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    wsp: IWxWorkspace;

		    Shape: IWxShape;

		    Point: IGxPointF;

		Begin

		    // Получаем рабочее пространство для редактирования

		    mb := MetabaseClass.Active;

		    wsp := mb.ItemById("WSP").Edit As IWxWorkspace;

		    // Получаем фигуру

		    Shape := wsp.Shapes.Item(0);

		    // Создаем точку с координатами

		    Point := New GxPointF.Create(15, 15);

		    // Добавляем точку соединения

		    Shape.AddConnectionPoint(Point);

		    // Сохраняем изменения

		    (Wsp As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера на фигуру добавится соединительная точка
 с заданными координатами.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
