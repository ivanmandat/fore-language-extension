# ITabCellStyle.BackgroundPicture

ITabCellStyle.BackgroundPicture
-


# ITabCellStyle.BackgroundPicture


## Синтаксис


BackgroundPicture: Integer;


## Описание


Свойство BackgroundPicture определяет
 индекс фонового изображения ячейки.


## Комментарии


Изображение должно содержаться в коллекции пиктограмм таблицы, установленной
 в свойстве [ITabSheet.Images](../ITabSheet/ITabSheet.Images.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «REP_TABSHEET». В файловой системе должно присутствовать
 изображение «C:\On.gif».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    SheetT: IPrxTable;

	    Tab: ITabSheet;

	    TImg: ITabImages;

	    Back: Integer;

	    Style: ITabCellStyle;

	Begin

	    MB := MetabaseClass.Active;

	    Rep := MB.ItemById("REP_TABSHEET").Edit As IPrxReport;

	    SheetT := Rep.Sheets.Item(0) As IPrxTable;

	    Tab := SheetT.TabSheet;

	    TImg := Tab.Images;

	    Back := TImg.Add(GxImage.FromFile("C:\On.gif"));

	    Style := Tab.Cell(0, 0).Style;

	    Style.EnablePictures := TriState.OnOption;

	    Style.BackgroundPicture := Back;

	    (Rep As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для фонового изображения в ячейке «A0» будет
 назначена новая пиктограмма, соответствующая изображению «C:\On.gif».


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
