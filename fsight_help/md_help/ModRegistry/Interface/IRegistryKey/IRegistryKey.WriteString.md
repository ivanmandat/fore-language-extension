# IRegistryKey.WriteString

IRegistryKey.WriteString
-


# IRegistryKey.WriteString


## Синтаксис


		WriteString(ValueName: String; Value: String);


## Параметры


ValueName. Наименование параметра,
 значение которого необходимо изменить;


Value. Значение, которое необходимо
 установить для параметра в реестре.


## Описание


Метод WriteString осуществляет
 изменение значения строкового параметра.


## Комментарии


Если параметр, либо подраздел не существуют, то они создаются автоматически.
 Если параметр существует, то тип и значение будут изменены в соответствии
 с заносимыми данными. Если необходимо изменить значение параметра по умолчанию,
 то необходимо в качестве наименования передать пустую строку ("").


## Пример


Для выполнения примера в реестре предполагается наличие параметра с
 наименованием Param1, расположенного в подразделе [HKEY_CURRENT_USER\Software\MyProject\Params].


Добавьте ссылку на системную сборку Registry.


					Sub UserProc;

		Var

		    RegKey, SubKey: IRegistryKey;

		Begin

		    // Получим подраздел с настройками пользователя

		    RegKey := RegistryClass.CurrentUser;

		    SubKey := RegKey.OpenSubKey("Software\MyProject\Params", True);

		    // Установим строковое значение для параметра

		    SubKey.WriteString("Param1", "New Line");

		End Sub UserProc;


В результате выполнения примера, для параметра с наименованием Param1,
 расположенном в подразделе [HKEY_CURRENT_USER\SOFTWARE\MyProject\Params],
 будет установлено значение New Line.


См. также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
