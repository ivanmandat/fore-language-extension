# ITabCellStyle.PictureCursor

ITabCellStyle.PictureCursor
-


# ITabCellStyle.PictureCursor


## Синтаксис


PictureCursor: [TabCursor](../../Enums/TabCursor.htm);


## Описание


Свойство PictureCursor определяет,
 какой вид будет иметь курсор мыши при наведении на изображение в
 ячейке.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1»,
 компонента TabSheetBox, компонента
 UiTabSheet с наименованием «UiTabSheet1» и компонента ImageList с наименованием «ImageList1». «UiTabSheet1»
 является источником данных для компонента TabSheetBox.
 В компонент «ImageList1» загружен
 какой-либо набор изображений.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    TRange: ITabRange;

	    Style: ITabCellStyle;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    TSheet.Images.AddFromImageList(ImageList1);

	    TRange := TSheet.View.Selection.Range;

	    Style := TRange.Style;

	    Style.EnablePictures := TriState.OnOption;

	    Style.NormalPicture := 0;

	    Style.PictureCursor := TabCursor.Hand;

	End Sub Button1OnClick;


При нажатии кнопки в коллекцию изображений таблицы будут добавлены изображения
 компонента «ImageList1». Для выделенного
 диапазона ячеек в обычном режиме будет отображаться первое изображение
 из набора. При наведении курсора мыши на изображение в ячейке курсор будет
 изменять свой вид.


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
