# IDocument.CreationDate

IDocument.CreationDate
-


# IDocument.CreationDate


## Синтаксис


CreationDate: DateTime;


## Описание


Свойство CreationDate определяет дату создания файла, хранящегося в документе.


## Комментарии


При загрузке документа из файла в данном свойстве будет установлена дата создания загружаемого файла. При загрузке документа из потока в свойстве CreationDate будет установлена текущая дата и время. При загрузке новых версий файла значение свойства обновляется автоматически.


## Пример


			Sub CompareDocument(Doc: IDocument);

Var

    FName: String;

    FInfo: IFileInfo;

Begin

    FName := Doc.FileName;

    If File.Exists(FName) Then

        FInfo := New FileInfo.Attach(FName);

        //Если файл на диске отличается от сохраненного в документ, то
        //загружаем новую версию в документ
        If (Doc.CreationDate <> FInfo.CreationTime) Or

            (Doc.ModificDate <> FInfo.LastWriteTime) Or

            (Doc.Size <> FInfo.Size) Then

            Doc := (Doc As IMetabaseObject).Edit As IDocument;

            Doc.LoadFromFile(FName);

            (Doc As IMetabaseObject).Save;

        End If

    Else

        //Если файл не существует, то выгружаем его из документа
        Doc.SaveToFile(FName);

    End If;

End Sub CompareDocument;


Указанная процедура осуществляет сравнение информации о файле на диске и информации, сохраненной в документе. Если в информации имеются расхождения, то последняя версия файла будет загружена в документ.


См. также:


[IDocument](IDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
