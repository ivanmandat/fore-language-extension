# ILicenseManager.CommuterInfo

ILicenseManager.CommuterInfo
-


# ILicenseManager.CommuterInfo


## Синтаксис


CommuterInfo(FeatureName: String): [ILicenseCommuterInfo](../ILicenseCommuterInfo/ILicenseCommuterInfo.htm);


## Параметры


FeatureName. Наименование единицы
 лицензирования.


## Описание


Метод GetCommuterInfo получает
 информацию о временной локальной единице лицензирования, полученной с
 сервера лицензий.


## Комментарии


Метод актуален после получения временной локальной лицензии с сервера
 лицензий с помощью метода [ILicenseManager.CheckoutCommuterLicense](ILicenseManager.CheckoutCommuterLicense.htm).
 Проверка о получении единицы лицензирования с сервера лицензий выполняется
 с помощью метода [ILicenseManager.IsCheckedOut](ILicenseManager.IsCheckedOut.htm).


Если единица лицензирования не была получена с сервера лицензий, то
 метод будет возвращать NULL.


## Пример


Для выполнения примера разместите на форме компоненты Button, Editbox
 и Memo с наименованиями «Button1», «Editbox1» и «Memo1» соответственно.


Добавьте ссылки на системные сборки: Host, Ui, Forms, Collections.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    LicManager: ILicenseManager;

    Feature: String;

    CommuterInfo: ILicenseCommuterInfo;

    Info: IStringList;

Begin

    LicManager := WinApplication.Instance.LicenseManager;

    Feature := EditBox1.Text;

    Memo1.Clear;

    Info := Memo1.Lines;

    CommuterInfo := LicManager.CommuterInfo(Feature);

    If LicManager.IsCheckedOut(Feature) Then

        CommuterInfo := LicManager.CommuterInfo(Feature);

        If CommuterInfo <> Null Then

            Info.Add("Наименование ед.лиц.: " + CommuterInfo.FeatureName);

            Info.Add("Описание лицензии: " + LicManager.FeatureDescription(Feature));

            Info.Add("Начало действия: " + CommuterInfo.StartDate.ToString);

            Info.Add("Окончание действия: " + CommuterInfo.ExpireDate.ToString);

            Info.Add("IP cервера лицензий: " + CommuterInfo.IssuingServer);

        End If;

    Else

        Info.Add("Единица лицензирования не получена с сервера");

    End If;

End Sub Button1OnClick;


Введите в Editbox наименование предустановленной единицы лицензирования,
 например PP_OLAP, и нажмите на кнопку. Если с сервера лицензий была получена
 временная локальная лицензия, то при нажатии на кнопку в Memo будет выведена
 информация о ней. Если временная локальная лицензия не была получена с
 сервера, то будет выдано соответствующее сообщение.


См. также:


[ILicenseManager](ILicenseManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
