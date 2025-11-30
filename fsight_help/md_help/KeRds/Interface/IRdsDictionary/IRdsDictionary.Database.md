# IRdsDictionary.Database

IRdsDictionary.Database
-


# IRdsDictionary.Database


## Синтаксис


Database: [IDatabase](KeDb.chm::/Interface/IDatabase/IDatabase.htm);


## Описание


Свойство Database определяет
 базу данных, в которой хранятся данные справочника.


## Комментарии


Указываемая база данных определяет где будет создана таблица для справочника.
 По умолчанию при создании справочника НСИ используется база данных, которая
 для репозитория задана в качестве [базы
 данных по умолчанию](KeSom.chm::/Interface/IMetabase/IMetabase.SpecialObject.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором RDS_D.


Добавьте системные сборки: Db, Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    Dict: IRdsDictionary;

    Database: IMetabaseObjectDescriptor;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем справочник НСИ

    Dict := MB.ItemById("RDS_D").Bind As IRdsDictionary;

    Database := Dict.Database As IMetabaseObjectDescriptor;

    // Выводим идентификатор драйвера базы данных

    Debug.WriteLine(Database.Name + '(' + Database.Id + ')');

End Sub UserProc;


При выполнении примера в окно консоли будет выведен информация о базе
 данных, в которой хранятся данные справочника НСИ.


См. также:


[IRdsDictionary](IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
