# IMetabaseUpdateObjectNode.KeepNativeNames

IMetabaseUpdateObjectNode.KeepNativeNames
-


# IMetabaseUpdateObjectNode.KeepNativeNames


## Синтаксис


		KeepNativeNames: Boolean;


## Описание


Свойство KeepNativeNames определяет
 признак сохранения физического имени объекта при обновлении.


## Комментарии


Допустимые значения:


	- True. Физическое имя
	 объекта сохраняется при обновлении;


	- False. Физическое имя
	 объекта не сохраняется при обновлении. Значение по умолчанию.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором RDS.


Добавьте ссылки на системные сборки: Metabase, Rds.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    rds: IMetabaseObjectDescriptor;

		    metaDict: IMetaDictionary;

		    Attrs: IMetaAttributes;

		    Obj: IMetabaseObjectDescriptor;

		    Upd: IMetabaseUpdate;

		    Nd: IMetabaseUpdateObjectNode;

		    RootFolder: IMetabaseUpdateFolderNode;

		    NdFol: IMetabaseUpdateFolderNode;

		Begin

		    // Получим репозиторий

		    Mb := MetabaseClass.Active;

		    // Получим справочник НСИ

		    rds := mb.ItemById("RDS");

		    metaDict := rds.Bind As IMetaDictionary;

		    // Получим атрибуты справочника

		    Attrs := metaDict.Attributes;

		    // Определим использование имени таблицы при обновлении репозитория

		    Attrs.KeepTableNativeNameOnMetabaseUpdate := True;

		    // Создадим объект обновления

		    Upd := Mb.CreateUpdate;

		    // Создадим объект структуры обновления

		    RootFolder := Upd.RootFolder;

		    // Получим таблицу справочника НСИ

		    Obj := Mb.ItemById("RDS").Children.Item(0).Edit;

		    // Переименуем таблицу

		    Obj.Name := "123Table";

		    // Добавляем таблицу в структуру обновления

		    Nd := RootFolder.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

		    Nd.Object := Obj;

		    // Сохраняем физическое имя таблицы при обновлении

		    Nd.KeepNativeNames := True;

		    // Добавляем справочник НСИ в структуру обновления

		    Nd := RootFolder.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

		    Nd.Object := rds;

		    NdFol := (Nd As IMetabaseUpdateFolderNode);

		    // Сохраняем обновление в файл

		    Upd.SaveToFileNF("C:\Update.pefx");

		End Sub UserProc;


В результате выполнения примера будет сформировано обновление. Физическое
 имя таблицы изменено и будет сохранено при обновлении.


См. также:


[IMetabaseUpdateObjectNode](IMetabaseUpdateObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
