# IJsonDocument.WriteToStream

IJsonDocument.WriteToStream
-


# IJsonDocument.WriteToStream


## Синтаксис


WriteToStream(Stream: [IIOStreamSys](../IIOStreamSys/IIOStreamSys.htm);
 [Options: [JsonFormatOptions](../../Enums/JsonFormatOptions.htm)
 =0])


## Параметры


Stream. Поток, в который сохраняется
 JSON-структура;


Options. Формат представления
 при записи.


## Описание


Метод WriteToStream записывает
 JSON-структуру в поток.


## Пример


	Function CreateJson: IIOStreamSys;

	Var

	    NewJSON: IJsonObjectBuilder;

	    Doc: IJsonDocument;

	    MemStr: IMemoryStream;

	Begin

	    NewJSON := New JsonObjectBuilder.Create;

	    NewJSON.AddBoolean("Bool", True);

	    NewJSON.AddDouble("Double", 3.14);

	    NewJSON.AddInteger("Integer", 100);

	    NewJSON.AddNull("Null");

	    NewJSON.AddString("String", "Test JSON");

	    NewJSON.AddBoolean("Bool", True);

	    // Сохранение в
	 поток

	    Doc := New JsonDocument.Create;

	    Doc.RootElement := NewJSON.Build;

	    MemStr := New MemoryStream.Create;

	    Doc.WriteToStream(MemStr);

	    Return MemStr;

	End Function CreateJson;


Указанная функция создаёт новую JSON-структуру с некоторым набором элементов.
 Результатом функции будет поток, в который сохранена JSON-структура.


См. также:


[IJsonDocument](IJsonDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
