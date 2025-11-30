# Настройка свойств и параметров объектов: Разработка прикладного приложения

Настройка свойств и параметров объектов: Разработка прикладного приложения
-


# Настройка свойств и параметров объектов


После того, как [получено](Access_to_repository_and_objects.htm)
 описание объекта, можно перейти к непосредственной работе с ним и получить
 доступ к структуре объекта, его параметрам, [данным](Work_with_data.htm),
 правам доступа.


## Редактирование описания объекта


Для изменения наименования, идентификатора и других общих свойств всех
 объектов необходимо описание объекта открыть на редактирование с помощью
 метода [IMetabaseObjectDescriptor.EditDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.EditDescriptor.htm),
 изменить свойства и сохранить описание с помощью метода [IMetabaseObjectDescriptor.SaveDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.SaveDescriptor.htm):


	Sub Main;

	Var

	    Mb: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	Begin

	    Mb := MetabaseClass.Active;

	    // Получение описания объекта

	    MDesc := Mb.ItemById("Report");

	    // Редактирование описания объекта

	    MDesc := MDesc.EditDescriptor;

	    // Изменение наименования

	    MDesc.Name := MDesc.Name + " (последняя версия)";

	    // Сохранение описания

	    MDesc.SaveDescriptor;

	End Sub Main;


## Получение структуры объекта


Для настройки объекта и изменения его специфических свойств необходимо
 получить структуру объекта. Интерфейс [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm)
 описывает общую структуру всех объектов репозитория, для его получения
 предназначены два метода в описании объекта - [IMetabaseObjectDescriptor.Bind](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Bind.htm)
 и [IMetabaseObjectDescriptor.Edit](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Edit.htm).
 Метод Bind вернёт структуру объекта,
 доступную для чтения; Edit - вернёт
 структуру, доступную для редактирования. Для дальнейшей работы необходимо
 структуру, описываемую интерфейсом [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm),
 привести к интерфейсу, который отвечает за соответствующий тип объекта.
 Приведение типов осуществляется с помощью операции As.
 Интерфейсы, отвечающие за различные объекты репозитория, описаны в разных
 сборках, например:


	- Базы данных, таблицы, запросы
	 и другие. Сборка [Db](KeDb.chm::/KeDb_Title.htm), интерфейсы
	 [IDatabase](KeDb.chm::/Interface/IDatabase/IDatabase.htm),
	 [ITable](KeDb.chm::/Interface/ITable/ITable.htm),
	 [IQuery](KeDb.chm::/Interface/IQuery/IQuery.htm)
	 и другие;


	- Справочники и справочники НСИ.
	 Сборки [Dimensions](KeDims.chm::/KeDims_Title.htm)
	 и [Rds](KeRds.chm::/KeRds_Title.htm), интерфейсы
	 [IStandardDimension](KeDims.chm::/interface/IStandardDimension/IStandardDimension.htm),
	 [ICalendarDimension](KeDims.chm::/interface/ICalendarDimension/ICalendarDimension.htm),
	 [IRdsDictionary](KeRds.chm::/Interface/IRdsDictionary/IRdsDictionary.htm)
	 и другие;


	- Кубы. Сборка [Cubes](KeCubes.chm::/KeCubes_Title.htm), интерфейсы
	 [IAutoCube](KeCubes.chm::/Interface/IAutoCube/IAutoCube.htm),
	 [IStandardCube](KeCubes.chm::/Interface/IStandardCube/IStandardCube.htm),
	 [ICalculatedCube](KeCubes.chm::/Interface/ICalculatedCube/ICalculatedCube.htm)
	 и другие;


	- Базы данных временных рядов.
	 Сборка [Cubes](KeCubes.chm::/KeCubes_Title.htm), интерфейс
	 [IRubricator](KeCubes.chm::/Interface/IRubricator/IRubricator.htm);


	- Регламентные отчёты, экспресс-отчёты
	 и рабочие книги. Сборки [Report](KeReport.chm::/Intro/KeReport_TitlePage.htm)
	 и [Express](KeExpress.chm::/KeExpress_Title.htm),
	 интерфейсы [IPrxReport](KeReport.chm::/Interface/IPrxReport/IPrxReport.htm),
	 [IEaxAnalyzer](KeExpress.chm::/Interface/IEaxAnalyzer/IEaxAnalyzer.htm).


Более подробно можно ознакомиться, изучив [список доступных сборок](Assembly.chm::/System_Assembly.htm)
 и их состав. Пример получения доступа к модулю и настройке регламентного
 отчёта:


	Sub Main;

	Var

	    Mb: IMetabase;

	    MObj: IMetabaseObject;

	    Report: IPrxReport;

	Begin

	    Mb := MetabaseClass.Active;

	    // Получение структуры объекта

	    MObj := Mb.ItemById("Module").Bind;

	    // Открытие структуры объекта на редактирование

	    MObj := Mb.ItemById("Report").Edit;

	    // Приведение структуры к интерфейсу, предназначенному для работы с регламентными отчётами

	    Report := MObj As IPrxReport;

	    // Изменение настроек в регламентном отчёте

	    Report.ActiveSheet := Report.Sheets.FindByName("Результаты");

	    Report.Options.DisplayTabs := TriState.OffOption;

	    //...

	    // Сохранение изменений

	    MObj.Save;

	End Sub Main;


## Настройка параметров объектов


Большинство объектов, реализованных «Форсайт. Аналитическая платформа»,
 могут иметь набор параметров, за счёт которых осуществляется фильтрация
 отбираемых данных, управление другими объектами или какие-либо другие
 действия. Значения параметров запрашиваются при открытии объекта. Список
 параметров объекта формируется в свойстве [IMetabaseObjectDescriptor.Params](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Params.htm).


При настройке списка параметров объект должен находиться в состоянии
 редактирования:


	Sub Main;

	Var

	    Mb: IMetabase;

	    MObj: IMetabaseObject;

	    Params: IMetabaseObjectParams;

	    Param: IMetabaseObjectParam;

	Begin

	    Mb := MetabaseClass.Active;

	    // Получение описания объекта

	    MObj := Mb.ItemById("Report").Edit;

	    // Редактирование списка параметров

	    Params := MObj.Params;

	    Param := Params.Add;

	    Param.Id := "Start_Date";

	    Param.Name := "Начальная дата";

	    Param.DataType := DbDataType.Date;

	    Param := Params.Add;

	    Param.Id := "End_Date";

	    Param.Name := "Конечная дата";

	    Param.DataType := DbDataType.Date;

	    // Сохранение объекта

	    MObj.Save;

	End Sub Main;


Также ряд объектов имеет собственные наборы параметров, например, доступ
 к параметрам табличных справочников НСИ осуществляется через свойство
 [IRdsDictionary.Params](KeRds.chm::/Interface/IRdsDictionary/IRdsDictionary.Params.htm).
 Это обусловлено необходимостью задавать какие-либо специфические настройки
 для параметров.


См. также:


[Разработка
 прикладного приложения](../01_Development_Environment/01_Purpose_of_the_constructor/Purpose_of_the_constructor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
