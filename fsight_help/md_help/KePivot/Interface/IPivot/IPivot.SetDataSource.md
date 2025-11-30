# IPivot.SetDataSource

IPivot.SetDataSource
-


# IPivot.SetDataSource


## Синтаксис


SetDataSource(Value: [IMatrixDataSource](KeMatrix.chm::/Interface/IMatrixDataSource/IMatrixDataSource.htm);
 ClearSelection: Boolean);


## Параметры


Value. Матрица с данными;


ClearSelection. Признак, нужно
 ли очищать отметку при установке нового источника данных.


## Описание


Метод SetDataSource осуществляет
 установку источника данных.


## Комментарии


Для определения источника данных, на основе которого формируется таблица,
 используйте свойство [IPivot.DataSource](IPivot.DataSource.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS_REPORT и куба с идентификатором CUBE, который
 будет установлен в качестве нового источника данных отчёта.


Добавьте ссылки на системные сборки: Cubes, Express, Matrix, Metabase,
 Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    CubeInst: ICubeInstance;

    CubeDest: ICubeInstanceDestination;

    Expr: IEaxAnalyzer;

    Pivot: IPivot;

    DS: IMatrixDataSource;

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчёт

    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

    // Получим куб

    CubeInst := MB.ItemById("CUBE").Open(Null) As ICubeInstance;

    CubeDest := CubeInst.Destinations.DefaultDestination;

    Expr := MObj As IEaxAnalyzer;

    // Установим источник данных

    Pivot := Expr.Pivot;

    DS := Pivot.DataSource;

    Expr.Pivot.SetDataSource(DS, True);

    // Заменим источник данных, на основе которого формируется таблица

    Expr.Pivot.DataSource := CubeDest As IMatrixDataSource;

    // Сохраним изменения

    MObj.Save;

End Sub UserProc;


В результате выполнения примера для заданного среза будет изменён источник
 данных.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
