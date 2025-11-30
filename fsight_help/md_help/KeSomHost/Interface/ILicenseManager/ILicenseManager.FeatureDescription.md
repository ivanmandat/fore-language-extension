# ILicenseManager.FeatureDescription

ILicenseManager.FeatureDescription
-


# ILicenseManager.FeatureDescription


## Синтаксис


FeatureDescription(FeatureName: String): String;


## Параметры


FeatureName. Наименование единицы
 лицензирования.


## Описание


Свойство FeatureDescription
 возвращает наименование системной единицы лицензирования.


## Комментарии


Наименования системных единиц лицензирования содержатся в кратком описании
 перечисления [UiLicenseFeatureType](ForeSys.chm::/Enums/UiLicenseFeatureType.htm).


## Пример


Для выполнения примера добавьте ссылки на системные сборки: Host, Ui,
 Fore, Collections.


	Sub UserProc;

	Var

	    LicManager: ILicenseManager;

	    AllFeatures: IStringList;

	    Feature: String;

	    Count,i: Integer;

	Begin

	    LicManager := WinApplication.Instance.LicenseManager;

	    // Получим список доступных единиц лицензирования

	    AllFeatures := LicManager.GetAllFeatures;

	    Count := AllFeatures.Count;

	    // Выведем в консоль список наименований полученных единиц лицензирования

	    For i := 0 To Count - 1 Do

	        Feature := AllFeatures.Item(i) As String;

	        Debug.WriteLine(LicManager.FeatureDescription(Feature));

	    End For;

	End Sub UserProc;


После выполнения примера в консоль будет выведен список наименований
 единиц лицензирования.


См. также:


[ILicenseManager](ILicenseManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
