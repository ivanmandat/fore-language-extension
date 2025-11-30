# IDtRestProvider

IDtRestProvider
-


# IDtRestProvider


Сборка: Dt;


## Описание


Интерфейс IDtRestProvider содержит
 свойства и методы источника данных - [Импорт
 из REST](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/Inputs_REST.htm).


## Иерархия наследования


           [IDtObject](../IDtObject/IDtObject.htm)


           [IDtProvider](../IDtProvider/IDtProvider.htm)


           IDtRestProvider


## Комментарии


Для работы с REST-сервисом по протоколу HTTPS используйте сертификат
 безопасности в формате PEM:


	- в ОС Linux выполните одно из действий:


		- добавьте содержимое сертификата в файл /etc/ssl/certs/ca-certificates.crt
		 в Debian-подобных дистрибутивах, /etc/pki/tls/certs/ca-bundle.crt
		 в RedHat-подобных дистрибутивах и ALT Linux;


		- добавьте сертификат с расширением *.pem в папку /etc/ssl/certs
		 в Debian-подобных дистрибутивах, /etc/pki/tls/certs в RedHat-подобных
		 дистрибутивах и ALT Linux;


	- в ОС Windows:


		- Запустите встроенное приложение «Управление
		 сертификатами компьютеров».


		- Добавьте сертификат в папку «Доверенные
		 корневые центры сертификации > Сертификаты».


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Credentials](IDtRestProvider.Credentials.htm)
		 Свойство Credentials
		 возвращает параметры учётных данных, которые будут использоваться
		 при подключении к REST-сервису.


		 ![](../../Property_Image.gif)
		 [Headers](IDtRestProvider.Headers.htm)
		 Свойство Headers возвращает
		 коллекцию HTTP-заголовков.


		 ![](../../Property_Image.gif)
		 [ResultProvider](IDtRestProvider.ResultProvider.htm)
		 Свойство ResultProvider
		 возвращает настройки источника данных, который будет обрабатывать
		 ответ от REST-сервиса.


		 ![](../../Property_Image.gif)
		 [ResultType](IDtRestProvider.ResultType.htm)
		 Свойство ResultType
		 определяет формат данных, в котором будет получен ответ от REST-сервиса.


		 ![](../../Property_Image.gif)
		 [Timeout](IDtRestProvider.Timeout.htm)
		 Свойство Timeout определяет
		 время ожидания ответа от REST-сервиса.


		 ![](../../Property_Image.gif)
		 [Url](IDtRestProvider.Url.htm)
		 Свойство Url определяет
		 адрес REST-сервиса, к которому будут отправляться запросы на получение
		 данных.


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


[Интерфейсы сборки Dt](../KeDt_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
