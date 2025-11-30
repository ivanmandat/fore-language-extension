# IMetabaseDeviceDescriptor.DeviceName

IMetabaseDeviceDescriptor.DeviceName
-


# IMetabaseDeviceDescriptor.DeviceName


## Синтаксис


DeviceName: String;


## Описание


Свойство DeviceName возвращает
 наименование устройства.


## Комментарии


Свойство используется, если для пользователей установлен [режим
 ограничения](Admin.chm::/03_Admin/Access_control_settings.htm#printers) на используемые для печати принтеры.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    MP: IMetabasePolicy;

    DP: IMetabaseDevicePolicy;

    DevDess: IMetabaseDeviceDescriptors;

    Users: IMetabaseUsers;

    User: IMetabaseUser;

    Printers: IMetabaseDeviceDescriptors;

    DevDes: IMetabaseDeviceDescriptor;

    Category: ISecurityCategory;

    Desc: ISecurityDescriptor;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    MP := MS.Policy;

    DP := MP.PrintersPolicy;

    DevDess := DP.Enumerate;

    Users := MS.Users;

    User := Users.Administrator;

    Printers := User.Printers;

    Try

        DevDess.Add("printserver1\Microsoft Office Document Image Writer");

        DevDes := DevDess.Add("printserver2\snagit 8");

    Except On e: Exception Do

        WinApplication.InformationBox(e.Message);

    End Try;

    Desc := DevDes.SecurityDescriptor;

    Desc.Edit;

    Category := MP.MandatoryAccess.Category(0);

    Desc.AccessToken.ClassificationLabel(Category) := Category.Level(1);

    Desc.Apply(False);

    Printers.Add(DevDes.DeviceName);

    MS.Apply;

    Lic := Null;

End Sub UserProc;


После выполнения примера в политику безопасности будет добавлено два
 принтера, один из которых будет добавлен в список доступных для печати
 принтеров администратора с установленным уровнем безопасности.


См. также:


[IMetabaseDeviceDescriptor](IMetabaseDeviceDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
