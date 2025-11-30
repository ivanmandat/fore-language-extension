# IValidationCrossDatabaseMappings.SetDefault

IValidationCrossDatabaseMappings.SetDefault
-


# IValidationCrossDatabaseMappings.SetDefault


## Синтаксис


SetDefault;


## Описание


Метод SetDefault устанавливает
 привязки измерений по умолчанию.


## Комментарии


По умолчанию связываются те измерения источников данных, которые имеют
 одинаковые идентификаторы. Если идентификатор измерения эталонного источника
 данных не найден в исходном источнике данных, то связь с ним не создается.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB», содержащей правило валидации
 типа «Сравнение между базами данных»
 с идентификатором «VALID_CROSSDATABASE».


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    TSDBKey: Integer;

    ValidFilter: IValidationFilter;

    CrossDb: IValidationCrossDatabase;

    AttrMappings: IValidationCrossDatabaseMappings;

Begin

    mb := MetabaseClass.Active;

    TSDBKey := mb.GetObjectKeyById("TSDB");

    ValidFilter := mb.ItemByIdNamespace("VALID_CROSSDATABASE", TSDBKey).Edit As IValidationFilter;

    CrossDb := ValidFilter.Details As IValidationCrossDatabase;

    AttrMappings := CrossDb.Mappings;

    AttrMappings.SetDefault;

    (ValidFilter As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в правиле валидации «VALID_CROSSDATABASE»
 будут установлены привязки измерений по умолчанию.


См. также:


[IValidationCrossDatabaseMappings](IValidationCrossDatabaseMappings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
