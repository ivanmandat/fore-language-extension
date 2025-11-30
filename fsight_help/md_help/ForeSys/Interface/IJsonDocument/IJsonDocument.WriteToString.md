# IJsonDocument.WriteToString

IJsonDocument.WriteToString
-


# IJsonDocument.WriteToString


## Синтаксис


WriteToString([Options: [JsonFormatOptions](../../Enums/JsonFormatOptions.htm)
 =0]);


## Параметры


Options.
 Формат представления при записи.


## Описание


Метод WriteToString возвращает
 строковое представление JSON-структуры.


## Пример


			Function CreateJson: String;

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

    // Получение строкового
 представления

    Doc := New JsonDocument.Create;

    Doc.RootElement := NewJSON.Build;

    Return Doc.WriteToString;

End Function CreateJson;


Указанная функция создаёт новую JSON-структуру с некоторым набором элементов.
 Результатом функции будет строковое представление полученной JSON-структуры.


См. также:


[IJsonDocument](IJsonDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
