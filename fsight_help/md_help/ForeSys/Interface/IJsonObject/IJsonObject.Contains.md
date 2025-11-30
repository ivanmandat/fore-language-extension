# IJsonObject.Contains

IJsonObject.Contains
-


# IJsonObject.Contains


## Синтаксис


Contains(Key: String): Boolean;


## Параметры


Key. Имя элемента, используемого
 в качестве ключа.


## Описание


Свойство Contains возвращает
 признак наличия элемента с указанным именем.


## Комментарии


Допустимые значения:


	- True. Элемент с указанным
	 именем содержится среди дочерних элементов текущего объекта;


	- False. Элемент с указанным
	 именем не содержится среди дочерних элементов текущего объекта.


## Пример


Для выполнения примера предполагается наличие JSON-файла D:\Work\Json\testfile.json.


			Sub UserProc;

Var

    Doc: IJsonDocument;

    NewJSON: IJsonObjectBuilder;

    JSON: IJsonObject;

    Element: Boolean;

    Name: String;

Begin

    // Загрузим JSON-структуру из указанного файла

    Doc := New JsonDocument.Create;

    Doc.ReadFromFile("D:\Work\Json\testfile.json");

    JSON := Doc.RootElement.AsObject;

    // Проверим, содержится ли в структуре элемент с именем Value

    Name := "Value";

    Element := JSON.Contains(Name);

    If Element Then

        Debug.WriteLine("Элемент содержится в JSON-структуре");

    // Добавим элемент Value со значением 100, если его нет в структуре

    Else

        NewJSON := New JsonObjectBuilder.Create;

        AddExistElement(JSON, NewJSON);

        NewJSON.AddInteger(Name, 100);

        Doc := New JsonDocument.Create;

        Doc.RootElement := NewJSON.Build;

        // Сохраним изменения в файле

        Doc.WriteToFile("D:\Work\Json\testfile.json");

    End If;

End Sub UserProc;


Sub AddExistElement(OldJson: IJsonObject; Var NewJson: IJsonObjectBuilder);

Var

    i, c: Integer;

    Element: IJsonElement;

Begin

    c := OldJson.Count;

    For i := 0 To c - 1 Do

        Element := OldJson.ItemByIndex(i);

        Select Case Element.GetType

            Case JsonElementType.Boolean: NewJson.AddBoolean(OldJson.Property_(i), Element.AsBoolean);

            Case JsonElementType.Double: NewJson.AddDouble(OldJson.Property_(i), Element.AsDouble);

            Case JsonElementType.Integer: NewJson.AddInteger(OldJson.Property_(i), Element.AsInteger);

            Case JsonElementType.NullValue: NewJson.AddNull(OldJson.Property_(i));

            Case JsonElementType.String: NewJson.AddString(OldJson.Property_(i), Element.AsString);

        End Select;

    End For;

End Sub AddExistElement;


После выполнения примера в JSON-структуре файла testfile.json будет
 добавлен новый элемент с именем «Value», если в структуре не содержится
 элемент с таким именем. Если элемент с именем «Value» содержится в JSON-структуре,
 то в консоль будет выведено соответствующее сообщение.


См. также:


[IJsonObject](IJsonObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
