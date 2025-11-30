# Загрузка данных в существующий куб/БД временных рядов

Загрузка данных в существующий куб/БД временных рядов
-


# Загрузка данных в существующий куб/БД временных рядов


Для загрузки данных предназначен объекта класса [CubeLoaderFromSource](../Class/CubeLoaderFromSource/CubeLoaderFromSource.htm).
 После инициализации объекта необходимо выполнить следующие действия:


	- В свойстве [Type](../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.Type.htm)
	 указать тип объекта репозитория, в который осуществляется загрузка
	 (куб или база данных временных рядов);


	- В зависимости от указанного типа, в свойстве [Cube](../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.Cube.htm)
	 или [Rubricator](../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.Rubricator.htm)
	 указать объект, в который будет осуществляться загрузка;


	- В коллекции [DimensionBindings](../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.DimensionBindings.htm)
	 определить параметры привязки измерений к полям источника данных;


	- В коллекции [FactBindings](../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.FactBindings.htm)
	 определить параметры привязки фактов к полям источника данных;


	- Инициализируйте источник данных, из которого будет осуществляться
	 загрузка. Источник должен поддерживать [IDtProvider](kedt.chm::/interface/idtprovider/idtprovider.htm);


	- После вызова метода [Load](../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.Load.htm)
	 данные будут загружены.


Рассмотрим пример загрузки данных из существующей таблицы репозитория.
 Таблица в своей структуре имеет следующие поля:


	- COUNTRY_KEY. Ключи стран (тип поля - Целый);


	- V_DATE. Дата, которой соответствует значение (тип поля - Дата);


	- VAL. Значение (тип поля - Вещественный).


## Загрузка в существующий куб


Загрузка осуществляется в стандартный куб с идентификатором «S_CUBE».
 В структуре куба добавлены два измерения: измерение стран с идентификатором
 «COUNTRY» и календарное измерение.


	Sub LoadData;

	Var

	    MB: IMetabase;

	    Cube: IStandardCube;

	    Dims: IStandardCubeDimensions;

	    Loader: ICubeLoaderFromSource;

	    Provider: IDtMetabaseProvider;

	    Bindings: ICubeLoaderDimensionBindings;

	    Binding: ICubeLoaderDimensionBinding;

	    FactBinding: ICubeLoaderFactBinding;

	Begin

	    MB := MetabaseClass.Active;

	    //Таблица-источник

	    Provider := New DtMetabaseProvider.Create;

	    Provider.Dataset := MB.ItemById("T_DATA").Bind As IDatasetModel;

	    //Куб, в который будет осуществляться загрузка данных

	    Cube := MB.ItemById("S_Cube").Bind As IStandardCube;

	    Dims := Cube.Dimensions;

	    //Загрузчик данных в куб

	    Loader := New CubeLoaderFromSource.Create;

	    Loader.Type := CubeLoaderType.Cube;

	    Loader.Cube := Cube;

	    //Настройка привязок измерений

	    Bindings := Loader.DimensionBindings;

	    //Измерение стран

	    Binding := Bindings.Add("COUNTRY_KEY");

	    Binding.AttributeId := "KEY";

	    Binding.Dimension := Dims.FindById("COUNTRY");

	    Binding.Dictionary := Binding.Dimension.Dimension;

	    //Календарное измерение

	    Binding := Bindings.AddCalendar("V_DATE", DimCalendarLevel.Year);

	    Binding.Dimension := Dims.Calendar;

	    //Факт куба

	    FactBinding := Loader.FactBindings.Add("VAL");

	    FactBinding.FactKey := 1;

	    //Загрузка данных

	    Loader.Load(Provider, Null);

	End Sub LoadData;


## Загрузка в существующую базу данных временных рядов


Загрузка осуществляется в БД временных рядов с идентификатором «TSDB».
 В структуре базы данных создан атрибут «COUNTRY», ссылающийся на справочник
 стран.


	Sub LoadData;

	Var

	    MB: IMetabase;

	    Rub: IRubricator;

	    Facts: IMetaDictionary;

	    Values: IMetaDictionary;

	    Loader: ICubeLoaderFromSource;

	    Provider: IDtMetabaseProvider;

	    Bindings: ICubeLoaderDimensionBindings;

	    Binding: ICubeLoaderDimensionBinding;

	    FactBinding: ICubeLoaderFactBinding;

	Begin

	    MB := MetabaseClass.Active;

	    //Таблица-источник

	    Provider := New DtMetabaseProvider.Create;

	    Provider.Dataset := MB.ItemById("T_DATA").Bind As IDatasetModel;

	    //БДВР, в которую будет осуществляться загрузка данных

	    Rub := MB.ItemById("TSDB").Bind As IRubricator;

	    Facts := Rub.Facts;

	    Values := Rub.Values;

	    //Инициализация загрузчика данных

	    Loader := New CubeLoaderFromSource.Create;

	    Loader.Type := CubeLoaderType.Rubricator;

	    Loader.Rubricator := Rub;

	    //Настройка привязок атрибутов

	    Bindings := Loader.DimensionBindings;

	    //Измерение стран

	    Binding := Bindings.Add("COUNTRY_KEY");

	    Binding.AttributeId := "KEY";

	    Binding.MetaAttribute := Facts.Attributes.FindById("COUNTRY");

	    //Календарное измерение

	    Binding := Bindings.AddCalendar("V_DATE", DimCalendarLevel.Year);

	    Binding.MetaAttribute := Values.Attributes.FindByTag(MetaAttributeTag.CalendarDate);

	    //Привязка атрибута Значение

	    FactBinding := Loader.FactBindings.Add("VAL");

	    FactBinding.MetaAttribute := Values.Attributes.FindByTag(MetaAttributeTag.Value);

	    //Загрузка данных

	    Loader.Load(Provider, Null);

	End Sub LoadData;


См. также:


[Примеры](KeCubes_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
