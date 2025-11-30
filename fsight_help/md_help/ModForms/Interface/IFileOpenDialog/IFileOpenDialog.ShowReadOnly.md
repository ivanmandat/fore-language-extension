# IFileOpenDialog.ShowReadOnly

IFileOpenDialog.ShowReadOnly
-


# IFileOpenDialog.ShowReadOnly


## Синтаксис


ShowReadOnly: Boolean;


## Описание


Свойство ShowReadOnly определяет
 признак отображения в диалоге флажка, используемого для выбора режима
 открытия файла.


## Комментарии


По умолчанию свойству установлено значение False,
 при этом флажок не отображается. Если свойству установить значение True, то при инициализации диалога,
 в нём будет присутствовать флажок «Только чтение». Данный флажок управляет
 значением свойства [ReadOnlyChecked](IFileOpenDialog.ReadOnlyChecked.htm)
 и в дальнейшем может использоваться для проверки режима открытия файла.


## Пример


Пример использования приведён в описании свойства [IFileOpenDialog.MultiSelect](IFileOpenDialog.MultiSelect.htm).


См. также:


[IFileOpenDialog](IFileOpenDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
