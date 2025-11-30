# ITabCellStyle.PictureTooltip

ITabCellStyle.PictureTooltip
-


# ITabCellStyle.PictureTooltip


## Синтаксис


PictureTooltip: String;


## Описание


Свойство PictureTooltip определяет
 текст всплывающей подсказки для картинки в ячейке таблицы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiTabSheet
 с наименованием «UiTabSheet1», компонентов TabSheetBox
 и ImageList. Для компонента ImageList с наименованием «ImageList1»
 должна быть загружена пиктограмма.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Tab: ITabSheet;

	    Range: ITabRange;

	    Style: ITabCellStyle;

	Begin

	    Tab := UiTabSheet1.TabSheet;

	    Tab.Images.AddFromImageList(Imagelist1);

	    Range := Tab.View.Selection.Range;

	    Style := Range.Style;

	    Style.EnablePictures := TriState.OnOption;

	    Style.NormalPicture := 0;

	    Style.PictureTooltip := "Картинка";

	End Sub Button1OnClick;


После выполнения примера для выделенной области ячеек таблицы установится
 первый рисунок из коллекции «ImageList1». При наведении курсора на этот
 рисунок будет отражаться всплывающая подсказка с текстом «Картинка».


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
