# IRegistryKey.WriteInteger

IRegistryKey.WriteInteger
-


# IRegistryKey.WriteInteger


## Синтаксис


		WriteInteger(ValueName: String; Value: Integer);


## Параметры


ValueName. Наименование параметра,
 значение которого необходимо изменить;


Value. Значение, которое необходимо
 установить для параметра в реестре.


## Описание


Метод WriteInteger осуществляет
 изменение значения параметра, содержащего целые числа.


## Комментарии


Если параметр, либо подраздел не существуют, то они создаются автоматически.
 Если параметр существует - тип и значение будут изменены в соответствии
 с заносимыми данными.


Если необходимо изменить значение параметра по умолчанию - необходимо
 в качестве наименования передать пустую строку ("").


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

		    // Установим целочисленное значение для параметра

		    SubKey.WriteInteger("Param1", 100);

		End Sub UserProc;


В результате выполнения примера, для параметра с наименованием Param1;,
 расположенном в подразделе [HKEY_CURRENT_USER\Software\MyProject\Params],
 будет установлено целочисленное значение 100.


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
