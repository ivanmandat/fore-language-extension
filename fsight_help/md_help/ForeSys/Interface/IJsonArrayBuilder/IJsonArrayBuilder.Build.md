# IJsonArrayBuilder.Build

IJsonArrayBuilder.Build
-


# IJsonArrayBuilder.Build


## Синтаксис


Build: [IJsonArray](../IJsonArray/IJsonArray.htm);


## Описание


Метод Build возвращает сформированный
 JSON-массив.


## Пример


			Sub UserProc;

Var

    NewJSON: IJsonObjectBuilder;

    VarArray: Array;

    JsonArray, SubArray: IJsonArrayBuilder;

    Doc: IJsonDocument;

Begin

    VarArray := New Variant[2];

    VarArray[0] := Integer.MaxValue;

    VarArray[1] := Double.MaxValue;

    SubArray := New JsonArrayBuilder.Create;

    SubArray.AddString("Subelement 1");

    SubArray.AddString("Subelement 2");

    // JSON-массив

    JsonArray := New JsonArrayBuilder.Create;

    JsonArray.AddBoolean(True);

    JsonArray.AddInteger(Integer.MaxValue);

    JsonArray.AddDouble(Double.MaxValue);

    JsonArray.AddNull;

    JsonArray.AddString("Text value");

    JsonArray.AddArray(VarArray);

    JsonArray.AddArrayBuilder(SubArray);

    // Создание JSON-структуры

    NewJSON := New JsonObjectBuilder.Create;

    NewJSON.AddElement("Array", JsonArray.Build);

    // Сохраняем полученный JSON

    Doc := New JsonDocument.Create;

    Doc.RootElement := NewJSON.Build;

    Doc.WriteToFile("d:\Work\Json\array.json");

End Sub UserProc;


Указанная функция создаёт новую JSON-структуру, в которой будет содержаться
 массив различных элементов. Структура будет сохранена в указанный файл.


См. также:


[IJsonArrayBuilder](IJsonArrayBuilder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
