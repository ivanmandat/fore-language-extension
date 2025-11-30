# IDtFieldDefinition.Precision

IDtFieldDefinition.Precision
-


# IDtFieldDefinition.Precision


## Синтаксис


Precision: Integer;


## Описание


Свойство Precision определяет
 точность поля источника/приёмника.


## Комментарии


Под точностью поля источника/приёмника понимается количество знаков
 после запятой. Свойство актуально только для вещественного типа данных.


## Пример


Добавьте ссылки на системную сборку Dt.


			Sub UserProc;

Var

    FProvider: IDtOleDbProvider;

    Prov: IDtProvider;

    FConsumer: IDtOleDbConsumer;

    ConStr: String;

    Fields, Fields_Cons: IDtFieldDefinitions;

    Field_Prov: IDtFieldDefinition;

    i: Integer;

Begin

    // Определяем источник и его поля

    FProvider := New DtOleDbProvider.Create;

    ConStr := "Provider=MSDAORA.1;Password=test;User ID=test;Data Source=test;Persist Security Info=True";

    FProvider.ConnectionString := ConStr;

    FProvider.Query := "select * from TableProvider";

    FProvider.Open;

    Fields := FProvider.Fields;

    Prov := FProvider As IDtProvider;

    // Создаем приёмник, создаем его поля

    FConsumer := New DtOleDbConsumer.Create;

    FConsumer.ConnectionString := ConStr;

    // Новая таблица:

    FConsumer.Table := "New_TAB_CONS";

    Fields_Cons := FConsumer.Fields;

    Fields_Cons.Clear;

    For i:=0 To Fields.Count-1 Do

        Field_Prov := Fields.Item(i);

        Fields_Cons.Add;

        Fields_Cons.Item(i).Name := Field_Prov.Name;

        Fields_Cons.Item(i).DataType := Field_Prov.DataType;

        Fields_Cons.Item(i).Size := Field_Prov.Size;

        Fields_Cons.Item(i).Precision := Field_Prov.Precision;

    End For;

    // Запускаем экспорт

    FConsumer.PutProvider(Prov);

    Prov.Close;

End Sub UserProc;


После выполнения примера будет осуществлен экспорт данных из указанного
 источника в приёмник. Экспорт осуществляется в новую таблицу, для которой
 создан набор полей, идентичных полям источника.


См. также:


[IDtFieldDefinition](IDtFieldDefinition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
