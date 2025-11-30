# IDtDbaseProvider.DriverVersion

IDtDbaseProvider.DriverVersion
-


# IDtDbaseProvider.DriverVersion


## Синтаксис


DriverVersion: String;


## Описание


Свойство DriverVersion определяет
 версию драйвера, используемого при подключении.


## Комментарии


В качестве значений данного свойства доступны следующие значения:


	- dBASE III;


	- dBASE IV;


	- dBASE 5.0;


	- VFPOLEDB.1.


Возможны ситуации неудачного импорта с помощью всех доступных драйверов.
 Это связано с тем, что файл, имеющий расширение *.dbf, был создан с использованием
 версии драйвера Visual FoxPro. Для импорта данных в таком случае используйте
 [IDtVfpProvider](../IDtVfpProvider/IDtVfpProvider.htm).


Важно. Для
 импорта данных с помощью драйвера VFPOLEDB.1
 используйте 32-битную версию продукта «Форсайт. Аналитическая платформа»,
 так как данный драйвер не поддерживает работу с 64-битными приложениями.


## Пример


Использование свойства приведено в примере для [IDtDbaseProvider.Path](IDtDbaseProvider.Path.htm).


См. также:


[IDtDbaseProvider](IDtDbaseProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
