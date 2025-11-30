# IMetabaseUpdate.Properties

IMetabaseUpdate.Properties
-


# IMetabaseUpdate.Properties


## Синтаксис


		Properties:
		 [IMetabaseUpdateProperties](../IMetabaseUpdateProperties/IMetabaseUpdateProperties.htm);


## Описание


Свойство Properties возвращает
 коллекцию флагов обновления.


## Пример


Для выполнения примера предполагается наличие файла обновления C:\Update.pef.


Добавьте ссылки на системные сборки: Dal, Metabase.


					Sub UserProc;

		Var

		     MB: IMetabase;

		     Update: IMetabaseUpdate;

		     Properties: IMetabaseUpdateProperties;

		     Prop: IMetabaseUpdateProperty;

		Begin

		     MB := MetabaseClass.Active;

		     Update := MB.CreateUpdate;

		     Update.LoadFromFile("c:\Update.pef");

		     Properties := Update.Properties;

		     Prop := Properties.Add;

		     Prop.Name := "Флаг";

		     Prop.Id := "FLAG";

		     Prop.DataType := DbDataType.Integer;

		     Prop.Value := 1;

		     Update.SaveToFileNF("C:\Update.pefx");

		End Sub UserProc;


В результате выполнения примера в обновление, загружённое из файла C:\Update.pefx,
 будет добавлен флаг целого типа со значением по умолчанию «1». Затем обновление
 будет сохранено.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
