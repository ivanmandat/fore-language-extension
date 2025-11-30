# IEaxHeaderPart.ImageAsBackground

IEaxHeaderPart.ImageAsBackground
-


# IEaxHeaderPart.ImageAsBackground


## Синтаксис


ImageAsBackground: Boolean;


## Описание


Свойство ImageAsBackground определяет,
 использовать ли изображение в колонтитуле как фон. True
 - использовать изображение как фон, False
 - не использовать.


## Пример


Для выполнения примера в репозитории должен существовать экспресс-отчет
 с идентификатором EXPRESS_REPORT. В файловой системе должен существовать
 файл с именем С:\Logo.gif.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Header: IEaxHeader;

	    HeaderPart: IEaxHeaderPart;

	    Img: IGxImage;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Header := Expr.Header;

	    HeaderPart := Header.Center;

	    HeaderPart.Text := "&[Picture]";

	    Img := New GxImage.CreateFromFile("C:\Logo.gif");

	    HeaderPart.Image := Img;

	    HeaderPart.ImageAsBackground := True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в центральной части верхнего колонтитула будет
 выводиться изображение из файла С:\Logo.gif. Данное изображение будет
 использоваться как фон.


См. также:


[IEaxHeaderPart](IEaxHeaderPart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
