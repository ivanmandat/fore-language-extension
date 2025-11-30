# IDtConsumer.PutRow

IDtConsumer.PutRow
-


# IDtConsumer.PutRow


## Синтаксис


PutRow(Values: Array);


## Параметры


Values. Выгружаемая строка
 в виде одномерного массива значений.


## Описание


Метод PutRow выполняет выгрузку
 строки значений в приёмник данных.


## Комментарии


Для выгрузки массива строк используйте метод [IDtConsumer.Put](IDtConsumer.Put.htm).


## Пример


Для выполнения примера предполагается наличие файла «C:\Data_Out.txt».


Добавьте ссылки на системные сборки: Dt, Dal.


	Sub UserProc_PutRow;

	Var

	    TextConsumer: IDtTextConsumer;

	    Fields: IDtFieldDefinitions;

	    Field: IDtFieldDefinition;

	    v: Array;

	Begin

	//Массив экспортируемых значений

	    v := New Variant[3];

	    v[0] := "Греча"; v[1] := 10; v[2] := 313.12;

	    TextConsumer := New DtTextConsumer.Create;

	    TextConsumer.File := "C:\Data_Out.txt";

	    TextConsumer.WriteHeader := True;

	    Fields := TextConsumer.Fields;

	    Field := Fields.Add;

	    Field.DataType := DbDataType.String;

	    Field.Name := "Наименование";

	    Field := Fields.Add;

	    Field.DataType := DbDataType.Integer;

	    Field.Name := "Идентификатор";

	    Field := Fields.Add;

	    Field.DataType := DbDataType.Float;

	    Field.Name := "Значение";

	    TextConsumer.Open;

	    TextConsumer.Clear;

	    TextConsumer.PutRow(v);

	    TextConsumer.Close;

	End Sub UserProc_PutRow;


После выполнения примера строка данных будет выгружена в указанный файл.


См. также:


[IDtConsumer](IDtConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
