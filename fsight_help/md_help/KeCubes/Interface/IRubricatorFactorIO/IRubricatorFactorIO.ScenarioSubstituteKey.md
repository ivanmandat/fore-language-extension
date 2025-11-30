# IRubricatorFactorIO.ScenarioSubstituteKey

IRubricatorFactorIO.ScenarioSubstituteKey
-


# IRubricatorFactorIO.ScenarioSubstituteKey


## Синтаксис


ScenarioSubstituteKey: Integer;


## Описание


Свойство ScenarioSubstituteKey
 определяет ключ сценария, используемого для извлечения/сохранения данных.


## Комментарии


Для получения данных о том, что применяются ли в базе данных временных
 рядов сценарии моделирования, используйте метод [IRubricatorInstance.GetScenarioExists](../IRubricatorInstance/IRubricatorInstance.GetScenarioExists.htm).


Если ScenarioSubstituteKey = -1,
 то для извлечения/сохранения данных применяется сценарий «Факт».


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB» и сценария моделирования с ключом
 «12345».


Добавьте ссылки на системные сборки «Cubes», «Dimensions», «Matrix»,
 «Metabase».


			Sub UserProc;

Var

    mb: IMetabase;

    Inst: IRubricatorInstance;

    Cub: ICubeInstance;

    Dest: ICubeInstanceDestination;

    Exe: ICubeInstanceDestinationExecutor;

    Mat: IMatrix;

    FactorIO: IRubricatorFactorIO;

Begin

    mb := MetabaseClass.Active;

    // Получаем данные БД временных рядов

    Inst := mb.ItemById("TSDB").Open(Null) As IRubricatorInstance;

    If Inst.GetScenarioExists Then

        Cub := Inst As ICubeInstance;

        // Получаем данные БД временных рядов в виде куба

        Dest := Cub.Destinations.DefaultDestination;

        // Создаем объект для работы с данными

        Exe := Dest.CreateExecutor;

        FactorIO := Exe As IRubricatorFactorIO;

        // Указываем ключ сценария для извлечения данных

        FactorIO.ScenarioSubstituteKey := 12345;

        // Подготавливаем и выполняем извлечение данных

        Exe.PrepareExecute(Null);

        Exe.PerformExecute;

        // Получаем результаты

        Mat := Exe.Matrix;

    End If;

End Sub UserProc;


После выполнения примера в переменной «Mat» будет содержаться матрица
 с данными БД временных рядов «TSDB» по сценарию с ключом «12345».


Результат выполнения примера: если в БД временных рядов «TSDB» применяются
 сценарии моделирования, то в переменной «Mat» будет содержаться матрица
 с данными «TSDB» по сценарию с ключом «12345».


См. также:


[IRubricatorFactorIO](IRubricatorFactorIO.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
