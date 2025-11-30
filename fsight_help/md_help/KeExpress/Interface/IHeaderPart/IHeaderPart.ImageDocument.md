# IHeaderPart.ImageDocument

IHeaderPart.ImageDocument
-


# IHeaderPart.ImageDocument


## Синтаксис


ImageDocument: [IDocumentBase](KeFore.chm::/Interface/IDocumentBase/IDocumentBase.htm);


## Описание


Свойство ImageDocument определяет
 объект репозитория «[Документ](UiNavObj.chm::/UiNavObj_document.htm)»
 для части заголовка/колонтитула.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT и документа с идентификатором DOC_OBJ,
 содержащего изображение.


Добавьте ссылки на системные сборки: Fore, Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Report: IPrxReport;

	    Sheet: IPrxSheet;

	    HeadersFooters: IPrxSheetHeaders;

	    Header: IPrxSheetHeaderBase;

	    HeaderPart: IPrxSheetHeaderPart;

	    Doc: IDocumentBase;

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

	    HeaderPart := Header.Right;

	    HeaderPart.Text := "&[Picture]";

	    Doc := MB.ItemById("DOC_OBJ").Edit As IDocumentBase;

	    HeaderPart.ImageDocument := Doc;

	    HeaderPart.ImageHeight := 10;

	    HeaderPart.ImageWidth := 10;

	    // Сохраним изменения

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в правой части верхнего колонтитула будет вставлено
 изображение из указанного документа.


См. также:


[IHeaderPart](IHeaderPart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
