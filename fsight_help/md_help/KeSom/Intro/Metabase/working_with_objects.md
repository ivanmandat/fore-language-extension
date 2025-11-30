# Работа с объектами репозитория

Работа с объектами репозитория
-


# Работа с объектами репозитория


	После [подключения к репозиторию](definitions.htm) можно
	 осуществлять различные действия с объектами репозитория. В интерфейсе
	 [IMetabase](../../Interface/IMetabase/IMetabase.htm) имеются
	 все необходимые свойства и методы для создания, копирования, перемещения
	 или удаления объектов, а также для получения доступа к объектам по
	 идентификатору, ключу или поиску объектов с учётом каких-либо критериев.
	 Рассмотрим подробнее каким образом выполняются указанные действия.


## Создание объектов


	Для создания нового объекта репозитория:


		- Создайте и настройте базовые параметры создаваемого объекта,
		 описываемые интерфейсом [IMetabaseObjectCreateInfo](../../Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.htm).
		 Для этого используйте метод [IMetabase.CreateCreateInfo](../../Interface/IMetabase/IMetabase.CreateCreateInfo.htm).


		- Создайте объект в репозитории с помощью метода [IMetabase.CreateObject](../../Interface/IMetabase/IMetabase.CreateObject.htm).


	В качестве базовых параметров минимально необходимым является указание
	 класса объекта в свойстве [ClassId](../../Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.ClassId.htm).
	 Также рекомендуется задать идентификатор, наименование и родительский
	 объект - свойства [Id](../../Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.Id.htm),
	 [Name](../../Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.Name.htm)
	 и [Parent](../../Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.Parent.htm)
	 соответственно. Свойство [Permanent](../../Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.Permanent.htm)
	 определяет, будет ли объект сразу сохранён в репозитории. По умолчанию
	 свойство имеет значение False,
	 при этом после создания потребуется отредактировать и сохранить объект
	 в прикладном коде. Если не предполагается изменение специфических
	 свойств объекта, а просто требуется создать его в репозитории, то
	 установите свойству [Permanent](../../Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.Permanent.htm)
	 значение True.


	В общем виде функция по созданию любого объекта в репозитории может
	 выглядеть следующим образом:


		Function CreateObject(ObjectClass: MetabaseObjectClass;

		            ObjectId: String;

		            ParentId: String;

		            ObjectName: String = ""): IMetabaseObjectDescriptor;

		Var

		    MB: IMetabase;

		    CrInfo: IMetabaseObjectCreateInfo;

		    MDesc: IMetabaseObjectDescriptor;

		Begin

		    MB := MetabaseClass.Active;

		    // Базовая информация о создаваемом объекте

		    CrInfo := MB.CreateCreateInfo;

		    // Класс создаваемого объекта

		    CrInfo.ClassID := ObjectClass;

		    // Идентификатор создаваемого объекта

		    // Если объект с идентификатором ObjectId существует в репозитории, то генерируется новый идентификатор

		    CrInfo.Id := MB.GenerateId(ObjectId);

		    // Наименование создаваемого объекта

		    // Если наименование не указано, то подставляется наименование класса создаваемого объекта

		    CrInfo.Name := ObjectName <> "" ? ObjectName : MetabaseClass.CommonClassName(ObjectClass);

		    // Родительский объект, в котором создаётся объект

		    CrInfo.Parent := MB.ItemById(ParentId);

		    // Признак создания постоянного объекта

		    CrInfo.Permanent := True;

		    // Создание объекта

		    MDesc := MB.CreateObject(CrInfo);

		    // Вывод информации о созданном объекте

		    Debug.WriteLine("Создан объект: " + MDesc.Name + '(' + MDesc.Id + "). Ключ: " + MDesc.Key.ToString);

		    Return MDesc;

		End Function CreateObject;


	Если предполагается дальнейшая работа с новым объектом, то при создании
	 он может быть оставлен в режиме редактирования. Для этого в базовой
	 информации создаваемого объекта свойству [KeepEdit](../../Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.KeepEdit.htm)
	 установите значение True.
	 Также перевести объект в режим редактирования можно с помощью метода
	 [IMetabaseObjectDescriptor.Edit](../../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Edit.htm).
	 Например, для создания базы данных и задания её специфических настроек,
	 указанная выше функция может быть приведена к следующему виду:


		Function CreateDatabase(ObjectId: String; ParentId: String; ObjectName: String = ""): IMetabaseObject;

		Var

		    MB: IMetabase;

		    CrInfo: IMetabaseObjectCreateInfo;

		    MObj: IMetabaseObject;

		    DB: IDatabase;

		Begin

		    MB := MetabaseClass.Active;

		    // Базовая информация о создаваемом объекте

		    CrInfo := MB.CreateCreateInfo;

		    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_DATABASE;

		    CrInfo.Id := MB.GenerateId(ObjectId);

		    CrInfo.Name := ObjectName <> "" ? ObjectName : "База данных";

		    CrInfo.Parent := MB.ItemById(ParentId);

		    // Создание объекта, открытие его на редактирование и настройка специфических свойств

		    MObj := MB.CreateObject(CrInfo).Edit;

		    DB := MObj As IDatabase;

		    DB.Authentication := AuthenticationMode.Password;

		    DB.DriverId := "POSTGRES";

		    (DB.LogonData As IPrimaryPostgresSPLD).Server := "PGServer";

		    (DB.LogonData As IPrimaryPostgresSPLD).Database := "TestRepository";

		    DB.LoginPrompt := False;

		    DB.UseMetabaseCredentials := True;

		    // Сохранение изменений

		    MObj.Save;

		    // Вывод информации о созданном объекте

		    Debug.WriteLine("Создан объект: " + MObj.Name + '(' + MObj.Id + "). Ключ: " + MObj.Key.ToString);

		    Return MObj;

		End Function CreateDatabase;


## Создание специальных объектов


	К специальным объектам относятся:


		- карта по умолчанию;


		- пиктограммы элементов измерения по умолчанию;


		- область глобальных переменных;


		- пользовательские метаданные;


		- коллекция принтеров, на которые пользователям разрешена
		 печать;


		- репозиторий НСИ по умолчанию;


		- база данных по умолчанию;


		- контейнер моделирования по умолчанию;


		- обработчик пользовательских событий при работе с репозиторием
		 с помощью веб-сервиса.


	Для создания или получения специальных объектов используйте свойство
	 [IMetabase.SpecialObject](../../Interface/IMetabase/IMetabase.SpecialObject.htm).
	 В качестве значения параметра Index
	 укажите значение перечисления [MetabaseSpecialObject](../../Enums/MetabaseSpecialObject.htm),
	 определяющее тип специального объекта.


	Пример создания специального объекта приведён в разделе «[Создание
	 объекта собственного класса](../../Examples/Example_1_CustomClass.htm)».


## Доступ к объектам


	Для доступа к описанию объектов в интерфейсе [IMetabase](../../Interface/IMetabase/IMetabase.htm)
	 имеется ряд свойств с префиксом Item*, методов с префиксом Fetch*
	 и метод GetItems. Свойства Item* и метод GetItems используются, если
	 известны ключи или идентификаторы объектов. Методы Fetch* актуальны
	 для использования, если в репозитории включена [отложенная
	 загрузка описаний объектов](../../Interface/IMetabaseLinkBase/IMetabaseLinkBase.DeferredLoading.htm).


		Sub GetObjects;

		Var

		    MB: IMetabase;

		    MDesc: IMetabaseObjectDescriptor;

		    MDescs: IMetabaseObjectDescriptors;

		    Keys: Array[2] Of Integer = [100, 1000];

		    IDs: Array[2] Of String = ["OBJ100", "OBJ1000"];

		Begin

		    MB := MetabaseClass.Active;

		    // Получение доступа к описанию объекта различными способами

		    MDesc := MB.Item(100);

		    MDesc := MB.ItemById("OBJ100");

		    MDesc := MB.ItemByIdNamespace("OBJ123", MB.GetObjectKeyById("F_CONT"));

		    If MB.Definition.DeferredLoading Then

		        MDesc := MB.FetchItem(1000);

		        MDesc := MB.FetchItemById(Id := "OBJ1000", Options := MetabaseFetchOptions.Children);

		    End If;

		    // Получение описаний групп объектов

		    MDescs := MB.GetItems(Keys);

		    MDescs := MB.FetchItems(Keys);

		    MDescs := MB.FetchItemsById(Id := IDs, Options := MetabaseFetchOptions.Children);

		End Sub GetObjects;


	Также можно произвести поиск объектов, для этого:


		- Создайте и настройте параметры поиска, описываемые интерфейсом
		 [IMetabaseObjectFindInfo](../../Interface/IMetabaseObjectFindInfo/IMetabaseObjectFindInfo.htm).
		 Для этого используйте метод [IMetabase.CreateFindInfo](../../Interface/IMetabase/IMetabase.CreateFindInfo.htm).


		- Осуществите поиск с помощью метода [IMetabase.Find](../../Interface/IMetabase/IMetabase.Find.htm).


		Function FindObjects(FindText: String): IMetabaseObjectDescriptors;

		Var

		    MB: IMetabase;

		    FindInfo: IMetabaseObjectFindInfo;

		    Result: IMetabaseObjectDescriptors;

		Begin

		    MB := MetabaseClass.Active;

		    FindInfo := MB.CreateFindInfo;

		    // Искомый текст

		    FindInfo.Text := FindText;

		    // Поиск по наименованиям, идентификаторам и ключам

		    FindInfo.Attribute := FindAttribute.NameOrIdent;

		    // Частичное совпадение искомого текста в наименовании/идентификаторе

		    FindInfo.WholeWordsOnly := False;

		    // Поиск объектов

		    Result := MB.Find(FindInfo);

		    Return Result;

		End Function FindObjects;


	Имея описание объекта репозитория, можно получить доступ к его структуре.
	 Для этого используйте один из следующих методов:


		-  [IMetabaseObjectDescriptor.Bind](../../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Bind.htm).
		 Возврат структуры объекта, доступную для чтение;


		- [IMetabaseObjectDescriptor.Edit](../../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Edit.htm).
		 Возврат структуры объекта, доступную для редактирования.


	Интерфейс [IMetabaseObject](../../Interface/IMetabaseObject/IMetabaseObject.htm),
	 который возвращают указанные методы, содержит в себе свойства и методы,
	 общие для любых объектов репозитория. Для получения специфических
	 свойств какого-либо объекта в зависимости от его типа используйте
	 операцию [As](Fore.chm::/07_Operations/Operations_of_the_creation_object.htm)
	 для приведения к нужному типу. Если в структуру объекта вносятся изменения,
	 то для их последующего сохранения используйте метод [IMetabaseObject.Save](../../Interface/IMetabaseObject/IMetabaseObject.Save.htm).


		Sub Test;

		Var

		    MB: IMetabase;

		    Prx: IPrxReport;

		    Eax: IEaxAnalyzer;

		Begin

		    MB := MetabaseClass.Active;

		    Prx := MB.ItemById("PRX_REPORT").Edit As IPrxReport;

		    // Дальнейшая работа с регламентным отчётом через переменную Prx

		    Eax := MB.ItemById("EAX_REPORT").Bind As IEaxAnalyzer;

		    // Дальнейшая работа с экспресс-отчётом через переменную Eax

		    //...

		    // Сохранение изменений.
		 Доступно только для тех объектов, которые были открыты на редактирование

		    (Prx As IMetabaseObject).Save;

		End Sub Test;


	Более подробное описание по работе с объектами различных типов представлено
	 в подразделах Введение в [описании системных сборок](Assembly.chm::/System_Assembly.htm).


## Копирование и перемещение объектов


	При копировании или перемещении объектов в репозитории используются
	 общие параметры, описываемые интерфейсом [IMetabaseObjectCopyInfo](../../Interface/IMetabaseObjectCopyInfo/IMetabaseObjectCopyInfo.htm).
	 Для копирования/перемещения объекта:


		- Создайте и настройте параметры перемещения. Для этого используйте
		 метод [IMetabase.CreateCopyInfo](../../Interface/IMetabase/IMetabase.CreateCopyInfo.htm).


		- Для копирования используйте метод [IMetabase.CopyObject](../../Interface/IMetabase/IMetabase.CopyObject.htm),
		 для перемещения - [IMetabase.MoveObject](../../Interface/IMetabase/IMetabase.MoveObject.htm).


		Sub CopyMoveObject(SourceId: String; DestinationId: String; CopyOperation: Boolean = True);

		Var

		    MB: IMetabase;

		    CopyInfo: IMetabaseObjectCopyInfo;

		Begin

		    MB := MetabaseClass.Active;

		    // Параметры копирования/перемещения объекта

		    CopyInfo := MB.CreateCopyInfo;

		    CopyInfo.Source := MB.ItemById(SourceId);

		    CopyInfo.Destination := MB.ItemById(DestinationId);

		    CopyInfo.WithData := True;

		    // Выполнение копирования/перемещения объекта

		    If CopyOperation Then

		        MB.CopyObject(CopyInfo);

		    Else

		        MB.MoveObject(CopyInfo);

		    End If;

		End Sub CopyMoveObject;


## Удаление объектов


	Удаление объектов в репозитории осуществляется по ключу с помощью
	 метода [IMetabase.DeleteObject](../../Interface/IMetabase/IMetabase.DeleteObject.htm)
	 или [IMetabase.DeleteObjectO](../../Interface/IMetabase/IMetabase.DeleteObjectO.htm).
	 Ключ объекта можно получить, используя свойства [IMetabaseObjectDescriptor.Key](../../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Key.htm),
	 [IMetabaseObjectInstance.Key](../../Interface/IMetabaseObjectInstance/IMetabaseObjectInstance.Key.htm),
	 методы [IMetabase.GetObjectKeyById](../../Interface/IMetabase/IMetabase.GetObjectKeyById.htm),
	 [IMetabase.GetObjectKeyByIdNamespace](../../Interface/IMetabase/IMetabase.GetObjectKeyByIdNamespace.htm).


		Sub DelObject(Key: Integer);

		Var

		    MB: IMetabase;

		Begin

		    MB := MetabaseClass.Active;

		    If IsNull(MB.Item(Key)) Then

		        Debug.WriteLine("Объект с указанным ключом отсутствует в репозитории. Удаление отменено.");

		    Else

		        Try

		            MB.DeleteObject(Key);

		            Debug.WriteLine("Объект с ключом " + Key.ToString + " удалён.");

		        Except On e: Exception Do

		            Debug.WriteLine("Ошибка удаления.");

		            Debug.WriteLine(e.Message);

		        End Try;

		    End If;

		End Sub DelObject;


См. также:


[Общие
 принципы программирования с использованием сборки Metabase](../KeSom_Programming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
