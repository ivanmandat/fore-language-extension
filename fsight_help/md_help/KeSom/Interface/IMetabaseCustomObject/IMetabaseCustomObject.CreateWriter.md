# IMetabaseCustomObject.CreateWriter

IMetabaseCustomObject.CreateWriter
-


# IMetabaseCustomObject.CreateWriter


## Синтаксис


CreateWriter: [IMetabaseCustomObjectWriter](../IMetabaseCustomObjectWriter/IMetabaseCustomObjectWriter.htm);


## Описание


Метод CreateWriter создает объект,
 позволяющий писать данные в объект.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 пользовательского класса с идентификатором «OBJ_CUSTOM». Также предполагается
 наличие файла «C:\From.txt».


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CustomObject: IMetabaseCustomObject;

	    Writer: IMetabaseCustomObjectWriter;

	Begin

	    Mb := MetabaseClass.Active;

	    CustomObject := Mb.ItemById("OBJ_CUSTOM").Edit As IMetabaseCustomObject;

	    Writer := CustomObject.CreateWriter;

	    Writer.WriteFromFile("C:\From.txt");

	    Writer.Save;

	    (CustomObject As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера данные из файла «C:\From.txt» будут прочитаны
 и сохранены в пользовательский объект.


См. также:


[IMetabaseCustomObject](IMetabaseCustomObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
