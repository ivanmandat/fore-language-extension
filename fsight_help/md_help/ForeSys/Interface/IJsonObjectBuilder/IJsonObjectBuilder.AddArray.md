# IJsonObjectBuilder.AddArray

IJsonObjectBuilder.AddArray
-


# IJsonObjectBuilder.AddArray


## Синтаксис


AddArray(Property_: String; Value: Array): [IJsonObjectBuilder](IJsonObjectBuilder.htm);


## Параметры


Property_. Имя элемента;


Value. Массив, который будет
 являться значением элемента.


## Описание


Метод AddArray добавляет элемент
 с массивом значений.


## Пример


	Sub UserProc;

	Var

	    NewJSON: IJsonObjectBuilder;

	    VarArray: Array;

	    JsonArray: IJsonArrayBuilder;

	    Doc: IJsonDocument;

	Begin

	    NewJSON := New JsonObjectBuilder.Create;

	    // Первый массив

	    VarArray := New Variant[2];

	    VarArray[0] := Integer.MaxValue;

	    VarArray[1] := Double.MaxValue;

	    NewJSON.AddArray("First Array", VarArray);

	    // Второй массив

	    JsonArray := New JsonArrayBuilder.Create;

	    JsonArray.AddInteger(Integer.MaxValue);

	    JsonArray.AddDouble(Double.MaxValue);

	    NewJSON.AddArrayBuilder("Two Array", JsonArray);

	    // Сохраняем полученный JSON

	    Doc := New JsonDocument.Create;

	    Doc.RootElement := NewJSON.Build;

	    Doc.WriteToFile("d:\Work\Json\testfile.json");

	End Sub UserProc;


При выполнении примера будет создана новая JSON-структура. В структуру
 различными способами будут добавлены два элемента, значениями которых
 являются массивы элементов. Структура будет сохранена в указанный файл.


См. также:


[IJsonObjectBuilder](IJsonObjectBuilder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
