# ITabRange.AppliedFormatConditions

ITabRange.AppliedFormatConditions
-


# ITabRange.AppliedFormatConditions


## Синтаксис


		AppliedFormatConditions([AllCells: Boolean
		 = false]): [ITabFormatConditions](../ITabFormatConditions/ITabFormatConditions.htm);


## Параметры


AllCells. Параметр принимает
 значения:


	- True. Список условий
	 форматирования, которые выполняются для всего диапазона ячеек;


	- False. По умолчанию.
	 Список условий форматирования, которые выполняются хотя бы для одной
	 ячейки выделенного диапазона.


## Описание


Свойство AppliedFormatConditions
 возвращает список [условий
 форматирования](UiAnalyticalArea.chm::/Analysis/Conditional_formatting.htm), которые выполняются для ячейки или
 диапазона ячеек.


## Комментарии


Типы условного форматирования содержатся в перечислении [TabConditionType](TabSheet.chm::/Enums/TabConditionType.htm).


Для определения диапазона ячеек, для которых выполняется условное форматирование
 используйте свойство [ITabFormatCondition.AppliedRange](../ITabFormatCondition/ITabFormatCondition.AppliedRange.htm).


## Пример


Для выполнения примера убедитесь, что в репозитории содержится регламентный
 отчёт с идентификатором «REGULAR_REPORT». В отчёте добавьте значения и
 настройте [формат
 ячейки](UiNav.chm::/GUI/Format.htm): добавьте несколько условий форматирования для
 выделенного диапазона ячеек на вкладке «[Форматирование по условию](UiNav.chm::/GUI/Format/UiReport_Table_Attribute_Format_condition.htm)».
 Перед выполнением примера выделите диапазон ячеек со значениями и сохраните
 отчёт.


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObject;

		    Report: IPrxReport;

		    Table: ITabSheet;

		    Range: ITabRange;

		    Conditions: ITabFormatConditions;

		    Cond: ITabFormatCondition;

		Begin

		    MB := MetabaseClass.Active;

		    MObj := MB.ItemById("REGULAR_REPORT").Edit;

		    Report := MObj As IPrxReport;

		    Table := Report.ActiveSheet.Table;

		    Range := Table.View.Selection.Range;

		    Conditions := Range.AppliedFormatConditions(True);

		    For Each Cond In Conditions Do

		        Debug.WriteLine("Тип условия: " + Cond.Type.ToString

		        + ", выполняется для всего диапазона ячеек " + Cond.AppliedRange.Address);

		    End For;

		    Conditions := Range.AppliedFormatConditions(False);

		    For Each Cond In Conditions Do

		        Debug.WriteLine("Тип условия: " + Cond.Type.ToString

		        + ", выполняется для ячеек " + Cond.AppliedRange.Address);

		    End For;

		End Sub UserProc;


После выполнения примера в консоль будут выведены [типы условного форматирования](TabSheet.chm::/Enums/TabConditionType.htm)
 с диапазоном ячеек, для которых они выполняются.


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
