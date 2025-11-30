# IJsonArrayBuilder.AddObjectBuilder

IJsonArrayBuilder.AddObjectBuilder
-


# IJsonArrayBuilder.AddObjectBuilder


## Синтаксис


AddObjectBuilder(Value: [IJsonObjectBuilder](../IJsonObjectBuilder/IJsonObjectBuilder.htm)):
 [IJsonArrayBuilder](IJsonArrayBuilder.htm);


## Параметры


Value. Формируемый объект.


## Описание


Метод AddObjectBuilder добавляет
 объект в текущий формируемый JSON-массив.


## Пример


			Sub UserProc;

Var

    JsonArray: IJsonArrayBuilder;

    NewJSON: IJsonObjectBuilder;

    Doc: IJsonDocument;

Begin

    JsonArray := New JsonArrayBuilder.Create;

    // Создание JSON-структуры

    NewJSON := New JsonObjectBuilder.Create;

    NewJSON.AddString("name", "Product 1");

    NewJSON.AddInteger("price", 100);

    NewJSON.AddDouble("weight", 1);

    JsonArray.AddObjectBuilder(NewJSON);

    NewJSON := New JsonObjectBuilder.Create;

    NewJSON.AddString("name", "Product 2");

    NewJSON.AddInteger("price", 200);

    NewJSON.AddDouble("weight", 1.2);

    JsonArray.AddObjectBuilder(NewJSON);

    NewJSON := New JsonObjectBuilder.Create;

    NewJSON.AddArrayBuilder("products", JsonArray);

    // Сохранение

    Doc := New JsonDocument.Create;

    Doc.RootElement := NewJSON.Build;

    Doc.WriteToFile("d:\Work\Json\products.json");

End Sub UserProc;


Указанная функция создаёт новую JSON-структуру, в которой будет содержаться
 массив элементов. Каждый элемент массива представляет собой отдельный
 JSON-объект с набором элементов. Структура будет сохранена в указанный
 файл.


См. также:


[IJsonArrayBuilder](IJsonArrayBuilder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
