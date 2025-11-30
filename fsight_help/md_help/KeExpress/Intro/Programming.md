# Общие принципы программирования с использованием сборки Express

Общие принципы программирования с использованием сборки Express
-


# Общие принципы программирования с использованием сборки Express


Сборка Express предназначена
 для работы с экспресс-отчётами и рабочими книгами. Программирование на Fore с использованием данной
 сборки заключается в последовательном создании/открытии и настройке экспресс-отчёта,
 рабочей книги.


Процесс работы с экспресс-отчётом состоит из следующих этапов:


	- Создайте экспресс-отчёт с помощью метода [IMetabase.CreateObject](KeSom.chm::/Interface/IMetabase/IMetabase.CreateObject.htm)
	 или откройте существующий:


		- в режиме просмотра с помощью метода [IMetabaseObjectDescriptor.Open](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm);


		- в режиме редактирования с помощью метода [IMetabaseObjectDescriptor.Edit](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Edit.htm).


	- Преобразуйте полученный объект [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm)
	 к интерфейсу [IEaxAnalyzer](../Interface/IEaxAnalyzer/IEaxAnalyzer.htm)
	 с помощью операции [As](fore.chm::/07_Operations/Operations_of_the_creation_object.htm).


Процесс работы с рабочей книгой состоит из следующих этапов:


	- Создайте рабочую книгу с помощью метода [IMetabase.CreateObject](KeSom.chm::/Interface/IMetabase/IMetabase.CreateObject.htm)
	 или откройте существующую:


		- в режиме просмотра с помощью метода [IMetabaseObjectDescriptor.Open](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm);


		- в режиме редактирования с помощью метода [IMetabaseObjectDescriptor.Edit](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Edit.htm).


	- Преобразуйте полученный объект [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm)
	 к интерфейсу [IEaxAnalyzer](../Interface/IEaxAnalyzer/IEaxAnalyzer.htm),
	 а затем к интерфейсу [IEaxWorkbook](../Interface/IEaxWorkbook/IEaxWorkbook.htm)
	 с помощью операции [As](fore.chm::/07_Operations/Operations_of_the_creation_object.htm).


См. также:


[Введение
 в сборку Express](Introduction.htm) | [Интерфейсы
 сборки Express](../Interface/KeExpress_Interface.htm) | [Перечисления
 сборки Express](../Enums/KeExpress_Enums.htm) | [Классы сборки
 Express](../Class/KeExpress_Classes.htm) | [Примеры](../Samples/Example_main.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
