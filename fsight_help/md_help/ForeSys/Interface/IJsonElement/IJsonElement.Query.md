# IJsonElement.Query

IJsonElement.Query
-


# IJsonElement.Query


## Синтаксис


Query(Path: String): [IJsonArray](../IJsonArray/IJsonArray.htm);


## Параметры


Path. JSONPath-запрос для получения
 дочерних элементов.


## Описание


Метод Query возвращает массив
 элементов, полученных путём выполнения указанного JSONPath-запроса.


## Комментарии


При формировании различных условий в запросе учитывайте указываемый
 тип данных. Неявное преобразование типов не поддерживается. Информацию
 о формировании JSONPath-запросов можно найти в специализированной документации,
 например, в MSDN.


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

Begin

    Doc := New JsonDocument.Create;

    Doc.ReadFromFile("d:\Work\Json\data.json");

    JSONArray := Doc.RootElement.Query("$.product[?(@.price > 50 &&
 @.price < 350)]");

    Debug.WriteLine("Количество отобранных элементов: " + JSONArray.Count.ToString);

End Sub UserProc;


При выполнении примера из файла будет считана JSON-структура. К данной
 структуре будет выполнен запрос на отбор элементов в соответствии с указанным
 условием. Количество отобранных элементов будет выведено в консоль среды
 разработки.


См. также:


[IJsonElement](IJsonElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
