# IMap.SaveToXml

IMap.SaveToXml
-


# IMap.SaveToXml


## Синтаксис


SaveToXml(SaveMethod: [MapXmlSaveMethod](../../Enums/MapXmlSaveMethod.htm)):
 String;


## Параметры


SaveMethod. Метод, с помощью
 которого будет произведена выгрузка.


## Описание


Метод SaveToXml выгружает карту
 в формат XML.


## Пример


Для выполнения примера потребуется экспресс-отчёт с идентификатором
 EXPRESS_REPORT и размещённой на нём картой.


Добавьте ссылки на системные сборки: Express, Map, Metabase.


	Sub UserProc;

	Var

	    MetaBase: IMetabase;

	    XMLSave: string;

	Begin

	    MetaBase := MetabaseClass.Active;

	    XMLSave := (MetaBase.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer).Map.Map.SaveToXml(MapXmlSaveMethod.Visual);

	    Debug.WriteLine(XMLSave);

	End Sub UserProc;


После выполнения примера оформление карты экспресс-отчёта будет выгружено
 в формат XML.


См. также:


[IMap](IMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
