# IEaxDataAreaSlice.IndicatorsDimension

IEaxDataAreaSlice.IndicatorsDimension
-


# IEaxDataAreaSlice.IndicatorsDimension


## Синтаксис


IndicatorsDimension: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Описание


Свойство IndicatorsDimension
 определяет [измерение
 метрик](UiMaps.chm::/Common/Metrics.htm) для карты.


## Комментарии


Измерение метрик - это измерение, по отмеченным элементам которого будет
 закрашена карта и настроены её прочие визуальные элементы.


Для определения измерения шкалы времени для карты используйте [IEaxDataAreaSlice.TimeLineDimension](IEaxDataAreaSlice.TimeLineDimension.htm).


Для определения измерения объектов наблюдения для карты используйте
 [IEaxDataAreaSlice.ObjectivesDimension](IEaxDataAreaSlice.ObjectivesDimension.htm).


## Пример


Для выполнения примера необходимо наличие:


	- экспресс-отчета с идентификатором EXPRESS, содержащего таблицу
	 и карту;


	- измерения фактов с ключом 10124;


	- календарного измерения с ключом 10127;


	- измерения территориальных образований с ключом 10152, содержащего
	 [стрелки](UiMaps.chm::/Configure/Arrows.htm);


Добавьте ссылку на системные сборки: Dimensions, Express, Metabase,
 Pivot.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    DataArea: IEaxDataArea;

	    Slice: IEaxDataAreaSlice;

	    Facts, Calendar, Terrytory, GeoLoc: IDimInstance;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим область данных

	    DataArea := Express.DataArea;

	    // Получим срез данных

	    Slice := DataArea.Slices.Item(0);

	    // Определим роли измерения

	    // Измерение фактов

	    Facts := Express.Pivot.Dimensions.FindByKey(10124).DimInstance;

	    Slice.IndicatorsDimension := Facts;

	    // Измерение шкалы времени

	    Calendar := Express.Pivot.Dimensions.FindByKey(10127).DimInstance;

	    Slice.TimeLineDimension := Calendar;

	    // Измерение объектов наблюдения

	    Terrytory := Express.Pivot.Dimensions.FindByKey(10152).DimInstance;

	    Slice.ObjectivesDimension := Terrytory;

	    // Измерение направлениястрелок

	    Arrows := Express.Pivot.Dimensions.FindByKey(10152).DimInstance;

	    Slice.SecondaryObjectivesDimension := Arrows;

	    // Сохраним изменения

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в экспресс-отчете для карты будут включены
 указанные роли для указанных измерений.


См. также:


[IEaxDataAreaSlices](../IEaxDataAreaSlices/IEaxDataAreaSlices.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
