# ITabCellStyle.DisplayEmptyAs

ITabCellStyle.DisplayEmptyAs
-


# ITabCellStyle.DisplayEmptyAs


## Синтаксис


DisplayEmptyAs: String;


## Описание


Свойство DisplayEmptyAs определяет
 текстовое содержимое, задаваемое для ячеек, в которых отсутствует значение.


## Комментарии


Замена пустых ячеек зависит от прав доступа к данным, которые содержатся
 в ячейках. Права доступа определяются с помощью [объектов
 полномочий](BPM.chm::/Desktop/Facility_Agreement/Create_Authorization_Object.htm) или [сегментами куба](UiNavObj.chm::/Cube/segments/segments.htm).
 По умолчанию используется полный доступ к данным. Если свойство [ITabCellStyle.AccessRights](ITabCellStyle.AccessRights.htm)
 возвращает значение [TabAccessRights.NoAccess](../../Enums/TabAccessRights.htm)
 или [TabAccessRights.Write](../../Enums/TabAccessRights.htm),
 то замена пустых ячеек будет недоступна.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта с
 идентификатором REGULAR_REPORT. В отчёте могут содержаться значения в
 произвольных ячейках таблицы.


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    TabSheet: ITabSheet;

	    TRange: ITabRange;

	    Style: ITabCellStyle;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчёт

	    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

	    // Получим таблицу

	    TabSheet := (Report.ActiveSheet As IPrxTable).TabSheet;

	    // Зададим диапазон ячеек

	    TRange := TabSheet.Cells(1,2,3,5);

	    // Заменим пустые ячейки на заданное значение

	    Style:= TRange.Style;

	    Style.DisplayEmptyAs:= "Пусто";

	    // Сохраним изменения

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для ячеек, в которых отсутствуют значения
 в диапазоне С1:F3, будет отображаться текст «Пусто».


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
