# Сериализация отметки справочника

Сериализация отметки справочника
-


# Сериализация отметки справочника


При работе со справочниками зачастую возникает потребность сохранить
 установленную отметку и восстановить ее, например при следующем запуске
 формы. В качестве места хранения отметки можно использовать различные
 варианты (файл на диске, реестр, таблица на сервере и т.д.). Рассмотрим
 способы сохранения и восстановления отметки.


Для сохранения и восстановления отметке в интерфейсе [IDimSelection](../interface/IDimSelection/IDimSelection.htm)
 реализован ряд методов:


	- [ToVariant](../interface/IDimSelection/IDimSelection.ToVariant.htm)
	 и [Parse](../interface/IDimSelection/IDimSelection.Parse.htm)
	 - сохранение и восстановление отметки осуществляется на основании
	 значений атрибута Идентификатор.


	- [AttributeToVariant](../interface/IDimSelection/IDimSelection.AttributeToVariant.htm)
	 и [ParseAttribute](../interface/IDimSelection/IDimSelection.ParseAttribute.htm)
	 - сохранение и восстановление отметки осуществляется на основании
	 указанного атрибута (по данному атрибуту в справочнике должен быть
	 создан уникальный индекс).


Работа методов основана на работе с массивом типа Variant, в котором
 содержатся значения соответствующего атрибута выделенных элементов.


Рассмотрим возможный вариант сохранения и восстановления отметки из
 реестра ОС. Отметка будет храниться в виде символьной строки в параметре
 реестра «Selection1» в разделе реестра «HKEY_CURRENT_USER\UserProject\Selection».


Процедура для записи отметки в реестр:


	Sub WriteSelToRegistry(s: String);

	Var

	    CurrentKey, ProjKey: IRegistryKey;

	Begin

	    CurrentKey := RegistryClass.CurrentUser;

	    //Открытие раздела реестра, в котором хранится отметка

	    If CurrentKey.SubKeyExists("UserProject\Selection") Then

	        ProjKey := CurrentKey.OpenSubKey("UserProject\Selection", True);

	    Else

	        ProjKey := CurrentKey.CreateSubKey("UserProject\Selection");

    End If;

	    //Запись отметки в параметр
	 реестра "Selection1"

	    ProjKey.WriteString("Selection1", s);

	End Sub WriteSelToRegistry;


Функция для чтения отметки из реестра:


Function ReadSelFromRegistry: String;

Var

    CurrentKey, ProjKey: IRegistryKey;

    s: String;

Begin

    CurrentKey := RegistryClass.CurrentUser;

    //Открытие раздела реестра, в котором хранится отметка

    If CurrentKey.SubKeyExists("UserProject\Selection") Then

        ProjKey := CurrentKey.OpenSubKey("UserProject\Selection", True);

    Else

        ProjKey := CurrentKey.CreateSubKey("UserProject\Selection");

    End If;

    //Чтение отметки из параметра реестра "Selection1"

    s := ProjKey.ReadStringDef("Selection1", "");

    Return s;

End Function ReadSelFromRegistry;


Для формирования отметки в виде символьной строки можно воспользоваться
 методом [IDimSelection.ToString](../interface/IDimSelection/IDimSelection.ToString.htm),
 либо методом [String.Join](ForeSys.chm::/Class/String/String.Join.htm):


Var

    Selection: IDimSelection;

    Sel: String;

Begin

    //Получение отметки

    Selection := UiDimension1.Selection;

    //Для совместимости с работой метода ToVariant, сохраним отметку по значениям атрибута Идентификатор

    Sel := Selection.ToString("ID");

    WriteSelToRegistry(Sel);


Либо:


Var

    Selection: IDimSelection;

    VarSel: Array Of Variant;

    StrSel: Array Of String;

    Sel: String;

    i: Integer;

Begin

    Selection := //Получение отметки

    VarSel := Selection.ToVariant As Array;

    StrSel := New String[VarSel.Length];

    For i := 0 To VarSel.Length - 1 Do

        //Создание символьного массива, для дальнейшего объединения его в строку

        StrSel[i] := VarSel[i] As String;

    End For;

    //Для совместимости с работой метода ToString, сохраним отметку с разделетелем ","

    Sel := String.Join(",", StrSel);

    WriteSelToRegistry(Sel);


Для восстановления отметки из реестра необходимо считать сохраненное
 значение с помощью функции ReadSelFromRegistry,
 описанной выше, и осуществить разбор полученной строки в массив типа Variant,
 содержащий числовые значения идентификаторов:


Var

    Selection: IDimSelection;

    Sel: String;

    StrSel: Array Of String;

    VarSel: Array Of Variant;

    i: Integer;

Begin

    Selection := //Получение отметки

    //Считывание символьного значения отметки

    Sel := ReadSelFromRegistry;

    //Преобразование отметки в символьный массив

    StrSel := Sel.Split(",");

    //Создание массива типа Variant, в который будут занесены числовые значения идентификаторов

    //Тип Variant нужен для метода IDimSelection.Parse

    VarSel := New Variant[StrSel.Length];

    For i := 0 To StrSel.Length - 1 Do

        VarSel[i] := Integer.Parse(StrSel[i]);

    End For;

    //Восстановление отметки

    Selection.Parse(VarSel);


Полученную отметку можно использовать там, где это необходимо.


См. также:


[Примеры](KeDims_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
