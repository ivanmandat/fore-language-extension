# IRubricatorInstance.GetDictionary

IRubricatorInstance.GetDictionary
-


# IRubricatorInstance.GetDictionary


## Синтаксис


GetDictionary(Dictionary: [RubricatorDictionary](../../Enums/RubricatorDictionary.htm)):
 [IMetaDictionaryInstance](KeRds.chm::/Interface/IMetaDictionaryInstance/IMetaDictionaryInstance.htm);


## Параметры


Dictionary. Справочник, содержащий
 данные базы данных временных рядов.


## Описание


Метод GetDictionary возвращает
 данные справочника, содержащего информацию базы данных временных рядов.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR.


			Sub UserProc;

Var

    MB: IMetabase;

    RubrInst: IRubricatorInstance;

    MDI: IMetaDictionaryInstance;

Begin

    MB := MetabaseClass.Active;

    RubrInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    MDI := RubrInst.GetDictionary(RubricatorDictionary.ValidationExecs);

End Sub UserProc;


После выполнения примера в переменной MDI будет храниться объект, содержащий
 данные справочника расчётов валидаций.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
