# ITabHyperlink.Underline

ITabHyperlink.Underline
-


# ITabHyperlink.Underline


## Синтаксис


Underline: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство Underline определяет,
 будет ли гиперссылка подчеркнутой.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «REP_TABSHEET». В данном отчете должен присутствовать
 лист «Лист2».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    SheetT: IPrxTable;

	    Tab: ITabSheet;

	    Range: ITabRange;

	    Hyperlink: ITabHyperlink;

	Begin

	    MB := MetabaseClass.Active;

	    Rep := MB.ItemById("REP_TABSHEET").Edit As IPrxReport;

	    SheetT := Rep.Sheets.Item(0) As IPrxTable;

	    Tab := SheetT.TabSheet;

	    Range := Tab.Cell(0, 0);

	    Hyperlink := Range.Style.Hyperlink;

	    Hyperlink.Action := "=Лист2";

	    Hyperlink.Enable := TriState.OnOption;

	    Hyperlink.SeparateLinkText := TriState.OnOption;

	    Hyperlink.Text := "Goto_List2";

	    Hyperlink.Underline := TriState.OffOption;

	    Hyperlink.UseGlobalSettings := TriState.OffOption;

	    (Rep As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в ячейке «А0» регламентного отчета будет создана
 гиперссылка с текстом «Goto_List2», при нажатии на которую будет осуществляться
 переход на «Лист2». Для гиперссылки не будут применяться глобальные настройки
 стиля, также она не будет подчеркнутой.


См. также:


[ITabHyperlink](ITabHyperlink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
