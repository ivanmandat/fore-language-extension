# IEaxHeaderPart.ImageDocument

IEaxHeaderPart.ImageDocument
-


# IEaxHeaderPart.ImageDocument


## Синтаксис


ImageDocument: [IDocumentBase](KeFore.chm::/Interface/IDocumentBase/IDocumentBase.htm);


## Описание


Свойство ImageDocument определяет
 объект репозитория «Документ» для части колонтитула.


## Пример


Для выполнения примера в репозитории должен существовать экспресс-отчет
 с идентификатором EXPRESS_REPORT и объект документ, содержащий изображение,
 с идентификатором DOC_OBJ.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Header: IEaxHeader;

	    HeaderPart: IEaxHeaderPart;

	    Doc: IDocumentBase;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Header := Expr.Header;

	    HeaderPart := Header.Center;

	    HeaderPart.Text := "&[Picture]";

	    Doc := MB.ItemById("DOC_OBJ").Edit As IDocumentBase;

	    HeaderPart.ImageDocument := Doc;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в центральной части верхнего колонтитула будет
 выводиться изображение из документа DOC_OBJ.


См. также:


[IEaxHeaderPart](IEaxHeaderPart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
