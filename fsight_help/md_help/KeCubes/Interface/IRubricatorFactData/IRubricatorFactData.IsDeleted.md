# IRubricatorFactData.IsDeleted

IRubricatorFactData.IsDeleted
-


# IRubricatorFactData.IsDeleted


## Синтаксис


IsDeleted: Boolean;


## Описание


Свойство IsDeleted определяет,
 удален ли временной ряд.


## Комментарии


Допустимые значения:


	- True. Временной
	 ряд удален;


	- False. Временной ряд
	 не удален.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR. В данной базе присутствует показатель
 с ключом 94173.


			Sub UserProc;

Var

    MB: IMetabase;

    RubrIn: IRubricatorInstance;

    FactD: IRubricatorFactData;

    RubRev: IRubricatorRevision;

Begin

    MB := MetabaseClass.Active;

    RubrIn := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    RubRev := RubrIn.OpenRevision("Test_Revision");

    FactD := RubrIn.GetFactData(94173, DictionaryGetDataOptions.Edit);

    FactD.IsDeleted := True;

    FactD.Save;

End Sub UserProc;


После выполнения примера показатель с указанным ключом будет удален.


См. также:


[IRubricatorFactData](IRubricatorFactData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
