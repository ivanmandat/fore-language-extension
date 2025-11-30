# IMDCalculationFormulasTable.Attach

IMDCalculationFormulasTable.Attach
-


# IMDCalculationFormulasTable.Attach


## Синтаксис


Attach(Table: [ITable](KeDb.chm::/Interface/ITable/ITable.htm));


## Параметры


Table. Таблица, которую необходимо
 подключить в качестве таблицы формул для многомерного расчета на сервере
 БД.


## Описание


Метод Attach осуществляет подключение
 таблицы, передаваемой посредством входного параметра, в качестве таблицы
 формул для многомерного расчета на сервере БД.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором MDDB, а так же двух стандартных кубов CUBE_INPUT и CUBE_OUTPUT.
 Данные кубы основаны на таблицах, хранящихся в данной базе данных.


			Sub UserProc;

Var

    Mb: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MDCalc: IMDCalculation;

    Cube: ICubeModel;

    FormulasTable: IMDCalculationFormulasTable;

    TableForFormulas: ITable;

Begin

    Mb := MetabaseClass.Active;

    CrInfo := Mb.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MDCALCULATION;

    CrInfo.Id := "MDCALC_1";

    CrInfo.Name := "Многомерный расчет на сервере";

    CrInfo.Parent := Mb.Root;

    MDCalc := MB.CreateObject(CrInfo).Edit As IMDCalculation;

    // Добавляем БД

    MDCalc.Database := MB.ItemById("MDDB").Bind As IDatabase;

    // Указываю куб-источник

    Cube := MB.ItemById("CUBE_INPUT").Bind As ICubeModel;

    MDCalc.Sources.AddCube(Cube);

    // Указываем куб-назначение

    MDCalc.Destination.SetCube(MB.ItemById("CUBE_OUTPUT").Bind As ICubeModel);

    // Создаем новую таблицу формул

    FormulasTable := MDCalc.FormulasTable;

    TableForFormulas := FormulasTable.Create;

    FormulasTable.Attach(TableForFormulas);

    (MDCalc As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 объект - Многомерный расчет на сервере БД. Будут установлены один куб-источник,
 куб-назначение и создана новая таблица формул.


См. также:


[IMDCalculationFormulasTable](IMDCalculationFormulasTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
