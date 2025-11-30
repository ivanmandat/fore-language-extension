# IRibbon.SaveToXML

IRibbon.SaveToXML
-


# IRibbon.SaveToXML


## Синтаксис


SaveToXML: String;


## Описание


Метод SaveToXML сохраняет структуру ленты в XML-формате и возвращает полученную XML-строку.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1» и компонента Ribbon с наименованием «Ribbon1». В репозитории имеется документ с идентификатором «RibbonXML».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Doc: IDocument;

    MStream: IMemoryStream;

    TxtWriter: ITextWriter;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("RibbonXML").Edit;

    Doc := MObj As IDocument;

    MStream := New MemoryStream.Create;

    TxtWriter := New TextWriter.Create(MStream);

    TxtWriter.Encoding := CodePage.UTF8;

    TxtWriter.WriteString(Ribbon1.SaveToXML);

    TxtWriter.Flush;

    Doc.LoadFromStream(MStream);

    Dispose MStream;

    MObj.Save;

End Sub Button1OnClick;


При нажатии на кнопку структура ленты будет сохранена в указанный документ.


См. также:


[IRibbon](IRibbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
