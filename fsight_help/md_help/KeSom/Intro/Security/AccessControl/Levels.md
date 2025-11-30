# Разграничения доступа по уровням: Сборка Metabase

Разграничения доступа по уровням: Сборка Metabase
-


# Разграничения доступа по уровням


Механизм работы данного метода представлен в подразделе «[Настройка
 метода разграничения доступа по уровням](Admin.chm::/04_SecurityPolicy/Security_levels.htm)».


При разграничении доступа по уровням используются такие же уровни, которые
 используются при [мандатном доступе](Mandatory.htm). При этом
 не используются категории. Для доступа к уровням используйте свойство
 [IMetabaseMandatoryAccess.Category](../../../Interface/IMetabaseMandatoryAccess/IMetabaseMandatoryAccess.Category.htm)
 с указанием индекса 0.


Для включения/выключения использования разграничения по уровням используйте
 флаг [IMetabaseMandatoryAccess.IsSimple](../../../Interface/IMetabaseMandatoryAccess/IMetabaseMandatoryAccess.IsSimple.htm).
 При включении использования уровней безопасности сразу будут созданы четыре
 уровня с метками критичности 0-3. При необходимости список уровней может
 быть расширен.


Предположим, что в репозитории уже созданы три пользователя с помощью
 кода, представленного в подразделе «[Субъекты
 безопасности](../CreateMBSubject.htm)». Для включения разграничения доступа по уровням и сопоставления
 уровней пользователям выполните следующий код:


	Sub EnableLevelsAccessControl;

	Var

	    Mb: IMetabase;

	    MbSec: IMetabaseSecurity;

	    Executor, Manager, Owner: IMetabaseUser;

	    Mandatory: IMetabaseMandatoryAccess;

	    Category: ISecurityCategory;

	    Lic: Object;

	Begin

	    Mb := MetabaseClass.Active;

	    // Получение лицензии для возможности работы с менеджером безопасности

	    Lic := Mb.RequestLicense(UiLicenseFeatureType.Adm);

	    // Менеджер безопасности

	    MbSec := Mb.Security;

	    // Использовать разграничения доступа по уровням

	    Mandatory := MbSec.Policy.MandatoryAccess;

	    Mandatory.IsSimple := True;

	    // Пользователи, для которых настраиваются уровни доступа

	    Executor := MbSec.ResolveName("Executor") As IMetabaseUser;

	    Manager := MbSec.ResolveName("Manager") As IMetabaseUser;

	    Owner := MbSec.ResolveName("Owner") As IMetabaseUser;

	    // Категория мандатного доступа

	    Category := Mandatory.Category(0);

	    // Сопоставление пользователям уровней доступа

	    Executor.Token.ClassificationLabel(Category) := Category.FindLevelByLabel(3);

	    Manager.Token.ClassificationLabel(Category) := Category.FindLevelByLabel(2);

	    Owner.Token.ClassificationLabel(Category) := Category.FindLevelByLabel(1);

	    // Применить изменения

	    MbSec.Apply;

	    // Освобождение лицензии

	    Lic := Null;

	End Sub EnableLevelsAccessControl;


Предположим, в репозитории имеется папка, в которой расположен куб и
 все объекты, от которых он зависит. На базе куба создан регламентный отчёт.
 Для сопоставления уровней объектам репозитория выполните следующий код:


	Sub SetObjectsLevel;

	Var

	    Mb: IMetabase;

	    MbSec: IMetabaseSecurity;

	    MandatoryAccess: IMetabaseMandatoryAccess;

	    Category: ISecurityCategory;

	    CubeDesc: IMetabaseObjectDescriptor;

	    Folder, Cube, Report: ISecurityDescriptor;

	    Lic: Object;

	Begin

	    Mb := MetabaseClass.Active;

	    // Получим лицензию для возможности работы с менеджером безопасности

	    Lic := Mb.RequestLicense(UiLicenseFeatureType.Adm);

	    // Менеджер безопасности

	    MbSec := Mb.Security;

	    // Категория мандатного доступа

	    MandatoryAccess := MbSec.Policy.MandatoryAccess;

	    Category := MandatoryAccess.Category(0);

	    // Сопоставление объектам уровней мандатного доступа

	    //---Регламентный отчёт---

	    Report := Mb.ItemById("REPORT").SecurityDescriptor;

	    Report.Edit;

	    Report.AccessToken.ClassificationLabel(Category) := Category.FindLevelByLabel(3);

	    Report.Apply(False);

	    //---Куб и все объекты, от которых он зависит---

	    CubeDesc := Mb.ItemById("STD_CUBE");

	    Cube := CubeDesc.SecurityDescriptor;

	    Cube.Edit;

	    Cube.AccessToken.ClassificationLabel(Category) := Category.FindLevelByLabel(2);

	    Cube.Apply(False);

	    ApplyAccessToDependence(CubeDesc.Dependencies(False), Category, Cube.AccessToken.ClassificationLabel(Category));

	    //---Папка---

	    Folder := Mb.ItemById("FOLDER").SecurityDescriptor;

	    Folder.Edit;

	    Folder.AccessToken.ClassificationLabel(Category) := Category.FindLevelByLabel(1);

	    // Не применяем установку уровня доступа по всей иерархии папки,

	    // чтобы не сбросить установленные ранее уровни доступа у объектов внутри папки

	    Folder.Apply(False);

	    // Освободим лицензию

	    Lic := Null;

	End Sub SetObjectsLevel;

	Sub ApplyAccessToDependence(MDescs: IMetabaseObjectDescriptors; Category: ISecurityCategory; Level: ISecurityLevel);

	Var

	    MDesc: IMetabaseObjectDescriptor;

	    SecDesc: ISecurityDescriptor;

	Begin

	    For Each MDesc In MDescs Do

	        SecDesc := MDesc.SecurityDescriptor;

	        SecDesc.Edit;

	        SecDesc.AccessToken.ClassificationLabel(Category) := Level;

	        SecDesc.Apply(False);

	        // Рекурсивный обход всех объектов, от которых может зависеть текущий объект

	        If MDesc.Dependencies(False).Count > 0 Then

	            ApplyAccessToDependence(MDesc.Dependencies(False), Category, Level);

	        End If;

	    End For;

	End Sub ApplyAccessToDependence;


См. также:


[Методы
 разграничения доступа](AccessControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
