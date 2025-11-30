# ILicense.FeatureName

ILicense.FeatureName
-


# ILicense.FeatureName


## Синтаксис


FeatureName: String;


## Описание


Свойство FeatureName возвращает
 имя единицы лицензирования.


## Пример


Для выполнения примера разместите на форме компоненты Button, Editbox
 и Memo с наименованиями «Button1», «Editbox1» и «Memo1» соответственно.


Добавьте ссылки на системные сборки: Host, Ui, Forms, Collections.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    LicManager: ILicenseManager;

    Feature: String;

    Lic: ILicense;

    StatusCode: UiLicenseStatusCode;

    Info: IStringList;

Begin

    LicManager := WinApplication.Instance.LicenseManager;

    Feature := Editbox1.Text;

    StatusCode := LicManager.RequestLicense(Feature, Lic);

    If StatusCode = UiLicenseStatusCode.Success Then Lic.LicenseUpdate;

        Memo1.Clear;

        Info := Memo1.Lines;

        Info.Add("Единица лицензирования: " + Lic.FeatureName + ";");

        Info.Add("Используется как временная локальная лицензия: " + Lic.IsCommuter.ToString + ";");

        Info.Add("Сервер: " + Lic.ServerName + ";");

    Else

       // обработка ошибок лицензирования

        //...

        Return;

    End If;

    //После завершения работы освободим лицензию

    If Lic <> Null Then

        Lic.LicenseRelease;

    End If;

End Sub Button1OnClick;


После выполнения примера введите в Editbox наименование предустановленной
 единицы лицензирования, например, PP_OLAP и нажмите на кнопку. В Memo
 будет выведена информация о заданной единице лицензирования.


См. также:


[ILicense](ILicense.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
