# ITabCellStyle.Hyperlink

ITabCellStyle.Hyperlink
-


# ITabCellStyle.Hyperlink


## Синтаксис


Hyperlink: [ITabHyperlink](../ITabHyperlink/ITabHyperlink.htm);


## Описание


Свойство Hyperlink определяет
 параметры гиперссылки в ячейке, реализуемые интерфейсом ITabHyperlink.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента ReportBox и компонента
 UiReport с наименованием «UiReport1». «UiReport1» является источником
 данных для компонента ReportBox. К «UiReport1» подключен какой-либо регламентный
 отчет, содержащий несколько страниц.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    TRange: ITabRange;

	    Style: ITabCellStyle;

	    Hyperlink: ITabHyperlink;

	Begin

	    TSheet := ((UiReport1.Instance As IPrxReport).ActiveSheet As IPrxTable).TabSheet;

	    TRange := TSheet.Cell(0, 0);

	    Style := TRange.Style;

	    Hyperlink := Style.Hyperlink;

	    Hyperlink.Action := "=Лист2";

	    Hyperlink.Enable := TriState.OnOption;

	    Hyperlink.SeparateLinkText := TriState.OnOption;

	    Hyperlink.Text := "Перейти на Лист2";

	End Sub Button1OnClick;


При нажатии на кнопку в ячейке «А0» активного листа регламентного отчета
 будет создана гиперссылка. Текст гиперссылки «Перейти на Лист2». При нажатии
 на данную гиперссылку будет осуществляться переход на страницу регламентного
 отчета с наименованием «Лист2».


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
