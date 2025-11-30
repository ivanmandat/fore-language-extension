# IMetabaseCustomObjectWriter.WriteFromStream

IMetabaseCustomObjectWriter.WriteFromStream
-


# IMetabaseCustomObjectWriter.WriteFromStream


## Синтаксис


WriteFromStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток, из которого
 будут получены данные для записи.


## Описание


Метод WriteFromStream осуществляет
 запись данных в объект из потока.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 пользовательского класса с идентификатором OBJ_CUSTOM. Также предполагается
 наличие файла «C:\Stream.txt».


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CustomObject: IMetabaseCustomObject;

	    Writer: IMetabaseCustomObjectWriter;

	    Reader: IMetabaseCustomObjectReader;

	    Stream: IIOStream;

	    i: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    CustomObject := Mb.ItemById("OBJ_CUSTOM").Edit As IMetabaseCustomObject;

	    Stream := New MemoryStream.Create;

	    For i := 65 To 90 Do

	        Stream.WriteByte(i);

	    End For;

	    Stream.Position := 0;

	    Writer := CustomObject.CreateWriter;

	    Writer.WriteFromStream(Stream);

	    Writer.Save;

	    Reader := CustomObject.CreateReader;

	    Reader.Load;

	    Reader.ReadToFile("C:\Stream.txt");

	    (CustomObject As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в объект будут записаны и сохранены данные
 из созданного потока, затем эти данные будут выгружены в файл «C:\Stream.txt».


См. также:


[IMetabaseCustomObjectWriter](IMetabaseCustomObjectWriter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
