# IEaxHeaderPart.ImageHeight

IEaxHeaderPart.ImageHeight
-


# IEaxHeaderPart.ImageHeight


## Синтаксис


ImageHeight: Double;


## Описание


Свойство ImageHeight определяет
 высоту изображения для части колонтитула.


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

	    HeaderPart.ImageHeight := 20;

	    HeaderPart.ImageWidth := 20;

	    HeaderPart.Image := Img;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в центральной части верхнего колонтитула будет
 выводиться изображение из файла С:\Logo.gif. Высота и ширина изображения
 будут равны двадцати миллиметрам.


См. также:


[IEaxHeaderPart](IEaxHeaderPart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
