# IJsonObjectBuilder.AddObjectBuilder

IJsonObjectBuilder.AddObjectBuilder
-


# IJsonObjectBuilder.AddObjectBuilder


## Синтаксис


AddObjectBuilder(Property_: String; Value: [IJsonObjectBuilder](IJsonObjectBuilder.htm)):
 [IJsonObjectBuilder](IJsonObjectBuilder.htm);


## Параметры


Property_. Имя элемента;


Value. Формируемый JSON-объект.


## Описание


Метод AddObjectBuilder добавляет
 элемент с JSON-объектом в качестве значения.


## Пример


	Sub UserProc;

	Var

	    NewJSON, SubJSON: IJsonObjectBuilder;

	    Doc: IJsonDocument;

	Begin

	    // Создание JSON-структуры

	    NewJSON := New JsonObjectBuilder.Create;

	    SubJSON := New JsonObjectBuilder.Create;

	    SubJSON.AddInteger("price", 100);

	    SubJSON.AddDouble("weight", 1);

	    NewJSON.AddObjectBuilder("Product 1", SubJSON);

	    SubJSON := New JsonObjectBuilder.Create;

	    SubJSON.AddInteger("price", 200);

	    SubJSON.AddDouble("weight", 1.2);

	    NewJSON.AddObjectBuilder("Product 2", SubJSON);

	    // Сохранение

	    Doc := New JsonDocument.Create;

	    Doc.RootElement := NewJSON.Build;

	    Doc.WriteToFile("d:\Work\Json\info.json");

	End Sub UserProc;


Указанная функция создаёт новую JSON-структуру, в которую добавляются
 элементы с набором дочерних элементов. Структура будет сохранена в указанный
 файл.


См. также:


[IJsonObjectBuilder](IJsonObjectBuilder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
