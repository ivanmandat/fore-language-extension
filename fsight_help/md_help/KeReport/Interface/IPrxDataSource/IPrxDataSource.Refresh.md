# IPrxDataSource.Refresh

IPrxDataSource.Refresh
-


# IPrxDataSource.Refresh


## Синтаксис


Refresh(Dimension: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);
 [Instance: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm)
 = Null]): Boolean;


## Параметры


Dimension. Измерение, входящее
 в куб, являющийся источником данных.


Instance. Экземпляр справочника
 для работы с элементами.


## Описание


Метод Refresh осуществляет обновление
 измерения среза.


## Комментарии


Для получения экземпляра справочника (параметра «Instance») и работы
 с элементами, используйте метод [IMetabaseObjectDescriptor.Open](KeSom.chm::/interface/imetabaseobjectdescriptor/IMetabaseObjectDescriptor.Open.htm)
 и приведите справочник к интерфейсу [IDimInstance](KeDims.chm::/interface/IDimIndex/IDimIndex.htm).


## Пример


Для выполнения примера:


	- Создайте регламентный отчёт.


	- Добавьте в качестве источника данных
	 куб, в котором содержатся справочники НСИ с идентификаторами D_FACTS
	 и DIC_SOURCE. Справочники НСИ содержат [атрибуты](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Attributes.htm)
	 с идентификаторами NAME и ORD.


	- Добавьте в [область
	 данных](UiReport.chm::/desktop/AreaData/UiReport_AreaData.htm) срез.


	- Перенесите добавленный срез на
	 лист отчёта, используя механизм Drag&Drop.


	- Добавьте два [элемента управления](UiReport.chm::/desktop/Source/Controls.htm)
	 для справочников НСИ с идентификаторами D_FACTS и DIC_SOURCE соответственно.


	- В модулях подключите системные
	 сборки: Metabase, Report, Rds, Dimensions.


	- Создайте первый модуль для работы
	 с элементами справочника НСИ с идентификатором D_FACTS:


	Sub UserProc;

	Var

	    Report: IPRxReport;

	    MB: IMetabase;

	    MObj1: IMetabaseObject;

	    DtSources: IPrxDataSources;

	    DtSource: IPrxDataSource;

	    DimI: IDimInstance;

	    Str: String;

	    Key, i: Integer;

	    Rds: IRdsDictionaryInstance;

	    Data: IRdsDictionaryElementData;

	Begin

	    // Получим активный регламентный отчёт

	    Report := PrxReport.ActiveReport;

	    MB := Report.MetabaseObject.Metabase;

	    DtSources := Report.DataSources;

	    DtSource := DtSources.Item(0);

	    // Получим справочник НСИ с заданным идентификатором

	    MObj1 := MB.ItemByIdNamespace("D_FACTS", 159).Bind;

	    // Откроем справочник НСИ для редактирования

	    DimI := MObj1.Open(Null) As IDimInstance;

	    Rds := DimI As IRdsDictionaryInstance;

	    // Создадим элемент, содержащий данные атрибутов элемента справочника НСИ

	    Data := Rds.CreateElementData;

	    // Добавим наименование в атрибут с идентификатором «NAME»

	    Key := Rds.Attributes.FindById("NAME").Attribute.Key;

	    Str := "Element " + Rds.Elements.Count.ToString;

	    Data.Attribute(Key) := Str;

	    // Добавим значение в атрибут с идентификатором «ORD»

	    Key := Rds.Attributes.FindById("ORD").Attribute.Key;

	    i := Rds.Elements.Count;

	    Data.Attribute(Key) := i;

	    // Добавим созданный элемент в справочник НСИ

	    Rds.Insert(Rds.Elements.Root, Data);

	    // Создадим экземпляр справочника НСИ

	    DimI := MObj1.Open(Null) As IDimInstance;

	    // Добавим второй элемент аналогично

	    Data := Rds.CreateElementData;

	    Key := Rds.Attributes.FindById("NAME").Attribute.Key;

	    Str := "Element " + Rds.Elements.Count.ToString;

	    Data.Attribute(Key) := Str;

	    Key := Rds.Attributes.FindById("ORD").Attribute.Key;

	    i := Rds.Elements.Count;

	    Data.Attribute(Key) := i;

	    Rds.Insert(Rds.Elements.Root, Data);

	    // Обновим измерение в отчёте

	    DtSource.Refresh(MObj1 As IMetabaseObjectDescriptor, DimI);

	End Sub UserProc;


	- Подключите первый [модуль](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event_Module.htm)
	 к отчёту.


	- Добавьте текст с [гиперссылкой](UiNav.chm::/GUI/Format/UiReport_Table_Attribute_Hyperlink.htm)
	 для выполнения процедуры/функции. Выберите первый модуль, подключенный
	 ранее к отчёту.


	- Создайте второй модуль для работы с элементами справочника НСИ
	 с идентификатором DIC_SOURCE:


	Sub UserProc;

	Var

	    Report: IPRxReport;

	    MB: IMetabase;

	    MObj1: IMetabaseObject;

	    DtSources: IPrxDataSources;

	    DtSource: IPrxDataSource;

	    DimI: IDimInstance;

	    Str: String;

	    Key, i: Integer;

	    Rds: IRdsDictionaryInstance;

	    Data: IRdsDictionaryElementData;

	Begin

	    // Получим активный регламентный отчёт

	    Report := PrxReport.ActiveReport;

	    MB := Report.MetabaseObject.Metabase;

	    DtSources := Report.DataSources;

	    DtSource := DtSources.Item(0);

	    // Получим справочник НСИ с заданным идентификатором

	    MObj1 := MB.ItemByIdNamespace("DIC_SOURCE", 159).Bind;

	    // Откроем справочник НСИ для редактирования

	    DimI := MObj1.Open(Null) As IDimInstance;

	    Rds := DimI As IRdsDictionaryInstance;

	    // Создадим элемент, содержащий данные атрибутов элемента справочника НСИ

	    Data := Rds.CreateElementData;

	    // Добавим наименование в атрибут с идентификатором «NAME»

	    Key := Rds.Attributes.FindById("NAME").Attribute.Key;

	    Str := "Element " + Rds.Elements.Count.ToString;

	    Data.Attribute(Key) := Str;

	    // Добавим значение в атрибут с идентификатором «ORD»

	    Key := Rds.Attributes.FindById("ORD").Attribute.Key;

	    i := Rds.Elements.Count;

	    Data.Attribute(Key) := i;

	    // Добавим созданный элемент в справочник НСИ

	    Rds.Insert(Rds.Elements.Root, Data);

	    // Создадим экземпляр справочника НСИ

	    DimI := MObj1.Open(Null) As IDimInstance;

	    // Добавим второй элемент аналогично

	    Data := Rds.CreateElementData;

	    Key := Rds.Attributes.FindById("NAME").Attribute.Key;

	    Str := "Element " + Rds.Elements.Count.ToString;

	    Data.Attribute(Key) := Str;

	    Key := Rds.Attributes.FindById("ORD").Attribute.Key;

	    i := Rds.Elements.Count;

	    Data.Attribute(Key) := i;

	    Rds.Insert(Rds.Elements.Root, Data);

	    // Обновим измерение в отчёте

	    DtSource.Refresh(MObj1 As IMetabaseObjectDescriptor);

	End Sub UserProc;


	- Подключите второй [модуль](UiReport.chm::/desktop/Reports/Event/UiReport_Reports_Event_Module.htm)
	 к отчёту.


	- Добавьте текст с [гиперссылкой](UiNav.chm::/GUI/Format/UiReport_Table_Attribute_Hyperlink.htm)
	 для выполнения процедуры/функции. Выберите второй модуль, подключенный
	 ранее к отчёту.


В регламентном отчёте, после нажатия на первую гиперссылку, будет добавлен
 один элемент в справочник НСИ с идентификатором D_FACTS, а после нажатия
 на вторую гиперссылку, в справочник НСИ с идентификатором DIC_SOURCE добавятся
 два элемента. Разница результатов в том, что в первом модуле при обновлении
 измерения в отчёте был задан экземпляр справочника для работы с элементами
 «DimI» (параметр «Instance»), а во втором модуле не задавался. Новые элементы
 справочников НСИ отобразятся в элементах управления отчёта.


См. также:


[IPrxDataSource](IPrxDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
