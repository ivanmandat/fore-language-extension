# IEaxDataAreaSlice.Topobase

IEaxDataAreaSlice.Topobase
-


# IEaxDataAreaSlice.Topobase


## Синтаксис


Topobase: [ITopobase](KeTopobase.chm::/Interface/ITopobase/ITopobase.htm);


## Описание


Свойство Topobase определяет
 топооснову, на базе которой строится карта экспресс-отчета.


## Комментарии


В [топооснове](UiMaps.chm::/Common/Topobase.htm)
 картографические данные содержатся в виде набора слоёв. Каждый слой описан
 специальными атрибутами и представят собой отдельный класс картографических
 данных. Например, слой с координатами городов или слой, описывающий
 контуры государств.


Для сброса топоосновы на [заданную
 в репозитории по умолчанию](KeSom.chm::/Interface/IMetabase/IMetabase.SpecialObject.htm) используйте метод [IEaxDataAreaSlice.ResetTopobase](IEaxDataAreaSlice.ResetTopobase.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие карты с идентификатором
 RF и экспресс-отчета с идентификатором EXPRESS_TOPOBASE. Отчет должен
 содержать карту.


Добавьте ссылки на системные сборки: Express, Metabase, Topobase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    DataArea: IEaxDataArea;

	    Slice: IEaxDataAreaSlice;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Analyzer := MB.ItemById("EXPRESS_TOPOBASE").Edit As IEaxAnalyzer;

	    // Получим область данных

	    DataArea := Analyzer.DataArea;

	    // Получим срез данных

	    Slice := DataArea.Slices.Item(0);

	    // Определим топооснову

	    Slice.Topobase := MB.ItemById("RF").Bind As ITopobase;

	    Analyzer.MapChart.Visible := True;

	    // Сохраним изменения

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет определена новая топооснова, на базе
 которой будет построена карта в экспресс-отчете.


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
