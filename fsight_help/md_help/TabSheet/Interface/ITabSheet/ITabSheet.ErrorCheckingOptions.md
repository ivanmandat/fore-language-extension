# ITabSheet.ErrorCheckingOptions

ITabSheet.ErrorCheckingOptions
-


# ITabSheet.ErrorCheckingOptions


## Синтаксис


ErrorCheckingOptions: [ITabErrorCheckingOptions](../ITabErrorCheckingOptions/ITabErrorCheckingOptions.htm);


## Описание


Свойство ErrorCheckingOptions
 возвращает параметры индикации ошибок в формулах таблицы.


## Комментарии


Для проверки, осуществляется ли проверка и индикация ошибок в формулах,
 используйте свойство [ITabErrorCheckingOptions.EnableChecking](../ITabErrorCheckingOptions/ITabErrorCheckingOptions.EnableChecking.htm).


## Пример


Для выполнения примера предполагается регламентного отчета с идентификатором
 «REGULAR_REPORT».


Добавьте ссылки на системные сборки Metabase, Report, Tab.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    tabSheet: ITabSheet;

    Sheet: IPrxTable;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    Sheet := Report.Sheets.Item(0) As IPrxTable;

    tabSheet := Sheet.TabSheet;

    tabSheet.ErrorCheckingOptions.EnableChecking := True;

    tabSheet.ErrorCheckingOptions.EmptyValuesTreatmentType := TabEmptyValuesTreatmentType.AsZeroWithInfo;

    tabSheet.ErrorCheckingOptions.NumberAsText := True;

    tabSheet.Recalc;

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будут настроены параметры индикации ошибок
 в формулах таблицы:


	- включена проверка и индикация ошибок;


	- в формулы, ссылающиеся на пустые значения, для расчета будет
	 подставляться ноль и отображаться индикатор ошибки;


	- числа, отформатированные как текст, будут помечены ошибочными.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
