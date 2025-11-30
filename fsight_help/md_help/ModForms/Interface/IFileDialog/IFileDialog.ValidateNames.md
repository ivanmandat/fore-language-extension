# IFileDialog.ValidateNames

IFileDialog.ValidateNames
-


# IFileDialog.ValidateNames


## Синтаксис


ValidateNames: Boolean;


## Описание


Свойство ValidateNames определяет
 признак проверки корректности имени файла.


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 Осуществляется проверка корректности имени файла (проверка на наличие
	 символов, запрещённых в именах файлов: ", *, ? и других). При
	 указании файла с некорректным именем диалог не будет закрыт и фокус
	 останется в нём.


	- False. Проверка корректности
	 имени не осуществляется, после закрытия диалога метод [Execute](IFileDialog.Execute.htm)
	 вернёт значение True.


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
