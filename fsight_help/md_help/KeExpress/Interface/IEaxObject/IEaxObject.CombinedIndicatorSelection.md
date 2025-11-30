# IEaxObject.CombinedIndicatorSelection

IEaxObject.CombinedIndicatorSelection
-


# IEaxObject.CombinedIndicatorSelection


## Синтаксис


CombinedIndicatorSelection: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);


## Описание


Свойство CombinedIndicatorSelection
 возвращает отметку всех метрик измерения в представлении.


## Комментарии


Для получения отметки метрики измерения в представлении используйте
 [IEaxObject.IndicatorSelection](IEaxObject.IndicatorSelection.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчета с идентификатором REPORT, содержащего таблицу. В одном из фиксированных
 измерений должно быть настроено несколько типов метрик.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Slice: IEaxDataAreaSlice;

	    Grid: IEaxObject;

	    Index: Integer;

	    Sel, CombSel: IDimSelection;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("REPORT").Bind As IPrxReport;

	    Slice := Report.DataArea.Slices.Item(0);

	    Grid := Slice.Views.Item(0);

	    Sel := Grid.IndicatorSelection(EaxGridIndicatorType.FontSize);

	    CombSel := Grid.CombinedIndicatorSelection;

	    Debug.WriteLine("Измерение метрик - " + Sel.Dimension.Name);

	    Debug.WriteLine("Комбинированная отметка метрик измерения - " + CombSel.ToString("", ", ", False));

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены: наименование
 измерения метрик, отметка метрик данного измерения.


См. также:


[IEaxObject](IEaxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
