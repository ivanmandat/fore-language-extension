# IJsonDocument.ReadFromStream

IJsonDocument.ReadFromStream
-


# IJsonDocument.ReadFromStream


## Синтаксис


ReadFromStream(Stream: [IIOStreamSys](../IIOStreamSys/IIOStreamSys.htm));


## Параметры


Stream. Поток, в котором сохранёна
 JSON-структура.


## Описание


Метод ReadFromStream загружает
 JSON-структуру из потока.


## Пример


			Sub ReadFromStream(Stream: IIOStreamSys);

Var

    Doc: IJsonDocument;

    JSON: IJsonObject;

Begin

    Doc := New JsonDocument.Create;

    Doc.ReadFromStream(Stream);

    JSON := Doc.RootElement.AsObject;

    ShowElements(JSON);

End Sub ReadFromStream;


Sub ShowElements(JSON: IJsonObject);

Var

    i, c: Integer;

    Element: IJsonElement;

Begin

    c := JSON.Count - 1;

    For i := 0 To c Do

        Element := JSON.ItemByIndex(i);

        Debug.WriteLine("Name: " + JSON.Property_(i));

        Debug.Write("Type: " + Element.GetType.ToString + ". Value: ");

        Select Case Element.GetType

            Case JsonElementType.Boolean: Debug.WriteLine(Element.AsBoolean);

            Case JsonElementType.Double: Debug.WriteLine(Element.AsDouble);

            Case JsonElementType.Integer: Debug.WriteLine(Element.AsInteger);

            Case JsonElementType.NullValue: Debug.WriteLine("null value");

            Case JsonElementType.String: Debug.WriteLine(Element.AsString);

        End Select;

    End For;

End Sub ShowElements;


Функция ReadFromStream используется для получения JSON-структуры из
 потока. Информация об отдельных элементах структуры будет выведена в консоль
 среды разработки.


См. также:


[IJsonDocument](IJsonDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
