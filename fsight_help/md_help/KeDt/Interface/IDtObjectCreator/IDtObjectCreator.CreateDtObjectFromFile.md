# IDtObjectCreator.CreateDtObjectFromFile

IDtObjectCreator.CreateDtObjectFromFile
-


# IDtObjectCreator.CreateDtObjectFromFile


## Синтаксис


CreateDtObjectFromFile(FileName: String): [IDtObject](../IDtObject/IDtObject.htm);


## Параметры


FileName. Путь и наименование
 файла, на основании которого необходимо создать источник данных.


## Описание


Метод CreateDtObjectFromFile
 создает источник связанный с указанным файлом.


## Комментарии


При выполнении метода осуществляется анализ расширения файла и его содержимого.
 На основе результатов анализа создается источник определенного типа и
 с определенными параметрами. В текущей реализации данный метод позволяет
 создать источник на базе файлов следующих типов:


	- XLS. Создается источник,
	 описываемый интерфейсом [IDtExcelProvider](../IDtExcelProvider/IDtExcelProvider.htm).


	- XLSX. Создается источник,
	 описываемый интерфейсом [IDtExcelProviderEx](../IDtExcelProviderEx/IDtExcelProviderEx.htm).


	- TXT. Создается источник,
	 описываемый интерфейсом [IDtTextProvider](../IDtTextProvider/IDtTextProvider.htm).


	- CSV. Создается источник,
	 описываемый интерфейсом [IDtTextProvider](../IDtTextProvider/IDtTextProvider.htm).


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 «С» файла с наименованием «data.txt».


			Sub UserProc;

Var

    Creator: IDtObjectCreator;

    Provider: IDtProvider;

    Path: String = "C:\data.txt";

    Fields: IDtFieldDefinitions;

    Field: IDtFieldDefinition;

    v: Array;

    i: Integer;

Begin

    Creator := New DtObjectCreator.Create;

    Provider := Creator.CreateDtObjectFromFile(Path) As IDtProvider;

    (Provider As IDtTextProvider).HeaderRow := 1;

    Provider.FieldsFromFile;

    Fields := Provider.Fields;

    Debug.WriteLine("Поля");

    For Each Field In Fields Do

        Debug.Write(Field.Name + " ");

    End For;

    Debug.WriteLine("");

    Debug.WriteLine("Значения");

    Provider.Open;

    While Not Provider.Eof Do

        Provider.Fetch(v);

        For i := 0 To v.Length - 1 Do

            Debug.Write(v[i] + " ");

        End For;

        Debug.WriteLine("");

    End While;

    Provider.Close;

End Sub UserProc;


При выполнении примера будет создан новый источник, связанный с файлом
 «data.txt». Наименования полей и значения, полученные из файла, будут
 выведены в консоль среды разработки.


См. также:


[IDtObjectCreator](IDtObjectCreator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
