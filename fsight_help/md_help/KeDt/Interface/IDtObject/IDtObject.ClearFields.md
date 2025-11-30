# IDtObject.ClearFields

IDtObject.ClearFields
-


# IDtObject.ClearFields


## Синтаксис


ClearFields;


## Описание


Метод ClearFields очищает
 список полей приёмника/источника данных.


## Комментарии


Очистка списка полей выполняется без установки соединения с приёмником/источником
 данных.


## Пример


Для выполнения примера предполагается наличие таблицы с идентификатором
 TBL_SOURCE и задачи ETL с идентификатором OBJ_ETL_TASK, содержащей источник
 репозитория с идентификатором META_PROVIDER.


Добавьте ссылки на системные сборки: Db, Dt, Etl, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    EtlTask: IEtlTask;

	    EtlProvider: IEtlPlainDataProvider;

	    MBProvider: IDtMetabaseProvider;

	Begin

	    MB := MetabaseClass.Active;

	    //Получение задачи ETL

	    MObj := MB.ItemById("OBJ_ETL_TASK").Edit;

	    EtlTask := MObj As IEtlTask;

	    //Получение объекта "Источник репозитория"

	    EtlProvider := EtlTask.FindById("META_PROVIDER") As IEtlPlainDataProvider;

	    EtlProvider := EtlProvider.Edit;

	    //Настройка источника данных

	    MBProvider := EtlProvider.Provider As IDtMetabaseProvider;

	    MBProvider.Dataset := MB.ItemById("TBL_SOURCE").Bind As IDatasetModel;

	    //Заполняем поля источника

	    MBProvider.ClearFields;

	    EtlProvider.FillFromSource;

	    //Сохраняем источник

	    EtlProvider.Save;

	    //Сохранение задачи Etl

	    MObj.Save;

	End Sub UserProc;


После выполнения примера источник репозитория будет настроен на работу
 с таблицей TBL_SOURCE.


См. также:


[IDtObject](IDtObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
