# ISecurityLevel.Description

ISecurityLevel.Description
-


# ISecurityLevel.Description


## Синтаксис


Description: String;


## Описание


Свойство Description определяет
 описание, которое будет использовано в тексте метки в правом верхнем углу
 первого листа при маркировке объектов при экспорте и печати.


## Комментарии


Если описание пусто, то при маркировке будет использовано наименование
 уровня безопасности.


## Пример


Для выполнения примера убедитесь, что в [мандатном
 доступе](Admin.chm::/04_SecurityPolicy/Admin_MandatAccess.htm) содержится категория и уровни безопасности.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    PO: IMetabasePolicy;

    MA: IMetabaseMandatoryAccess;

    Ctgr: ISecurityCategory;

    SecLvl: ISecurityLevel;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    PO := MS.Policy;

    MA := PO.MandatoryAccess;

    // Изменим уровень безопасности
 первой категории

    Ctgr := MA.Category(0);

    SecLvl := Ctgr.Level(1);

    Debug.WriteLine(SecLvl.Name);

    SecLvl.Description := "Для служебного пользования";

    SecLvl.Marking := True; // маркировать объекты при экспорте и печати

    SecLvl.TreatSectionAsDocument := True; // считать секцию документа отдельным документом

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будут изменены параметры уровня безопасности
 первой категории.


См. также:


[ISecurityLevel](ISecurityLevel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
