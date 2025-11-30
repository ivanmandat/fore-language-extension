# ILicenseManager.DeleteFeature

ILicenseManager.DeleteFeature
-


# ILicenseManager.DeleteFeature


## Синтаксис


DeleteFeature(FeatureName: String): [UiLicenseStatusCode](ForeSys.chm::/Enums/UiLicenseStatusCode.htm);


## Параметры


FeatureName. Наименование единицы
 лицензирования.


## Описание


Метод DeleteFeature удаляет
 код лицензии из текущей сессии (из памяти).


## Комментарии


Метод актуален при использовании автономной лицензии, иначе будет выдано
 соответствующее сообщение.


Если код активации был сохранен в [файл лицензии](setup.chm::/08_Licensing/Admin_Licensing.htm),
 то код следует удалить вручную.


## Пример


Для выполнения примера разместите на форме компоненты Button и Editbox
 с наименованиями «Button1» и «Editbox1» соответственно.


Добавьте ссылки на системные сборки: Host, Ui, Forms.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    LicManager: ILicenseManager;

    Feature: String;

    StatusCode: UiLicenseStatusCode;

Begin

    LicManager := WinApplication.Instance.LicenseManager;

    Feature := Editbox1.Text;

    StatusCode := LicManager.DeleteFeature(Feature);

    If StatusCode = UiLicenseStatusCode.Success Then

        WinApplication.InformationBox("Код успешно удален");

    Else

        WinApplication.InformationBox("Ошибка: " + StatusCode.ToString);

    End If;

End Sub Button1OnClick;


При нажатии на кнопку из текущей сессии будет удален код для единицы
 лицензирования, указанной в Editbox. О результате удаления кода будет
 выдано соответствующее сообщение. Если при удалении возникнут ошибки,
 то будет выдано сообщение с [кодом](ForeSys.chm::/Enums/UiLicenseStatusCode.htm)
 возникшей ошибки.


См. также:


[ILicenseManager](ILicenseManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
