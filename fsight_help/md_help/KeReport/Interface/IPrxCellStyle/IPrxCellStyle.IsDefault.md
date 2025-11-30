# IPrxCellStyle.IsDefault

IPrxCellStyle.IsDefault
-


# IPrxCellStyle.IsDefault


## Синтаксис


IsDefault: Boolean;


## Описание


Свойство IsDefault определяет,
 используется ли значение оформления по умолчанию.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта с
 идентификатором REPORT с реляционной областью данных.


Добавьте ссылки на системные сборки: Metabase, Report.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Report: IPrxReport;

	    TabIs: IPrxTableIslands;

	    TI: IPrxTableIsland;

	    Layout: IPrxTableIslandLayout;

	    LayFormat: IPrxTableIslandFormat;

	    Style1: IPrxCellStyle;

	    b: boolean;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем регламентный отчёт

	    Report := mb.ItemById("REPORT").Edit As IPrxReport;

	    // Получаем реляционную область данных

	    TabIs := Report.TableIslands;

	    TI := TabIs.Item(0);

	    TI := TI.Edit;

	    Layout := TI.Layout;

	    // Получаем параметры оформления реляционной области

	    LayFormat := Layout.Format;

	    Style1 := LayFormat.Style;

	    b := Style1.IsSet;

	    If b = False Then

	        Debug.WriteLine("Оформление по умолчанию");

	    Else

	        Style1.IsDefault := True;

	    End If;

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера оформление реляционной области данных будет
 установлено по умолчанию.


См. также:


[IPrxCellStyle](IPrxCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
