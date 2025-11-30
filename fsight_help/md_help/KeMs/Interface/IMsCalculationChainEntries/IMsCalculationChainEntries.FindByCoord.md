# IMsCalculationChainEntries.FindByCoord

IMsCalculationChainEntries.FindByCoord
-


# IMsCalculationChainEntries.FindByCoord


## Синтаксис


FindByCoord(Stub: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm);
 Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)):
 [IMsModelSet](../IMsModelSet/IMsModelSet.htm);


## Параметры


Stub. Источник данных.


Selection. Отметка элементов,
 формирующих точку в источнике данных.


## Описание


Метод FindByCoord осуществляет
 поиск элементов цепочки расчёта использующих указанную точку источника
 данных.


## Комментарии


Если ни один элемент цепочки расчёта не использует указанную точку,
 то метод возвращает пустую коллекцию.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В качестве источника данных
 для контейнера выступает куб репозитория. Также в контейнере должна быть
 создана метамодель с идентификатором METAMODEL и какие-либо модели, включённые
 в цепочку расчёта метамодели.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms.


			Sub UserProc;

Var

    Mb: IMetabase;

    ModelSpaceDescr: IMetabaseObjectDescriptor;

    Stub: IVariableStub;

    MetaModel: IMsMetaModel;

    DimSSFact: IDimSelectionSetFactory;

    DimSS: IDimSelectionSet;

    DimS: IDimSelection;

    Models: IMsModelSet;

    Model: IMsModel;

    i, c: Integer;

Begin

    Mb := MetabaseClass.Active;

    // Получаем контейнер моделирования, его источник данных и метамодель

    ModelSpaceDescr := Mb.ItemById("CONT_MODEL");

    Stub := (ModelSpaceDescr.Bind As IMsModelSpace).DefaultObject.Bind As IVariableStub;

    MetaModel := Mb.ItemByIdNamespace("METAMODEL", ModelSpaceDescr.Key).Edit As IMsMetaModel;

    // Создадим отметку для формирования координаты

    DimSSFact := New DimSelectionSetFactory.Create;

    DimSS := DimSSFact.CreateDimSelectionSet;

    c := Stub.DimensionCount;

    For i := 0 To c - 1 Do

        DimS := DimSS.Add((Stub.Dimension(i) As IMetabaseObject).Open(Null) As IDimInstance);

        DimS.SelectElement(0, False);

    End For;

    // Поиск моделей, использующих полученную точку

    Models := MetaModel.CalculationChain.FindByCoord(Stub, DimSS);

    c := Models.Count;

    Debug.WriteLine("Найдено моделей: " + c.ToString);

    Debug.Indent;

    For i := 0 To c - 1 Do

        Model := Models.Item(i);

        Debug.WriteLine(Model.Name + '(' + Model.Id + "). Тип модели: " + Model.Transform.Kind.ToString);

    End For;

    Debug.Unindent;

End Sub UserProc;


При выполнении примера на основании отметки в измерениях будет сформирована
 точка в источнике данных контейнера моделирования. После этого будет осуществлён
 поиск моделей, входящих в метамодель и использующих указанную точку. Список
 найденных моделей будет выведен в консоль среды разработки.


См. также:


[IMsCalculationChainEntries](IMsCalculationChainEntries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
