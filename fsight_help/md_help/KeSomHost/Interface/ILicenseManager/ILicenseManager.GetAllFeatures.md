# ILicenseManager.GetAllFeatures

ILicenseManager.GetAllFeatures
-


# ILicenseManager.GetAllFeatures


## Синтаксис


GetAllFeatures: [IStringList](ModCollections.chm::/Interface/IStringList/IStringList.htm);


## Описание


Метод GetAllFeatures возвращает
 список всех доступных единиц лицензирования.


## Комментарии


Метод возвращает информацию о единицах лицензирования независимо от
 типа используемой лицензии: автономной или сетевой.


## Пример


Для выполнения примера разместите на форме компонент Button с наименованием
 «Button1».


Добавьте ссылки на системные сборки: Host, Ui, Forms, Collections.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    LicManager: ILicenseManager;

    Features: IStringList;

Begin

    LicManager := WinApplication.Instance.LicenseManager;

    Features := LicManager.GetAllFeatures;

    WinApplication.InformationBox(Features.AsString);

End Sub Button1OnClick;


При нажатии на кнопку будет выдано сообщение, содержащее [список единиц лицензирования](Setup.chm::/08_Licensing/AboutFeatures.htm).


См. также:


[ILicenseManager](ILicenseManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
