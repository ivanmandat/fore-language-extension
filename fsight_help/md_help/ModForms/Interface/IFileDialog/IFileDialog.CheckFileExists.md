# IFileDialog.CheckFileExists

IFileDialog.CheckFileExists
-


# IFileDialog.CheckFileExists


## Синтаксис


CheckFileExists: Boolean;


## Описание


Свойство CheckFileExists определяет
 реакцию системы при выборе пользователем несуществующего файла.


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 При вводе имени несуществующего файла выводится сообщение об ошибке.
	 После закрытия сообщения фокус возвращается в диалог для выбора существующего
	 файла.


	- False. При вводе имени
	 несуществующего файла сообщение об ошибке не выводится, после закрытия
	 диалога метод [Execute](IFileDialog.Execute.htm) вернёт
	 значение True.


Примечание.
 Свойство реализовано только в компоненте [FileOpenDialog](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/FileOpenDialog.htm).
 В компоненте [FileSaveDialog](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/FileSaveDialog.htm)
 используйте свойство [IFileSaveDialog.CreatePrompt](../IFileSaveDialog/IFileSaveDialog.CreatePrompt.htm).


См. также:


[IFileDialog](IFileDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
