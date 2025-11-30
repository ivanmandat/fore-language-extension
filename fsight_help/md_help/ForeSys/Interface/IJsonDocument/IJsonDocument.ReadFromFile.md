# IJsonDocument.ReadFromFile

IJsonDocument.ReadFromFile
-


# IJsonDocument.ReadFromFile


## Синтаксис


ReadFromFile(FileName: String);


## Параметры


FileName. Путь и наименование
 JSON-файла.


## Описание


Метод ReadFromFile загружает
 JSON-структуру из указанного файла.


## Пример


Для выполнения примера предполагается наличие JSON-файла «d:\Work\Json\testfile.json».


			Sub UserProc;

Var

    Doc: IJsonDocument;

    JSON: IJsonObject;

Begin

    Doc := New JsonDocument.Create;

    Doc.ReadFromFile("d:\Work\Json\testfile.json");

    JSON := Doc.RootElement.AsObject;

    ShowElements(JSON);

End Sub UserProc;


Sub ShowElements(JSON: IJsonObject);

Var

    Element: IJsonElement;

    i, c: Integer;

Begin

    c := JSON.Count;

    For i := 0 To c - 1 Do

        Element := JSON.ItemByIndex(i);

        Debug.WriteLine("Name: " + JSON.Property_(i));

        Debug.Write("Type: " + Element.GetType.ToString + ". Value: ");

        ShowElement(Element);

    End For;

End Sub ShowElements;


Sub ShowElement(Element: IJsonElement);

Begin

    Select Case Element.GetType

        Case JsonElementType.Boolean: Debug.WriteLine(Element.AsBoolean);

        Case JsonElementType.Double: Debug.WriteLine(Element.AsDouble);

        Case JsonElementType.Integer: Debug.WriteLine(Element.AsInteger);

        Case JsonElementType.NullValue: Debug.WriteLine("null value");

        Case JsonElementType.String: Debug.WriteLine(Element.AsString);

        Case JsonElementType.Array: ShowArray(Element.AsArray);

        Case JsonElementType.Object: ShowElements(Element.AsObject);

    End Select;

End Sub ShowElement;


Sub ShowArray(JSONArray: IJsonArray);

Var

    Element: IJsonElement;

    i, c: Integer;

Begin

    Debug.Indent;

    c := JSONArray.Count;

    Debug.WriteLine("Количество отобранных элементов: " + c.ToString);

    For i := 0 To c - 1 Do

        Element := JSONArray.Item(i);

        ShowElement(Element);

    End For;

    Debug.Unindent;

End Sub ShowArray;


При выполнении примера из файла будет считана JSON-структура. Информация
 об отдельных элементах структуры будет выведена в консоль среды разработки.


См. также:


[IJsonDocument](IJsonDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
