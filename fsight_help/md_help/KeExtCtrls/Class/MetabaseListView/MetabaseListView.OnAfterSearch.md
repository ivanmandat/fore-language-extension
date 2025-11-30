# MetabaseListView.OnAfterSearch

MetabaseListView.OnAfterSearch
-


# MetabaseListView.OnAfterSearch


## Синтаксис


OnAfterSearch(Sender: Object; Args: [IMetabaseListViewAfterSearchEventArgs](../../Interface/IMetabaseListViewAfterSearchEventArgs/IMetabaseListViewAfterSearchEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnAfterSearch наступает
 для компонента, если в диалоге поиска осуществлялся поиск всех объектов,
 удовлетворяющих заданным условиям.


## Комментарии


Диалог поиска в компоненте вызывается при нажатии сочетания клавиш CTRL+F
 или при выполнении метода [IMetabaseListView.ShowFindDialog](../../Interface/IMetabaseListView/IMetabaseListView.ShowFindDialog.htm).
 Кнопка «Найти все» доступна в
 диалоге поиска, когда свойство [IMetabaseListView.EnableFindAll](../../Interface/IMetabaseListView/IMetabaseListView.EnableFindAll.htm)
 принимает значение True. Если
 в диалоге была нажата кнопка «Найти все»,
 то после поиска для компонента будет сгенерировано событие OnAfterSearch.
 Используя свойство [IMetabaseListViewAfterSearchEventArgs.FoundObjects](../../Interface/IMetabaseListViewAfterSearchEventArgs/IMetabaseListViewAfterSearchEventArgs.FoundObjects.htm)
 аргумента события, можно получить описания найденных объектов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента MetabaseListView с наименованием
 «MetabaseListView1». У компонента MetabaseListView в свойстве Root
 выбрана какая-либо папка репозитория.


Добавьте ссылки на системные сборки: ExtCtrls, Metabase.


	// Обработчик события OnAfterSearch для компонента MetabaseListView1

	Sub MetabaseListView1OnAfterSearch(Sender: Object; Args: IMetabaseListViewAfterSearchEventArgs);

	Begin

	    Debug.WriteLine("Количество найденных объектов:");

	    Debug.WriteLine(Args.FoundObjects.Count);

	End Sub MetabaseListView1OnAfterSearch;

	// Обработчик события OnClick для компонента Button1

	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    MetabaseListView1.EnableFindAll := True;

	    MetabaseListView1.ShowFindDialog;

	End Sub Button1OnClick;


В результате выполнения примера в окно консоли будет выведена информация
 о количестве найденных объектов.


См. также:


[MetabaseListView](MetabaseListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
