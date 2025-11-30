# IDtConsumer.PutProvider

IDtConsumer.PutProvider
-


# IDtConsumer.PutProvider


## Синтаксис


PutProvider(Provider: [IDtProvider](../IDtProvider/IDtProvider.htm));


## Параметры


Provider. Источник, данные
 которого необходимо экспортировать.


## Описание


Метод PutProvider осуществляет
 экспорт всех значений указанного источника данных в приёмник данных.


## Комментарии


Для удачного экспорта необходимо, чтобы список полей в приёмнике данных
 соответствовал списку полей в источнике данных.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 С файла Data_Out.txt и таблицы в репозитории с идентификатором Table_1.


			Sub UserProc;

Var

    MB: IMetabase;

    MBProvider: IDtMetabaseProvider;

    TextConsumer: IDtTextConsumer;

    Fields1, Fields2: IDtFieldDefinitions;

    Field: IDtFieldDefinition;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MBProvider := New DtMetabaseProvider.Create;

    MBProvider.Dataset := MB.ItemById("Table_1").Bind As IDatasetModel;

    Fields1 := MBProvider.Fields;

    TextConsumer := New DtTextConsumer.Create;

    TextConsumer.File := "c:\Data_Out.txt";

    TextConsumer.WriteHeader := True;

    TextConsumer.RowDelimiter := #13 + #10; //Возврат каретки + перевод строки

    TextConsumer.DelimitedColumnDelimiter := #9; //Клавиша TAB

    Fields2 := TextConsumer.Fields;

    For i := 0 To Fields1.Count - 1 Do

        Field := Fields2.Add;

        Field.DataType := Fields1.Item(i).DataType;

        Field.Name := Fields1.Item(i).Name;

    End For;

    TextConsumer.Open;

    TextConsumer.Clear;

    TextConsumer.PutProvider(MBProvider);

    TextConsumer.Close

End Sub UserProc;


После выполнения примера будет создан новый приёмник данных, осуществляющий
 экспорт данных в текстовый файл. При экспорте в качестве разделителя строк
 будет использоваться сочетание Возврат каретки+Перевод строки, в качестве
 разделителя полей - Знак табуляции. В первую строку файла будут записаны
 наименования полей. Затем в файл будет экспортированы все данные из указанной
 таблицы.


См. также:


[IDtConsumer](IDtConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
