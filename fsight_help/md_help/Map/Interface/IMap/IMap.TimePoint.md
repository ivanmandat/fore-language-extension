# IMap.TimePoint

IMap.TimePoint
-


# IMap.TimePoint


## Синтаксис


TimePoint: Integer;


## Описание


Свойство TimePoint определяет
 текущую временную точку временной шкалы.


## Комментарии


Временная шкала используется для отображения изменения данных с течением
 времени:


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 EXPRESS_MAP, в котором настроено отображение карты. Для карты должен быть
 установлен слой карты с идентификатором «Regions».


Добавьте ссылки на системные сборки: Express, Map, Metabase.


	Sub main;

	Var

	    mb: IMetabase;

	    Express: IEaxAnalyzer;

	    Map: IMap;

	    TimePoint: Integer;

	Begin

	    mb := MetabaseClass.Active;

	    Express := mb.ItemById("EXPRESS_MAP").Bind As IEaxAnalyzer;

	    Map := Express.Map.Map;

	    TimePoint := Map.TimePoint;

	    Debug.WriteLine("Time Point: " + TimePoint.ToString);

	End Sub main;


После выполнения примера в окно консоли будет выведен номер текущей
 временной точки временной шкалы. Нумерация начинается с нуля.


Например, если в экспресс-отчете была установлена временная точка:


![](TimePoint.gif)


то в окно консоли будет выведено:


Time Point: 2


См. также:


[IMap](IMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
