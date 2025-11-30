# IMDCalculationSliceFree.Summ

IMDCalculationSliceFree.Summ
-


# IMDCalculationSliceFree.Summ


## Синтаксис


Summ: [IMDCalculationSliceSumm](../IMDCalculationSliceSumm/IMDCalculationSliceSumm.htm);


## Описание


Свойство Summ возвращает параметры
 суммирования по элементам измерения.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором MDDB, а так же двух стандартных кубов CUBE_INPUT и CUBE_OUTPUT.
 Данные кубы основаны на таблицах, хранящихся в данной базе данных. В каждом
 кубе имеется два измерения: 1) Календарное измерение - будет зафиксировано;
 2) Измерение, основанное на табличном справочнике - по элементам данного
 измерения будет настроено суммирование.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    MDCalc: IMDCalculation;

    Cube: ICubeModel;

    Source: IMDCalculationSource;

    Slices: IMDCalculationSlices;

    Slice: IMDCalculationSlice;

    FreeSlice: IMDCalculationSliceFree;

    FixedSlice: IMDCalculationSliceFixed;

    Sum: IMDCalculationSliceSumm;

    Destination: IMDCalculationDestination;

    FormulasTable: IMDCalculationFormulasTable;

    TableForFormulas: ITable;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MDCALCULATION;

    CrInfo.Id := "MDCALC_1";

    CrInfo.Name := "Многомерный расчет на сервере";

    CrInfo.Parent := Null;

    MObj := MB.CreateObject(CrInfo).Edit;

    MDCalc := MObj As IMDCalculation;

    // Добавляем БД

    MDCalc.Database := MB.ItemById("MDDB").Bind As IDatabase;

    // Указываю куб-источник

    Cube := MB.ItemById("CUBE_INPUT").Bind As ICubeModel;

    Source := MDCalc.Sources.AddCube(Cube);

    Slices := Source.Slices;

    // Календарное измерение - фиксируется

    Slice := Slices.Item(0);

    Slice.FixType := MDCalculationSliceFixType.Fixed;

    FixedSlice := Slice.Fixed;

    // Второе измерение, по элементам которого будет осуществляться суммирование

    Slice := Slices.Item(1);

    FreeSlice := Slice.Free;

    Sum := FreeSlice.Summ;

    Sum.Data := (FreeSlice.Dimension As IStandardDimension).Blocks.Item(0).Dataset;

    Sum.KeyFields := "ID";

    Sum.LookupFields := "PARENTID";

    Sum.Enabled := True;

    // Указываем куб-назначение

    Destination := MDCalc.Destination;

    Destination.SetCube(MB.ItemById("CUBE_OUTPUT").Bind As ICubeModel);

    Slices := Destination.Slices;

    // Календарное измерение - фиксируется

    Slice := Slices.Item(0);

    Slice.FixType := MDCalculationSliceFixType.Fixed;

    FixedSlice.Mapping := Slice;

    // Создаем новую таблицу формул

    FormulasTable := MDCalc.FormulasTable;

    TableForFormulas := FormulasTable.Create;

    FormulasTable.Attach(TableForFormulas);

    MObj.Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 объект - Многомерный расчет на сервере БД. Будут установлены один куб-источник,
 куб-назначение и создана новая таблица формул. Календарные измерения кубов
 будут зафиксированы и сопоставлены друг другу. Для элементов второго измерения
 источник будет возможность настраивать в формулах суммирование по дочерним
 элементам. Родительские элементы будут выбираться по значениям поля Id
 источника данных, связанного со вторым измерением источника данных. Соответствующие
 дочерние элементы будут искаться по значениям родительских элементов,
 содержащихся в поле PARENTID.


См. также:


[IMDCalculationSliceFree](IMDCalculationSliceFree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
