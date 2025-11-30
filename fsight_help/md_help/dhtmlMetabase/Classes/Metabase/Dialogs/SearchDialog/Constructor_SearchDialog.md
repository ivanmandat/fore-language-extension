# Конструктор SearchDialog

Конструктор SearchDialog
-


# Конструктор SearchDialog


## Синтаксис


PP.Mb.Ui.SearchDialog(settings);


## Параметры


settings. JSON-объект со значениями
 свойств класса.


В параметрах конструктора можно задавать следующие настройки:


		 Поле


		 Краткое описание


		 Тип


		 ByObjectType
		 Определяет, установлен ли флажок «По типу объекта»:


			- true. Флажок
			 установлен;


			- false. Флажок
			 снят (по умолчанию).


		 Boolean


		 FindByIdentifiers
		 Определяет, установлен ли флажок «По идентификаторам»:


			- true. Флажок
			 установлен (по умолчанию);


			- false. Флажок
			 снят.


		 Boolean


		 FindByKeys
		 Определяет, установлен ли флажок «По ключам»:


			- true. Флажок
			 установлен;


			- false. Флажок
			 снят (по умолчанию).


		 Boolean


		 FindByNames
		 Определяет, установлен ли флажок «По именам»:


			- true. Флажок
			 установлен (по умолчанию);


			- false. Флажок
			 снят.


		 Boolean


		 LastSearch
		 Устанавливает массив последних поисковых строк.


		 Array of String


		 MathCase
		 Определяет, установлен ли флажок «Учитывать регистр»:


			- true. Флажок
			 установлен;


			- false. Флажок
			 снят (по умолчанию).


		 Boolean


		 MaxLastSearchCnt
		 Максимальное количество последних поисковых строк (LastSearch). По умолчанию: 10.


		 Number


		 ObjectClassId
		 Типа объектов, среди которых будет произведен поиск. По
		 умолчанию


		  PP.Mb.Ui.[MetabaseObjectClass](KeSom.chm::/Enums/MetabaseObjectClass.htm)


		 SearchScope
		 Устанавливает область поиска:


			- "Repository".
			 Весь репозиторий (по умолчанию);


			- "Folder".
			 Текущая папка. Данный пункт активен, если [установлена
			 текущая папка](dhtmlMetabase.chm::/Classes/Metabase/Dialogs/SearchDialog/SearchDialog.setCurrentFolder.htm).


		 String


		 SearchText
		 Устанавливает строку поиска.


		 SearchText


		 ShowDetails
		 Определяет, развернуты ли дополнительные параметры поиска:


			- true. Развернуты;


			- false. Свернуты (по
			 умолчанию).


		 Boolean


		 WholeWord
		 Определяет, установлен ли флажок «Только слова целиком»:


			- true. Флажок
			 установлен;


			- false. Флажок
			 снят (по умолчанию).


		 Boolean


## Описание


Конструктор SearchDialog создает
 экземпляр класса [SearchDialog](SearchDialog.htm).


## Пример


Пример использования конструктора приведен на странице «[Пример
 создания компонент SearchDialog](../../../../Components/Metabase/Dialogs/SearchDialog/SearchDialog_example.htm)».


См. также:


[SearchDialog:](SearchDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
