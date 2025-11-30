# IMetabaseUpdateDataObjectNode.FieldsOnly

IMetabaseUpdateDataObjectNode.FieldsOnly
-


# IMetabaseUpdateDataObjectNode.FieldsOnly


## Синтаксис


FieldsOnly: [IStringList](ModCollections.chm::/Interface/IStringList/IStringList.htm);


## Описание


Свойство FieldsOnly определяет
 список полей/атрибутов для обновления.


## Комментарии


По умолчанию свойство не задано, при установке обновления выполняется
 обновление всех полей таблицы/атрибутов справочника. Способ обновления
 данных определяется свойством [BatchMode](IMetabaseUpdateDataObjectNode.BatchMode.htm).


Для обновления отдельных полей/атрибутов укажите их идентификаторы в
 свойстве FieldsOnly. Заданные
 поля/атрибуты будут обновлены при установке обновления для всех записей
 таблицы/элементов справочника в соответствии с выбранным способом обновления
 данных объекта.


Для обновления отдельных записей/элементов используйте свойство [PrimaryKeysOnly](IMetabaseUpdateDataObjectNode.PrimaryKeysOnly.htm).


Совет.
 Если в обновление включены записи таблицы/элементы справочника, которых
 нет в обновляемом объекте, убедитесь, что в обновление добавлены все обязательные
 атрибуты.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 REP_NSI, расположенного в нём справочника НСИ с идентификатором DICT_1.
 В справочнике НСИ предполагается наличие пользовательских атрибутов с
 идентификаторами ATTR4, ATTR5 и элементов справочника с ключами - 1, 2.


Добавьте ссылки на системные сборки: Collections, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    MUpdate: IMetabaseUpdate;

	    RootFolder: IMetabaseUpdateFolderNode;

	    Node: IMetabaseUpdateDataObjectNode;

	Begin

	    //Определение текущего репозитория

	    Mb := MetabaseClass.Active;

	    //Вызов менеджера обновлений для создания нового обновления

	    MUpdate := Mb.CreateUpdate;

	    //Создание структуры обновления

	    RootFolder := MUpdate.RootFolder;

	    Node := RootFolder.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

	    //Определение способа обновления объекта

	    Node.BatchMode := ObjectUpdateDataBatchMode.UpdateInsert;

	    //Получение объекта (справочника НСИ), расположенного в объекте-контейнере (репозитории НСИ)

	    Node.Object := Mb.ItemByIdNamespace("DICT_1", Mb.ItemById("REP_NSI").Key).Bind;

	    //Определение способа обновления данных объекта

	    Node.UpdatePart := MetabaseObjectUpdatePart.DataMetadata;

	    //Перечисление
	 атрибутов справочника, которые необходимо обновить

	    Node.FieldsOnly.Add("ATTR4");

	    Node.FieldsOnly.Add("ATTR5");

	    //Перечисление элементов справочника, которые необходимо обновить

	    Node.PrimaryKeysOnly.Add(1, Null);

	    Node.PrimaryKeysOnly.Add(2, Null);

	    //Определение
	 полного пути и имени файла, в который будет сохранено
	 обновление

	    MUpdate.SaveToFileNF("C:\Dict_1.pefx");

	End Sub UserProc;


После выполнения примера будет создано новое обновление. Файл обновления
 будет расположен в указанной директории. В обновление будут включены пользовательские
 атрибуты и элементы с указанными ключами.


См. также:


[IMetabaseUpdateDataObjectNode](IMetabaseUpdateDataObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
