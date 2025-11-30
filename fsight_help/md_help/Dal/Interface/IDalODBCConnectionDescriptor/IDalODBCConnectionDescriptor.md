# IDalODBCConnectionDescriptor

IDalODBCConnectionDescriptor
-


# IDalODBCConnectionDescriptor


Сборка: Dal;


## Описание


Интерфейс IDalODBCConnectionDescriptor
 содержит свойства для настройки дополнительных параметров подключения
 с использованием ODBC драйвера.


## Иерархия наследования


IDalODBCConnectionDescriptor


## Комментарии


Для подключения с использованием ODBC драйверов, которые должны быть
 установлены в операционной системе, могут использоваться следующие классы:


	- [DalMsSql2012ODBCDriver](../../Class/DalMsSql2012ODBCDriver/DalMsSql2012ODBCDriver.htm);


	- [DalODBCDriver](../../Class/DalODBCDriver/DalODBCDriver.htm).


Для параметров подключения:


	- Создайте экземпляр драйвера с помощью одного из указанных выше
	 классов. Приведите полученный экземпляр к интерфейсу [IDalDriver](../IDalDriver/IDalDriver.htm).


	- Создайте [описание
	 подключения](../IDalDriver/IDalDriver.CreateDescriptor.htm) и приведите его к интерфейсу IDalODBCConnectionDescriptor.


	- Задайте значения параметров, используемых для формирования строки
	 подключения, с помощью свойства [ODBCParams](IDalODBCConnectionDescriptor.ODBCParams.htm)
	 или [ODBCParamValue](IDalODBCConnectionDescriptor.ODBCParamValue.htm).
	 Список параметров зависит от используемого ODBC драйвера. Подробный
	 список можно получить на сайте соответствующего производителя СУБД.
	 Если в операционной системе уже создан пользовательский DSN для подключения,
	 то задайте его в качестве значения для параметра с наименованием DSN.


	- Создайте подключение с помощью метода [IDalConnectionDescriptor.CreateConnection](../IDalConnectionDescriptor/IDalConnectionDescriptor.CreateConnection.htm).


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ODBCParamCount](IDalODBCConnectionDescriptor.ODBCParamCount.htm)
		 Свойство ODBCParamCount
		 возвращает количество параметров, для которых определены значения.


		 ![](../../Property_Image.gif)
		 [ODBCParamName](IDalODBCConnectionDescriptor.ODBCParamName.htm)
		 Свойство ODBCParamName
		 возвращает наименование параметра с указанным индексом.


		 ![](../../Property_Image.gif)
		 [ODBCParams](IDalODBCConnectionDescriptor.ODBCParams.htm)
		 Свойство ODBCParams
		 определяет строку значений дополнительных параметров.


		 ![](../../Property_Image.gif)
		 [ODBCParamValue](IDalODBCConnectionDescriptor.ODBCParamValue.htm)
		 Свойство ODBCParamValue
		 определяет значение для параметра с указанным наименованием.


См. также:


[Интерфейсы
 сборки Dal](../Dal_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
