# IDocumentBase.SaveToFile

IDocumentBase.SaveToFile
-


# IDocumentBase.SaveToFile


## Синтаксис


SaveToFile(FileName: String);


## Параметры


FileName - путь и наименование
 файла, в который осуществляется сохранение. Если данный файл уже существует,
 то он будет перезаписан.


## Описание


Метод SaveToFile осуществляет
 сохранение содержимого документа в файл на диске. Путь и наименование
 файла, в который осуществляется сохранение, передается посредством параметра
 FileName.


## Пример


Для выполнения примера предполагается наличие объекта репозитория Документ
 с идентификатором "Document_1".


	Sub Main;

	Var

	    MB: IMetabase;

	    Doc: IDocument;

	    s, Name: String;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Doc := MB.ItemById("Document_1").Bind As IDocument;

	    s := Doc.FileName;

	    i := s.LastIndexOf("\");

	    Name := s.SubString(i + 1, s.Length - i);

	    Doc.SaveToFile("c:\" + Name);

	End Sub Main;


После выполнения примера файл, содержащийся в документе "Document_1",
 будет сохранен в корневом каталоге диска С.


См. также:


[IDocumentBase](IDocumentBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
