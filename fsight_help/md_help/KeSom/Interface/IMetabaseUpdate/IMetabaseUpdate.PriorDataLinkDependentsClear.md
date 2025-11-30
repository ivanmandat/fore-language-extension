# IMetabaseUpdate.PriorDataLinkDependentsClear

IMetabaseUpdate.PriorDataLinkDependentsClear
-


# IMetabaseUpdate.PriorDataLinkDependentsClear


## Синтаксис


		PriorDataLinkDependentsClear: Boolean;


## Описание


Свойство PriorDataLinkDependentsClear
 определяет признак использования предварительной очистки объектов, зависимых
 по содержимому.


## Комментарии


Допустимые значения:


	- True. Предварительная
	 очистка используется;


	- False. По умолчанию.
	 Предварительная очистка не используется.


## Пример


Для выполнения примера в репозитории предполагается наличие двух таблиц
 с идентификаторами TABLE_A и TABLE_B. Одно из полей таблицы TABLE_A является
 внешним ключом любого поля таблицы TABLE_B.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Update: IMetabaseUpdate;

		    Root: IMetabaseUpdateFolderNode;

		    TableObj: IMetabaseUpdateDataObjectNode;

		    TableAsKeyObj: IMetabaseUpdateDataObjectNode;

		Begin

		    // Получим репозиторий

		    MB := MetabaseClass.Active;

		    // Создадим обновление

		    Update := MB.CreateUpdate;

		    // Получим объект, содержащий структуру обновления

		    Root := Update.RootFolder;

		    // Добавим в обновление таблицу с идентификатором «TABLE_A»

		    TableObj := Root.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

		    TableObj.Object := MB.ItemById("TABLE_A");

		    // Будем обновлять данные и метаданные таблицы

		    TableObj.Method := MetabaseUpdateMethod.All;

		    // Включим пересоздание объекта при обновлении

		    TableObj.AlterType := MetabaseObjectAlterType.Recreate;

		    // Добавим в обновление таблицу с идентификатором «TABLE_B»

		    TableAsKeyObj := Root.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

		    TableAsKeyObj.Object := MB.ItemById("TABLE_B");

		    // Будем обновлять данные и метаданные таблицы

		    TableAsKeyObj.Method := MetabaseUpdateMethod.All;

		    // Отсортируем добавленные объекты

		    Root.Sort(UpdateSortMode.ByDepends);

		    // Включим пересоздание объекта при обновлении

		    TableAsKeyObj.AlterType := MetabaseObjectAlterType.Recreate;

		    // Установим флажок «Пересоздавать таблицы»

		    Update.AlterType(MetabaseObjectClass.KE_CLASS_TABLE) := MetabaseObjectAlterType.Recreate;

		    // Применим предварительную очистку объектов, зависимых по содержимому

		    Update.PriorDataLinkDependentsClear := True;

		    // Сохраним обновление в файл

		    Update.SaveToFileNF("C:\Update.pefx");

		End Sub UserProc;


В результате выполнения примера выполнится сохранение обновления с заданными
 параметрами в файл по заданному пути.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
