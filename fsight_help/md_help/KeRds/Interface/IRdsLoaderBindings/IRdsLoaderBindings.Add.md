# IRdsLoaderBindings.Add

IRdsLoaderBindings.Add
-


# IRdsLoaderBindings.Add


## Синтаксис


Add(BindingType: [RdsLoaderBindingType](../../Enums/RdsLoaderBindingType.htm)):
 [IRdsBaseBinding](../IRdsBaseBinding/IRdsBaseBinding.htm);


## Параметры


BindingType. Тип создаваемой
 привязки.


## Описание


Метод Add создает привязку с
 заданным типом.


## Комментарии


В соответствии с указанным типом в созданной привязке необходимо будет
 указать соответствующий [атрибут](../IRdsBaseBinding/IRdsBaseBinding.Attribute.htm)
 справочника. Также привязку можно будет привести к необходимому типу и
 задать специфические свойства. Доступны следующие типы привязок:


	- [IRdsPredefinedBinding](../IRdsPredefinedBinding/IRdsPredefinedBinding.htm).
	 Параметры привязки системного атрибута;


	- [IRdsTranslationBinding](../IRdsTranslationBinding/IRdsTranslationBinding.htm).
	 Параметры привязки атрибута, содержащего значения на определенном
	 языке;


	- [IRdsUserAttributeBinding](../IRdsUserAttributeBinding/IRdsUserAttributeBinding.htm).
	 Параметры привязки пользовательского атрибута;


	- [IRdsLinkedBinding](../IRdsLinkedBinding/IRdsLinkedBinding.htm).
	 Параметры привязки связанного атрибута;


	- [IRdsImportedBinding](../IRdsImportedBinding/IRdsImportedBinding.htm).
	 Параметры привязки заимствованного атрибута.


## Пример


Для выполнения примера в репозитории предполагается наличие следующих
 объектов:


	- справочник НСИ с идентификатором «DICT_LINKED». С данным справочником
	 будет создана связь из создаваемого справочника НСИ;


	- таблицы с идентификатором «T_DICTIONARY», из которой в справочник
	 будут загружены данные;


	- таблицы с идентификатором «T_ATTRVALUES», в которой хранятся
	 значения для множественного атрибута в создаваемом справочнике.


Добавьте ссылки на системные сборки: Dal, Db, Metabase, Rds.


Описание требуемой структуры и данных для используемых объектов:


[![](../../opened.gif)![](../../closed.gif)Таблица «T_DICTIONARY»](javascript:TextPopup(this))


	Содержит список стран.


	Описание полей (идентификатор/тип данных/назначение):


		- KEY. Целый. Ключ.
		 Пустые значения не допускаются. Входит в состав первичного индекса;


		- NAME. Строковый.
		 Наименование страны;


		- ORD. Целый. Порядок;


		- PARENT. Целый. Ключ
		 элемента-владельца;


		- FORLINK. Целый.
		 Ключ элемента из связанного справочника. Задаёт столицу страны;


		- MULTIATTR. Целый.
		 Ключ элемента из таблицы, содержащей множественные значения. Задает
		 государственные языки.


	Таблица содержит следующие данные:


			 KEY
			 NAME
			 ORD
			 PARENT
			 FORLINK
			 MULTIATTR


			 1
			 Европа


			 2
			 Бельгия

			 1
			 4
			 1


			 3
			 Ирландия

			 1
			 1
			 2


			 4
			 Кипр

			 1
			 2
			 3


			 5
			 Люксембург

			 1
			 3
			 4


			 6
			 Мальта

			 1
			 5
			 5


[![](../../opened.gif)![](../../closed.gif)Таблица «T_ATTRVALUES»](javascript:TextPopup(this))


	Содержит список языков.


	Описание полей (идентификатор/тип данных/назначение):


		- KEY. Целый. Ключ;


		- ORDER. Целый. Порядок;


		- VALUE. Строковый.
		 Одно из множественных значений, которые будут отображаться в создаваемом
		 справочнике в качестве государственного языка.


	В таблице отсутствует первичный индекс.


	Таблица содержит следующие данные:


			 KEY
			 ORDER
			 VALUE


			 1

			 Французский


			 1

			 Нидерландский


			 2

			 Ирландский


			 2

			 Английский


			 3

			 Греческий


			 3

			 Турецкий


			 4

			 Люксембургский


			 4

			 Французский


			 4

			 Немецкий


			 5

			 Мальтийский


			 5

			 Английский


[![](../../opened.gif)![](../../closed.gif)Справочник НСИ
 «DICT_LINKED»](javascript:TextPopup(this))


	Содержит список столиц.


	Описание полей (идентификатор/тип данных/назначение):


		- KEY. Целый. Ключ.
		 Пустые значения не допускаются, скрытый;


		- NAME. Строковый.
		 Наименование столицы;


		- ORD. Целый. Порядок.


	Справочник содержит следующие данные:


			 KEY
			 NAME
			 ORD


			 1
			 Дублин
			 0


			 2
			 Никоссия
			 1


			 3
			 Люксембург
			 2


			 4
			 Брюссель
			 3


			 5
			 Валлетта
			 35


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    LinkDictionary: IRdsDictionary;

	    RdsLoader: IMetaRdsLoader;

	    Bindings: IRdsLoaderBindings;

	    PredBinding: IRdsPredefinedBinding;

	    LinkBinding: IRdsLinkedBinding;

	    ImportBinding: IRdsImportedBinding;

	    MultiValueBinding: IRdsBaseBinding;


	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем справочник, с которым будет создана связь

	    LinkDictionary := MB.ItemById("DICT_LINKED").Bind As IRdsDictionary;

	    // Создаем объект для создания справочника НСИ и загрузки в него данных

	    RdsLoader := New MetaRdsLoader.Create;

	    // Указываем таблицу, из которой будут загружены данные

	    RdsLoader.TableSource := MB.ItemById("T_DICTIONARY").Bind As ITable;

	    // Получаем привязки полей таблицы-источника и создаваемого справочника НСИ

	    Bindings := RdsLoader.Bindings;

	    // Задаем привязки обязательных системных атрибутов справочника НСИ


	    Bindings.KeyBinding.Field := "KEY";

	    Bindings.NameBinding.Field := "NAME";

	    Bindings.OrderBinding.Field := "ORD";

	    // Задаем привязку для атрибута «Владелец» в справочнике НСИ

	    PredBinding := Bindings.Add(RdsLoaderBindingType.Predefined) As IRdsPredefinedBinding;

	    PredBinding.PredefinedType := RdsPredefinedAttribute.ParentKey;

	    PredBinding.Field := "PARENT";

	    // Задаем привязку для атрибута, который будет использоваться для связи с другим справочником


	    LinkBinding := Bindings.Add(RdsLoaderBindingType.Linked) As IRdsLinkedBinding;

	    // Задаем наименование и идентификатор атрибута

	    LinkBinding.Id := "FORLINK";

	    LinkBinding.Name := "Для связи";

	    // Указываем, что связь будет создана по ключу

	    LinkBinding.Reference := LinkDictionary.Attributes.Key;

	    // Указываем поле в таблице-источнике, которое содержит значения для данного атрибута

	    LinkBinding.Field := "FORLINK";

	    // Создаем заимствованный атрибут из связанного справочника

	    ImportBinding := Bindings.Add(RdsLoaderBindingType.Imported) As IRdsImportedBinding;


	    // Задаем наименование и идентификатор атрибута

	    ImportBinding.Id := "NAME_LINKEDDICT";

	    ImportBinding.Name := "Столица";

	    // Указываем привязку, в которой описан атрибут, используемый для связи с другим справочником

	    ImportBinding.LinkBinding := LinkBinding;

	    // Указываем, что заимствованный атрибут будет отображать

	    // наименования элементов из связанного справочника

	    ImportBinding.Lookup := LinkBinding.Dictionary.Attributes.Name;

	    // Задаем привязку для атрибута со множественными значениями

	    MultiValueBinding := Bindings.Add(RdsLoaderBindingType.UserAttribute);


	    // Задаем наименование и идентификатор атрибута

	    MultiValueBinding.Id := "MULTIATTR";

	    MultiValueBinding.Name := "Официальные языки";

	    // Указываем поле в таблице-источнике, которое содержит значения для данного атрибута

	    MultiValueBinding.Field := "MULTIATTR";

	    // Задаем тип данных атрибута

	    MultiValueBinding.DataType := DbDataType.String;

	    // Указываем, что атрибут может иметь множественные значения

	    MultiValueBinding.HasMultipleValues := True;

	    // Указываем таблицу, в которой хранятся множественные значения

	    MultiValueBinding.DetailTableObject := MB.ItemById("T_ATTRVALUES");


	    // Задаем используемые поля с данными из таблицы, в которой хранятся множественные значения

	    MultiValueBinding.KeyField := "KEY";

	    MultiValueBinding.OrderField := "ORDER";

	    MultiValueBinding.ValueField := "VALUE";

	    // Указываем, что множественный атрибут может содержать пустые значения

	    MultiValueBinding.Nullable := True;

	    // Задаем информацию о создаваемом справочнике

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.Parent := MB.ItemById("MDM");

	    CrInfo.Id := MB.GenerateId("Dict", CrInfo.Parent.Key);


	    // Создаем и сохраняем справочник

	    (RdsLoader.CreateObject(CrInfo) As IMetabaseObject).Save;

	    // Выполняем загрузку данных

	    RdsLoader.Load(UpdateLoadMode.Insert);

	End Sub UserProc;


В результате выполнения примера будет настроен объект, используемый
 для создания справочников НСИ и загрузки в них данных. В настройках объекта
 будет указан источник данных и созданы привязки для различных типов атрибутов.
 После этого будет создан справочник стран и в него будут загружены данные
 о столицах и используемых государственных языках.


См. также:


[IRdsLoaderBindings](IRdsLoaderBindings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
