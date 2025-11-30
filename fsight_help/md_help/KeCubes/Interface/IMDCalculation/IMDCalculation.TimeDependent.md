# IMDCalculation.TimeDependent

IMDCalculation.TimeDependent
-


# IMDCalculation.TimeDependent


## Синтаксис


TimeDependent: Boolean;


## Описание


Свойство TimeDependent определяет
 признак зависимость формул от времени.


## Комментарии


Если свойству установлено значение True,
 то по выбранным координатам будет возможность указывать период действия
 формулы. Актуально если свойство [TimeDependencyEnabled](IMDCalculation.TimeDependencyEnabled.htm)
 возвращает значение True.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором MDDB, а так же двух стандартных кубов CUBE_INPUT и CUBE_OUTPUT.
 Данные кубы основаны на таблицах, хранящихся в данной базе данных.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MDCalc: IMDCalculation;

    Cube: ICubeModel;

    FormulasTable: IMDCalculationFormulasTable;

    TableForFormulas: ITable;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MDCALCULATION;

    CrInfo.Id := MB.GenerateId("MDCALC_1");

    CrInfo.Name := "Многомерный расчёт на сервере";

    CrInfo.Parent := MB.Root;

    MDCalc := MB.CreateObject(CrInfo).Edit As IMDCalculation;

    // Добавляем БД

    MDCalc.Database := MB.ItemById("MDDB").Bind As IDatabase;

    // Указываю куб-источник

    Cube := MB.ItemById("CUBE_INPUT").Bind As ICubeModel;

    MDCalc.Sources.AddCube(Cube);

    // Указываем куб-назначение

    MDCalc.Destination.SetCube(MB.ItemById("CUBE_OUTPUT").Bind As ICubeModel);

    // Создаем новую таблицу формул

    If MDCalc.TimeDependencyEnabled Then

        MDCalc.TimeDependent := True;

    End If;

    FormulasTable := MDCalc.FormulasTable;

    TableForFormulas := FormulasTable.Create;

    FormulasTable.Attach(TableForFormulas);

    (MDCalc As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 объект - Многомерный расчёт на сервере БД. Будут установлены один куб-источник,
 куб-назначение и создана новая таблица формул. Если в кубе-назначении
 имеется календарное измерение, то будет включена возможность указывать
 период действия для формул.


См. также:


[IMDCalculation](IMDCalculation.htm) | [IMDCalculation.TimeDependencyEnabled](IMDCalculation.TimeDependencyEnabled.htm)
 | [IMDCalculationInstance.TimeDependent](../IMDCalculationInstance/IMDCalculationInstance.TimeDependent.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
