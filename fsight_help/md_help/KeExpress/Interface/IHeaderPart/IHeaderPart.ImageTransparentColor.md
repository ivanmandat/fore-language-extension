# IHeaderPart.ImageTransparentColor

IHeaderPart.ImageTransparentColor
-


# IHeaderPart.ImageTransparentColor


## Синтаксис


ImageTransparentColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство ImageTransparentColor
 определяет цвет, который будет прозрачным на изображении.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT. Также в файловой системе должен содержаться
 файл с изображением D:\Files\Logo.png.


Добавьте ссылки на системные сборки: Drawing, Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Report: IPrxReport;

	    Sheet: IPrxSheet;

	    HeadersFooters: IPrxSheetHeaders;

	    Header: IPrxSheetHeaderBase;

	    HeaderPart: IPrxSheetHeaderPart;

	    Img: IGxImage;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчёт

	    MObj := MB.ItemById("REPORT").Edit;

	    Report := MObj As IPrxReport;

	    // Получим первый лист

	    Sheet := Report.Sheets.Item(0);

	    // Получим колонтитулы

	    HeadersFooters := Sheet.HeadersFooters;

	    // Получим верхний колонтитул

	    Header := HeadersFooters.Header;

	    // Настроим колонтитул для первого листа

	    HeaderPart := Header.Center;

	    HeaderPart.Text := "&[Picture]";

	    Img := New GxImage.CreateFromFile("D:\Files\Logo.png");

	    HeaderPart.Image := Img;

	    HeaderPart.ImageHeight := 10;

	    HeaderPart.ImageWidth := 10;

	    HeaderPart.ImageTransparentColor := GxColor.FromName("Blue");

	    // Сохраним изменения

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в центральной части верхнего колонтитула будет
 вставлено указанное изображение. Если в изображении присутствует синий
 цвет, то он будет прозрачным.


См. также:


[IHeaderPart](IHeaderPart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
