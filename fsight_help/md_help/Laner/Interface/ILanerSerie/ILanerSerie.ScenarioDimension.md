# ILanerSerie.ScenarioDimension

ILanerSerie.ScenarioDimension
-


# ILanerSerie.ScenarioDimension


## Синтаксис


ScenarioDimension: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Описание


Свойство ScenarioDimension
 возвращает сценарное измерение ряда.


## Комментарии


Для получения календарного измерения ряда используйте свойство [ILanerSerie.CalendarDim](ILanerSerie.CalendarDim.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором WORKBOOK_SCENARIO, содержащей несколько рядов.
 База данных временных рядов, являющаяся источником данных для рабочей
 книги, должна содержать более одного сценария.


Добавьте ссылки на системные сборки: Dimensions, Express, Laner, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    WbkObj: IMetabaseObject;

	    EaxAn: IEaxAnalyzer;

	    Laner: ILaner;

	    CalcSerie: ILanerCalculateSerie;

	    ScenDim: IDimInstance;

	    Attributes: IDimAttributesInstance;

	    ScenKey: Integer;

	Begin

	    // Получаем рабочую книгу

	    mb := MetabaseClass.Active;

	    WbkObj := mb.ItemById("WORKBOOK_SCENARIO").Edit;

	    EaxAn := WbkObj As IEaxAnalyzer;

	    // Получаем объект для настройки рабочей книги

	    Laner := EaxAn.Laner;

	    // Получаем первый ряд рабочей книги

	    CalcSerie := Laner.Series.Item(0) As ILanerCalculateSerie;

	    // Получаем сценарное измерение ряда

	    ScenDim := CalcSerie.ScenarioDimension;

	    // Получаем ключ второго сценария в сценарном измерении

	    Attributes := ScenDim.Attributes;

	    ScenKey := Attributes.item(1).Value(1);

	    CalcSerie.ScenarioKey := ScenKey;

	    // Сохраняем изменения

	    WbkObj.Save;

	End Sub UserProc;


В результате выполнения примера для первого ряда в рабочей книге будет
 изменён сценарий.


См. также:


[ILanerSerie](ILanerSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
