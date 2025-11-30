# IOrmConditions.Evaluate

IOrmConditions.Evaluate
-


# IOrmConditions.Evaluate


## Синтаксис


Evaluate(Value: [IOrmRecord](../IOrmRecord/IOrmRecord.htm)):
 [IOrmCondition](../IOrmCondition/IOrmCondition.htm);


## Параметры


Value. Проверяемая запись.


## Описание


Метод Evaluate проверяет выполнение
 условий из коллекции для указанной записи.


## Комментарии


Если для указанной записи выполняются все условия, то метод возвращает
 значение Null. Если условие не
 выполняется, то метод возвращает данное условие.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 с идентификатором Evaluate, содержащим логический атрибут с идентификатором
 IS_ACTUAL.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Orm.


			Sub Evaluate;

Var

    MB: IMetabase;

    pDim: IDimInstance;

    pDimModel: IDimensionModel;

    pManager: IDimOrmManager;

    pClass: IDimOrmClass;

    Conds: IOrmConditions;

    pCond: IDimOrmCondition;

    pCondition, pCond_1: IOrmCondition;

    pDimElement: IDimElement;

    pDimElements: IDimElementArray;

    i, ArttrInd: Integer;

    Record: IOrmRecord;

Begin

    MB := MetabaseClass.Active;

    // Получаем справочник

    pDim := MB.ItemById("DICT").Open(Null) As IDimInstance;

    // Получаем структуру справочника

    pDimModel := pDim.Dimension;

    // Создаем объект для работы с условиями

    pManager := New DimOrmManager.Create;

    // Создаем класс для работы с условиями

    pClass := pManager.CreateClass(pDimModel);

    // Создаем условие

    pCond := pClass.CreateCondition;

    Conds := pCond.Conditions;

    pCondition := Conds.Add;

    pCondition.AttributeName := "IS_ACTUAL";

    pCondition.Value := True;

    // Получаем элементы справочника

    pDimElements := pDim.Elements.Elements;

    // Проверяем каждый элемент на соответствие условию

    pDimElement := pDim.NewElement;

    For i := 0 To pDimElements.Count - 1 Do

        pDimElement.Element := pDimElements.Element(i);

        Record := pDimElement As IOrmRecord;

        // Выполняем проверку

        pCond_1 := Conds.Evaluate(Record);

        // Если элемент не соответствует условию,

        //то выводим его наименование

        If pCond_1 <> Null Then

            ArttrInd := Record.FindAttribute("NAME");

            Debug.WriteLine(Record.AttributeValue(ArttrInd));

        End If;

    End For;

End Sub Evaluate;


После выполнения примера в окно консоли будут выведены наименования
 элементов, которые не соответствуют условию: атрибут «IS_ACTUAL»
 должен иметь значение True.


См. также:


[IOrmConditions](IOrmConditions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
