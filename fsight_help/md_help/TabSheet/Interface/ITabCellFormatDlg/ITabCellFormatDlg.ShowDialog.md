# ITabCellFormatDlg.ShowDialog

ITabCellFormatDlg.ShowDialog
-


# ITabCellFormatDlg.ShowDialog


## Синтаксис


ShowDialog(ParentWnd: [IWin32Window](../../../modforms/interface/iwin32window/iwin32window.htm)):
 Boolean;


## Параметры


ParentWnd - окно, относительно
 которого окно диалога форматирования откроется модально.


## Описание


Метод ShowDialog отображает
 диалог форматирования и возвращает результат закрытия данного диалога.


## Комментарии


Метод возвращает значение True,
 если после редактирования в диалоге была нажат кнопка «ОК», и False,
 если была нажата кнопка «Отмена».


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором «Button1», компонента TabSheetBox и компонента
 «UiTabSheet» с идентификатором «UiTabSheet1», являющегося источником данных
 для TabSheetBox.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    FormatDlg: ITabCellFormatDlg;

    Sel: ITabSelection;

    SelRange: ITabRange;

Begin

    FormatDlg := New TabCellFormatDlg.Create;

    // Исключаем

    FormatDlg.ExcludePage(TabFormatDlgPages.CellAlignment);

    FormatDlg.ExcludePage(TabFormatDlgPages.CellBorders);

   // Блокируем:

    FormatDlg.DisableItem(TabFormatDlgItems.FontName);

    FormatDlg.DisableItem(TabFormatDlgItems.FontBold);

    FormatDlg.DisableItem(TabFormatDlgItems.Category);

    // Выбираем активную страницу

    FormatDlg.ActivePage := TabFormatDlgPages.CellView;

    If FormatDlg.ShowDialog(Self As IWin32Window) Then

        Sel := UiTabSheet1.TabSheet.View.Selection;

        SelRange := Sel.Range;

        SelRange.Style := FormatDlg.Style;

    End If;

End Sub Button1OnClick;


При нажатии на кнопку будет открыт диалог форматирования на вкладке
 «Заливка». В диалоге будут скрыты
 вкладки «Выравнивание» и «Границы», а также будет недоступно
 указать наименование шрифта, установить признак жирного текста и выбрать
 какой-либо формат данных. После определения настроек стиля и нажатия на
 кнопку «ОК» стиль будет применен к выделенным ячейкам.


См. также:


[ITabCellFormatDlg](ITabCellFormatDlg.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
