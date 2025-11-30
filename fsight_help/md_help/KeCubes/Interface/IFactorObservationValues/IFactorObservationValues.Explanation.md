# IFactorObservationValues.Explanation

IFactorObservationValues.Explanation
-


# IFactorObservationValues.Explanation


## Синтаксис


Explanation: String;


## Описание


Свойство Explanation определяет
 объяснение значения временного ряда.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. В базе должен существовать
 временной ряд с ключом 1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    RubrIn: IRubricatorInstance;

	    FactD: IRubricatorFactData;

	    FactorObVal: IFactorObservationValues;

	Begin

	    MB := MetabaseClass.Active;

	    RubDesc := MB.ItemById("OBJ_RUBRICATOR");

	    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	    FactD := RubrIn.GetFactData(1);

	    FactorObVal := RubrIn.GetObservationValues(FactD, DateTime.Parse("01.01.2002 00:00:00"), DictionaryGetDataOptions.Edit);

	    FactorObVal.Explanation := "Объяснение";

	    FactorObVal.Save;

	End Sub UserProc;


После выполнения примера данные временного ряда с ключом 1 на первое
 января 2002 года будут объяснены.


См. также:


[IFactorObservationValues](IFactorObservationValues.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
