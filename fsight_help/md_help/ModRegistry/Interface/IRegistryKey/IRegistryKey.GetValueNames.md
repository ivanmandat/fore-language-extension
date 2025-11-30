# IRegistryKey.GetValueNames

IRegistryKey.GetValueNames
-


# IRegistryKey.GetValueNames


## Синтаксис


GetValueNames: [IStringList](ModCollections.chm::/Interface/IStringList/IStringList.htm);


## Описание


Метод GetValueNames возвращает
 коллекцию наименований параметров подраздела реестра.


## Пример


Добавьте ссылку на системную сборку Registry.


	Sub UserProc;

	Var

	    RegKey, SubKey: IRegistryKey;

	    Params: IStringList;

	    s: String;

	Begin

	    RegKey := RegistryClass.CurrentConfig;

	    SubKey := RegKey.OpenSubKey("Software\Fonts", False);

	    Params := SubKey.GetValueNames;

	    For Each s In Params Do

	        Debug.WriteLine(s);

	    End For;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будут выведены наименования
 всех параметров, содержащихся в подразделе реестра [HKEY_CURRENT_CONFIG\Software\Fonts].


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
