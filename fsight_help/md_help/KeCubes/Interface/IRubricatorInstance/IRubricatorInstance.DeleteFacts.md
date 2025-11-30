# IRubricatorInstance.DeleteFacts

IRubricatorInstance.DeleteFacts
-


# IRubricatorInstance.DeleteFacts


## Синтаксис


DeleteFacts(FactorKeys: Array);


## Параметры


FactorKeys. Массив ключей показателей.


## Описание


Метод DeleteFacts удаляет из
 базы данных временных рядов показатели с указанными ключами.


## Комментарии


Параметр FactorKeys должен
 быть целочисленным массивом.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR. В базе должны присутствовать показатели
 с ключами 10023 и 10025.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    RubInst: IRubricatorInstance;

	    FactorKeys: Array Of Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    RubInst := Mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

	    FactorKeys := New Integer[2];

	    FactorKeys[0] := 10023;

	    FactorKeys[1] := 10025;

	    RubInst.DeleteFacts(FactorKeys);

	End Sub UserProc;


После выполнения примера из базы будут удалены показатели с указанными
 ключами.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
