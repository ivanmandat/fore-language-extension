# IRegistryKey.WriteDateTime

IRegistryKey.WriteDateTime
-


# IRegistryKey.WriteDateTime


## Синтаксис


		WriteDateTime(ValueName: String; Value:
		 DateTime);


## Параметры


ValueName. Наименование параметра,
 значение которого необходимо изменить;


Value. Значение, которое необходимо
 установить для параметра в реестре.


## Описание


Метод WriteDateTime осуществляет
 изменение значения параметра, содержащего дату и время.


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

		    // Установим значение даты и времени

		    SubKey.WriteDateTime("Param1", DateTime.Now);

		End Sub UserProc;


В результате выполнения примера, для параметра с наименованием Param1,
 расположенном в подразделе [HKEY_CURRENT_USER\Software\MyProject\Params],
 будет установлено текущее значение даты и времени.


См.также:


[IRegistryKey](IRegistryKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
