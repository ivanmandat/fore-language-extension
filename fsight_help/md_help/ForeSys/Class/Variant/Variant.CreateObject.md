# Variant.CreateObject

Variant.CreateObject
-


# Variant.CreateObject


## Синтаксис


CreateObject(ProgId: String): Variant;


## Параметры


ProgId. Программный
 идентификатор
 приложения, экземпляр которого необходимо создать.


## Описание


Метод CreateObject создает экземпляр
 приложения по указанному программному идентификатор.


## Комментарии


Программный идентификатор приложения, указываемый в параметре ProgId, может быть получен из реестра
 операционной системы: в разделе HKEY_CLASSES_ROOT\CLSID
 необходимо найти глобальный уникальный идентификатор создаваемого приложения.
 Наименование приложения является значением по умолчанию для раздела глобального
 уникального идентификатора. В найденном разделе будет расположен подраздел
 ProgID, значение по умолчанию
 которого является программным идентификатором приложения.


## Пример


	Sub UserProc;

	Var

	    Excel, Sheet: variant;

	    a: Array;

	Begin

	    Excel := Variant.CreateObject("Excel.Application");

	    Excel.GetProperty("Workbooks").Invoke("Add", a);

	    Sheet := Excel.GetPropertyEx("Sheets", 1);

	    a := New Variant[2];

	    a[0] := Sheet.GetPropertyEx("Cells", 1, 1);

	    a[1] := Sheet.GetPropertyEx("Cells", 5, 5);

	    Sheet.SetPropertyEx("Range", a, 99);

	    Excel.SetProperty("Visible", True);

	End Sub UserProc;


В процессе выполнения примера происходит создание приложения Excel.
 В него добавляется рабочая книга. После чего для 1-го листа в диапазон
 ячеек (1,1,5,5) устанавливается значение «99». Затем приложение становится
 видимым.


См. также:


[Variant](Variant.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
