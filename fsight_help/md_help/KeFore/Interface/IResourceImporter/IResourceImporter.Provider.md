# IResourceImporter.Provider

IResourceImporter.Provider
-


# IResourceImporter.Provider


## Синтаксис


Provider: Object;


## Описание


Свойство Provider определяет
 объект, из которого будет произведен импорт.


## Пример


Для выполнения примера предполагается наличие в репозитории ресурсов
 с идентификатором «RESOURCES». Также предполагается наличие файла, в который
 были экспортированы ресурсы «C:\Res.txt».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    ImpObj: ResourceImporter;

	    Prov: DtTextProvider;

	    ResObj: IResourceObject;

	    CountrysArr: Array[0..1] Of String;

	    Log: IResourceImporterLog;

	    i: Integer;

	    s: String;

	Begin

	    Prov := New DtTextProvider.Create;

	    ImpObj := New ResourceImporter.Create;

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("RESOURCES").Edit;

	    ResObj := MObj As IResourceObject;

	    Prov.File := "C:\Res.txt";

	    Prov.RangeHasHeader := True;

	    ImpObj.Provider := Prov;

	    CountrysArr[0] := "ru";

	    CountrysArr[1] := "en";

	    ImpObj.Locales := CountrysArr;

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

	End Sub UserProc;


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
