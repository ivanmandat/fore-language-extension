# IMDCalculationSource.IncludeInPointset

IMDCalculationSource.IncludeInPointset
-


# IMDCalculationSource.IncludeInPointset


## Синтаксис


IncludeInPointset: Boolean;


## Описание


Свойство IncludeInPointset определяет,
 будет ли данный источник входить в первичное множество источников, по
 которым формируется список точек для расчета.


## Комментарии


Список точек для расчета строится на базе всех элементов, содержащихся
 в фиксированных измерениях источников первичного множества.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором «MDDB», а также трех стандартных кубов «CUBE_INPUT1»,
 «CUBE_INPUT2» и «CUBE_OUTPUT». Данные кубы основаны на таблицах, хранящихся
 в данной базе данных.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    MDCalc: IMDCalculation;

    Cube: ICubeModel;

    Source: IMDCalculationSource;

    Destination: IMDCalculationDestination;

    FormulasTable: IMDCalculationFormulasTable;

    TableForFormulas: ITable;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MDCALCULATION;

    CrInfo.Id := MB.GenerateId("MDCALC_1");

    CrInfo.Name := "Многомерный расчет на сервере";

    CrInfo.Parent := Null;

    MObj := MB.CreateObject(CrInfo).Edit;

    MDCalc := MObj As IMDCalculation;

    //Добавлем БД

    MDCalc.Database := MB.ItemById("MDDB").Bind As IDatabase;

    //Указываю первый куб-источник

    Cube := MB.ItemById("CUBE_INPUT1").Bind As ICubeModel;

    Source := MDCalc.Sources.AddCube(Cube);

    Source.IncludeInPointset := True;

    //Указываю второй куб-источник

    Cube := MB.ItemById("CUBE_INPUT2").Bind As ICubeModel;

    Source := MDCalc.Sources.AddCube(Cube);

    Source.IncludeInPointset := True;

    //Указываем куб-назначение

    Destination := MDCalc.Destination;

    Destination.SetCube(MB.ItemById("CUBE_OUTPUT").Bind As ICubeModel);

    //Создаем новую таблицу формул

    If MDCalc.TimeDependencyEnabled Then

        MDCalc.TimeDependent := True;

    End If;

    FormulasTable := MDCalc.FormulasTable;

    TableForFormulas := FormulasTable.Create;

    FormulasTable.Attach(TableForFormulas);

    MObj.Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 объект - Многомерный расчет на сервере БД. Будут установлены один кубы-источники,
 куб-назначение и создана новая таблица формул. Если в кубе-назначении
 имеется календарное измерение, то будет включена возможность указывать
 период действия для формул.


См. также:


[IMDCalculationSource](IMDCalculationSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
