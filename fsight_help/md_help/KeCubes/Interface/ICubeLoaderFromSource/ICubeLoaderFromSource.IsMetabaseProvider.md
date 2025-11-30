# ICubeLoaderFromSource.IsMetabaseProvider

ICubeLoaderFromSource.IsMetabaseProvider
-


# ICubeLoaderFromSource.IsMetabaseProvider


## Синтаксис


IsMetabaseProvider: Boolean;


## Описание


Свойство IsMetabaseProvider
 определяет, загружаются ли данные из источника в репозитории.


## Комментарии


Допустимые значения:


	- True. Данные будут загружены
	 из источника в репозитории;


	- False. Данные будут
	 загружены из внешнего источника данных.


## Пример


Для выполнения примера в репозитории предполагается наличие папки с
 идентификатором CUBE_FOLDER и таблицы с данными с идентификатором TABLE_DATA.
 В данной таблице должны присутствовать следующие поля:


	- Indicator. Строковое
	 поле, содержащее названия показателей;


	- City. Строковое поле,
	 содержащее названия городов;


	- Year. Поле типа дата,
	 содержащее года;


	- Value. Поле вещественного
	 типа, содержащее значение показателя для соответствующего города на
	 какой-либо год.


Также в репозитории должен присутствовать репозиторий НСИ с идентификатором
 RDS_LOAD.


В примере используется пользовательский класс Converter.
 Реализация класса приведена в примере для [IValueConverter.Convert](../IValueConverter/IValueConverter.Convert.htm).


Добавьте ссылки на системные сборки: Cubes, Db, Dimensions, Dt, Metabase,
 Rds.


			Sub UserProc;

Var

    mb: IMetabase;

    cube, parent: IMetabaseObject;

    rdsDatabase: IRdsDatabase;

    loader: ICubeLoaderFromSource;

    DimBindings: ICubeLoaderDimensionBindings;

    FactBindings: ICubeLoaderFactBindings;

    Fact: ICubeLoaderFactBinding;

    Conv: Converter;

    provider: IDtProvider;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем папку, в которой будет создан куб

    parent := mb.ItemById("CUBE_FOLDER").Bind;

    // Получаем репозиторий НСИ, в котором будут создаваться справочники

    rdsDatabase := mb.ItemById("RDS_LOAD").Bind As IRdsDatabase;

    // Создаем объект для создания куба

    loader := New CubeLoaderFromSource.Create;

    loader.Type := CubeLoaderType.Cube;

    // Указываем репозиторий НСИ, который будет использоваться

    loader.RdsDatabase := rdsDatabase.Open(Null);

    // Указываем папку, в которой будет создаваться куб

    loader.Parent := parent;

    // Указываем, что куб будет создан на базе таблице

    loader.IsMetabaseProvider := True;

    // Получаем параметры привязки измерений куба

    DimBindings := loader.DimensionBindings;

    // Добавляем измерения куба

    DimBindings.Add("CITY");

    DimBindings.Add("INDICATOR");

    // Добавляем календарное измерение

    DimBindings.AddCalendar("YEAR", DimCalendarLevel.Year);

    // Получаем коллекцию привязок для измерения фактов

    FactBindings := loader.FactBindings;

    // Указываем, что факты в кубе будут локальные

    FactBindings.CreateExternalDimension := False;

    // Добавляем измерение фактов

    Fact := FactBindings.Add("VALUE");

    // Создаем преобразователь значений

    Conv := New Converter.Create;

    // Указываем, что значения поля «VALUE» должны быть преобразованы

    Fact.Converter := Conv;

    // Создаем источник данных

    provider := New DtMetabaseProvider.Create As IDtProvider;

    // Указываем таблицу, из которой будут загружаться данные

    (provider As IDtMetabaseProvider).Dataset := mb.ItemById("TABLE_DATA").Bind As IDatasetModel;

    // Создаем куб и загружаем данные

    cube := loader.Load(provider, Null);

    // Сохраняем куб

    cube.Save;

End Sub UserProc;


В результате выполнения примера в репозитории в папке CUBE_FOLDER
 будет создан куб на основе данных из таблицы TABLE_DATA.


См. также:


[ICubeLoaderFromSource](ICubeLoaderFromSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
