# IEaxTableStyle.VirtualCellsStyle

IEaxTableStyle.VirtualCellsStyle
-


# IEaxTableStyle.VirtualCellsStyle


## Синтаксис


VirtualCellsStyle: [ITabCellStyle](TabSheet.chm::/Interface/ITabCellStyle/ITabCellStyle.htm);


## Описание


Свойство VirtualCellsStyle определяет
 стиль ячеек, которые были получены в результате совмещения рядов с различной
 календарной динамикой.


## Комментарии


Данным стилем оформляются ячейки, для которых свойство [ILanerTable.IsVirtualCell](Laner.chm::/Interface/ILanerTable/ILanerTable.IsVirtualCell.htm)
 возвращает значение True.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox
 и компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1», являющегося источником данных для LanerBox.
 В «UiErAnalyzer1» должна быть загружена рабочая книга базы данных временных
 рядов.


Добавьте ссылки на системные сборки: Drawing, Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Eax: IEaxAnalyzer;

	    Style: IEaxTableStyle;

	    CellStyle: ITabCellStyle;

	Begin

	    Eax := UiErAnalyzer1.ErAnalyzer;

	    Style := Eax.Grid.Style;

	    CellStyle := Style.VirtualCellsStyle;

	    CellStyle.BackgroundColor := GxColor.FromName("LightBlue");

	    Eax.Grid.Refresh;

	    (Eax As IMetabaseObject).Save;

	End Sub Button1OnClick;


При нажатии на кнопку ячейки рабочей книги, которые были получены в
 результате совмещения рядов с различной календарной динамикой, будут подсвечены
 голубым цветом.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
