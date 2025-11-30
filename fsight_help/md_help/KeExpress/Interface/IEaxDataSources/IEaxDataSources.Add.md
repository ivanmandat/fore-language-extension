# IEaxDataSources.Add

IEaxDataSources.Add
-


# IEaxDataSources.Add


## Синтаксис


Add(DataSource: [IMatrixDataSource](KeMatrix.chm::/Interface/IMatrixDataSource/IMatrixDataSource.htm)):
 [IEaxDataSource](../IEaxDataSource/IEaxDataSource.htm);


## Параметры


DataSource. Многомерный источник
 данных, который необходимо добавить в экспресс-отчёт.


## Описание


Метод Add осуществляет добавление
 источника данных в экспресс-отчёт.


## Комментарии


В результате выполнения метод возвращает объект, содержащий добавленный
 источник данных.


При добавлении в экспресс-отчёт более одного источника данных будет
 создан виртуальный куб, который объединит эти источники. Данный куб будет
 являться скрытым дочерним объектом экспресс-отчёта. Для работы с его данными
 используйте свойство [IPivot.DataSource](KePivot.chm::/Interface/IPivot/IPivot.DataSource.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT и куба с идентификатором CUBE. Экспресс-отчёт
 основан на одном источнике данных.


Добавьте ссылки на системные сборки: Cubes, Express, Matrix, Metabase,
 Pivot.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    ExprDS: IEaxDataSources;

	    Cube: ICubeInstance;

	    MatrDS: IMatrixDataSource;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    ExprDS := Expr.DataSources;

	    Cube := MB.ItemById("CUBE").Open(Null) As ICubeInstance;

	    MatrDS := Cube.Destinations.DefaultDestination As IMatrixDataSource;

	    //Добавление в коллекцию исходного источника данных

	    ExprDS.Add(Expr.Pivot.DataSource);

	    //Добавление второго источника в коллекцию

	    ExprDS.Add(MatrDS);

	    (Expr As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера в экспресс-отчёт будет добавлен источник данных.
 Исходный источник экспресс-отчёта также будет включен в коллекцию источников
 данных для корректного создания виртуального куба.


См. также:


[IEaxDataSources](IEaxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
