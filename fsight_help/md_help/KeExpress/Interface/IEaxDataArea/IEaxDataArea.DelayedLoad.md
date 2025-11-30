# IEaxDataArea.DelayedLoad

IEaxDataArea.DelayedLoad
-


# IEaxDataArea.DelayedLoad


## Синтаксис


DelayedLoad: Boolean;


## Описание


Свойство DelayedLoad определят
 возможность отложенной загрузки листов аналитической области.


## Комментарии


Допустимые значения:


	- True. Загрузка всех
	 листов отложена. Загружается только активный лист. Значение по умолчанию
	 при работе с формами ввода;


	- False. Загружаются все
	 листы аналитической области. Значение по умолчанию при работе с отчётами.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS, который содержит два листа.


Использование свойства для форм ввода приведено в примере для [IEaxDataAreaSource.IsLoaded](../IEaxDataAreaSource/IEaxDataAreaSource.IsLoaded.htm).


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Area: IEaxDataArea;

	    Sheets: IEaxSheets;

	    Sheet: IEaxSheet;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим аналитическую область экспресс-отчёта

	    Area := Express.DataArea;

	    // Установим отсроченную загрузку листов

	    Area.DelayedLoad := True;

	    // Получим листы отчёта

	    Sheets := Express.Sheets;

	    // Установим второй лист активным

	    Sheet := Sheets.Item(1);

	    Sheet.Active := True;

	    // Загрузим первый лист отчёта

	    Sheet := Sheets.Item(0);

	    If Not Sheet.IsLoaded Then

	        Sheet.Load;

	    End If;

	    // Сохраним отчёт

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для экспресс-отчёта будет задана отложенная
 загрузка листов, второй лист будет активным, первый лист будет загружен.


См. также:


[IEaxDataArea](IEaxDataArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
