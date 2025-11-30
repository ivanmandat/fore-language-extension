# IMetabaseCustomObject.CreateReader

IMetabaseCustomObject.CreateReader
-


# IMetabaseCustomObject.CreateReader


## Синтаксис


CreateReader: [IMetabaseCustomObjectReader](../IMetabaseCustomObjectReader/IMetabaseCustomObjectReader.htm);


## Описание


Метод CreateReader создает объект,
 позволяющий читать данные из объекта.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 пользовательского класса с идентификатором «OBJ_CUSTOM». Также предполагается
 наличие файла «C:\To.txt».


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CustomObject: IMetabaseCustomObject;

	    Reader: IMetabaseCustomObjectReader;

	Begin

	    Mb := MetabaseClass.Active;

	    CustomObject := Mb.ItemById("OBJ_CUSTOM").Edit As IMetabaseCustomObject;

	    Reader := CustomObject.CreateReader;

	    Reader.Load;

	    Reader.ReadToFile("C:\To.txt");

	    (CustomObject As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в пользовательский объект будут загружены данные.
 Затем, эти данные будут выгружены в файл «C:\To.txt».


См. также:


[IMetabaseCustomObject](IMetabaseCustomObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
