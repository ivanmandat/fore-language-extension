# Получение и работа с данными объектов: Разработка прикладного приложения

Получение и работа с данными объектов: Разработка прикладного приложения
-


# Получение и работа с данными объектов


После создания и настройки объектов можно перейти к наполнению их данными
 или получению уже имеющихся в них данных. Для получения данных объекта
 его необходимо открыть, для этого используется метод [IMetabaseObjectDescriptor.Open](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm)
 или [IMetabaseObjectDescriptor.OpenWithParam](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.OpenWithParam.htm).
 Методы возвращают интерфейс [IMetabaseObjectInstance](KeSom.chm::/Interface/IMetabaseObjectInstance/IMetabaseObjectInstance.htm),
 который является общим для всех открываемых объектов.


При открытии различных объектов под термином «данные» будут пониматься
 различные сущности:


	- плоская
	 таблица со значениями при открытии [табличных
	 наборов данных](UiNavObj.chm::/Table/Master/object_type_page.htm);


	- набор
	 элементов при открытии [справочников](UiNavObj.chm::/reference_book/Create.htm).
	 Каждый элемент характеризуется набором значений каких-либо атрибутов;


	- матрица
	 значений при открытии [многомерных
	 структур данных](UiNavObj.chm::/Cube/UiMd_Cube_Type.htm). Размер матрицы определяется количеством
	 измерений куба;


	- совокупный набор данных источников при открытии [отчётов](DataAnalysis.chm::/DataAnalysis_Title.htm).


Интерфейсы, предназначенные для работы с данными различных объектов
 репозитория, описаны в разных сборках, например:


	- Таблицы, запросы и другие.
	 Сборка [Db](KeDb.chm::/KeDb_Title.htm), интерфейсы
	 [IDatasetInstance](KeDb.chm::/Interface/IDatasetInstance/IDatasetInstance.htm);


	- Справочники и справочники НСИ.
	 Сборки [Dimensions](KeDims.chm::/KeDims_Title.htm)
	 и [Rds](KeRds.chm::/KeRds_Title.htm), интерфейсы
	 [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm)
	 и [IRdsDictionaryInstance](KeRds.chm::/Interface/IRdsDictionaryInstance/IRdsDictionaryInstance.htm);


	- Кубы. Сборка [Cubes](KeCubes.chm::/KeCubes_Title.htm), интерфейсы
	 [ICubeInstance](KeCubes.chm::/Interface/ICubeInstance/ICubeInstance.htm),
	 [IAutoCubeInstance](KeCubes.chm::/Interface/IAutoCubeInstance/IAutoCubeInstance.htm),
	 [IStandardCubeInstance](KeCubes.chm::/Interface/IStandardCubeInstance/IStandardCubeInstance.htm),
	 [ICalculatedCubeInstance](KeCubes.chm::/Interface/ICalculatedCubeInstance/ICalculatedCubeInstance.htm)
	 и другие;


	- Базы данных временных рядов.
	 Сборка [Cubes](KeCubes.chm::/KeCubes_Title.htm), интерфейс
	 [IRubricatorInstance](KeCubes.chm::/Interface/IRubricatorInstance/IRubricatorInstance.htm);


	- Регламентные отчёты, экспресс-отчёты
	 и рабочие книги. Сборки [Report](KeReport.chm::/Intro/KeReport_TitlePage.htm)
	 и [Express](KeExpress.chm::/KeExpress_Title.htm),
	 интерфейсы [IPrxReport](KeReport.chm::/Interface/IPrxReport/IPrxReport.htm),
	 [IEaxAnalyzer](KeExpress.chm::/Interface/IEaxAnalyzer/IEaxAnalyzer.htm).


Более подробно можно ознакомиться, изучив [список доступных сборок](Assembly.chm::/System_Assembly.htm)
 и их состав.


Рассмотрим примеры просмотра данных таблицы, справочника и куба:


			Sub TableData;

Var

    Mb: IMetabase;

    TableInst: IDatasetInstance;

    Fields: IDatasetInstanceFields;

    Field1, Field2, Field3: IDatasetInstanceField;

Begin

    Mb := MetabaseClass.Active;

    // Открытие таблицы и приведение к интерфейсу, предназначенному для работы с данными

    TableInst := Mb.ItemById("TABLE").Open(Null) As IDatasetInstance;

    // Получение полей

    Fields := TableInst.Fields;

    Field1 := Fields.FindById("ID");

    Field2 := Fields.FindById("NAME");

    Field3 := Fields.FindById("VALUE");

    // Проход всех записей и просмотр значений полей

    While Not TableInst.Eof Do

        Debug.Write("Идентификатор: " + Field1.Value);

        Debug.Write(". Наименование: " + Field2.Value);

        Debug.WriteLine(". Значение: " + Field3.Value);

        TableInst.Next;

    End While;

    TableInst.Close;

End Sub TableData;


Sub DictionaryData;

Var

    Mb: IMetabase;

    DictInst: IDimInstance;

    Elements: IDimElements;

    Attribute: IDimAttributeInstance;

    i: Integer;

Begin

    Mb := MetabaseClass.Active;

    // Открытие справочника и приведение к интерфейсу, предназначенному для работы с данными

    DictInst := Mb.ItemById("DICTIONARY").Open(Null) As IDimInstance;

    // Получение списка элементов

    Elements := DictInst.Elements;

    // Получение атрибута VALUE

    Attribute := DictInst.Attributes.FindById("VALUE");

    // Просмотр значений атрибутов для каждого элемента справочника

    For i := 0 To Elements.Count - 1 Do

        Debug.Write("Идентификатор: " + Elements.Id(i));

        Debug.Write(". Наименование: " + Elements.Name(i));

        Debug.WriteLine(". Значение: " + Elements.AttributeValueO(i, Attribute));

    End For;

End Sub DictionaryData;


Sub CubeData;

Var

    Mb: IMetabase;

    CubeInst: ICubeInstance;

    Destination: ICubeInstanceDestination;

    SelSet: IDimSelectionSet;

    Matr: IMatrix;

    Iter: IMatrixIterator;

Begin

    Mb := MetabaseClass.Active;

    // Открытие куба и приведение к интерфейсу, предназначенному для работы с данными

    CubeInst := Mb.ItemById("STANDART_CUBE").Open(Null) As ICubeInstance;

    Destination := CubeInst.Destinations.DefaultDestination;

    // Создание и формирование отметки, по которой будет вычислена матрица значений

    SelSet := Destination.CreateDimSelectionSet;

    SelSet.FindById("COUNTRY").SelectElement(0, False);

    SelSet.FindById("CALENDAR").SelectAll;

    // Вычисление матрицы значений

    Matr := Destination.Execute(SelSet);

    // Итератор для прохода по полученным значениям

    Iter := Matr.CreateIterator;

    Iter.Move(IteratorDirection.First);

    While Iter.Valid Do

        Debug.Write(Iter.Value + " ");

        Iter.Move(IteratorDirection.Next);

    End While;

End Sub CubeData;


См. также:


[Разработка
 прикладного приложения](../01_Development_Environment/01_Purpose_of_the_constructor/Purpose_of_the_constructor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
