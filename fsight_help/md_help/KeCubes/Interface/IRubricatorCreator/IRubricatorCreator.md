# IRubricatorCreator

IRubricatorCreator
-


# IRubricatorCreator


Сборка: Cubes;


## Описание


Интерфейс IRubricatorCreator
 предназначен для создания базы данных временных рядов, основанной
 на таблице данных или стандартном кубе.


## Иерархия наследования


           IRubricatorCreator


## Комментарии


Ограничения, накладываемые на стандартный куб:


	- должен присутствовать только один факт с одним значением;


	- должна быть только одна таблица-источник с данными;


	- должно присутствовать хотя бы одно измерение;


	- в отношениях между измерениями не поддерживаются формулы, созданные
	 с помощью языка Fore.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Bindings](IRubricatorCreator.Bindings.htm)


		 Свойство Bindings
		 возвращает коллекцию привязок атрибутов БД временных рядов к полям
		 таблицы данных.


		 ![](../../Property_Image.gif)
		 [CreateInfo](IRubricatorCreator.CreateInfo.htm)


		 Свойство CreateInfo
		 определяет параметры создаваемой БД временных рядов, как объекта
		 репозитория.


		 ![](../../Property_Image.gif)
		 [Measures](IRubricatorCreator.Measures.htm)


		 Свойство Measures
		 определяет справочник мер для создаваемой БД временных рядов.


		 ![](../../Property_Image.gif)
		 [Metabase](IRubricatorCreator.Metabase.htm)


		 Свойство Metabase
		 определяет репозиторий, в котором должна быть создана БД временных
		 рядов.


		 ![](../../Property_Image.gif)
		 [RdsDatabase](IRubricatorCreator.RdsDatabase.htm)


		 Свойство RdsDatabase
		 определяет репозиторий НСИ для создаваемой БД временных рядов.


		 ![](../../Property_Image.gif)
		 [SourceTable](IRubricatorCreator.SourceTable.htm)


		 Свойство SourceTable
		 определяет таблицу с данными, на которой будет основана БД временных
		 рядов.


		 ![](../../Property_Image.gif)
		 [TemplateCalendar](IRubricatorCreator.TemplateCalendar.htm)


		 Свойство TemplateCalendar
		 определяет календарный справочник, по параметрам которого будет
		 построено календарное измерение создаваемой БД временных рядов.


		 ![](../../Property_Image.gif)
		 [Units](IRubricatorCreator.Units.htm)


		 Свойство Units определяет
		 справочник единиц измерения для создаваемой БД временных рядов.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AssignCube](IRubricatorCreator.AssignCube.htm)


		 Метод AssignCube
		 устанавливает куб, на котором будет основана база данных временных
		 рядов.


		 ![](../../Sub_Image.gif)
		 [CreateRubricator](IRubricatorCreator.CreateRubricator.htm)


		 Метод CreateRubricator
		 создает БД временных рядов.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
