# IEaxGridHeaderProperties.AutoIndent

IEaxGridHeaderProperties.AutoIndent
-


# IEaxGridHeaderProperties.AutoIndent


## Синтаксис


AutoIndent: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство AutoIndent определяет,
 используются ли [отступы
 элементов уровня](UiAnalyticalArea.chm::/TableView/Layout/Layout.htm) в заголовке.


## Комментарии


Если свойству установлено значение TriState.OnOption,
 то будут использоваться отступы элементов уровня. При значении TriState.OffOption
 отступы не используются.


Если свойство принимает неопределенное значение TriState.Undefined,
 то признак использования отступов наследуется от родительского заголовка.
 При этом эффективное значение с учетом наследования вернет свойство [IEaxGridHeaderProperties.IsAutoIndent](IEaxGridHeaderProperties.IsAutoIndent.htm).


По умолчанию свойству установлено значение TriState.Undefined.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором REPORT. В отчете создана аналитическая область
 данных.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Grid: IEaxGrid;

	    Slice: IEaxDataAreaPivotSlice;

	    SettBase: IDataAreaHeaderSettingsBase;

	    ViewSett: IEaxGridViewSettings;

	    Props: IEaxGridHeaderProperties;

	Begin

	    // Получим таблицу

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    Grid := Report.DataArea.Views.Item(0) As IEaxGrid;

	    // Получим срез аналитической области данных

	    Slice := Grid.Slice As IEaxDataAreaPivotSlice;

	    // Получим базовые настройки заголовков боковика

	    SettBase := Slice.Pivot.LeftHeader As IDataAreaHeaderSettingsBase;

	    // Получим настройки представления таблицы

	    ViewSett := Grid.ViewSettings;

	    // Изменим настройки отступов элементов уровней и экспандеров

	    Props := ViewSett.GetViewSettings(SettBase) As IEaxGridHeaderProperties;

	    Props.AutoIndent := Tristate.OffOption;

	    Props.Hierarchical := Tristate.OffOption;

	    Report.MetabaseObject.Save;

	End Sub UserProc;


После выполнения примера будут отключено использование экпандеров и
 отступов элементов уровней в боковике аналитической области данных.


См. также:


[IEaxGridHeaderProperties](IEaxGridHeaderProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
