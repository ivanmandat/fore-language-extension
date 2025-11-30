# IRubricatorFactorIO.CalendarSubstituteKey

IRubricatorFactorIO.CalendarSubstituteKey
-


# IRubricatorFactorIO.CalendarSubstituteKey


## Синтаксис


CalendarSubstituteKey: Integer;


## Описание


Свойство CalendarSubstituteKey определяет ключ календарного справочника, используемого для извлечения/сохранения данных.


## Комментарии


Если CalendarSubstituteKey = -1, то для извлечения/сохранения данных применяется календарный справочник, используемый объектом.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных временных рядов с идентификатором «FC_COMM» и календарного справочника с идентификатором «CALENDARSETUP». Добавьте ссылки на системные сборки «Metabase», «Dimensions», «Cubes», «Matrix».


			Sub UserProc;

Var

    mb: IMetabase;

    Inst: IRubricatorInstance;

    Cub: ICubeInstance;

    Dest: ICubeInstanceDestination;

    Exe: ICubeInstanceDestinationExecutor;

    Mat: IMatrix;

    FactorIO: IRubricatorFactorIO;

    CalendarObj: IMetabaseObjectDescriptor;

Begin

    mb := MetabaseClass.Active;

    Inst := mb.ItemById("FC_COMM").Open(Null) As IRubricatorInstance;

    Cub := Inst As ICubeInstance;

    Dest := Cub.Destinations.DefaultDestination;

    Exe := Dest.CreateExecutor;

    FactorIO := Exe As IRubricatorFactorIO;

    CalendarObj := mb.ItemById("CALENDARSETUP");

    FactorIO.CalendarSubstituteKey := CalendarObj.Key;

    Exe.PrepareExecute(Null);

    Exe.PerformExecute;

    Mat := Exe.Matrix;

End Sub UserProc;


После выполнения примера в переменной «Mat» будет находиться матрица, содержащая данные базы данных временных рядов «FC_COMM». Данные базы будут извлечены по параметрам календаря «CALENDARSETUP».


См. также:


[IRubricatorFactorIO](IRubricatorFactorIO.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
