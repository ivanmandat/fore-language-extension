# ISQLCommand

ISQLCommand
-


# ISQLCommand


Сборка: Db;


## Описание


Интерфейс ISQLCommand содержит
 свойства и методы объекта репозитория - [Команда СУБД](UiNavObj.chm::/CUBD/UiDb_relationa_CUBD.htm).


## Иерархия наследования


ISQLCommand


## Комментарии


При создании новой команды СУБД для её корректной работы необходимо,
 чтобы в настройках был задан следующий минимальный набор свойств:


	- [Database](ISQLCommand.Database.htm);


	- [Text](ISQLCommand.Text.htm).


Для выполнения процедуры и получения результатов откройте объект репозитория
 с помощью метода [IMetabaseObjectDescriptor.Open](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm)
 или [IMetabaseObjectDescriptor.OpenWithParam](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.OpenWithParam.htm)
 и приведите его к интерфейсу [ISQLCommandInstance](../ISQLCommandInstance/ISQLCommandInstance.htm).
 Если команда СУБД параметрическая, то набор параметров для открытия можно
 сформировать с помощью метода [IMetabaseObjectParams.CreateEmptyValues](KeSom.chm::/Interface/IMetabaseObjectParams/IMetabaseObjectParams.CreateEmptyValues.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Database](ISQLCommand.Database.htm)
		 Свойство Database определяет
		 базу данных, в которой хранится команда СУБД.


		 ![](../../Property_Image.gif)
		 [Text](ISQLCommand.Text.htm)
		 Свойство Text определяет
		 текст SQL-запроса для определенного драйвера СУБД.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClearText](ISQLCommand.ClearText.htm)
		 Метод ClearText осуществляет
		 очистку оператора команды СУБД.


См. также:


[Интерфейсы сборки Db](../KeDb_Interface.htm)
 | [ISQLCommandInstance](../ISQLCommandInstance/ISQLCommandInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
