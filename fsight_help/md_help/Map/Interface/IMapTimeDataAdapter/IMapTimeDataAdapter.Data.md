# IMapTimeDataAdapter.Data

IMapTimeDataAdapter.Data
-


# IMapTimeDataAdapter.Data


## Синтаксис


Data(Attribute: Variant; TimePointIndex: Integer):
 Variant;


## Параметры


Attribute. Параметр определяет,
 какие данные должен возвращать временной адаптер;


TimePointIndex. Параметр определяет
 временную точку.


## Описание


Свойство Data возвращает значение
 показателя временного адаптера в указанную временную точку.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 UiErAnalyzer с наименованиями Button1, UiErAnalyzer соответственно. В
 качестве объекта компонента UiErAnalyzer1 укажите экспресс-отчет,
 содержащего карту.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки:
 ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var i: integer; Map: IMap;

	    Visuals: IMapLayerVisuals;

	    DA: IMapTimeDataAdapter;

	Begin

	    Map := UiErAnalyzer1.ErAnalyzer.Map.Map;

	    Visuals := Map.Layers.FindByName("Regions").Visuals;

	    DA := Visuals.Item(0).DataAdapter As IMapTimeDataAdapter;

	    For i := 0 To DA.TimePointsCount - 1 Do

	        Debug.WriteLine("Name " + DA.TimePointName(i));

	        Debug.WriteLine("Value " + DA.Data(14, i) As String);

	    End For;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку «Button1» в окно консоли
 для каждой временной точки будут выведены ее наименование и значение показателя.


См. также:


[IMapTimeDataAdapter](IMapTimeDataAdapter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
