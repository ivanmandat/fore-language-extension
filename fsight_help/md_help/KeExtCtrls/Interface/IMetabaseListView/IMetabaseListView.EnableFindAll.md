# IMetabaseListView.EnableFindAll

IMetabaseListView.EnableFindAll
-


# IMetabaseListView.EnableFindAll


## Синтаксис


EnableFindAll: Boolean;


## Описание


Свойство EnableFindAll определяет
 признак наличия кнопки «Найти все» в диалоге поиска.


## Комментарии


Допустимые значения:


	- True. Кнопка «Найти
	 все» доступна в диалоге поиска.


	- False. Значение по умолчанию.
	 Кнопка «Найти все» не доступна в диалоге поиска.


Вызов диалога поиска осуществляется при нажатии сочетания горячих клавиш
 CTRL+F или при вызове метода [IMetabaseListView.ShowFindDialog](IMetabaseListView.ShowFindDialog.htm).
 Если в диалоге была нажата кнопка «Найти все», то после поиска для компонента
 будет сгенерировано событие [MetabaseListView.OnAfterSearch](../../Class/MetabaseListView/MetabaseListView.OnAfterSearch.htm).
 Используя свойство [IMetabaseListViewAfterSearchEventArgs.FoundObjects](../IMetabaseListViewAfterSearchEventArgs/IMetabaseListViewAfterSearchEventArgs.FoundObjects.htm)
 аргумента события, можно получить описания найденных объектов репозитория.


## Пример


Пример использования приведён в описании свойства [IMetabaseListView.Root](IMetabaseListView.Root.htm).


См. также:


[IMetabaseListView](IMetabaseListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
