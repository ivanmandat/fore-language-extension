# IJsonDocument.WriteToFile

IJsonDocument.WriteToFile
-


# IJsonDocument.WriteToFile


## Синтаксис


WriteToFile(FileName: String; [Options: [JsonFormatOptions](../../Enums/JsonFormatOptions.htm)
 =0]);


## Параметры


FileName. Путь и наименование
 JSON-файла;


Options. Формат представления
 при записи.


## Описание


Метод WriteToFile записывает
 JSON-структуру в указанный файл.


## Пример


	Sub UserProc;

	Var

	    NewJSON: IJsonObjectBuilder;

	    Doc: IJsonDocument;

	Begin

	    NewJSON := New JsonObjectBuilder.Create;

	    NewJSON.AddBoolean("Bool", True);

	    NewJSON.AddDouble("Double", 3.14);

	    NewJSON.AddInteger("Integer", 100);

	    NewJSON.AddNull("Null");

	    NewJSON.AddString("String", "Test JSON");

	    NewJSON.AddBoolean("Bool", True);

	    // Сохранение в файл

	    Doc := New JsonDocument.Create;

	    Doc.RootElement := NewJSON.Build;

	    Doc.WriteToFile("d:\Work\Json\testfile.json");

	End Sub UserProc;


При выполнении примера будет создана новая JSON-структура с некоторым
 набором элементов. Структура будет сохранена в указанный файл.


См. также:


[IJsonDocument](IJsonDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
