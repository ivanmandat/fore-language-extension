# IMetabaseUpdateProperties.Add

IMetabaseUpdateProperties.Add
-


# IMetabaseUpdateProperties.Add


## Синтаксис


Add: [IMetabaseUpdateProperty](../IMetabaseUpdateProperty/IMetabaseUpdateProperty.htm);


## Описание


Метод Add осуществляет добавление
 флага в коллекцию.


## Пример


Для выполнения примера в корневом каталоге диска C предполагается наличие
 файла обновления Update.pefx.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Update: IMetabaseUpdate;

	    Properties: IMetabaseUpdateProperties;

	    Prop: IMetabaseUpdateProperty;

	Begin

	    MB := MetabaseClass.Active;

	    Update := MB.CreateUpdate;

	    Update.LoadFromFileNF("c:\Update.pefx");

	    Properties := Update.Properties;

	    Prop := Properties.Add;

	    Prop.Name := "Флаг";

	    Prop.Id := "FLAG";

	    Prop.DataType := DbDataType.Integer;

	    Prop.Value := 1;

	    Update.SaveToFileNF("C:\Update.pefx");

	End Sub UserProc;


После выполнения примера в обновление, загруженное из файла «C:\Update.pefx»,
 будет добавлен флаг целого типа со значением по умолчанию «1». Затем обновление
 будет сохранено.


См. также:


[IMetabaseUpdateProperties](IMetabaseUpdateProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
