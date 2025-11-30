# IRubricator.CollectGarbage

IRubricator.CollectGarbage
-


# IRubricator.CollectGarbage


## Синтаксис


CollectGarbage;


## Описание


Метод CollectGarbage удаляет
 ряды, в которых значения идентифицирующих атрибутов были удалены из справочника.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    rub: IRubricator;

	Begin

	    mb := MetabaseClass.Active;

	    rub := mb.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

	    rub.CollectGarbage;

	End Sub UserProc;


После выполнения примера из базы данных временных рядов будут удалены
 ряды, в которых значения идентифицирующих атрибутов были удалены из справочника.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
