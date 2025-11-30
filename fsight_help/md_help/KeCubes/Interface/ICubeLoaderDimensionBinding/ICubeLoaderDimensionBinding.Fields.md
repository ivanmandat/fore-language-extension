# ICubeLoaderDimensionBinding.Fields

ICubeLoaderDimensionBinding.Fields
-


# ICubeLoaderDimensionBinding.Fields


## Синтаксис


Fields: [ICubeCreatorFields](../ICubeCreatorFields/ICubeCreatorFields.htm);


## Описание


Свойство Fields возвращает коллекцию
 привязок полей источника к атрибутам измерения.


## Комментарии


Свойство используется, если необходимо осуществить привязку нескольких
 полей источника к нескольким атрибутам одного измерения.


## Пример


Для выполнения примера предполагается наличие файла «C:\Data.xls», в
 файле имеются какие-либо данные по странам. Данные располагаются в столбцах
 с наименованиями «Country ISO», «Country Name», «Date» и «Value»,
 данные имеют месячную динамику. Также могут присутствовать какие-либо
 другие столбцы с данными. В репозитории предполагается наличие папки с
 идентификатором «F_Cubes».


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Loader: ICubeLoaderFromSource;

		    Provider: IDtExcelProvider;

		    Bindings: ICubeLoaderDimensionBindings;

		    Binding: ICubeLoaderDimensionBinding;

		    Fields: ICubeCreatorFields;

		    Field: ICubeCreatorField;

		    FactBindings: ICubeLoaderFactBindings;

		    FactBinding: ICubeLoaderFactBinding;

		Begin

		    MB := MetabaseClass.Active;

		    //Источник данных для куба

		    Provider := New DtExcelProvider.Create;

		    Provider.DriverVersion := "Excel 8.0";

		    Provider.File := "C:\Data.xls";

		    Provider.HasHeader := True;

		    Provider.Query := "Select * From [Лист1$]";

		    //Загрузчик данных в куб

		    Loader := New CubeLoaderFromSource.Create;

		    Loader.Parent := MB.ItemById("F_CUBES").Bind;

		    Loader.LoadDuplicates := True;

		    //Настройка привязок измерений и фактов

		    Bindings := Loader.DimensionBindings;

		    Binding := Bindings.Add("Country ISO");

		    Binding.AttributeId := "ISO";

		    //Привязка второго атрибута к измерению

		    Fields := Binding.Fields;

		    Field := Fields.Add("Country Name");

		    Field.AttributeId := "Name";

		    Field.DataType := DbDataType.String;

		    Field.Identifying := True;

		    //Календарь

		    Binding := Bindings.AddCalendar("Date", DimCalendarLevel.Month);

		    //Привязка фактов

		    FactBindings := Loader.FactBindings;

		    FactBinding := FactBindings.Add("Value");

		    FactBinding.CubeFactAggregationType := CubeFactBindingAggregationType.Sum;

		    //Создание куба и загрузка данных

		    Loader.Load(Provider, Null);

		End Sub UserProc;


При выполнении примера будут инициализированы объект импорта из Excel
 и загрузчик данных в куб. Будут настроены привязки измерений и фактов
 создаваемого куба. Для факта будет настроена агрегация. В измерение по
 странам будут загружаться данные двух полей источника. При выполнении
 метода Load будут созданы новый
 стандартный куб, необходимые справочники для измерений и таблица для хранения
 данных. Данные будут импортированы в созданную таблицу.


См. также:


[ICubeLoaderDimensionBinding](ICubeLoaderDimensionBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
