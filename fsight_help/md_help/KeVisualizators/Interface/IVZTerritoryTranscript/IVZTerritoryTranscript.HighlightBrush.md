# IVZTerritoryTranscript.HighlightBrush

IVZTerritoryTranscript.HighlightBrush
-


# IVZTerritoryTranscript.HighlightBrush


## Синтаксис


HighlightBrush: [IGxBrush](ModDrawing.chm::/Interface/IGxBrush/IGxBrush.htm);


## Описание


Свойство HighlightBrush определяет
 настройки кисти для подсветки элементов расшифровки территорий.


## Комментарии


Для определения максимального количества элементов в расшифровке используйте
 [IVZTerritoryTranscript.MaxItemsCount](IVZTerritoryTranscript.MaxItemsCount.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS, содержащего карту.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    MC: IVZMapChart;

	    TT: IVZTerritoryTranscript;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим карту

	    MC := Express.MapChart.MapChart;

	    // Получим расшифровку территорий

	    TT := MC.TerritoryTranscript;

	    // Включим расшифровку территорий

	    TT.Visible := True;

	    // Определим цвет подсветки элементов расшифровки территорий

	    TT.HighlightBrush := New GxSolidBrush.Create(GxColor.FromName("Red"));

	    // Сохраним изменения

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера при наведении курсора на необходимую территорию
 будет подсвечен красным цветом соответствующий элемент расшифровки.


См. также:


[IVZTerritoryTranscript](IVZTerritoryTranscript.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
