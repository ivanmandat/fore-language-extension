# IWxShape.ConnectedCPs

IWxShape.ConnectedCPs
-


# IWxShape.ConnectedCPs


## Синтаксис


		ConnectedCPs(ConnectionPointIndex: Integer;
		 ConnectedCPShapeIndex: Integer): Integer;


## Параметры


ConnectionPointIndex. Индекс
 точки соединения исходного объекта (на изображении данная точка отображена
 красным цветом);


ConnectedCPShapeIndex. Индекс
 фигуры, соединенной с объектом в точке ConnectionPointIndex
 (на изображении таких фигур две: A и B).


## Описание


Свойство ConnectedCP возвращает
 индекс точки соединения фигуры, соединенной с исходным объектом в заданной
 точке.


## Комментарии


На схеме черным цветом изображены индексы точек соединения исходного
 объекта, синим и зеленым цветом изображены индексы точек соединения фигур,
 соединенных с объектом в точке ConnectionPointIndex,
 изображенной красным цветом:


![](ConnectedCPs.png)


Фигуры, соединенные с объектом в данной точке две: А и B. Для обоих
 фигур свойство вернет индекс «0».


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором WSP, содержащего несколько соединенных фигур.


Добавьте ссылки на системные сборки: Andy, Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    ws: IWxWorkspace;

		    i, j, ISh: Integer;

		    Shape: IWxShape;

		Begin

		    MB := MetabaseClass.Active;

		    // Получаем рабочее пространство

		    ws := MB.ItemById("WSP").Edit As IWxWorkspace;

		    Shape := ws.Shapes.Item(0);

		    For i := 0 To Shape.ConnectionPointsCount - 1 Do

		        If Shape.ConnectedCpShapesCount(i) > 0 Then

		            For j := 0 To Shape.ConnectedCpShapesCount(i) - 1 Do

		                ISh := Shape.ConnectedCPs(i, j);

		                Debug.WriteLine("Индекс точки соединения " + ISh.ToString + " для объекта с ConnectedCPShapeIndex = " + j.ToString);

		            End For;

		        End If;

		    End For;

		    // Сохраняем изменения

		    (ws As IMetabaseObject).Save;

		End Sub UserProc;


В процессе выполнения примера будут поэтапно выдаваться сообщения, содержащие
 индекс точки соединения фигуры, соединенной с исходным объектом в точке
 ConnectionPointIndex.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
