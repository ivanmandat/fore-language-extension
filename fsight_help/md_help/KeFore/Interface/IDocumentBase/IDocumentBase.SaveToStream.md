# IDocumentBase.SaveToStream

IDocumentBase.SaveToStream
-


# IDocumentBase.SaveToStream


## Синтаксис


SaveToStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток, в который осуществляется
 сохранение документа.


## Описание


Метод SaveToStream осуществляет
 сохранение содержимого документа в поток.


## Пример


Для выполнения примера предполагается наличие объекта репозитория Документ
 с идентификатором "Document_1".


			Sub UserProc;

Var

    MB: IMetabase;

    Stream: IMemoryStream;

    Doc: IDocument;

Begin

    MB := MetabaseClass.Active;

    Doc := MB.ItemById("Document_1").Bind As IDocument;

    Stream := New MemoryStream.Create;

    Doc.SaveToStream(Stream);

    Debug.WriteLine(Stream.Size.ToString);

    Dispose Stream;

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведен размер
 файла, загруженного в документ "Document_1", в байтах.


См. также:


[IDocumentBase](IDocumentBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
