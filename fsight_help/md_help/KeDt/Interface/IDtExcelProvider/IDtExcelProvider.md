# IDtExcelProvider

IDtExcelProvider
-


# IDtExcelProvider


Сборка: Dt;


## Описание


Интерфейс IDtExcelProvider содержит
 свойства и методы источника данных - [Импорт
 из Excel(97-2003)](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/UiEtl_Inputs_Excel.htm).


## Иерархия наследования


           [IDtProvider](../IDtProvider/IDtProvider.htm)


           IDtExcelProvider


## Комментарии


Если в 64-х битной операционной системе установлен продукт «Форсайт. Аналитическая платформа»
 разрядностью 64 бита, но не установлен Microsoft Office, то для работы
 с файлами Microsoft Excel, использующими данный интерфейс, и файлами Microsoft
 Access необходимо установить Microsoft Office разрядностью 64 бита.


Примечание.
 Для корректного выполнения импорта данных разрядность «Форсайт. Аналитическая платформа»
 должна совпадать с разрядностью Microsoft Office.


При работе используется один из следующих провайдеров: Microsoft.Jet.OLEDB.4.0
 или Microsoft.ACE.OLEDB.12.0.
 Провайдер выбирается автоматически в зависимости от определенных условий:


	- Microsoft.Jet.OLEDB.4.0
	 используется, если:


	-


		- Осуществляется работа с бинарными XLS файлами (Бинарный
		 формат XLS файлов используют ранние версии Microsoft Office вплоть
		 до 2003).


	- Microsoft.ACE.OLEDB.12.0
	 используется при выполнении одного из следующих условий:


	-


		- Осуществляется работа в x64-версии платформы;


		- Осуществляется работа с XLS файлами в формате Office Open
		 XML;


		- В свойстве [IDtExcelProvider.DriverVersion](IDtExcelProvider.DriverVersion.htm)
		 указана версия Excel 12.0 и более поздняя.


Примечание.
 При указании свойства [IDtExcelProvider.DriverVersion](IDtExcelProvider.DriverVersion.htm)
 также будет проверяться фактическая структура передаваемого файла (бинарный
 или Office Open XML). Если фактическая структура не совпадает с версией
 Microsoft Office, которой соответствует драйвер, то используемый провайдер
 будет автоматически изменен.


В зависимости от значения свойства [ImexMode](IDtExcelProvider.ImexMode.htm) выбирается
 режим, в котором будет производиться импорт данных разных типов. При этом
 учитываются значения следующих ключей реестра:


	- TypeGuessRows.
	 Ключ определяет количество ячеек, которые будут использоваться для
	 определения типа данных (по умолчанию TypeGuessRows=8).


	- ImportMixedTypes.
	 Определяет тип данных, к которому будут преобразовываться все значения,
	 если в первых ячейках содержатся данные различных типов (используется
	 в режиме [DtExcelImexMode.Import](../../Enums/DtExcelImexMode.htm)).


В зависимости от используемого провайдера будут использоваться ключи,
 хранящиеся в разных ветках реестра:


	- Microsoft.Jet.OLEDB.4.0.
	 Ключи хранятся в ветке реестра [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Jet\4.0\Engines\Excel\];


	- Microsoft.ACE.OLEDB.12.0.
	 Ключи хранятся в ветке реестра [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\<Версия
	 MS Office>\Access Connectivity Engine\Engines\Excel];


При импорте отсутствует возможность указать длину загружаемых записей
 полей. Длина поля будет определяться автоматически по первым ячейкам,
 по которым также определяется тип данных. Если тип данных определен как
 Text и в этих ячейках отсутствуют
 значения, длина которых больше 255 символов, то при импорте все строковые
 значения будут загружены с ограничением в 255 символов. Для избежания
 обрезания записей задайте в ключе TypeGuessRows
 значение 0, при этом определение типа данных и вычисление максимальной
 длины будет производиться по всем записям полей.


Для проверки структуры файла формата XLS ознакомьтесь с [примером](../../Samples/XLS_Structure.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CheckFieldName](IDtExcelProvider.CheckFieldName.htm)


		 Свойство CheckFieldName
		 определяет, будут ли преобразовываться наименования полей таким
		 образом, чтобы можно было импортировать числовые наименования.


		 ![](../../Property_Image.gif)
		 [DriverVersion](IDtExcelProvider.DriverVersion.htm)


		 Свойство DriverVersion
		 определяет версию драйвера, используемого при работе с файлом.


		 ![](../../Property_Image.gif)
		 [File](IDtExcelProvider.File.htm)


		 Свойство File определяет
		 путь и наименование файла, из которого будет производиться импорт
		 данных.


		 ![](../../Property_Image.gif)
		 [HasHeader](IDtExcelProvider.HasHeader.htm)


		 Свойство HasHeader
		 определяет признак загрузки из первой строки файла списка заголовков
		 полей.


		 ![](../../Property_Image.gif)
		 [ImexMode](IDtExcelProvider.ImexMode.htm)


		 Свойство ImexMode определяет
		 режим, в котором будет производиться импорт из столбцов, содержащих
		 данные разных типов.


		 ![](../../Property_Image.gif)
		 [Query](IDtExcelProvider.Query.htm)


		 Свойство Query определяет
		 запрос к листам файла Excel.


## Свойства, унаследованные от [IDtProvider](../IDtProvider/IDtProvider.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoFillFieldsMode](../IDtProvider/IDtProvider.AutoFillFieldsMode.htm)
		 Свойство AutoFillFieldsMode
		 определяет режим распознавания типа полей источника данных.


		 ![](../../Property_Image.gif)
		 [CalcFieldsErrors](../IDtProvider/IDtProvider.CalcFieldsErrors.htm)
		 Свойство CalcFieldsErrors
		 возвращает коллекцию ошибок, возникших при расчете вычисляемых
		 полей.


		 ![](../../Property_Image.gif)
		 [Eof](../IDtProvider/IDtProvider.Eof.htm)
		 Свойство Eof возвращает
		 признак расположения курсора в источнике данных на последней записи.


		 ![](../../Property_Image.gif)
		 [FetchErrors](../IDtProvider/IDtProvider.FetchErrors.htm)
		 Свойство FetchErrors
		 возвращает ошибки, возникшие при импорте данных.


		 ![](../../Property_Image.gif)
		 [FilterIf](../IDtProvider/IDtProvider.FilterIf.htm)
		 Свойство FilterIf
		 возвращает условие загрузки записей из источника данных.


		 ![](../../Property_Image.gif)
		 [StringDataFormat](../IDtProvider/IDtProvider.StringDataFormat.htm)
		 Свойство StringDataFormat
		 возвращает настройки, используемые при идентификации данных.


		 ![](../../Property_Image.gif)
		 [TypeGuessRows](../IDtProvider/IDtProvider.TypeGuessRows.htm)
		 Свойство TypeGuessRows
		 определяет количество строк, по которым будет определяться тип
		 данных каждого поля.


## Свойства, унаследованные от [IDtObject](../IDtObject/IDtObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](../IDtObject/IDtObject.Active.htm)
		 Свойство Active возвращает
		 состояние источника/приёмника данных.


		 ![](../../Property_Image.gif)
		 [Fields](../IDtObject/IDtObject.Fields.htm)
		 Свойство Fields возвращает
		 описание полей источника/приёмника данных.


		 ![](../../Property_Image.gif)
		 [GetType](../IDtObject/IDtObject.GetType.htm)
		 Свойство GetType возвращает
		 тип источника/приёмника данных.


		 ![](../../Property_Image.gif)
		 [Metabase](../IDtObject/IDtObject.Metabase.htm)
		 Свойство Metabase
		 определяет репозиторий, в котором выполняется импорт или экспорт
		 данных.


## Методы, унаследованные от [IDtProvider](../IDtProvider/IDtProvider.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Fetch](../IDtProvider/IDtProvider.Fetch.htm)
		 Метод Fetch осуществляет
		 чтение данных текущей записи из источника данных.


		 ![](../../Sub_Image.gif)
		 [FetchRows](../IDtProvider/IDtProvider.FetchRows.htm)
		 Метод FetchRows осуществляет
		 чтение данных указанного количества записей из источника данных
		 и возвращает количество фактически считанных записей.


		 ![](../../Sub_Image.gif)
		 [ReadingRowsCount](../IDtProvider/IDtProvider.ReadingRowsCount.htm)
		 Метод ReadingRowsCount
		 возвращает количество записей, считанных из источника данных с
		 учетом условия загрузки.


		 ![](../../Sub_Image.gif)
		 [ReadingRowsTotalCount](../IDtProvider/IDtProvider.ReadingRowsTotalCount.htm)
		 Метод ReadingRowsTotalCount
		 возвращает количество записей, считанных из источника данных без
		 учета условия загрузки.


## Методы, унаследованные от [IDtObject](../IDtObject/IDtObject.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClearFields](../IDtObject/IDtObject.ClearFields.htm)
		 Метод ClearFields
		 очищает список полей приёмника/источника данных.


		 ![](../../Sub_Image.gif)
		 [Close](../IDtObject/IDtObject.Close.htm)
		 Метод Close закрывает
		 источник/приёмник данных.


		 ![](../../Sub_Image.gif)
		 [FieldsFromFile](../IDtObject/IDtObject.FieldsFromFile.htm)
		 Метод FieldsFromFile
		 осуществляет чтение списка полей из файла-источника.


		 ![](../../Sub_Image.gif)
		 [Load](../IDtObject/IDtObject.Load.htm)
		 Метод Load загружает
		 параметры источника/приёмника данных из XML.


		 ![](../../Sub_Image.gif)
		 [Open](../IDtObject/IDtObject.Open.htm)
		 Метод Open открывает
		 источник/приёмник данных.


		 ![](../../Sub_Image.gif)
		 [Save](../IDtObject/IDtObject.Save.htm)
		 Метод Save сохраняет
		 параметры источника/приёмника данных в формате XML.


См. также:


[Интерфейсы
 сборки Dt](../KeDt_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
