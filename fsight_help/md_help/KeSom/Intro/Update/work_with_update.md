# Работа с менеджером обновлений

Работа с менеджером обновлений
-


# Работа с менеджером обновлений


	При разработке прикладных проектов для переноса наработок из тестового
	 в целевой репозиторий в платформе используется механизм обновления
	 объектов. Для работы с обновлениями предназначен интерфейс [IMetabaseUpdate](../../Interface/IMetabaseUpdate/IMetabaseUpdate.htm).
	 Данный интерфейс, а также все связанные с ним интерфейсы, позволяют
	 создавать новое, изменять существующее обновление, а также запускать
	 установку обновления в целевом репозитории.


## Создание обновления


	Для создания нового объекта, предназначенного для работы с обновлением,
	 используйте метод [IMetabase.CreateUpdate](../../Interface/IMetabase/IMetabase.CreateUpdate.htm).
	 Свойство [IMetabaseUpdate.RootFolder](../../Interface/IMetabaseUpdate/IMetabaseUpdate.RootFolder.htm)
	 вернёт корневую папку, начиная с которой осуществляется формирование
	 структуры обновления. В корневой папке с помощью метода [IMetabaseUpdateFolderNode.Add](../../Interface/IMetabaseUpdateFolderNode/IMetabaseUpdateFolderNode.Add.htm)
	 создайте отдельные элементы, которые будут соответствовать обновляемым
	 объектам или выполняемым действиям. Для задания специфических настроек
	 каждый элемент в соответствии с его типом можно привести к одному
	 из следующих интерфейсов:


		- [IMetabaseUpdateFolderNode](../../Interface/IMetabaseUpdateFolderNode/IMetabaseUpdateFolderNode.htm).
		 Папка в структуре обновления. Не является папкой в репозитории,
		 используется только в обновлении для структуризации содержимого
		 по типам или еще каким-либо признакам.


		- [IMetabaseUpdateObjectNode](../../Interface/IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.htm).
		 Элемент обновления, соответствующий объекту репозитория.


		- [IMetabaseUpdateSqlNode](../../Interface/IMetabaseUpdateSqlNode/IMetabaseUpdateSqlNode.htm).
		 SQL-оператор, выполняющий заданный скрипт во время установки обновления.


		- [IMetabaseUpdateDeleteObjectNode](../../Interface/IMetabaseUpdateDeleteObjectNode/IMetabaseUpdateDeleteObjectNode.htm).
		 Элемент обновления, который удалит объект репозитория.


		- [IMetabaseUpdateDataObjectNode](../../Interface/IMetabaseUpdateDataObjectNode/IMetabaseUpdateDataObjectNode.htm).
		 Элемент обновления, соответствующий объекту репозитория c данными.


		- [IMetabaseUpdateCommentNode](../../Interface/IMetabaseUpdateCommentNode/IMetabaseUpdateCommentNode.htm).
		 Сопроводительный текст, который будет отображаться во время установки
		 обновления.


		- [IMetabaseUpdateSecuritySubjectNode](../../Interface/IMetabaseUpdateSecuritySubjectNode/IMetabaseUpdateSecuritySubjectNode.htm).
		 Элемент обновления, соответствующий субъекту безопасности: пользователь
		 или группа пользователей.


		- [IMetabaseUpdateSpecialObjectsNode](../../Interface/IMetabaseUpdateSpecialObjectsNode/IMetabaseUpdateSpecialObjectsNode.htm).
		 Специальный объект репозитория: глобальные переменные, карта по
		 умолчанию, пиктограммы элементов измерений по умолчанию или объект
		 пользовательского класса.


		- [IMetabaseUpdateAbacRulesNode](../../Interface/IMetabaseUpdateAbacRulesNode/IMetabaseUpdateAbacRulesNode.htm).
		 Правило атрибутного доступа.


	[![](../../opened.gif)![](../../closed.gif)Пример создания
	 обновления](javascript:TextPopup(this))


		Для выполнения указанного примера в репозитории предполагается
		 наличие объектов, идентификаторы которых используются в коде.
		 Добавьте ссылки на сборки Abac и Metabase.


			Sub CreateUpdate;

			Var

			    Mb: IMetabase;

			    NewUpd: IMetabaseUpdate;

			    Root, Folder: IMetabaseUpdateFolderNode;

			    ObjUpd: IMetabaseUpdateObjectNode;

			    DataObjUpd: IMetabaseUpdateDataObjectNode;

			    SecSubjUpd: IMetabaseUpdateSecuritySubjectNode;

			    DelUpd: IMetabaseUpdateDeleteObjectNode;

			    SpecialUpd: IMetabaseUpdateSpecialObjectsNode;

			    AbacUpd: IMetabaseUpdateAbacRulesNode;

			    PolicyObject: IABACRootPolicyObject;

			    PolicySet: IABACPolicySet;

			    Policy: IABACPolicy;

			    SQLUpd: IMetabaseUpdateSqlNode;

			    Comment: IMetabaseUpdateCommentNode;

			Begin

			    Mb := MetabaseClass.Active;

			    // Создание нового обновления

			    NewUpd := Mb.CreateUpdate;

			    // Дальнейшая работа со структурой обновления

			    Root := NewUpd.RootFolder;

			    //---Добавление в обновление объектов различных видов---

			    // Папка в обновлении

			    Folder := Root.Add(MetabaseUpdateNodeType.Folder) As IMetabaseUpdateFolderNode;

			    Folder.Label := "Папка для объектов";


			    // Объект репозитория

			    ObjUpd := Root.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

			    ObjUpd.Object := Mb.ItemById("TESTForm");

			    // Объект репозитория с данными

			    DataObjUpd := Root.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

			    DataObjUpd.Object := Mb.ItemById("DICTIONARY");

			    DataObjUpd.Method := MetabaseUpdateMethod.All;

			    // Субъект безопасности

			    SecSubjUpd := Root.Add(MetabaseUpdateNodeType.SecuritySubject) As IMetabaseUpdateSecuritySubjectNode;

			    SecSubjUpd.Subject := Mb.LogonSession.User;

			    SecSubjUpd.Label := SecSubjUpd.Subject.Name;

			    // Удаление объекта

			    DelUpd := Root.Add(MetabaseUpdateNodeType.DeleteObject) As IMetabaseUpdateDeleteObjectNode;

			    DelUpd.ObjectKey := Mb.GetObjectKeyById("TEMP");

			    DelUpd.Label := "Удаление " + DelUpd.ObjectId;


			    // Специальный объект репозитория - Карта по умолчанию

			    SpecialUpd := Root.Add(MetabaseUpdateNodeType.SpecialObjects) As IMetabaseUpdateSpecialObjectsNode;

			    SpecialUpd.ApplyObject(MetabaseSpecialObject.DefaultTopobase) := True;

			    // SQL-оператор

			    SQLUpd := Root.Add(MetabaseUpdateNodeType.Sql) As IMetabaseUpdateSqlNode;

			    SQLUpd.Sql("POSTGRES") := "INSERT INTO T_LOG VALUES ('Установка обновления', current_timestamp);";

			    SQLUpd.Label := "Добавление записи в лог";

			    // Правила ABAC

			    AbacUpd := Root.Add(MetabaseUpdateNodeType.AbacRules) As IMetabaseUpdateAbacRulesNode;

			    // Получим структуру атрибутного доступа

			    PolicyObject := MB.Security.Policy.ABACRules;

			    // Получим первую политику в первом наборе политик

			    PolicySet := PolicyObject.Policies.Item(0);

			    Policy := PolicySet.Policies.Item(0);


			    // Сохраним в обновлении статусы полученной политики и вложенных правил

			    AbacUpd.KeepActive := True;

			    // Добавим политику с вложенными правилами в обновление

			    AbacUpd.Add(Policy, True);

			    AbacUpd.Label := "Правила ABAC";

			    // Комментарий

			    Comment := Root.Add(MetabaseUpdateNodeType.Comment) As IMetabaseUpdateCommentNode;

			    Comment.Comment := "Happy end!";

			    // Сохранение обновления в файл

			    NewUpd.SaveToFileNFEx("D:\Work\Update_last.pefx", Null);

			End Sub CreateUpdate;


	Более подробно о настройке каждого элемента обновления читайте в
	 описании указанных интерфейсов.


	Если предполагается не создание нового, а работа с существующим
	 обновлением, то после выполнения метода [IMetabase.CreateUpdate](../../Interface/IMetabase/IMetabase.CreateUpdate.htm)
	 осуществите загрузку обновления с помощью одного из методов Load*,
	 которые доступны в интерфейсе [IMetabaseUpdate](../../Interface/IMetabaseUpdate/IMetabaseUpdate.htm).


		Sub LoadUpdate(UpdFile: String);

		Var

		    Mb: IMetabase;

		    ExistUpd: IMetabaseUpdate;

		    Root: IMetabaseUpdateFolderNode;

		Begin

		    Mb := MetabaseClass.Active;

		    // Создание и загрузка существующего обновления

		    ExistUpd := Mb.CreateUpdate;

		    ExistUpd.LoadFromFileNF(UpdFile);

		    // Дальнейшая работа с обновлением

		    Root := ExistUpd.RootFolder;

		    //...

		    // Сохранение изменений

		    ExistUpd.SaveToFileNFEx(UpdFile, Null);

		End Sub LoadUpdate;


### Параметры обновления


	Интерфейс [IMetabaseUpdate](../../Interface/IMetabaseUpdate/IMetabaseUpdate.htm)
	 содержит ряд свойств, с помощью которых можно задать параметры обновления,
	 описание которых представлено в подразделе «[Настройка параметров
	 процесса обновления](UpdManager.chm::/UpdateProcess_Parameters.htm)».


		Sub SetUpdateParameters;

		Var

		    Mb: IMetabase;

		    MUpdate: IMetabaseUpdate;

		Begin

		    Mb := MetabaseClass.Active;

		    // Создание обновления

		    MUpdate := Mb.CreateUpdate;

		    //---Параметры обновления---

		    // В процессе обновления

		    MUpdate.AlterType(MetabaseObjectClass.KE_CLASS_TABLE) := MetabaseObjectAlterType.Default_;

		    MUpdate.AlterType(MetabaseObjectClass.KE_CLASS_PROCEDURE) := MetabaseObjectAlterType.Restrict;

		    MUpdate.AlterType(MetabaseObjectClass.KE_CLASS_VIEW) := MetabaseObjectAlterType.Recreate;

		    MUpdate.ReflectObjectsRights := UpdateReflectObjectsRightsType.AfterAll;

		    MUpdate.ApplyOptions := MetabaseUpdateApplyOptions.SetCurrentStamp Or

		        MetabaseUpdateApplyOptions.MakeExternalUsers Or

		        MetabaseUpdateApplyOptions.ClearMemberOf Or

		        MetabaseUpdateApplyOptions.FlushCache Or // После обновления

		        MetabaseUpdateApplyOptions.UpdateUsers Or

		        MetabaseUpdateApplyOptions.ReopenMetabase Or

		        MetabaseUpdateApplyOptions.EnableIgnoreErrors; // В случае возникновения ошибки

		    // Сопроводительный текст

		    MUpdate.Description := "Тестовое обновление. Создано " + DateTime.Now.ToString;

		    //...

		    // Добавление объектов в обновление

		    //...

		    // Сохранение обновления

		    MUpdate.SaveToFileNF("D:\Work\Update_last.pefx");

		End Sub SetUpdateParameters;


### Модуль обновления


	Во время обновления можно отслеживать происходящие события. Для
	 этого в обновление необходимо включить модуль, который содержит реализацию
	 методов класса [UpdateEvents](../../Class/UpdateEvents/UpdateEvents.htm).
	 Соответствующий элемент обновления необходимо указать в свойстве [IMetabaseUpdate.EventsNode](../../Interface/IMetabaseUpdate/IMetabaseUpdate.EventsNode.htm).


	[![](../../opened.gif)![](../../closed.gif)Текст модуля
	 обновления](javascript:TextPopup(this))


			Public Class CUpdateEvents: UpdateEvents

			    // Начало обновления

			    Public Sub OnBeginUpdate(Update: IMetabaseUpdate);

			    Begin


			    End Sub OnBeginUpdate;

			    // Проверка готовности объектов к обновлению

			    Public Sub OnBeforeApplyUpdate(Update: IMetabaseUpdate);

			    Begin


			    End Sub OnBeforeApplyUpdate;

			    // Обработка ограничения целостности данных обновляемого объекта.

			    Public Sub OnAskConstraintsHandling(Update: IMetabaseUpdate; Node: IMetabaseUpdateNode; Details: String; Var Handling: UpdateDataConstraintsHandlingType);

			    Begin

			        Handling := UpdateDataConstraintsHandlingType.KeepTableUnchanged;

			    End Sub OnAskConstraintsHandling;

			    // Обновление прав

			    Public Sub OnAskReflectRights(Var Cancel: Boolean);

			    Begin


			    End Sub OnAskReflectRights;

			    // Обновление объектов

			    Public Sub OnUpdateObject(Update: IMetabaseUpdate; CurrentNode: IMetabaseUpdateNode;

			    Var Skip: Boolean);

			    Begin


			    End Sub OnUpdateObject;

			    // Окончание обновления

			    Public Sub OnEndUpdate(Update: IMetabaseUpdate);

			    Begin


			    End Sub OnEndUpdate;

			End Class CUpdateEvents;


	Код для включения и назначения модуля обновления:


		Sub SetEventsNode;

		Var

		    Mb: IMetabase;

		    MUpdate: IMetabaseUpdate;

		    RootFolder: IMetabaseUpdateFolderNode;

		    Node: IMetabaseUpdateObjectNode;

		Begin

		    Mb := MetabaseClass.Active;

		    MUpdate := Mb.CreateUpdate;

		    RootFolder := MUpdate.RootFolder;

		    //Модуль обновления

		    Node := RootFolder.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

		    Node.Object := Mb.ItemById("MODULE");

		    MUpdate.EventsNode := Node;

		    //...

		    // Добавление других объектов

		    //...

		    MUpdate.SaveToFileNFEx("D:\Work\Update_last.pefx", Null);

		End Sub SetEventsNode;


## Установка обновления


	Для установки обновления в целевом репозитории необходимо его загрузить
	 в объект, созданный с помощью метода [IMetabase.CreateUpdate](../../Interface/IMetabase/IMetabase.CreateUpdate.htm),
	 а после этого выполнить метод [IMetabaseUpdate.Apply](../../Interface/IMetabaseUpdate/IMetabaseUpdate.Apply.htm)
	 или [IMetabaseUpdate.ApplyEx](../../Interface/IMetabaseUpdate/IMetabaseUpdate.ApplyEx.htm).
	 При необходимости для методов могут быть заданы параметры для получения
	 информации о процессе установки или управления процессом установки.


		Sub ApplyUpdate(UpdFile: String);

		Var

		    Mb: IMetabase;

		    ExistUpd: IMetabaseUpdate;

		Begin

		    Mb := MetabaseClass.Active;

		    // Загрузка обновления в целевом репозитории

		    ExistUpd := Mb.CreateUpdate;

		    ExistUpd.LoadFromFileNF(UpdFile);

		    // Установка обновления

		    ExistUpd.Apply;

		End Sub ApplyUpdate;


См. также:


[Общие
 принципы программирования с использованием сборки Metabase](../KeSom_Programming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
