# IMap.Type

IMap.Type
-


# IMap.Type


## Синтаксис


Type: [MapType](../../Enums/MapType.htm);


## Описание


Свойство Type определяет тип
 карты.


## Пример


Для выполнения примера понадобится экспресс-отчёт с идентификатором
 EXPRESS_REPORT и размещённой на нём картой.


Добавьте ссылки на системные сборки: Express, Map, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    TypeMap: MapType;

	Begin

	    MB := MetabaseClass.Active;

	    Express := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    Express.Map.Map.Type := TypeMap.SVG;

	    (Express As IMetaBaseObject).Save;

	End Sub UserProc;


После выполнения примера для карты экспресс-отчёта будет установлен
 тип SVG.


См. также:


[IMap](IMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
