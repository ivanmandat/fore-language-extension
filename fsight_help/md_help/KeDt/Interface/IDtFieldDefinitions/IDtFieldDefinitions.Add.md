# IDtFieldDefinitions.Add

IDtFieldDefinitions.Add
-


# IDtFieldDefinitions.Add


## Синтаксис


Add: [IDtFieldDefinition](../IDtFieldDefinition/IDtFieldDefinition.htm);


## Описание


Метод Add добавляет новое поле
 источника/приёмника данных и возвращает его описание.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 С файла Data_Out.txt.


	Sub Main;

	Var

	    TextConsumer: IDtTextConsumer;

	    Fields: IDtFieldDefinitions;

	    Field: IDtFieldDefinition;

	    v: Array;

	    RowCount: Integer = 1000;

	Begin

	    //Массив экспортируемых значений

	    v := New Variant[3, RowCount];

	    v[0, 0] := //Значения...

	    //Экспорт в текстовый файл

	    TextConsumer := New DtTextConsumer.Create;

	    TextConsumer.File := "с:\Data_Out.txt";

	    TextConsumer.WriteHeader := True;

	    TextConsumer.RowDelimiter := #13 + #10; //Возврат каретки + перевод строки

	    TextConsumer.DelimitedColumnDelimiter := #9; //Клавиша TAB

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

	    TextConsumer.Put(v);

	    TextConsumer.Close

	End Sub Main;


После выполнения примера будет создан новый приёмник данных, осуществляющий
 экспорт данных в текстовый файл. При экспорте в качестве разделителя строк
 будет использоваться сочетание «Возврат каретки+Перевод строки», в качестве
 разделителя полей - знак табуляции. В первую строку файла будут записаны
 наименования полей. Затем в файл будет экспортирован указанный массив
 значений.


См. также:


[IDtFieldDefinitions](IDtFieldDefinitions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
