# IDtExcelProvider.DriverVersion

IDtExcelProvider.DriverVersion
-


# IDtExcelProvider.DriverVersion


## Синтаксис


DriverVersion: String;


## Описание


Свойство DriverVersion определяет
 версию драйвера, используемого при работе с файлом.


## Комментарии


В качестве значений данного свойства доступны следующие значения:


	- Excel 3.0;


	- Excel 4.0;


	- Excel 5.0;


	- Excel 8.0
	 - при работе с документами MS Office 97-2003;


	- Excel 12.0
	 - при работе с документами Microsoft Office 2007;


	- Excel 14.0
	 - при работе с документами Microsoft Office 2010.


Примечание.
 При указании драйвера для Microsoft Office 2007-2010 в зависимости от
 типа файла, с которым предполагается работа (xlsx, xlsb, xlsm), к наименованию
 драйвера также может потребоваться добавление постфикса (XML, Macro).
 Более подробную информацию о доступных постфиксах можно получить в документации
 по формированию строк подключения при работе с Microsoft Office 2007-2010.


## Пример


Использование свойства приведено в примере для [IDtExcelProvider.File](IDtExcelProvider.File.htm).


См. также:


[IDtExcelProvider](IDtExcelProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
