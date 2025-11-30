# IRdsImportSchema.CheckTable

IRdsImportSchema.CheckTable
-


# IRdsImportSchema.CheckTable


## Синтаксис


CheckTable(Database: [IDatabaseInstance](KeDb.chm::/Interface/IDatabaseInstance/IDatabaseInstance.htm)):
 Boolean;


## Параметры


Database.
 База данных, в которой необходимо проверить существование таблицы, указанной
 в схеме импорта.


## Описание


Метод CheckTable осуществляет
 проверку на существование таблицы, указанной в схеме импорта справочника
 НСИ.


## Комментарии


Метод возвращает значение True, если указанная в схеме импорта таблица
 существует.


## Пример


Для выполнения примера потребуются созданный репозиторий НСИ с идентификатором
 NSI и размещённый в нём справочник НСИ с идентификатором NSI_DICT. Также
 необходимо создать в справочнике схему импорта с идентификатором IMPORTSCHEMA.


Добавьте ссылки на системные
 сборки «Metabase», «Rds», «Db».


			Sub  UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

    ImportSchemas: IRdsImportSchemas;

    ImportSchema: IRdsImportSchema;

    Database: IDatabaseInstance;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("NSI_SEP",  MB.GetObjectKeyById("NSI")).Bind; Dict := MObj As  IRdsDictionary;

    ImportSchemas := Dict.ImportSchemas;

    ImportSchema := ImportSchemas.FindById("IMPORTSCHEMA");

    Debug.WriteLine(ImportSchema.CheckTable(Database)? "Таблица существует" : "Таблица не найдена");

End  Sub  UserProc;


После выполнения примера будет произведена проверка на реальное существование
 таблицы, указанной в схеме импорта справочника НСИ и выведено сообщение
 с её результатом.


См. также:


[Интерфейсы
 сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
