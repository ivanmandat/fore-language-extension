# ITabCellStyle.AccessRights

ITabCellStyle.AccessRights
-


# ITabCellStyle.AccessRights


## Синтаксис


AccessRights: [TabAccessRights](../../Enums/TabAccessRights.htm);


## Описание


Свойство AccessRights возвращает
 права доступа на данные для данного стиля.


## Комментарии


Права на данные могут быть ограничены с помощью [объектов
 полномочий](BPM.chm::/Desktop/Facility_Agreement/Create_Authorization_Object.htm) или [сегментами куба](UiNavObj.chm::/Cube/segments/segments.htm).


По умолчанию используется полный доступ к данным. Если свойство возвращает
 значение [TabAccessRights.NoAccess](../../Enums/TabAccessRights.htm)
 или [TabAccessRights.Write](../../Enums/TabAccessRights.htm),
 то учитывайте следующие ограничения:


	- данные, содержащиеся в ячейках, не отображаются;


	- замена [пустых](ITabCellStyle.DisplayEmptyAs.htm)
	 и [нулевых](ITabCellStyle.DisplayZeroAs.htm) ячеек недоступна.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта с
 идентификатором REGULAR_REPORT.


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    TabSheet: ITabSheet;

	    Style: ITabCellStyle;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчёт

	    Report := MB.ItemById("REGULAR_REPORT").Bind As IPrxReport;

	    // Получим таблицу

	    TabSheet := (Report.ActiveSheet As IPrxTable).TabSheet;

	    // Получим стиль отображения диапазона ячеек

	    Style := TabSheet.ParseRange("C3:C6").Style;

	    // Просмотр прав доступа на данные диапазона

	    Debug.WriteLine(Style.AccessRights);

	End Sub UserProc;


При выполнении примера в консоль среды разработки будут выведены права
 текущего пользователя на данные указанного диапазона ячеек активного листа
 отчёта.


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
