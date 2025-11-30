# IDtConsumer.Put

IDtConsumer.Put
-


# IDtConsumer.Put


## Синтаксис


Put(Values: Array);


## Параметры


Values. Двумерный массив значений, который необходимо
 записать в приёмник данных.


## Описание


Метод Put осуществляет запись
 массива значений в приёмник данных.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 С файла Data_Out.txt.


			Sub UserProc;

Var

    TextConsumer: IDtTextConsumer;

    Fields: IDtFieldDefinitions;

    Field: IDtFieldDefinition;

    v: Array[3, 4] =

        [["Греча", "Молоко", "Сахар", "Хлеб"],

        [10, 20, 30, 40],

        [313.12, 301.53, 254.13, 404.11]];

Begin

    // Приёмник

    TextConsumer := New DtTextConsumer.Create;

    TextConsumer.File := "C:\Data_Out.txt";

    TextConsumer.WriteHeader := True;

    TextConsumer.RowDelimiter := #13 + #10; //Возврат каретки + перевод строки

    TextConsumer.DelimitedColumnDelimiter := #9; //Клавиша TAB

    // Поля приёмника

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

    // Экспорт данных

    TextConsumer.Open;

    TextConsumer.Clear;

    TextConsumer.Put(v);

    TextConsumer.Close

End Sub UserProc;


После выполнения примера будет создан новый приёмник данных, осуществляющий
 экспорт данных в текстовый файл. При экспорте в качестве разделителя строк
 будет использоваться сочетание Возврат каретки+Перевод строки, в качестве
 разделителя полей - Знак табуляции. В первую строку файла будут записаны
 наименования полей. Затем в файл будет экспортирован указанный массив
 значений.


См. также:


[IDtConsumer](IDtConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
