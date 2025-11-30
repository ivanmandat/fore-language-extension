# ITabCellStyle.PictureVerticalAlignment

ITabCellStyle.PictureVerticalAlignment
-


# ITabCellStyle.PictureVerticalAlignment


## Синтаксис


PictureVerticalAlignment: [TabPictureVerticalAlignment](../../Enums/TabPictureVerticalAlignment.htm);


## Описание


Свойство PictureVerticalAlignment
 определяет вертикальное положение изображения в ячейке таблицы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox, компонента
 UiTabSheet с наименованием «UiTabSheet1» и компонента ImageList с наименованием
 «ImageList1». «UiTabSheet1» является источником данных для компонента
 TabSheetBox. В компонент «ImageList1» загружен какой-либо набор изображений.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    TRange: ITabRange;

	    Style: ITabCellStyle;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    TSheet.Images.AddFromImageList(GlobalImageList1);

	    TRange := TSheet.View.Selection.Range;

	    Style := TRange.Style;

	    Style.EnablePictures := TriState.OnOption;

	    Style.NormalPicture := 0;

	    Style.PictureHorizontalAlignment := TabPictureHorizontalAlignment.Right;

	    Style.PictureVerticalAlignment := TabPictureVerticalAlignment.Bottom;

	End Sub Button1OnClick;


При нажатии на кнопку в коллекцию изображений таблицы будут добавлены
 изображения компонента «ImageList1». Для выделенного диапазона ячеек в
 обычном режиме будет отображаться первое изображение из набора. Изображение
 будет выровнено по правому нижнему краю ячейки.


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
