# ILicenseManager.FeatureInfo

ILicenseManager.FeatureInfo
-


# ILicenseManager.FeatureInfo


## Синтаксис


FeatureInfo(FeatureName: String): [ILicenseFeatureInfo](../ILicenseFeatureInfo/ILicenseFeatureInfo.htm);


## Параметры


FeatureName. Наименование единицы
 лицензирования.


## Описание


Метод FeatureInfo получает информацию
 о единице лицензирования.


## Пример


Для выполнения примера разместите на форме компоненты Button, Editbox
 и Memo с наименованиями «Button1», «Editbox1» и «Memo1» соответственно.


Добавьте ссылки на системные сборки: Host, Ui, Forms, Collections.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    LicManager: ILicenseManager;

    Feature: String;

    FeatureInfo: ILicenseFeatureInfo;

    Info: IStringList;

Begin

    LicManager := WinApplication.Instance.LicenseManager;

    Feature := EditBox1.Text;

    FeatureInfo := LicManager.FeatureInfo(Feature);

    Memo1.Clear;

    Info := Memo1.Lines;

    If FeatureInfo <> Null Then

        Info.Add("Наименование ед.лиц.: " + FeatureInfo.FeatureName);

        Info.Add("Описание лицензии: " + FeatureInfo.Description);

        Info.Add("Возможность получения локальной лицензии: " + FeatureInfo.CommuterAllowed.ToString);

        Info.Add("Начало действия: " + FeatureInfo.StartDate.ToString);

        Info.Add("Окончание действия: " + FeatureInfo.ExpireDate.ToString);

        Info.Add("Тип лицензии (0-Standalone/1-NetWork): " + FeatureInfo.LicenseMode.ToString);

        Info.Add("Демо или постоянная (0)/триальная (1): " + FeatureInfo.LicenseType.ToString);

        Info.Add("Тип привязки (0-Unlocked;1-ClientLocked;2-ServerLocked): " + FeatureInfo.LockType.ToString);

        Info.Add("Длина триального периода: " + FeatureInfo.TrialDaysCount.ToString);

        Info.Add("Ограниченная(False)/Неограниченная(True) лицензия: " + FeatureInfo.NoExpiration.ToString);

        Info.Add("Количество дней до окончания действия лицензии: " + FeatureInfo.DaysLeft.ToString);

        Info.Add("Имя сервера лицензий: " + LicManager.Server);

        Info.Add("Номер лицензии: " + FeatureInfo.LicenseIds.AsString);

    Else

        Info.Add("Информация о лицензии = Null");

    End If;

End Sub Button1OnClick;


Введите в Editbox наименование предустановленной единицы лицензирования,
 например PP_OLAP, и нажмите на кнопку. В Memo1 будет выведена информация
 об указанной единице лицензирования.


См. также:


[ILicenseManager](ILicenseManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
