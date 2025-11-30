# IWxShape.ConnectionPoints

IWxShape.ConnectionPoints
-


# IWxShape.ConnectionPoints


## Синтаксис


ConnectionPoints(Index: Integer): [IGxPointF](ModDrawing.chm::/Interface/IGxPointF/IGxPointF.htm);


## Параметры


Index. Индекс точки соединения
 объекта.


## Описание


Свойство ConnectionPoints возвращает
 координаты точек соединения объекта.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP, содержащего несколько соединенных
 фигур.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Wsp: IWxWorkspace;

	    i: Integer;

	    X, Y: Double;

	    Shape: IWxShape;

	Begin

	    MB := MetabaseClass.Active;

	    // Получаем рабочее пространство

	    Wsp := MB.ItemById("WSP").Edit As IWxWorkspace;

	    Shape := Wsp.Shapes.Item(0);

	    For i := 0 To Shape.ConnectionPointsCount - 1 Do

	        X := Shape.ConnectionPoints(i).X;

	        Y := Shape.ConnectionPoints(i).Y;

	        Debug.WriteLine("X " + X.ToString + #10 + #13 + "Y " + Y.ToString);

	    End For;

	    // Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


В процессе выполнения примера будут поэтапно выдаваться сообщения, содержащие
 координаты точек соединения объекта.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
