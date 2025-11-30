# ITabCellStyle.EnablePictures

ITabCellStyle.EnablePictures
-


# ITabCellStyle.EnablePictures


## Синтаксис


EnablePictures: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство EnablePictures определяет
 признак использования изображений в ячейке таблицы.


## Комментарии


Если для данного свойства установлено значение [TriState.OnOption](ForeSys.chm::/Enums/TriState.htm),
 то в ячейках, использующих данный стиль, будет возможность установить
 изображения. Индексы изображений, отображаемые при различных состояниях,
 задаются в свойствах [NormalPicture](ITabCellStyle.NormalPicture.htm),
 [HoverPicture](ITabCellStyle.HoverPicture.htm), [PushedPicture](ITabCellStyle.PushedPicture.htm).
 В свойстве [BackgroundPicture](ITabCellStyle.BackgroundPicture.htm)
 можно задать индекс изображения, используемого в качестве фона ячейки.
 Все используемые изображения должны быть загружены в коллекцию [Images](../ITabSheet/ITabSheet.Images.htm)
 таблицы.


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

	    TSheet.Images.AddFromImageList(ImageList1);

	    TRange := TSheet.View.Selection.Range;

	    Style := TRange.Style;

	    Style.EnablePictures := TriState.OnOption;

	    Style.NormalPicture := 0;

	End Sub Button1OnClick;


При нажатии на кнопку в коллекцию изображений таблицы будут добавлены
 изображения компонента «ImageList1». Для выделенного диапазона ячеек в
 обычном режиме будет отображаться первое изображение из набора.


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
