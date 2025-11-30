# IReportBox.FindReplaceEx

IReportBox.FindReplaceEx
-


# IReportBox.FindReplaceEx


## Синтаксис


FindReplaceEx(CellSearch: [ITabCellSearch](TabSheet.chm::/Interface/ITabCellSearch/ITabCellSearch.htm);
 Replace: Boolean);


## Параметры


CellSearch. Определяет параметры
 поиска, которые будут отображаться в вызываемом диалоге при его открытии.


Replace. Определяет активную
 вкладку при открытии диалога. Если указать True, то при открытии активной
 будет вкладка «Заменить».


## Описание


Метод FindReplaceEx вызывает
 окно поиска/замены в регламентном отчете.


## Пример


Для выполнения примера необходимо создать форму с компонентами: Button,
 UiReport и ReportBox с идентификатором «ReportBox1». Указать объект для
 UiReport. Указать источник данных UiReport для ReportBox1. Добавить ссылки
 на системные сборки «Metabase», «Report», «Tab», «Forms»
 и «ExtCtrls».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var Tab: ITabSheet;

	    SR: ITabCellSearch;

	Begin

	    Tab := (UiReport1.Report.ActiveSheet As IPrxTable).TabSheet;

	    SR := Tab.CreateCellSearch;

	    SR.CaseSensitive := False;

	    SR.Text := "1";

	    ReportBox1.FindReplaceEx(SR, False);

	End Sub Button1OnClick;


	После выполнения примера при нажатии на кнопку будет активизировано
	 окно поиска в регламентном отчете. При поиске будет учитываться
	 регистр символов. Текст, который будет искаться в ячейках "1".
	См. также:


	[IReportBox](IReportBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
