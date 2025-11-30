# IDtCustomConsumer.PutRow

IDtCustomConsumer.PutRow
-


# IDtCustomConsumer.PutRow


## Синтаксис


PutRow(Values: Array);


## Параметры


Values. Выгружаемая срока в
 виде одномерного массива значений.


## Описание


Метод PutRow выполняет выгрузку
 строки в приёмник данных.


## Комментарии


Для выгрузки всех строк массива данных используйте метод [IDtCustomConsumer.Put](IDtCustomConsumer.Put.htm).


## Пример


Для выполнения примера предполагается наличие модуля с идентификатором
 «CUSTOM_EXPORT», содержащего класс «[MyDtCustomConsumer](../IDtUserConsumerEx/MyDtCustomConsumer.htm)».
 Добавьте ссылки на системные сборки «Metabase», «Dt», «Dal».


					Sub UserProc_PutRow;

		Var

		    MB: IMetabase;

		    Consumer: IDtUserConsumerEx;

		    Fields: IDtFieldDefinitions;

		    Field: IDtFieldDefinition;

		    v: Array;

		Begin

		    MB := MetabaseClass.Active;

		    //Массив экспортируемых значений

		    v := New Variant[3];

		    v[0] := "Греча"; v[1] := 10; v[2] := 313.12;

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

		    Consumer.PutRow(v);

		    Debug.WriteLine("Число записанных строк: " + Consumer.WritingRowsCount.ToString);

		    Consumer.Close;

		End Sub UserProc_PutRow;


После выполнения примера строка данных будет выгружена в приёмник с
 помощью пользовательского алгоритма.


См. также:


[IDtCustomConsumer](IDtCustomConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
