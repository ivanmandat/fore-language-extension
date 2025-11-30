# SearchDialog.getSearchSettings

SearchDialog.getSearchSettings
-


# SearchDialog.getSearchSettings


## Синтаксис


getSearchSettings ();


## Описание


Метод getSearchSettings возвращает
 настройки, заданные в диалоге.


## Комментарии


Метод возвращает следующие настройки:


Примечание.
 Данные настройки можно установить в конструкторе [ SearchDialog](Constructor_SearchDialog.htm)
 при [создании
 компонента](../../../../Components/Metabase/Dialogs/SearchDialog/SearchDialog_example.htm).


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


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [SearchDialog](../../../../Components/Metabase/Dialogs/SearchDialog/SearchDialog.htm)
 с наименованием «searchDialog» (см. «[Пример
 создания компонент SearchDialog](../../../../Components/Metabase/Dialogs/SearchDialog/SearchDialog_example.htm)»). Выведем в консоль значение в строке
 ввода:


console.log("Найти: " +searchDialog.getSearchSettings().SearchText);


После выполнения примера в консоль браузера будет выведено значение
 строки поиска.


См. также:


[SearchDialog](SearchDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
