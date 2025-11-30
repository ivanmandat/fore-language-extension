# IRubricator.HasScenarioDimension

IRubricator.HasScenarioDimension
-


# IRubricator.HasScenarioDimension


## Синтаксис


HasScenarioDimension: Boolean;


## Описание


Свойство HasScenarioDimension
 определяет, поддерживает ли база данных временных рядов сценарии.


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию
	 для создаваемых баз данных временных рядов. Сценарии поддерживаются;


	- False. Сценарии не поддерживаются.
	 Это позволит увеличить быстродействие базы данных временных рядов.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB_SCENARIO».


Добавьте ссылки на системные сборки: Cubes, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    TSDB: IRubricator;

Begin

    mb := MetabaseClass.Active;

    TSDB := mb.ItemById("TSDB_SCENARIO").Edit As IRubricator;

    TSDB.HasScenarioDimension := False;

    (TSDB As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера база данных временных рядов «TSDB_SCENARIO»
 не будет поддерживать сценарии.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
