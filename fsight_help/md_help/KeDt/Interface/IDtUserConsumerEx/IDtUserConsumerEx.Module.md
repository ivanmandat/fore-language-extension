# IDtUserConsumerEx.Module

IDtUserConsumerEx.Module
-


# IDtUserConsumerEx.Module


## Синтаксис


Module: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Module определяет модуль/сборку
 Fore репозитория, где реализован пользовательский алгоритм выгрузки данных.


## Комментарии


Свойство Module используется
 в комбинации со свойством [Macro](IDtUserConsumerEx.Macro.htm).


## Пример


Для выполнения примера предполагается наличие модуля с идентификатором
 CUSTOM_EXPORT, содержащего класс [MyDtCustomConsumer](MyDtCustomConsumer.htm).


Добавьте
 ссылки на системные сборки: Dal, Dt, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Consumer: IDtUserConsumerEx;

    Fields: IDtFieldDefinitions;

    Field: IDtFieldDefinition;

    v: Array;

    CustomCons: IDtCustomConsumer;

Begin

    MB := MetabaseClass.Active;

    //Массив экспортируемых значений

    v := New Variant[3, 4];

    v[0, 0] := "Греча"; v[1, 0] := 10; v[2, 0] := 313.12;

    v[0, 1] := "Молоко"; v[1, 1] := 20; v[2, 1] := 301.53;

    v[0, 2] := "Сахар"; v[1, 2] := 30; v[2, 2] := 254.13;

    v[0, 3] := "Хлеб"; v[1, 3] := 40; v[2, 3] := 404.11;

    Consumer := New DtUserConsumerEx.Create;

    Consumer.Metabase := MB;

    Consumer.Module := MB.ItemById("CUSTOM_EXPORT");

    Consumer.Macro := "MyDtCustomConsumer";

    Fields := Consumer.Fields;

    Field := Fields.Add;

    Field.DataType := DbDataType.String;

    Field.Name := "Наименование";

    Field := Fields.Add;

    Field.DataType := DbDataType.Integer;

    Field.Name := "Идентификатор";

    Field := Fields.Add;

    Field.DataType := DbDataType.Float;

    Field.Name := "Значение";

    Consumer.Open;

    Consumer.Clear;

    CustomCons := Consumer.CustomConsumer;

    If CustomCons.ImplementPut Then

        Consumer.Put(v);

        Debug.WriteLine("Число записанных строк: " + Consumer.WritingRowsCount.ToString);

    Else

        Debug.WriteLine("Выгрузка двумерных массивов недоступна");

    End If;

    Consumer.Close;

End Sub UserProc;


При выполнении примера данные выгружаются в приёмник с помощью пользовательского
 алгоритма.


См. также:


[IDtUserConsumerEx](IDtUserConsumerEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
