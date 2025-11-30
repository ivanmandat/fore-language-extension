# IJsonArrayBuilder.AddElement

IJsonArrayBuilder.AddElement
-


# IJsonArrayBuilder.AddElement


## Синтаксис


AddElement(Value: [IJsonElement](../IJsonElement/IJsonElement.htm)):
 [IJsonArrayBuilder](IJsonArrayBuilder.htm);


## Параметры


Value.
 Элемент JSON-структуры.


## Описание


Метод AddElement добавляет существующий
 элемент в JSON-массив.


## Пример


Для выполнения примера предполагается наличие JSON-файла «d:\Work\Json\data.json».
 Файл имеет примерно следующую структуру:


[![](../../Opened.gif)![](../../Closed.gif)JSON-файл](javascript:TextPopup(this))


{    "product": [
        {
            "name": "Product 1",
            "price": 100
        },
        {
            "name": "Product 2",
            "price": 200
        },
        {
            "name": "Product 3",
            "price": 300
        },
        {
            "name": "Product 4",
            "price": 400
        }
    ]
}

			Sub UserProc;

Var

    Doc: IJsonDocument;

    JSONArray: IJsonArray;

    NewArray: IJsonArrayBuilder;

    NewJSON: IJsonObjectBuilder;

    i, c: Integer;

Begin

    Doc := New JsonDocument.Create;

    Doc.ReadFromFile("d:\Work\Json\data.json");

    JSONArray := Doc.RootElement.Query("$.product[?(@.price > 150 &&
 @.price < 350)]");

    c := JSONArray.Count;

    // Создание новой JSON-структуры

    NewArray := New JsonArrayBuilder.Create;

    For i := 0 To c - 1 Do

        NewArray.AddElement(JSONArray.Item(i));

    End For;

    NewJSON := New JsonObjectBuilder.Create;

    NewJSON.AddElement("Products", NewArray.Build);

    // Сохранение

    Doc.RootElement := NewJSON.Build;

    Doc.WriteToFile("d:\Work\Json\products.json");

End Sub UserProc;


При выполнении примера из файла будет считана JSON-структура. К данной
 структуре будет выполнен запрос на отбор элементов в соответствии с указанным
 условием. На базе отобранных элементов будет создана новая JSON-структура,
 в которую отобранные элементы будут включены в виде массива. Полученная
 новая JSON-структура будет сохранена в новый файл.


См. также:


[IJsonArrayBuilder](IJsonArrayBuilder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
