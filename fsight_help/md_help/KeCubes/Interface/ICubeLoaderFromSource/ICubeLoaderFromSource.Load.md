# ICubeLoaderFromSource.Load

ICubeLoaderFromSource.Load
-


# ICubeLoaderFromSource.Load


## Синтаксис


Load(Source: Object; CreateInfo: [IMetabaseObjectCreateInfo](kesom.chm::/interface/imetabaseobjectcreateinfo/imetabaseobjectcreateinfo.htm)):
 [IMetabaseObject](kesom.chm::/interface/imetabaseobject/imetabaseobject.htm);


## Параметры


Source. Источник
 данных, описываемый интерфейсом [IDtProvider](kedt.chm::/interface/idtprovider/idtprovider.htm).


CreateInfo.
 Информация о создаваемом кубе. Если информация отсутствует, либо загрузка
 осуществляется в существующий куб, то в качестве параметра необходимо
 передать значение Null.


## Описание


Метод Load осуществляет загрузку
 данных.


## Комментарии


Перед загрузкой будет создан новый куб. Куб будет создан на основании
 информации, передаваемой в параметре CreateInfo.
 Если параметр не указан, то информация о кубе будет сгенерирована автоматически
 и куб будет сохранен в папке, указанной в свойстве [Parent](ICubeLoaderFromSource.Parent.htm).


На основании информации о привязках, которые необходимо установить для
 [измерений](ICubeLoaderFromSource.DimensionBindings.htm) и
 [фактов](ICubeLoaderFromSource.FactBindings.htm), в репозитории
 будет создана таблица. В эту таблицу в дальнейшем будут загружены данные.
 После создания таблицы будет сформирована структура куба, установлены
 привязки между измерениями, фактами и таблицей и куб будет сохранен.


Загрузка данных из источника в таблицу происходит следующим образом:


	- Из источника считывается запись с данными;


	- В записи поочередно берется значение каждого поля и производится
	 следующее действие:


	-


		- Если поле связано с измерением куба, то значение поля ищется
		 среди элементов измерения. Поиск осуществляется по значениям атрибута,
		 указанного в свойстве [AttributeId](../ICubeLoaderDimensionBinding/ICubeLoaderDimensionBinding.AttributeId.htm).
		 Если элемент не найден, то он автоматически добавляется в соответствующий
		 справочник. Ключ полученного элемента заносится в соответствующее
		 поле таблицы, которая создана для хранения значений куба;


		- Если поле связано с календарным измерением или фактом, то
		 значение заносится в соответствующее поле таблицы без изменений.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «MDM» и папки с идентификатором «F_CUBES», в которой хранятся кубы. Также
 предполагается наличие файла «C:\Data.xls».


			Sub UserProc;

Var

    MB: IMetabase;

    Loader: ICubeLoaderFromSource;

    Provider: IDtExcelProvider;

    MDM: IRdsDatabaseInstance;

    Bindings: ICubeLoaderDimensionBindings;

    Binding: ICubeLoaderDimensionBinding;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MDM := MB.ItemById("MDM").Open(Null) As IRdsDatabaseInstance;

    //Источник данных для куба

    Provider := New DtExcelProvider.Create;

    Provider.DriverVersion := "Excel 8.0";

    Provider.File := "C:\Data.xls";

    Provider.HasHeader := True;

    Provider.Query := "Select * From [Лист1$]";

    //Загрузчик данных в куб

    Loader := New CubeLoaderFromSource.Create;

    Loader.CreateCacheKeeper := True;

    Loader.RdsDatabase := MDM;

    Loader.Database := MDM.DatabaseInstance;

    Loader.Parent := MB.ItemById("F_CUBES").Bind;

    //Инициализация привязок измерений и фактов

    Loader.Init(Provider);

    //Изменение уровня календаря в привязке календарного измерения

    Bindings := Loader.DimensionBindings;

    For i := 0 To Bindings.Count - 1 Do

        Binding := Bindings.Item(i);

        If Binding.IsCalendar Then

            Binding.CalendarLevel := DimCalendarLevel.Year;

        End If;

    End For;

    //Создание куба и загрузка данных

    Loader.Load(Provider, Null);

End Sub UserProc;


При выполнении примера будут инициализированы объект импорта из Excel
 и загрузчик данных в куб. На основании информации о полях источника данных
 буду настроены привязки измерений и фактов создаваемого куба. При выполнении
 метода Load будут созданы новый
 стандартный куб, необходимые справочники для измерений и таблица для хранения
 данных. Данные будут импортированы в созданную таблицу.


См. также:


[ICubeLoaderFromSource](ICubeLoaderFromSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
