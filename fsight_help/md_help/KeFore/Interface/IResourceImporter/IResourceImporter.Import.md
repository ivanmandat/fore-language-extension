# IResourceImporter.Import

IResourceImporter.Import
-


# IResourceImporter.Import


## Синтаксис


Import;


## Описание


Метод Import осуществляет импорт
 ресурсов.


## Комментарии


Импортируя ресурсы, следует учитывать, что при экспорте в качестве разделителя
 строковых элементов ресурсов используются два символа «Новая строка»,
 для разделения строк многострочного элемента ресурсов (например, строки
 компонента ListBox) используется один символ «Новая строка».


## Пример


Для выполнения примера предполагается наличие в репозитории ресурсов
 с идентификатором «RESOURCES». Также предполагается наличие файла, в который
 были экспортированы ресурсы «C:\Res.txt».


			Sub ImportResource;

Var

    MB: IMetabase;

    ResObj: IResourceObject;

    Provider: DtTextProvider;

    ImpObj: IResourceImporter;

    Countries: Array[0..1] Of String;

    Log: IResourceImporterLog;

    i: Integer;

    s: String;

Begin

    MB := MetabaseClass.Active;

    ResObj := MB.ItemById("RESOURCES").Edit As IResourceObject;

    Provider := New DtTextProvider.Create;

    Provider.File := "C:\Res.txt";

    Provider.RangeHasHeader := True;

    ImpObj := New ResourceImporter.Create;

    ImpObj.Provider := Provider;

    Countries[0] := "ru";

    Countries[1] := "en";

    ImpObj.Locales := Countries;

    ImpObj.Resource := ResObj;

    ImpObj.Method := ResourceImportType.UpdateAndAdd;

    ImpObj.Import;

    Log := ImpObj.Log;

    Debug.WriteLine("Всего " + Log.Count.ToString + " записей");

    For i := 0 To Log.Count - 1 Do

        Select Case log.State(i).ToString

            Case "0": s := " - запись добавлена";

            Case "1": s := " - запись обновлена";

            Case "2": s := " - запись пропущена";

        End Select;

        Debug.WriteLine(Log.Item(i) + s);

    End For;

End Sub ImportResource;


После выполнения примера будет произведен импорт ресурсов из файла «C:\Res.txt».
 Импортироваться будут элементы, отсутствующие в текущих ресурсах, значения
 существующих элементов будут обновлены. Информация о ходе импорта будет
 выведена в окно консоли.


См. также:


[IResourceImporter](IResourceImporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
