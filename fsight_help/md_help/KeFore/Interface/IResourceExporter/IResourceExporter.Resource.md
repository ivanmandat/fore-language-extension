# IResourceExporter.Resource

IResourceExporter.Resource
-


# IResourceExporter.Resource


## Синтаксис


Resource: [IResourceObject](ModForms.chm::/Interface/IResourceObject/IResourceObject.htm);


## Описание


Свойство Resource определяет
 объект-ресурсы, который должен быть экспортирован.


## Пример


Для выполнения примера предполагается наличие в репозитории ресурсов
 с идентификатором «RESOURCES». В данных ресурсах должны присутствовать
 русский и английский языки.


	Sub Main;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    ExpObj: ResourceExporter;

	    Cons: DtTextConsumer;

	    ResObj : IResourceObject;

	    CountrysArr: Array[0..1] Of String;

	Begin

	    Cons := New DtTextConsumer.Create;

	    ExpObj := New ResourceExporter.Create;

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("RESOURCES").Edit;

	    ResObj := MObj As IResourceObject;

	    Cons.File := "C:\Res.txt";

	    Cons.WriteHeader := True;

	    ExpObj.Consumer := Cons;

	    CountrysArr[0] := "ru";

	    CountrysArr[1] := "en";

	    ExpObj.Locales := CountrysArr;

	    ExpObj.Resource := ResObj;

	    ExpObj.Export;

	End Sub Main;


После выполнения примера все строки ресурсов, относящиеся к русскому
 и английскому языкам, будут экспортированы в файл «C:\Res.txt».


См. также:


[IResourceExporter](IResourceExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
