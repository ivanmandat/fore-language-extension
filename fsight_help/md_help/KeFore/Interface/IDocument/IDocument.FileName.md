# IDocument.FileName

IDocument.FileName
-


# IDocument.FileName


## Синтаксис


FileName: String;


## Описание


Свойство FileName определяет
 путь и наименование файла, хранящегося в документе. По расширению файла
 будет определяться приложение, используемое для просмотра содержимого
 документа.


## Пример


Для выполнения примера предполагается наличие объекта репозитория Документ
 с идентификатором "Document_1".


	Sub UserProc;

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

	End Sub UserProc;


После выполнения примера файл, содержащийся в документе "Document_1",
 будет сохранен в корневом каталоге диска С.


См. также:


[IDocument](IDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
