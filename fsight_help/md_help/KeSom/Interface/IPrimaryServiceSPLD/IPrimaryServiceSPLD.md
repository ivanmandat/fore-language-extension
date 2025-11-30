# IPrimaryServiceSPLD

IPrimaryServiceSPLD
-


# IPrimaryServiceSPLD


Сборка: Metabase;


## Описание


Интерфейс IPrimaryServiceSPLD
 содержит свойства и методы модуля безопасности, используемого при подключении
 к репозиторию через веб-сервис платформы.


## Иерархия наследования


           [ISecurityPackageLogonData](../ISecurityPackageLogonData/ISecurityPackageLogonData.htm)


           IPrimaryServiceSPLD


## Комментарии


Для использования подключения к репозиторию через веб-сервис платформы
 должно быть разрешено выполнение SQL-запросов с использованием операций
 BI-сервера. Для этого в [настройках
 BI-сервера](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings.htm) должен быть создан подраздел Dal
 и флагу Allow установлено значение
 1.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Endpoint](IPrimaryServiceSPLD.Endpoint.htm)
		 Свойство Endpoint определяет
		 адрес веб-сервиса платформы, который будет использоваться для
		 подключения и работы с репозиторием.


		 ![](../../Property_Image.gif)
		 [Metabase](IPrimaryServiceSPLD.Metabase.htm)
		 Свойство Metabase определяет
		 идентификатор описания репозитория, к которому необходимо подключиться
		 через веб-сервис платформы.


		 ![](../../Property_Image.gif)
		 [OriginLogonData](IPrimaryServiceSPLD.OriginLogonData.htm)
		 Свойство OriginLogonData
		 возвращает параметры модуля безопасности того репозитория, к которому
		 фактически осуществлено подключение через веб-сервис платформы.


## Свойства, унаследованные от [ISecurityPackageLogonData](../ISecurityPackageLogonData/ISecurityPackageLogonData.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [IsUnicode](../ISecurityPackageLogonData/ISecurityPackageLogonData.IsUnicode.htm)
		 Свойство IsUnicode
		 возвращает признак того, используется ли кодировка юникод.


		 ![](../../Property_Image.gif)
		 [LogonEvent](../ISecurityPackageLogonData/ISecurityPackageLogonData.LogonEvent.htm)
		 Свойство LogonEvent
		 определяет использование событий при подключении к репозиторию.


		 ![](../../Property_Image.gif)
		 [ParamCount](../ISecurityPackageLogonData/ISecurityPackageLogonData.ParamCount.htm)
		 Свойство ParamCount
		 возвращает количество параметров модуля безопасности.


		 ![](../../Property_Image.gif)
		 [ParamName](../ISecurityPackageLogonData/ISecurityPackageLogonData.ParamName.htm)
		 Свойство ParamName
		 возвращает наименование параметра модуля безопасности.


		 ![](../../Property_Image.gif)
		 [ParamValue](../ISecurityPackageLogonData/ISecurityPackageLogonData.ParamValue.htm)
		 Свойство ParamValue
		 определяет значение параметра модуля безопасности.


		 ![](../../Property_Image.gif)
		 [Unicode](../ISecurityPackageLogonData/ISecurityPackageLogonData.Unicode.htm)
		 Свойство Unicode определяет,
		 использовать ли кодировку юникод.


		 ![](../../Property_Image.gif)
		 [Valid](../ISecurityPackageLogonData/ISecurityPackageLogonData.Valid.htm)
		 Свойство Valid возвращает
		 признак корректности параметров модуля безопасности.


## Методы, унаследованные от [ISecurityPackageLogonData](../ISecurityPackageLogonData/ISecurityPackageLogonData.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Clone](../ISecurityPackageLogonData/ISecurityPackageLogonData.Clone.htm)
		 Метод Clone возвращает
		 объект, содержащий копию параметров модуля безопасности.


		 ![](../../Sub_Image.gif)
		 [DbObjectO](../ISecurityPackageLogonData/ISecurityPackageLogonData.DbObjectO.htm)
		 Метод DbObjectO
		 возвращает идентификатор объекта с префиксом, соответствующим
		 текущему репозиторию.


См. также:


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
