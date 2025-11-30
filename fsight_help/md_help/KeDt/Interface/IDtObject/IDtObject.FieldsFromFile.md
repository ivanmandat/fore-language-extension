# IDtObject.FieldsFromFile

IDtObject.FieldsFromFile
-


# IDtObject.FieldsFromFile


## Синтаксис


FieldsFromFile;


## Описание


Метод FieldsFromFile осуществляет
 чтение списка полей из файла-источника.


## Комментарии


Используется для текстовых, либо Xml источников данных.


Примечание.
 Данный метод автоматически вызывается при открытии текстового, либо Xml
 источника данных.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 С файла Data.txt.


			Sub UserProc;

Var

    TextProvider: IDtTextProvider;

    Fields: IDtFieldDefinitions;

    Field: IDtFieldDefinition;

    v: Array;

    i: Integer;

Begin

    TextProvider := New DtTextProvider.Create;

    TextProvider.File := "c:\Data.txt";

    TextProvider.RangeHasHeader := True;

    TextProvider.RowDelimiter := #13 + #10; //Возврат каретки + перевод строки

    TextProvider.DelimitedColumnDelimiter := #9; //Клавиша TAB

    TextProvider.FieldsFromFile;

    Fields := TextProvider.Fields;

    For Each Field In Fields Do

        Debug.Write(Field.Name + " ");

    End For;

    Debug.WriteLine("");

    TextProvider.Open;

    While Not TextProvider.Eof Do

        TextProvider.Fetch(v);

        For i := 0 To v.Length - 1 Do

            Debug.Write(v[i] + " ");

        End For;

        Debug.WriteLine("");

    End While;

    TextProvider.Close;

End Sub UserProc;


После выполнения примера будет создан новый источник данных, осуществляющий
 импорт данных из текстового файла. При импорте в качестве разделителя
 строк будет использоваться сочетание Возврат каретки+Перевод строки, в
 качестве разделителя полей - Знак табуляции. Перед открытием источника
 из его первой строки будут считаны и выведены в консоль наименования полей.
 Затем будут считаны и выведены в консоль среды разработки значения всех
 записей.


См. также:


[IDtObject](IDtObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
