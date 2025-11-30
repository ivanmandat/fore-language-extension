# RubricatorCreator

RubricatorCreator
-


# RubricatorCreator


Сборка: Cubes;


## Описание


Класс RubricatorCreator предназначен для создания базы данных временных рядов, основанной на таблице данных или стандартном кубе.


## Комментарии


Ограничения, накладываемые на стандартный куб:


-
должен присутствовать только один факт с одним значением;


-
должна быть только одна таблица-источник с данными;


-
должно присутствовать хотя бы одно измерение;


-
в отношениях между измерениями не поддерживаются формулы, созданные с помощью языка Fore.


## Свойства объекта класса, унаследованные от [IRubricatorCreator](../../Interface/IRubricatorCreator/IRubricatorCreator.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Bindings](../../Interface/IRubricatorCreator/IRubricatorCreator.Bindings.htm)


		 Свойство Bindings
		 возвращает коллекцию привязок атрибутов БД временных рядов к полям
		 таблицы данных.


		 ![](../../Property_Image.gif)
		 [CreateInfo](../../Interface/IRubricatorCreator/IRubricatorCreator.CreateInfo.htm)


		 Свойство CreateInfo
		 определяет параметры создаваемой БД временных рядов, как объекта
		 репозитория.


		 ![](../../Property_Image.gif)
		 [Measures](../../Interface/IRubricatorCreator/IRubricatorCreator.Measures.htm)


		 Свойство Measures
		 определяет справочник мер для создаваемой БД временных рядов.


		 ![](../../Property_Image.gif)
		 [Metabase](../../Interface/IRubricatorCreator/IRubricatorCreator.Metabase.htm)


		 Свойство Metabase
		 определяет репозиторий, в котором должна быть создана БД временных
		 рядов.


		 ![](../../Property_Image.gif)
		 [RdsDatabase](../../Interface/IRubricatorCreator/IRubricatorCreator.RdsDatabase.htm)


		 Свойство RdsDatabase
		 определяет репозиторий НСИ для создаваемой БД временных рядов.


		 ![](../../Property_Image.gif)
		 [SourceTable](../../Interface/IRubricatorCreator/IRubricatorCreator.SourceTable.htm)


		 Свойство SourceTable
		 определяет таблицу с данными, на которой будет основана БД временных
		 рядов.


		 ![](../../Property_Image.gif)
		 [TemplateCalendar](../../Interface/IRubricatorCreator/IRubricatorCreator.TemplateCalendar.htm)


		 Свойство TemplateCalendar
		 определяет календарный справочник, по параметрам которого будет
		 построено календарное измерение создаваемой БД временных рядов.


		 ![](../../Property_Image.gif)
		 [Units](../../Interface/IRubricatorCreator/IRubricatorCreator.Units.htm)


		 Свойство Units определяет
		 справочник единиц измерения для создаваемой БД временных рядов.


## Методы объекта класса, унаследованные от [IRubricatorCreator](../../Interface/IRubricatorCreator/IRubricatorCreator.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AssignCube](../../Interface/IRubricatorCreator/IRubricatorCreator.AssignCube.htm)


		 Метод AssignCube
		 устанавливает куб, на котором будет основана база данных временных
		 рядов.


		 ![](../../Sub_Image.gif)
		 [CreateRubricator](../../Interface/IRubricatorCreator/IRubricatorCreator.CreateRubricator.htm)


		 Метод CreateRubricator
		 создает БД временных рядов.


См. также:


[Классы сборки Cubes](../KeCubes_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
