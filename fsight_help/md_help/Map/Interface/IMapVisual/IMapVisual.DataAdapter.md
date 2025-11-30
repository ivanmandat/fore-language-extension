# IMapVisual.DataAdapter

IMapVisual.DataAdapter
-


# IMapVisual.DataAdapter


## Синтаксис


DataAdapter: Object;


## Описание


Свойство DataAdapter определяет
 источник данных для показателя.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. В репозитории должна иметься
 карта с идентификатором «USA». Класс VisualDataAdapter реализует динамический
 источник данных.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки:
 ExtCtrls, Forms, Map, MathFin, Metabase.


	Var Count: Integer;


	Class VisualDataAdapter: Object, IMapDynamicDataAdapter


	        Function Get_PartCount(Attribute: Variant; TimePoint: Integer): Integer;

	        Begin

	            Return Count;

	        End Function Get_PartCount;


	        Function Get_TimePointName(TimePoint: Integer): String;

	        Begin

	            Return "TimePoint " + TimePoint.ToString;

	        End Function Get_TimePointName;


	        Function Get_TimePointsCount: Integer;

	        Begin

	            Return 4;

	        End Function Get_TimePointsCount;


	        Function Get_Data(Attribute: Variant; PartvIndex: Integer; TimePoint: Integer): Variant;

	        Var t: Integer;

	            i: Integer;

	        Begin

	            t := 1;

	            For i := 0 To TimePoint Do

	                t := t + 10;

	            End For;

	            Return Math.Rand * 10 * t;

	        End Function Get_Data;


	        Function Get_CustomFormat: String;

	        Begin

	            Return "#0,000";

	        End Function Get_CustomFormat;


	End Class VisualDataAdapter;


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    Layer: IMapLayer;

	    BarVisual: IMapBarVisual;

	Begin

	    UiMap1.Map.Topobase := MetabaseClass.Active.ItemById("USA").Bind As IMapTopobase;

	    // Определим карту

	    Map := UiMap1.Map;

	    // Найдём слой по наименованию

	    Layer := Map.Layers.FindByName("Regions");

	    // Добавим столбиковый показатель

	    BarVisual := Layer.Visuals.AddBarVisual;

	    // Прекратим отрисовку показателя

	    BarVisual.BeginUpdate;

	    // Определим адаптер данных показателя

	    BarVisual.DataAdapter := New VisualDataAdapter.Create As IMapDynamicDataAdapter;

	    // Зададим наименование атрибута привязки показателя

	    BarVisual.AttributeName := "Id";

	    // Зададим наименование показателя

	    BarVisual.Name := "Столбиковый0";

	    // Зададим ширину частей показателя

	    BarVisual.Width.Value := 4;

	    // Возобновим отрисовку показателя

	    BarVisual.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера на слой «Regions» будет добавлен столбиковый
 показатель с наименованием «Столбиковый0». Во время добавления показателя
 его отрисовка будет приостановлена.


См. также:


[IMapVisual](IMapVisual.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
