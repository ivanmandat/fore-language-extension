# IMetabaseCustomObjectReader.ReadToStream

IMetabaseCustomObjectReader.ReadToStream
-


# IMetabaseCustomObjectReader.ReadToStream


## Синтаксис


ReadToStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток, в который будут
 считаны данные из объекта.


## Описание


Метод ReadToStream считывает
 данные из объекта пользовательского класса и загружает их в указанный
 поток.


## Комментарии


Перед выполнением метода ReadToStream
 необходимо вызвать метод [Load](IMetabaseCustomObjectReader.Load.htm)
 для чтения данных из базы репозитория в текущий объект в памяти ПК.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 пользовательского класса с идентификатором «OBJ_CUSTOM».


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CustomObject: IMetabaseCustomObject;

	    Reader: IMetabaseCustomObjectReader;

	    Stream: IIOStream;

	    i: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    CustomObject := Mb.ItemById("OBJ_CUSTOM").Edit As IMetabaseCustomObject;

	    Stream := New MemoryStream.Create;

	    Reader := CustomObject.CreateReader;

	    Reader.Load;

	    Reader.ReadToStream(Stream);

	    For i := 0 To Stream.Size - 1 Do

	        Debug.WriteLine(Stream.ReadByte);

	    End For;

	End Sub UserProc;


После выполнения примера данные из объекта будут прочитаны в поток.
 Содержимое потока будет выведено в окно консоли.


См. также:


[IMetabaseCustomObjectReader](IMetabaseCustomObjectReader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
