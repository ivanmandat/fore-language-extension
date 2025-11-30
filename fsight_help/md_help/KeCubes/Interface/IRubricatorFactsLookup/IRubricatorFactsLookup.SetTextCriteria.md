# IRubricatorFactsLookup.SetTextCriteria

IRubricatorFactsLookup.SetTextCriteria
-


# IRubricatorFactsLookup.SetTextCriteria


## Синтаксис


SetTextCriteria(Criteria: [IDimTextCriteria](KeDims.chm::/interface/IDimTextCriteria/IDimTextCriteria.htm);
 [SelectOnly: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)
 = Null]): [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Параметры


Criteria. Условия фильтрации.


SelectOnly. Отметка справочников,
 по которой будет производиться поиск. Необязательный параметр. По умолчанию
 поиск осуществляется по всем справочникам, которые содержат данные БДВР.


## Описание


Метод SetTextCriteria устанавливает
 фильтрацию по тексту.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «OBJ_RUBRICATOR».


			Sub UserProc;

Var

    MB: IMetabase;

    RubDesc: IMetabaseObjectDescriptor;

    RubrIn: IRubricatorInstance;

    FactsLookup: IRubricatorFactsLookup;

    Criteria: IDimTextCriteria;

Begin

    MB := MetabaseClass.Active;

    RubDesc := MB.ItemById("OBJ_RUBRICATOR");

    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

    FactsLookup := RubrIn.CreateFactsLookup;

    Criteria := New DimTextCriteria.Create;

    Criteria.CriteriaOptions := TextCriteriaOptions.LikeText;

    Criteria.Text := "Afghanistan";

    FactsLookup.SetTextCriteria(Criteria);

End Sub UserProc;


После выполнения примера будет задано условие фильтрации.


См. также:


[IRubricatorFactsLookup](IRubricatorFactsLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
