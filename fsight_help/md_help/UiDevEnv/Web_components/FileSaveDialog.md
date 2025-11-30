# FileSaveDialog: Компонент веб-форм

FileSaveDialog: Компонент веб-форм
-


# FileSaveDialog


## Иерархия наследования


           [IWebComponent](WebForms.chm::/Interface/IWebComponent/IWebComponent.htm)


           [IWebFileSaveDialog](WebForms.chm::/Interface/IWebFileSaveDialog/IWebFileSaveDialog.htm)


           [WebFileSaveDialog](WebForms.chm::/Class/WebFileSaveDialog/WebFileSaveDialog.htm)


## Описание


Компонент FileSaveDialog реализует
 диалог сохранения файла.


## Комментарии


Компонент является невизуальным. После добавления компонента на форму
 для работы с ним используйте панель «Активные компоненты». Выделите компонент
 и настройте необходимые свойства в инспекторе объектов. Для удаления компонента
 с формы используйте соответствующую команду контекстного меню на панели
 «Активные компоненты».


Инициализация компонента осуществляется через прикладной код. Перед
 инициализацией определите значение свойства [FileData](WebForms.chm::/Interface/IWebFileDialog/IWebFileDialog.FileData.htm).


Компонент имеет различный набор свойств, доступных в режиме дизайнера
 и режиме выполнения веб-формы.


	 Режим
	 дизайнера

	 Режим
	 выполнения

	 События


			- name. Наименование
			 компонента;


			- fileName. Наименование сохраняемого
			 файла, которое будет подставлено в диалоге.


			- [Execute](WebForms.chm::/Interface/IWebFileDialog/IWebFileDialog.Execute.htm).
			 Инициализирует диалог сохранения файла;


			- [FileData](WebForms.chm::/Interface/IWebFileDialog/IWebFileDialog.FileData.htm).
			 Поток, связанный с сохраняемым файлом;


			- [FileName](WebForms.chm::/Interface/IWebFileDialog/IWebFileDialog.FileName.htm).
			 Наименование сохраняемого файла, которое будет подставлено
			 в диалоге.


		Компонент не имеет событий.


См. также:


[Создание
 веб-формы и размещение компонентов](../01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/Web_Form.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
