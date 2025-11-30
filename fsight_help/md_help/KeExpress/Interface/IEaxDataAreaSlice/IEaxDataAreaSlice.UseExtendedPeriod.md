# IEaxDataAreaSlice.UseExtendedPeriod

IEaxDataAreaSlice.UseExtendedPeriod
-


# IEaxDataAreaSlice.UseExtendedPeriod


## Синтаксис


UseExtendedPeriod: Boolean;


## Описание


Свойство UseExtendedPeriod
 определяет, используется ли период загрузки данных.


## Комментарии


Допустимые значения:


	- True. Используется период
	 загрузки данных, заданный свойствами [IEaxDataAreaSlice.ExtendedPeriodStart](IEaxDataAreaSlice.ExtendedPeriodStart.htm)
	 и [IEaxDataAreaSlice.ExtendedPeriodEnd](IEaxDataAreaSlice.ExtendedPeriodEnd.htm).
	 Период загрузки данных учитывается при расчете валидаций и трансформаций;


	- False. Период загрузки
	 данных не используется.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором TSBD.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    CrInf: IMetabaseObjectCreateInfo;

	    Analyzer: IEaxAnalyzer;

	    i: Integer;

	    SelSet: IDimSelectionSet;

	    Sel: IDimSelection;

	    AreaSlice: IEaxDataAreaSlice;

	Begin

	    // Получаем правило валидации

	    Mb := MetabaseClass.Active;

	    // Создаем экспресс-отчет

	    CrInf := Mb.CreateCreateInfo;

	    CrInf.Permanent := True;

	    CrInf.KeepEdit := True;

	    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

	    Analyzer := Mb.CreateObject(CrInf).Edit As IEaxAnalyzer;

	    // Задаем источник данных

	    Analyzer.DataSourceDescriptor := Mb.ItemById("TSDB");

	    Analyzer.Mode := EaxMode.MultiDimension;

	    // Задаем отметку

	    SelSet := Analyzer.Pivot.Selection;

	    For i := 0 To SelSet.Count - 1 Do

	        Sel := SelSet.Item(i);

	        Sel.DeselectAll;

	        Sel.SelectElement(0, True);

	    End For;

	    // Получаем срез данных

	    AreaSlice := Analyzer.Grid.Slice;

	    // Задаем период загрузки данных

	    AreaSlice.ExtendedPeriodStart := DateTime.Parse("01.01.1990");

	    AreaSlice.ExtendedPeriodEnd := DateTime.Parse("01.01.2020");

	    AreaSlice.UseExtendedPeriod := True;

	    // Сохраняем изменения

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будет создан экспресс-отчет с ограниченным
 периодом загрузки данных.


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
