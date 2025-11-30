# IRubricatorInstance.RefreshDimensions

IRubricatorInstance.RefreshDimensions
-


# IRubricatorInstance.RefreshDimensions


## Синтаксис


RefreshDimensions;


## Описание


Метод RefreshDimensions обновляет
 измерения открытого экземпляра базы данных временных рядов.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    RubObj: IMetabaseObject;

	    Rubr: IRubricator;

	    RubrInst: IRubricatorInstance;

	Begin

	    Mb := MetabaseClass.Active;

	    RubObj := Mb.ItemById("OBJ_RUBRICATOR").Edit;

	    Rubr := RubObj As IRubricator;

	    RubrInst := RubObj.Open(Null) As IRubricatorInstance;

	    RubrInst.RefreshDimensions;

	End Sub UserProc;


После выполнения примера будут обновлены измерения базы данных временных
 рядов.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
