# ISQLCommandInstance

ISQLCommandInstance
-


# ISQLCommandInstance


Сборка: Db;


## Описание


Интерфейс ISQLCommandInstance
 содержит свойства и методы для выполнения и получения доступа к результатам
 выполнения процедур и команд СУБД.


## Иерархия наследования


ISQLCommandInstance


## Комментарии


Для выполнения процедур и команд СУБД откройте соответствующий объект
 репозитория с помощью метода [IMetabaseObjectDescriptor.Open](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm)
 или [IMetabaseObjectDescriptor.OpenWithParam](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.OpenWithParam.htm)
 и приведите его к интерфейсу ISQLCommandInstance.
 После этого для запуска на выполнение используйте метод [Execute](ISQLCommandInstance.Execute.htm).


Примечание.
 При выполнении большого количества процедур, а также процедур с выходными
 параметрами, рекомендуется использовать ресурсы [сборки DAL](Dal.chm::/Dal_Title.htm), а
 не интерфейс ISQLCommandInstance.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Database](ISQLCommandInstance.Database.htm)
		 Свойство Database возвращает
		 объект, позволяющий получить доступ к объектам, хранящимся в базе
		 данных.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Execute](ISQLCommandInstance.Execute.htm)
		 Метод Execute запускает
		 объект на выполнение и возвращает количество обработанных записей.


См. также:


[Интерфейсы сборки Db](../KeDb_Interface.htm)
 | [ISQLCommand](../ISQLCommand/ISQLCommand.htm)
 | [IProcedure](../IProcedure/IProcedure.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
