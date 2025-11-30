# IDocumentBase.GetAsStream

IDocumentBase.GetAsStream
-


# IDocumentBase.GetAsStream


## Синтаксис


GetAsStream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm);


## Описание


Метод GetAsStream создает новый
 поток, связанный с данным документом.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" компонента ImageBox
 с наименованием "ImageBox1" и объекта репозитория Документ с
 идентификатором "Document_1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Doc: IDocument;

	Begin

	    MB := MetabaseClass.Active;

	    Doc := MB.ItemById("Document_1").Bind As IDocument;

	    If Doc.MimeType.IndexOf("image") <> -1 Then

	        ImageBox1.LoadImageFromStream(Doc.GetAsStream);

	    End If;

	End Sub Button1OnClick;


После выполнения пример при нажатии на кнопку, если в документе содержится
 какое-либо графическое изображение, то оно будет загружено в компонент
 "ImageBox1".


См. также:


[IDocumentBase](IDocumentBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
