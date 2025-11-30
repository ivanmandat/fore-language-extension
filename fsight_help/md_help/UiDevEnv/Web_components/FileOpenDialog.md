# FileOpenDialog: Компонент веб-форм

FileOpenDialog: Компонент веб-форм
-


# FileOpenDialog


## Иерархия наследования


           [IWebComponent](WebForms.chm::/Interface/IWebComponent/IWebComponent.htm)


           [IWebFileOpenDialog](WebForms.chm::/Interface/IWebFileOpenDialog/IWebFileOpenDialog.htm)


           [WebFileOpenDialog](WebForms.chm::/Class/WebFileOpenDialog/WebFileOpenDialog.htm)


## Описание


Компонент FileOpenDialog реализует
 диалог открытия файлов.


## Комментарии


Компонент является невизуальным. После добавления компонента на форму
 для работы с ним используйте панель «Активные компоненты». Выделите компонент
 и настройте необходимые свойства в инспекторе объектов. Для удаления компонента
 с формы используйте соответствующую команду контекстного меню на панели
 «Активные компоненты».


Инициализация компонента осуществляется через прикладной код.


Компонент имеет различный набор свойств и методов, доступных в режиме
 дизайнера и режиме выполнения веб-формы.


	 Режим
	 дизайнера

	 Режим
	 выполнения

	 События


			- name. Наименование
			 компонента;


			- filter.
			 Фильтра для ограничения списка доступных файлов. Через запятую
			 укажите форматы файлов, которые будут доступны при работе
			 диалога, например: .txt, .doc, .docx.


			- [Execute](WebForms.chm::/Interface/IWebFileDialog/IWebFileDialog.Execute.htm).
			 Инициализирует диалог открытия файла;


			- [FileData](WebForms.chm::/Interface/IWebFileDialog/IWebFileDialog.FileData.htm).
			 Поток, связанный с открываемым файлом;


			- [FileName](WebForms.chm::/Interface/IWebFileDialog/IWebFileDialog.FileName.htm).
			 Путь и наименование открываемого файла;


			- [Filter](WebForms.chm::/Interface/IWebFileOpenDialog/IWebFileOpenDialog.Filter.htm).
			 Фильтра для ограничения списка доступных файлов. Через запятую
			 укажите форматы файлов, которые будут доступны при работе
			 диалога, например: .txt, .doc, .docx.


		Компонент не имеет событий.


См. также:


[Создание
 веб-формы и размещение компонентов](../01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/Web_Form.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
