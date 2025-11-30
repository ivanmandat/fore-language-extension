# IOdbcDataset

IOdbcDataset
-


# IOdbcDataset


Сборка: Db;


## Описание


Интерфейс IOdbcDataset содержит
 свойства и методы объекта репозитория - [Источник данных
 ODBC](UiNavObj.chm::/ODBC/UiDb_relational_ODBC.htm).


## Комментарии


Свойства интерфейса позволяют настроить параметры объекта репозитория,
 осуществляющего доступ к данным посредством ODBC-драйверов, установленных
 в операционной системе. Для работы с данными откройте объект репозитория
 и приведите к интерфейсу [IDatasetInstance](../IDatasetInstance/IDatasetInstance.htm).


Примечание.
 Если с использованием драйвера ODBC осуществляется подключение к файлу
 с данными (текстовый файл, файл Microsoft Excel и другие), то работа с
 записями будет производиться только в режиме чтения. Добавление/удаление/изменение
 записей не поддерживается.


При создании нового источника данных ODBC для его корректной работы
 необходимо, чтобы в настройках был задан следующий минимальный набор свойств:


	- [Catalog](IOdbcDataset.Catalog.htm);


	- [DataSource](IOdbcDataset.DataSource.htm);


	- [DataSourceName](IOdbcDataset.DataSourceName.htm).


Если в источнике требуется авторизация, то также укажите свойства [UserId](IOdbcDataset.UserId.htm) и [Password](IOdbcDataset.Password.htm).


Также, вместо всех указанных свойство может быть задано одно свойство
 - [ProviderString](IOdbcDataset.ProviderString.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Catalog](IOdbcDataset.Catalog.htm)
		 Свойство Catalog определяет
		 каталог источника данных ODBC.


		 ![](../../Property_Image.gif)
		 [DataSource](IOdbcDataset.DataSource.htm)
		 Свойство DataSource
		 определяет тип источника ODBC.


		 ![](../../Property_Image.gif)
		 [DataSourceName](IOdbcDataset.DataSourceName.htm)
		 Свойство DataSourceName
		 определяет имя таблицы, файла или листа книги Excel (в зависимости
		 от типа источника данных).


		 ![](../../Property_Image.gif)
		 [Location](IOdbcDataset.Location.htm)
		 Свойство Location определяет
		 путь к месту расположения источника данных ODBC.


		 ![](../../Property_Image.gif)
		 [Password](IOdbcDataset.Password.htm)
		 Свойство Password определяет
		 пароль пользователя источника данных ODBC.


		 ![](../../Property_Image.gif)
		 [ProviderString](IOdbcDataset.ProviderString.htm)
		 Свойство ProviderString
		 определяет строку подключения источника ODBC.


		 ![](../../Property_Image.gif)
		 [UserId](IOdbcDataset.UserId.htm)
		 Свойство UserId определяет
		 имя пользователя источника данных ODBC.


См. также:


[Интерфейсы сборки Db](../KeDb_Interface.htm)
 | [IDatasetModel](../IDatasetModel/IDatasetModel.htm) | [IDatasetInstance](../IDatasetInstance/IDatasetInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
