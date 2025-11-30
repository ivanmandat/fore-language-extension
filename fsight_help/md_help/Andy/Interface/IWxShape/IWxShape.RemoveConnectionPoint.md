# IWxShape.RemoveConnectionPoint

IWxShape.RemoveConnectionPoint
-


# IWxShape.RemoveConnectionPoint


## Синтаксис


RemoveConnectionPoint(Index: Integer);


## Параметры


Index. Индекс точки соединения
 объекта.


## Описание


Метод RemoveConnectionPoint
 удаляет точку соединения объекта.


## Комментарии


Для получения количества точек соединения объекта используйте свойство
 [IWxShape.ConnectionPointCount](IWxShape.ConnectionPointsCount.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP, содержащего несколько соединенных
 фигур.


Добавьте ссылки на системные сборки: Andy, Metabase.


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    Wsp: IWxWorkspace;

	    Shape: IWxShape;

	Begin

	    // Получаем рабочее пространство для редактирования

	    Mb := MetabaseClass.Active;

	    Wsp := Mb.ItemById("WSP").Edit As IWxWorkspace;

	    // Получаем фигуру

	    Shape := Wsp.Shapes.Item(0);

	    // Удаляем последнюю добавленную точку соединения объекта при

	    // условии, что количество точек не равно 0

	    If Shape.ConnectionPointsCount <> 0 Then

	        Shape.RemoveConnectionPoint(Shape.ConnectionPointsCount - 1);

	    End If;

	    // Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера на фигуре удалится точка соединения.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
